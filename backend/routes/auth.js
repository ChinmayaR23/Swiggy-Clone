const mongoose = require("mongoose")
const express = require("express");
const { Schema } = mongoose;
const router = express.Router();
const User = require("../models/User");
const fetchuser = require("../middleware/fetchUser")
const { body, query, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


const JWT_SECRET = "secrettokenstoredinenv";


// ROUTE:1
// Create a User using POST "api/auth/createuser" 
// doesnt require auth
// No login req 

router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 }),
  ], async (req, res) => {
    // If there is an error/s return the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
        // Check whether the user exists already
        //It is done automatically by mongo compass

        //bcrypt generates and stores the salt in the back end.
        const salt = await bcrypt.genSalt(10);

        const secPass=await bcrypt.hash(req.body.password,salt) ;

      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
      });

      const data = {
        user:{
            id: user.id
        }
      }
      var authToken = jwt.sign(data, JWT_SECRET);
      //send the user and his details as the output to the body of the reuslt
      res.json({authToken});

      // catch the error found inside the try block
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate key error
        return res.status(400).json({ error: 'Email already exists' });
    }
    //If the error is different than above error
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

// // ROUTE:2
// //Logging into the site using POST "api/auth/login" 
// // Auth required
// //No login required (to login to our site, we do not need to login)

router.post('/login', [
    // If the email is not an email, then reject the user without bothering the backend
    body('email', "Enter a valid Email").isEmail(),
    body('password', 'Password cannot be blank').exists() ,
  ], async (req,res)=>{
    // If there is an error/s return the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try{
        let user = await User.findOne({email});

        //If user does not exist
        if(!user)
        {
            return res.status(400).json({error: `Sorry user does not exist. Please create a new user`});
        }
        const passwordCompare = await bcrypt.compare(password, user.password);

        // passwordCompare is bool value, below is to reject wrong passwords
        if(!passwordCompare)
        {
            return res.status(400).json({error: "Please enter correct credentials."})
        }

        // Return the payload - user data
        const payload = {
            user:{
                id: user.id
            }
          }
          var authToken = jwt.sign(payload, JWT_SECRET);
          //send the user and his details as the output to the body of the reuslt
          res.json({authToken});
    }
    catch (error){
        console.error(error);
        res.status(500).json({ error: 'Internal Server error' });  
    }
  });


//   // ROUTE:3
//   // Get user detail using POST "api/auth/getuser" 
// // it requires auth
// // Login req 
// // need to decode JWT

router.post('/getuser', fetchuser, async (req,res)=>{
try {
  // res.send(req.user);
  const userID = req.user.id;
  const user = await User.findById(userID).select("-password"); // we are retrieving all the data of the user except the password
  res.send(user)
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal Server error' });  
}
});
module.exports = router;
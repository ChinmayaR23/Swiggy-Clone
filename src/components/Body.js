import Restaurant from "./RestaurantCard";
import resObj from "../utils/data"
import { useEffect, useState } from "react";
const Body=()=>{

  let[listOfRest,filterlistOfRest] = useState([]);
  let[inputText , setInputText] = useState("");
  
  useEffect(update,[])
  async function update(){
    const api_call = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await api_call.json()
    const LIVE_API = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants 
    filterlistOfRest(LIVE_API)

  }
  useEffect(()=>{console.log("use effect called")})
  return (
    <div className="Body">
        <div className="features">
          <div className="search">
            <input type="text" value={inputText} onChange={(e)=>{
              setInputText(e.target.value);

              }}/>

            <button className="search-btn" onClick={()=>{
                searchRes = listOfRest.filter((res)=>{
                  return res.info.name.toLowerCase().includes(inputText.toLowerCase())
                })
                filterlistOfRest(searchRes)
            }}>search</button>
          </div>

            <button 
            className="flt-btn"
            onClick={()=>{
              const filtered = listOfRest.filter((res)=>res.info.avgRating > 4.2)
              filterlistOfRest(filtered)
            }}>Top Restaurants</button>
            
            
        </div>
        <div className="cards">
          
            {
              listOfRest.map((rest)=>(
                
                
                <Restaurant key={rest.info.id} obj={rest}/>
              ))
            }
        </div>
            
    </div>
  )
}
export default Body;
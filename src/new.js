function evaluateBooleanQuery(query, data) {
  const tokens = query.split(/\s+/);
  const stack = [];
  let i = 0;
  while (i < tokens.length) {
      const token = tokens[i];
      if (token === "AND") {
          i++;  // Move to the next token
          continue;
      } else if (token === "OR") {
          // Combine all conditions until the last AND operator
          const orConditions = [];
          while (stack.length && stack[stack.length - 1] !== "AND") {
              orConditions.push(...stack.pop());
          }
          const result = [...new Set(orConditions)];
          stack.push(result);
      } else {
          // Token is an attribute/value
          const matchingItems = data.filter(data => data.name.toLowerCase().includes(token.toLowerCase()));

          stack.push(matchingItems);
      }
      i++;
  }
  
  // Combine remaining conditions
  const finalResult = [].concat(...stack);
  console.log(finalResult)
  return finalResult;
}
const data = [
  {
    avatar_url : "https://avatars.githubusercontent.com/u/94756332?v=4",
    bio : "Currently a college student, aspiring to become a useful engineer😅",
    followers :  1,
    following :  0,
    created_at :  "2021-11-20T17:00:12Z",
    name : "Ambar Ahmad",
    link: "https://github.com/Ambar2003"
  },
  {
    avatar_url : "https://avatars.githubusercontent.com/u/113253552?v=4",
    bio : "Excited coder.",
    followers :  1,
    following :  2,
    created_at :  "2022-09-10T16:00:37Z",
    name : "Amogh Firke",
    link:"https://github.com/Amoghf",
  },
  {
avatar_url : "https://avatars.githubusercontent.com/u/107703684?v=4",
bio :  "Passionate coder with a love for coding and problem-solving.",
followers : 5,
following : 7,
created_at :  "2022-06-17T15:44:46Z",
name : "Atharva Menkudle",
link:"https://github.com/AtharvaCyber",
  },
{
  avatar_url : "https://avatars.githubusercontent.com/u/106816650?v=4",
bio :  "//Nothing to show here!",
followers : 0,
following : 1,
created_at :  "2022-06-03T12:19:17Z",
name : "Arushi Upmanyu",
link:"https://github.com/arushiupmanyu",
},
{
avatar_url : "https://avatars.githubusercontent.com/u/97077613?v=4",
bio :  "Sophomore studying Computer Science Engineering",
followers : 6,
following : 5,
created_at :  "2022-01-04T04:15:55Z",
name : "Aryan Wadhwa",
link:"https://github.com/TastyBiscuit0808",
},
{
avatar_url : "https://avatars.githubusercontent.com/u/128708109?v=4",
bio :  "//Nothing to show here!",
followers : 4,
following : 0,
created_at :  "2023-03-23T12:48:36Z",
name : "Akshit Pandharkar",
link:"https://github.com/Akshit0604",
},
{
  avatar_url : "https://avatars.githubusercontent.com/u/92519780?v=4",
  bio : "//Nothing to show here!",
  followers :  2,
  following :  5,
  created_at :  "2021-10-14T10:36:03Z",
  name : "Akshat Gouniyal",
  link:"https://github.com/akshatg131",
},
{
  avatar_url : "https://avatars.githubusercontent.com/u/128715943?v=4",
  bio :  "//Nothing to show here!",
  followers : 1,
  following : 1,
  created_at :  "2023-03-23T14:09:46Z",
  name : "Adithya S Gurikar",
  link:"https://github.com/adithya-gurikar",
},
  {
  avatar_url : "https://avatars.githubusercontent.com/u/92435677?v=4",
  bio :  "Second year CSE undergrad at PES University, Bengaluru.",
  followers : 11,
  following : 17,
  created_at :  "2021-10-13T10:11:20Z",
  name : "Aditya A S",
  link:"https://github.com/ad1tya24",
  },
  {
    avatar_url : "https://avatars.githubusercontent.com/u/92162970?v=4",
    bio :  "CSE\r\nPESUECC '25",
    followers : 5,
    following : 7,
    created_at :  "2021-10-08T12:31:05Z",
    name : "Alan Joji",
    link:"https://github.com/AlanJoji",
  }
]

var query = "AMBAR OR ARUSHI AND AMOGH";
evaluateBooleanQuery(query, data);

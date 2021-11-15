const fetch = require('node-fetch');

// fetches a list of usernames from the discourse API and pushes each item to usernameArray
async function fetchMemberList(apiKey) {
  return fetch(
    "https://forum.dorg.tech/admin/users/list/active.json",
    {
      method: "GET",
      headers: new fetch.Headers({
        "Api-Key": `${apiKey}`,
        "Api-username": "system"
      })
    }
  ).then(response => response.json())
    .then(response => response.forEach(user => {
      usernameArray.push(user.username)
    }))
    .then(response => console.log(usernameArray))
}


// array where usernames will be stored and iterated over
let usernameArray = [];

// takes apiKey as string and returns Promise<Member[]>
async function fetchMemberInfo(apiKey, username) {
  return fetch(
    `https://forum.dorg.tech/u/${username}.json`, // try using .map 
  {
      method: "GET",
      headers: new fetch.Headers({
        "Api-Key": `${apiKey}`,
        "Api-username": "system"
      })
    }
  ).then(response => response.json())
    /*/.then(response => {
      return {
        name: response.data.user?.name || '',
        photo: response.data.user?.avatar_template, //it's not returning image size
        skills: response.data.user?.user_fields[1] || [],
        portfolio: {
          github: ''
        }
      }
    })*/.then(response => console.log(response))
}

// .map is called on usernameArray, passing a callback to fetchMemberInfo
//  
async function fetchMembers(apiKey) {
  const members = usernameArray.map(username => fetchMemberInfo(apiKey, username));
  return Promise.all(members)
}

// takes form data as json string and submits to airtable
async function submitContactForm(apiKey, body) {
  return fetch(
    "https://api.airtable.com/v0/app6IBhJWYR4dcak6/Contacts",
    {
      method: "POST",
      headers: new fetch.Headers({
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      }),
      body: body
    }
  )
}

// export functions
exports.submitContactForm = (apiKey, body) => submitContactForm(apiKey, body);
exports.fetchMemberInfo = (apiKey) => fetchMemberInfo(apiKey);
exports.fetchMemberList = (apiKey) => fetchMemberList(apiKey);
exports.fetchMembers = (apiKey) => fetchMembers(apiKey)
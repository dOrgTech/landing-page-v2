const fetch = require('node-fetch');

// takes apiKey as string and returns Promise<Member[]>
async function fetchMembers(apiKey) {
  return fetch(
    "https://api.airtable.com/v0/app6IBhJWYR4dcak6/tblb0WHq7hTaODqks?fields%5B%5D=Name&fields%5B%5D=Headshot&fields%5B%5D=Skills&fields%5B%5D=Github&sort%5B0%5D%5Bfield%5D=Onboarding+Date&sort%5B0%5D%5Bdirection%5D=asc&sort%5B1%5D%5Bfield%5D=Name&sort%5B1%5D%5Bdirection%5D=asc&view=viw15s9zxmaFM8NkO",
  {
      method: "GET",
      headers: new fetch.Headers({
        "Authorization": `Bearer ${apiKey}`
      })
    }
  ).then(response => response.json())
    .then(response => response.records.map(record => ({
      name: record.fields.Name ? record.fields.Name : "",
      photo: record.fields.Headshot ? record.fields.Headshot[0].url : undefined,
      skills: record.fields.Skills ? record.fields.Skills : [],
      portfolio: {
        github: record.fields.Github,
      }
    })))
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
exports.fetchMembers = (apiKey) => fetchMembers(apiKey);
const fetch = require('node-fetch');

exports.handler = async (event, context, callback) => {
  const apiKey = process.env.AIRTABLE_API_KEY;
  return fetch(
    "https://api.airtable.com/v0/app6IBhJWYR4dcak6/Contacts",
    {
      method: "POST",
      headers: new fetch.Headers({
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      }),
      body: event.body
    }
  )
}
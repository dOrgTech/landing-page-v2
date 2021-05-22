

exports.handler = async (event, context, callback) => {
  const { body } = event;
  const apiKey = process.env.AIRTABLE_API_KEY ?? "";
  return fetch(
    "https://api.airtable.com/v0/app6IBhJWYR4dcak6/Contacts",
    {
      method: "POST",
      headers: new Headers({
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      }),
      body: body
    }
  )
}
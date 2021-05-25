const {fetchMembers} = require("../server/updateMembers");

let members;

exports.handler = async (event, context, callback) => {
  if (!members) {
    const apiKey = process.env.AIRTABLE_API_KEY;
    members = await fetchMembers(apiKey);
  }
  return {
    statusCode: 200,
    body: JSON.stringify(members),
  }
}
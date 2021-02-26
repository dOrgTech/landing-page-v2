const {fetchMembers} = require("../server/updateMembers");

exports.handler = async (event, context, callback) => {
  const apiKey = process.env.HS_API_KEY;
  const members = await fetchMembers(apiKey);
  return {
    statusCode: 200,
    body: JSON.stringify(members),
  }
}
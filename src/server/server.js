const express = require('express');
const path = require('path');
const { fetchMemberList, fetchMemberInfo, fetchMembers, submitContactForm } = require("./requests");

const apiKey = process.env.AIRTABLE_API_KEY || process.argv[2];
const PORT = process.env.PORT || 3042;
const app = express();
app.use(express.text());


fetchMemberList(apiKey)
fetchMemberInfo(apiKey)
fetchMembers(apiKey)

// cache members array; update every 5 minutes
let membersCache = [];
fetchMemberInfo(apiKey)
  .then(members => membersCache = members)
  .catch(error => console.log(error));
/*setInterval(() => {
  fetchMemberInfo(apiKey)
    .then(members => membersCache = members)
    .catch(error => console.log(error))
}, 300000);*/

// path to fetch dOrg active builder data
app.get("/members", (request, response) => {
  response.json(membersCache);
});

// path to submit contact form
/*app.post("/submitContactForm", (request, response) => {
  let responseBody = submitContactForm(apiKey, request.body)
    .catch(e => console.log(e));
  if (!responseBody) {
    responseBody = "";
  }
  response.json(responseBody);
});*/

// send react app for all other get requests
/*app.use(express.static(path.resolve(__dirname, '../../build')));
app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../../build', 'index.html'));
});*/

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
const express = require('express');
const path = require('path');
const {fetchMembers} = require("./updateMembers");

const apiKey = process.env.AIRTABLE_API_KEY || process.argv[2];
const PORT = process.env.PORT || 3042;
const app = express();

// cache members array to minimize hubspot api calls; update every 10 minutes
let membersCache;
fetchMembers(apiKey)
  .then(members => membersCache = members)
  .catch(error => console.log(error));
setInterval(() => {
  fetchMembers(apiKey)
    .then(members => membersCache = members)
    .catch(error => console.log(error))
}, 600000);

// path to fetch dOrg active builder data
app.get("/members", (request, response) => {
  response.json(membersCache);
});

// send react app for all other get requests
app.use(express.static(path.resolve(__dirname, '../../build')));
app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
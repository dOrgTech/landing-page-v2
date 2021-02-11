const express = require('express'); // eslint-disable-line
const path = require('path'); //eslint-disable-line
const {fetchMembers} = require("./network"); // eslint-disable-line

const apiKey = process.argv[2];
const PORT = process.env.PORT || 3001;
const app = express();

// cache members array to minimize hubspot api calls; update every 10 minutes
let membersCache;
fetchMembers(apiKey)
  .then(members => membersCache = members)
  .catch(error => console.log(error))
setInterval(() => {
  fetchMembers(apiKey)
    .then(members => membersCache = members)
    .catch(error => console.log(error))
}, 600000);

app.get("/api/members", (request, response) => {
  response.json(JSON.stringify(membersCache));
});


app.use(express.static(path.resolve(__dirname, '../../build')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../../build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


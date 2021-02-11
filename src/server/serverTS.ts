import express from 'express';
import {fetchMembers} from "./network";

const apiKey = process.argv[2];
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api/members", (request, response) => {
  fetchMembers(apiKey)
    .then(members => {
      response.json(JSON.stringify(members));
    })
    .catch(error => console.log(error))
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
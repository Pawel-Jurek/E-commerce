import express from "express";

const PORT = 5000;
const app = express();


app.get("/api", (req, res) => {
    res.json({ users: ['user1', 'user2'] });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  })
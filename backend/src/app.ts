import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Mini Tasks API is running.",
  });
});

app.get("/api/tasks", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Node.js",
      completed: true,
    },
  ]);
});

export default app;

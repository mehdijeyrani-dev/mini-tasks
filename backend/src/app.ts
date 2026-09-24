import express from "express";

const app = express();

app.use(express.json());

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

app.post("/api/tasks", (req, res) => {
  const { title } = req.body;

  res.status(201).json({
    id: 3,
    title,
    completed: false,
  });
});

export default app;

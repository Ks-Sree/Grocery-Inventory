import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Optional custom log for debugging
server.post("/groceries", (req, res, next) => {
  console.log("✅ POST received:", req.body);
  next();
});

server.use("/groceries", router);

const port = process.env.PORT || 3000;
server.listen(port, "0.0.0.0", () => {
  console.log(`🚀 JSON Server running on port ${port}`);
});

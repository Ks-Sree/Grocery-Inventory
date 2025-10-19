import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// ✅ Use /groceries directly — not /api/groceries
server.use("/", router);

const port = process.env.PORT || 3000;
server.listen(port, "0.0.0.0", () => {
  console.log(`🚀 JSON Server running at port ${port}`);
});

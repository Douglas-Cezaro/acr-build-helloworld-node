import * as express from "express";
import * as http from "http";
import { createTypeormConn as getConnection } from "./createTypeormConn";
import { UserEntity } from "./entity/user.entity";

const app = express();
const port = 80;
app.use(express.json());

app.get("/test", [], async (req, res) => {
  try {
    const data = await getConnection.getRepository(UserEntity).find();
    return res.status(200).send({ status: "OK", data });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
});

const server = http.createServer(app);

server.listen(port);

console.log(`Server running at http://localhost: ${port}`);


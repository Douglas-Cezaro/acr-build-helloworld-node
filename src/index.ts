import { createTypeormConn } from "./utils/createTypeormConn";
import * as http from "http";
import app from "./app";

createTypeormConn
  .initialize()
  .then(() => {
    const server = http.createServer(app);

    server.listen(80, () => {
      console.log(`Application is running on port 80 !!`);
    });
  })
  .catch((error) => {
    console.log("TypeORM dont connected: %s", error);
  });


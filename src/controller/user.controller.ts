import { Request, Response } from "express";
import { UserEntity } from "../entity/user.entity";
import { createTypeormConn as getConnection } from "../utils/createTypeormConn";

class UserController {
  public async findAll(req: Request, res: Response) {
    try {
      const users = await getConnection
        .getRepository(UserEntity)
        .createQueryBuilder("user")
        .getMany();

      return res.status(200).send({ state: "ok", users });
    } catch (err) {
      return res.status(500).send({
        error: "Erro ao buscar usuários",
      });
    }
  }
  public async findOne(req: Request, res: Response) {
    try {
      const user = await getConnection
        .getRepository(UserEntity)
        .createQueryBuilder("user")
        .getOne();

      return res.status(200).send({ state: "ok", user });
    } catch (err) {
      return res.status(500).send({
        error: "Erro ao buscar usuário",
      });
    }
  }
}
export default new UserController();


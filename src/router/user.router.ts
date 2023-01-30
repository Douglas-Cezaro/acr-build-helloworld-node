import { Router } from "express";

import userController from "../controller/user.controller";

class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get("/", [], userController.findAll);
  }
}

export const User = () => {
  return new Routes().router;
};


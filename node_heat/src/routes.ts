import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageUserController } from "./controllers/CreateMessageController";
import { GetLast3MessagesUserController } from "./controllers/GetLast3MessagesController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageUserController().handle
);

router.get("/messages/last3", new GetLast3MessagesUserController().handle)

export { router };

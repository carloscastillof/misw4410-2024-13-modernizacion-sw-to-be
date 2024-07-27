import { Router } from "express";
import { CreateUser } from "../../../usecases/user/CreateUser";
import { GetUser } from "../../../usecases/user/GetUser";

const router = Router();

router.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const createUser = new CreateUser();
  const user = await createUser.execute(name, email);
  res.status(201).json(user);
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const getUser = new GetUser();
  const user = await getUser.execute(parseInt(id, 10));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

export default router;

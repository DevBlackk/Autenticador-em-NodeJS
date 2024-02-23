import express from "express";
import * as bcrypt from "bcrypt";

const app = express();

app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send(user);
  } catch {
    res.status(500).send();
  }
});

app.post("/users/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  if (user == null) {
    return res.status(404).send("Usuário não encontrado!");
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Você logou com sucesso!");
    } else {
      res.send("Usuário ou senha inválidos!");
    }
  } catch {
    res.status(500).send();
  }
});

app.listen(3000);

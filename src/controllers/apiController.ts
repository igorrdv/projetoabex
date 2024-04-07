import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const registerUser = async (req: Request, res: Response) => {
  const { name, password, email, phone } = req.body;

  if (!name || !password || !email || !phone) {
    return res.status(400).send("Preencha todos os campos");
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return res.status(400).send("Usuário já existe");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name,
      password: hashedPassword,
      email,
      phone,
    },
  });

  res.json(newUser);
};

export const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Preencha com o email e senha");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    return res.status(404).send("Usuário não encontrado");
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(401).send("Senha incorreta");
  }

  res.json(user);
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, password, email, phone } = req.body;
  const updatedUser = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      password,
      email,
      phone,
    },
  });
  res.json(updatedUser);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedUser = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(deletedUser);
};

export const getEvents = async (req: Request, res: Response) => {
  const event = await prisma.event.findMany();
  res.json(event);
};

export const getEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const event = await prisma.event.findUnique({
    where: {
      id: Number(id),
    },
  });
  if (!event) {
    return res.status(404).send("Evento não encontrado");
  }
  res.json(event);
};

export const postEvent = async (req: Request, res: Response) => {
  const { title, date, local, user } = req.body;
  const newEvent = await prisma.event.create({
    data: {
      title,
      date: new Date(date),
      local,
      user,
    },
  });
  res.json(newEvent);
};

export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, date, local, user } = req.body;
  const updatedEvent = await prisma.event.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      date: new Date(date),
      local,
      user,
    },
  });
  res.json(updatedEvent);
};

export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedEvent = await prisma.event.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(deletedEvent);
};

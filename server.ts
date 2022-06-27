import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

var cors = require('cors')

const app = express();
const prisma = new PrismaClient();
app.use(express.json());
// Allow cors on all routes
app.use(cors());


// get all todos
app.get('/', async (req: Request, res: Response) => {
  const todos = await prisma.todoList.findMany();
  res.json(todos);
});

// create a todo
app.post('/create', async (req: Request, res: Response) => {
  const { description } = req.body;
  const todos = await prisma.todoList.create({
    data: {
      description
    }
  });
  res.json(todos);
});

// complete todo
app.put('/complete', async (req: Request, res: Response) => {
  const { id } = req.body;
  const todos = await prisma.todoList.update({
    where: {
      id,
    },
    data: {
      completed: true,
    }
  })
  res.json(todos);
});

// delete todo
app.put('/delete', async (req: Request, res: Response) => {
  console.log("was this called??")
  const { id } = req.body;
  const todos = await prisma.todoList.update({
    where: {
      id
    },
    data: {
      deleted: true,
    }
  })
  res.json(todos);
});


app.listen(3001);
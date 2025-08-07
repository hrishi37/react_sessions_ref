import express, { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());


// GET /todos - Get all todos
app.get('/todos', async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: {
        createdAt: 'desc'
      },
    });
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});

// GET /todos/:id - Get a specific todo
app.get('/todos/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await prisma.todo.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!todo) {
      res.status(404).json({ error: 'Todo not found' });
    }
    
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todo' });
  }
  return;
});

// POST /todos - Create a new todo
app.post('/todos', async (req: Request, res: Response) => {
  try {
    const { text }: { text: string } = req.body;
    
    if (!text || text.trim() === '') {
      res.status(400).json({ error: 'Text is required' });
    }
    
    const todo = await prisma.todo.create({
      data: {
        text: text.trim()
      }
    });
    
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create todo' });
  }
});

// PUT /todos/:id - Update a todo
app.put('/todos/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { text, completed }: { text?: string; completed?: boolean } = req.body;
    
    const updateData: { text?: string; completed?: boolean } = {};
    if (text !== undefined) updateData.text = text.trim();
    if (completed !== undefined) updateData.completed = completed;
    
    const todo = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: updateData
    });
    
    res.json(todo);
  } catch (error: any) {
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Todo not found' });
    }
    res.status(500).json({ error: 'Failed to update todo' });
  }
});

// DELETE /todos/:id - Delete a todo
app.delete('/todos/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    await prisma.todo.delete({
      where: { id: parseInt(id) }
    });
    
    res.status(204).send();
  } catch (error: any) {
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Todo not found' });
    }
    res.status(500).json({ error: 'Failed to delete todo' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});

export default app;
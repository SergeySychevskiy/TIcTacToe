import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());

app.post('/api/move', (req: Request, res: Response) => {
  const { board } = req.body;

  const emptyCells = board.reduce((acc: number[], cell: string, index: number) => {
    if (cell === '') acc.push(index);
    return acc;
  }, []);

  if (emptyCells.length === 0) {
    return res.status(400).json({ error: 'No empty cells' });
  }

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const computerMove = emptyCells[randomIndex];

  const newBoard = [...board];
  newBoard[computerMove] = 'O';
  const randomDelay = 500 + Math.floor(Math.random() * 1000);

  setTimeout(() => {
    res.json({ board: newBoard });
  },randomDelay);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
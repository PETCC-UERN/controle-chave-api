import express from 'express';
import lending from '../services/lending.service';

const router = express.Router();

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const emprestimoAtualizado = await lending.updateEmprestimo(id, data);
    res.json(emprestimoAtualizado);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;


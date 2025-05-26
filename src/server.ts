import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/user.routes';
import objectRoutes from './routes/object.routes';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Aqui depois vamos adicionar as rotas
app.get('/', (req, res) => {
    res.send('API funcionando 🚀');
});


app.use('/users', userRoutes);
app.use('/objects', objectRoutes);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
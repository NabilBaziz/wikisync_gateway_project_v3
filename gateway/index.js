import express from 'express';
import cors from 'cors';
import wikisyncRoutes from './routes/wikisync.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/wikisync', wikisyncRoutes);

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});

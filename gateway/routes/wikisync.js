import express from 'express';
import { verifyToken, getTenantFromToken } from '../middleware/auth.js';
import * as WikiService from '../services/wikisync.js';

const router = express.Router();
router.use(verifyToken);

router.get('/pages', async (req, res) => {
  try {
    const tenantId = getTenantFromToken(req);
    const pages = await WikiService.listPages(tenantId);
    res.json(pages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

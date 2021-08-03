import express from 'express';
import { checkCache, checkNewsCache } from '../helper/cache';
import { getAnalysis } from './analysis';
import { getNews } from './news';
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'connected' });
});

router.get('/analysis', checkCache, getAnalysis);
router.get('/news', checkNewsCache, getNews);


export default router;

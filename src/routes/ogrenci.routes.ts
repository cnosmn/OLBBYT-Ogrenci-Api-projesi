import { Router } from 'express';

import { tumOgrencileriGetir } from '../controllers/ogrenci.controller';
import { ogrenciGetir } from '../controllers/ogrenci.controller';
const router = Router();

router.get("/",tumOgrencileriGetir);
router.get("/:id",ogrenciGetir);

export default router;
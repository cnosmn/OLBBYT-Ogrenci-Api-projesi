import { Router } from 'express';

import { ogrenciEkle, tumOgrencileriGetir } from '../controllers/ogrenci.controller';
import { ogrenciGetir } from '../controllers/ogrenci.controller';
const router = Router();

router.get("/",tumOgrencileriGetir);
router.get("/:id",ogrenciGetir);
router.post("/",ogrenciEkle);


export default router;
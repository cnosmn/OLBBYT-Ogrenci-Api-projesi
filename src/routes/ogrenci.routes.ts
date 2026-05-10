import { Router } from 'express';

import { ogrenciEkle, ogrenciGuncelle, tumOgrencileriGetir } from '../controllers/ogrenci.controller';
import { ogrenciGetir } from '../controllers/ogrenci.controller';
const router = Router();

router.get("/",tumOgrencileriGetir);
router.get("/:id",ogrenciGetir);
router.post("/",ogrenciEkle);
router.put("/:id",ogrenciGuncelle);

export default router;


import { Request,Response } from "express";
import {ogrenciler} from "../data/ogrenciler";

import {Ogrenci,
    OgrenciOlusturmaDTO,
    OgrenciGuncellemeDTO
} from "../types/ogrenci.types";
import { request } from "node:http";

// GET /api/ogrenciler 

export const tumOgrencileriGetir = (
    req:Request,
    res:Response
): void => {
    res.status(200).json({
        success:true,
        data:ogrenciler,
        count:ogrenciler.length,
    });
};

// GET /api/ogrenciler/:id

export const ogrenciGetir = (
    req:Request,
    res:Response
): void => {
    const {id} = req.params;
    const ogrenci = ogrenciler.find((o) => o.id === id);

    if (!ogrenci){
        res.status(404).json({
        success:false,
        error:"şu id : "+id+" ye sahip ogrenci bulunamadı",
    });
    return;
    //https://codeshare.io/GqrPQR
    }
    res.status(200).json({
        success:true,
        data:ogrenci,
    });
};


// POST /api/ogrenciler
export const ogrenciEkle = (
    req:Request,
    res:Response
): void => {
    const yeniOgrenciVerisi : OgrenciOlusturmaDTO =req.body;
    if (!yeniOgrenciVerisi ||
        !yeniOgrenciVerisi.ad || 
        !yeniOgrenciVerisi.soyad || 
        !yeniOgrenciVerisi.sinif ||
        !yeniOgrenciVerisi.yas ||
        !yeniOgrenciVerisi.okul ||
        !yeniOgrenciVerisi.notOrtalamasi
    ) {
        res.status(400).json({
        success:false,
        error:"tüm alanları doldurunuz (ad,soyad,sinif,yas,okul,notOrtalamasi)",
    });
    return;
    }
    //https://codeshare.io/GqrPQR
    
    const yeniOgrenci : Ogrenci = {
        id:(ogrenciler.length + 1).toString(),
        ad:yeniOgrenciVerisi.ad,
        soyad:yeniOgrenciVerisi.soyad,
        sinif:yeniOgrenciVerisi.sinif,
        okul:yeniOgrenciVerisi.okul,
        notOrtalamasi:yeniOgrenciVerisi.notOrtalamasi,
        olusturma_tarihi:new Date(),
        yas:yeniOgrenciVerisi.yas
    }

    //ad:yeniOgrenciVerisi.ad,
    //soyad:yeniOgrenciVerisi.soyad,
    //sinif:yeniOgrenciVerisi.sinif,
    //okul:yeniOgrenciVerisi.okul,
    //notOrtalamasi:yeniOgrenciVerisi.notOrtalamasi,

    // yerine ...yeniOgrenciVerisi yazabiliriz

    ogrenciler.push(yeniOgrenci);

    res.status(201).json({
        success:true,
        data:yeniOgrenci,
    });
};


// PUT /api/ogrenciler/:id

export const ogrenciGuncelle = (
    req:Request,
    res:Response
): void => {
    const {id} = req.params;
    const guncellenecekVeri : OgrenciGuncellemeDTO = req.body;

    const index = ogrenciler.findIndex((o) => o.id === id);
    // index -1 değerde ise o id'ye sahip öğrenci yok demek
    

    res.status(200).json({
        success:true,
        data:ogrenciler,
        count:ogrenciler.length,
    });
};

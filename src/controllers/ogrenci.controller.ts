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



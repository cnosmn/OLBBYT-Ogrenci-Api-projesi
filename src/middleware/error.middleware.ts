import {Request,Response,NextFunction} from 'express';

//route bulunamadı
export const notFoundError = (
    req:Request,
    res:Response
):void => {
    res.status(404).json({
        success:false,
        error:req.method+" "+req.originalUrl+ " adresi bulunamadı",
    });
};
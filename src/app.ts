import express, {Application} from 'express'

const app : Application = express();
import  ogrenciRoutes from "./routes/ogrenci.routes";
import { notFoundError } from './middleware/error.middleware';

app.use(express.json());

app.get("/health",(_req,res) => {
    res.status(200).json({
        success:true,
        status:"working",
        time: new Date().toISOString(),
    });
});

app.use("/api/ogrenciler",ogrenciRoutes);

//bulunamayan route lar için
app.use(notFoundError);
export default app;

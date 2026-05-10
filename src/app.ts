import express, {Application} from 'express'

const app : Application = express();
import  ogrenciRoutes from "./routes/ogrenci.routes";

app.use(express.json());


app.get("/health",(_req,res) => {
    res.status(200).json({
        success:true,
        status:"working",
        time: new Date().toISOString(),
    });
});

app.use("/api/ogrenciler",ogrenciRoutes);

export default app;

//https://codeshare.io/anMd0X
import morgan from "morgan";
import { PORT } from "./config.js";
import express from "express";

const app = express();
app.use(express.json())
app.use(morgan('dev'))

// metodos

app.get('/ping', (req, res) =>{
    res.json({
        message: 'pong'
    })
})

app.use((req, res) =>{
    res.status(404).json({
        message: 'endpoint not found'
    })
})


app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT} \n http://localhost:${PORT}`);
});

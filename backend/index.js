import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const users = [];

app.get("/users", (request, response) => {
    return response.json(users);
});
app.post("/users", (request, response) => {
    const { name, age, nickName } = request.body

    users.push({ name, age, nickName });
    return response.json({ name, age, nickName });

});
mongoose.connect('mongodb+srv://guimaraesdevweb:C4yXZ9bGPQMp6kOQ@bdgseoweb.o6nokc1.mongodb.net/?retryWrites=true&w=majority&appName=bdgseoweb').then(() => console.log("Banco de dados Conectado"))
    .catch(() => console.log("Deu RUIM!"))
app.listen(3000);





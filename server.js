import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/download-json', (req, res) => {
    const body = JSON.stringify(req.body, undefined, 2);
    fs.writeFile("bot-configuration.json", body, { encoding: 'utf-8' }, (err) => {
        if (err) {
            res.status(500).send({ message: 'Что-то пошло не так' });
            return;
        }
        const file = path.resolve(".", "bot-configuration.json");А
        res.download(file);
    });
});

app.listen(port, () => {
    console.log('Server has been started')
})
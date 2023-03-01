import express from "express";
import child_process from "child_process";
import bodyParser from "body-parser";
import chalk from "chalk";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3001;

let script;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/send-json', (req, res) => {
    const body = JSON.stringify(req.body, undefined, 2);
    fs.writeFile("bot-configuration.json", body, { encoding: 'utf-8' }, (err) => {
        if (err) {
            res.status(500).send({ message: 'Что-то пошло не так' });
            return;
        }

        res.status(200).send({ message: 'JSON успешно загружен на сервер' });
    });
});

app.listen(port, () => {
    console.log('Server has been started')
})
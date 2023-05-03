import express from "express";
import bodyParser from "body-parser";
import crypto from "crypto";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/encrypt', (request, response) => {
    if (!validateEncryptBody(request.body, response)) {
        return;
    }

    const { string, secretKey } = request.body;
    const encrypted = encrypt(string, secretKey);

    response.status(200).json({ encrypted });
});

app.listen(port, () => {
    console.log('Server has been started')
})

function validateEncryptBody(body, response) {
    const { string, secretKey } = body ?? {};

    if (!string) {
        response.status(400).send("Параметер 'string' должен быть передан");
        return false;
    }

    if (!secretKey) {
        response.status(400).send("Параметер 'secretKey' должен быть передан");
        return false;
    }

    if (secretKey.length !== 16) {
        response.status(400).send("Длина секретного ключа должна быть: 16");
        return false;
    }

    return true;
}

function encrypt(string, secretKey) {
    const cipher = crypto.createCipheriv("aes-128-ecb", secretKey, null);
    return cipher.update(string, "utf8", "hex") + cipher.final("hex");
}
import 'dotenv/config';
import express from 'express';
import path from 'path';
import http from 'http';
import fs from 'fs';
import {Transform} from 'stream';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

(function downloadImageAndSaveToServer() {
    var url = 'http://arguablydelicious.s3.us-east-2.amazonaws.com/images/apple_tart.jpg';

    http.request(url, function(response) {
        var data = new Transform();

        response.on('data', function(chunk) {
            data.push(chunk);
        });

        response.on('end', function() {
            if (!fs.existsSync('./dist/images')) {
                fs.mkdirSync('./dist/images');
            }
            fs.writeFileSync('./dist/images/apple_tart.jpg', data.read());
        });
    }).end();
})();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'dist/index.html'));
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}!`);
});
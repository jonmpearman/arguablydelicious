import 'dotenv/config';
import express from 'express';
import path from 'path';
import fs from 'fs';
import request from 'request';
import sharp from 'sharp';

const imageReader = sharp();

(function () {
    imageReader
        .metadata()
        .then((metadata) => {
            return imageReader
                .resize(Math.round(metadata.width / 2))
                .toBuffer();
        })
        .then((data) => {
            if (!fs.existsSync(path.join(__dirname + '/dist/images'))) {
                fs.mkdirSync(path.join(__dirname + '/dist/images'));
            }
            fs.writeFileSync(path.join(__dirname + '/dist/images/apple_tart.jpg'), data);
        });

    request
        .get('http://arguablydelicious.s3.us-east-2.amazonaws.com/images/apple_tart.jpg')
        .on('error', err => {
            console.log(err)
        })
        .on('end', () => {
            // console.log('end image request');
        })
        .pipe(imageReader);
})();

function downloadImageAndSaveToServer() {
    var url = 'http://arguablydelicious.s3.us-east-2.amazonaws.com/images/apple_tart.jpg';

    http.request(url, function(response) {
        var data = new Transform();

        response.on('data', function(chunk) {
            data.push(chunk);
        });

        response.on('end', function() {
            if (!fs.existsSync(path.join(__dirname + './dist/images'))) {
                fs.mkdirSync(path.join(__dirname + './dist/images'));
            }
            fs.writeFileSync('./dist/images/apple_tart.jpg', data.read());
        });
    }).end();
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}!`);
    console.log(`dir name ${__dirname}`);
});
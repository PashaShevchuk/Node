// У вас є 2 папки зі студентами: 2000 та 1800. В кожній папці є список студентів з будь якою інфою. Наприклад:
//      2000: Olga.txt, Ivan.txt
//      1800: Ira.txt, Dima.txt
// Задача перемістити студентів з 20 години на 18 та навпаки. Тобто на виході має бути:
//      2000: Ira.txt, Dima.txt
//      1800: Olga.txt, Ivan.txt
// ВАЖЛИВО! Ніякого хардкоду і дубляжу коду. Робити максимально універсальні методи.

const fs = require('fs');
const path = require('path');

function movingFiles(firstDir, secondDir) {
    fs.readdir(firstDir, (err, firstDirData) => {
        if (err) console.log(err);

        fs.readdir(secondDir, (err, secondDirData) => {
            if (err) console.log(err);
            for (let x of firstDirData) {
                fs.stat(path.join(firstDir, x), (err, stat) => {
                    if (err) console.log(err);
                    if (stat.isFile()) {
                        fs.rename(path.join(firstDir, x), path.join(secondDir, x), (err) => {
                            if (err) console.log(err);
                        });
                    }
                });
            }
            for (let y of secondDirData) {
                fs.stat(path.join(secondDir, y), (err, stat) => {
                    if (err) console.log(err);
                    if (stat.isFile()) {
                        fs.rename(path.join(secondDir, y), path.join(firstDir, y), (err) => {
                            if (err) console.log(err);
                        });
                    }
                });
            }
        })
    });
}

movingFiles(path.join(process.cwd(), '1800'), path.join(process.cwd(), '2000'));

const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'dir1', 'dir1_1', 'dir1_1_1'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//     }
// });
//
// fs.mkdir(path.join(__dirname, 'dir2'), (err) => {
//     if (err) {
//         console.log(err);
//     }
// });
//
// fs.writeFile('./text1.txt', 'Hello text 1', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });
//
// fs.writeFile('./text2.txt', 'Hello text 2', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });
//
// fs.writeFile('./dir1/dir1_text1.txt', 'Hello dir 1 text 1', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });
//
// fs.writeFile('./dir1/dir1_text2.txt', 'Hello dir 1 text 2', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });
//
// fs.writeFile('./dir1/dir1_1/dir1_1_text1.txt', 'Hello dir 1_1 text 1', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });
//
// fs.writeFile('./dir2/dir2_text1.txt', 'Hello dir 2 text 1', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

// fs.writeFile('./dir2/dir2_text2.txt', 'Hello dir 2 text 2', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

function movingFiles(directory) {
    fs.readdir(path.join(directory), (err, data) => {
        if (err) console.log(err);

        for (let x of data) {
            fs.stat(path.join(directory, x), (err, stat) => {
                if (err) console.log(err);

                if (stat.isFile()) {
                    if (!(x === 'app.js')) {
                        fs.rename(path.join(directory, x), path.join(process.cwd(), 'allFiles', x), (err) => {
                            if (err) console.log(err);
                        });
                    }
                } else {
                    movingFiles(path.join(directory, x, '/'));
                }
            });
        }
    });
}

movingFiles(process.cwd());

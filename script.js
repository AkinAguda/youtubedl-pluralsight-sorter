const path = require('path');
const fs = require('fs');

fs.readdir(__dirname, (err, files) => {
    const chaps = [];
    files.forEach(file => {
        const arr = file.match(/[a-zA-z][\d]-[\d][\d]/g);
        if (arr !== null) {
            chaps.push(arr[0].split('-')[0].split('')[1])
        }
    })
    chaps.sort();
    for (i = 1; i <= chaps[chaps.length - 1]; i++) {
        if (fs.existsSync(__dirname+'/m'+i)) {
            continue;
        }else {
            fs.mkdirSync(__dirname+'/m'+i)
            const regex = new RegExp('m'+(i)+'-[0-9][0-9]');
            files.forEach(file => {
                const arr = file.match(regex);
                if (arr) {
                    fs.rename(__dirname+'/'+arr.input, __dirname+'/m'+(i)+'/'+arr[0].split('-')[1]+'-'+file, error => {
                        if(error) throw err;
                    })
                }
            })
        }
    }
})
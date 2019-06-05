const path = require('path');
const fs = require('fs');
fs.readdir(__dirname, (err, files) => {
    files.forEach(file => {
        console.log('SORTING FILES');
        const arr = file.match(/[a-zA-z][\d]-[\d][\d]/g);
        if (arr !== null) {
            fs.rename(__dirname+'/'+file, __dirname+'/'+arr[0].split('-')[1]+'-'+file, error => {
                if(error) throw err;
                console.log('FILES SORTED');
            })
        }
    });
})

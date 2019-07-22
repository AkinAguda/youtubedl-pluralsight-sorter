const path = require("path");
const fs = require("fs");

fs.readdir(__dirname, (err, files) => {
  console.log("Sorting Files into folders...");
  const chaps = [];
  let nullCount = 0;
  files.forEach(file => {
    const arr = file.match(/m[\d]*-[\d]*.mp4$/g);
    if (arr !== null && arr[0].split("-")[0].slice(1) !== "") {
      chaps.push(arr[0].split("-")[0].slice(1));
    } else {
      nullCount++;
    }
  });
  if (nullCount === files.length) {
    fs.readdir(__dirname, (err, file) => {
      file.sort((a, b) => {
        const ta = fs.statSync(path.join(__dirname, a));
        const tb = fs.statSync(path.join(__dirname, b));
        return ta.birthtimeMs - tb.birthtimeMs;
      });
      file.forEach((fn, index) => {
        if (fn === "script.js") return;
        fs.renameSync(
          path.join(__dirname, fn),
          path.join(
            __dirname,
            (fn[0] != index ? index + " " : "") +
              fn.replace(/[-][0-91-zA-Z]{8}(.*)(?=.mp4)/, "")
          )
        );
      });
    });
    console.log("Files Sorted!!!");
    nullCount = 0;
  } else {
    chaps.sort();
    for (i = chaps[0]; i <= chaps[chaps.length - 1]; i++) {
      if (fs.existsSync(path.join(__dirname, "m" + i))) {
        continue;
      } else {
        fs.mkdirSync(path.join(__dirname, "m" + i));
        const regex = new RegExp("m" + i + "-[0-9]{2}");
        files.forEach(file => {
          const arr = file.match(regex);
          if (arr) {
            fs.renameSync(
              path.join(__dirname, arr.input),
              path.join(
                __dirname,
                "m" + i,
                file.substring(0, 2) === arr[0].split("-")[1]
                  ? "" + file
                  : arr[0].split("-")[1] + "-" + file
              )
            );
          }
        });
      }
    }
    console.log("Files Sorted!!!");
  }
});

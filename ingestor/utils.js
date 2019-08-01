const fs = require('fs');
const path = require('path');
const unzipper = require('unzipper'); // npm lib used to unzip files
const { createReadStream } = require('fs');

// async fs reads and unzip files to a directory

const folderName = 'Archive.zip';
const pathToExtract = 'unzippedArchive';

const unzipFolder = (folderName, pathToExtract) => {
  fs.createReadStream(`./${folderName}`).pipe(
    unzipper.Extract({ path: __dirname + `/${pathToExtract}` })
  );
};

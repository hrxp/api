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

class File {
  constructor(filename) {
    this.filename = filename;
    this.fileContents;
  }

  readFile() {
    return new Promise((resolve, reject) => {
      try {
        fs.createReadStream(__dirname + '/channels.json')

          .on('data', function(chunk) {
            this.fileContents = JSON.parse(chunk.toString());
          })

          .on('close', function() {
            resolve(this.fileContents);
          });
      } catch (err) {
        reject();
      }
    });
  }

  async processFile(processFileFunction, ...otherArgs) {
    const results = processFileFunction(...otherArgs);
    return results;
  }


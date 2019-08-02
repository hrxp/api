// TODO
// await use axios post seedData fn to push data to db
// done: delete file directory(or add to gitignore so zip files doesn’t push to Github) + drain

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

  // Read a file and save into the constructor
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

  // This method is here in the case we wanted to do invoke a function on the this.fileContents
  async processFile(processFileFunction, ...otherArgs) {
    const results = processFileFunction(...otherArgs);
    return results;
  }
}

// Used to control the flow of reading a file.
const processFileController = async fileName => {
  let state = {};
  state.file = new File(fileName);
  try {
    // Read the file and store in the File object
    const results = await state.file.readFile();
    return results;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { File, processFileController };

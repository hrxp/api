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
}

const processFileController = async (fileName, func, funcArgs) => {
  let state = {};
  // Create a new ReadFile Class
  state.readFile = new File(fileName);
  // Read the file and then process the file, passing in fun & it's function and its arguments.
  try {
    // Read the file and store in the File object
    const results = await state.readFile.readFile();
    return results;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { File, processFileController };

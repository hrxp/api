// Find out if we can get the relative file path instead of absolute

const fs = require('fs');
const path = require('path');

let state = {};
state.results = [];
state.users = [];
state.channels = [];
state.messages = [];

const filewalker = async (dir, done) => {
  // read the directory (unzipped archive), this is also the recursive function.
  await fs.readdir(dir, async function(err, list) {
    // If at any point there is an error, invoke the callback function witht the error as the argument
    if (err) return done(err);

    // Check to see if there are any items in the list
    var pending = list.length;

    // base case # 2, if there are no more items in the list, return
    if (!pending) return done(null, users, messages, channels);

    // For each item in the file list, iterate over the file.
    list.forEach(file => {
      file = path.resolve(dir, file);

      //
      fs.stat(file, async (err, stat) => {
        // If there are stats and there is a directory for this file(folder), we will push
        if (stat && stat.isDirectory()) {
          // Add directory to array
          state.results.push(file);

          // If we reach here, we know this file is a directory, and we recuseively call filewalker with the directory
          filewalker(file, async (err, res) => {
            state.results = state.results.concat(res);
            if (!--pending) done(null);
          });
        } else {
          // /*
          //  ** Here is where we would read each file and parse the data, there are 4 different cases
          //  */

          // if there are more items in the list, invoke the callback
          if (!--pending) {
            done(null);
          }
        }
      });
    });
  });
};

// Invoke the file walker function

filewalker(path.resolve('./ingestor'), err => {
  if (err) {
    throw err;
  }
  console.log(state.users);
});

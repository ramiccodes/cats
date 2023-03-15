const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (err, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!err) functionToRunWhenThingsAreDone(data);
  })
}

const printBreed = breed => {;
  console.log('Return Value: ', breed); // => will NOT print out details, instead we will see undefined!
}

breedDetailsFromFile("Bombay", printBreed);

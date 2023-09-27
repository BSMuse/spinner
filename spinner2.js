const spin = (charArray, index = 0) => {
  if (index >= charArray.length) {
    index = 0; 
  }

  process.stdout.write(`\r${charArray[index]}   `);

  setTimeout(() => {
    spin(charArray, index + 1);
  }, 200);
};

const charArray = ['|', '/', '-', '\\', '|'];
spin(charArray);
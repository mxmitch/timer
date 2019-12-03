const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  if (key <= 9 && key >= 1) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000); //convert to ms
    console.log(`Setting timer for ${key} seconds`);
  }
});

console.log('after callback');
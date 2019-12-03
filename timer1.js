const alarms = process.argv.slice(2);​​
for (const alarm of alarms) {
  console.log('check');
  if (alarm >= 0) {
    console.log('check2');
    setTimeout(() => {
      process.stdout.write('\x07');
    }, alarm * 1000); //convert to ms
  }
}
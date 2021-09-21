const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('Please turn off the motor!');
  setTimeout(() => {
      console.log('Its a gentle reminder')
  }, 3000);
});


console.log('The script is running')
myEmitter.emit('waterfull');
console.log('The script is still running')
myEmitter.emit('waterfull')
// const fs = require('fs');

// setTimeout(() => console.log('timer 1 over'), 0);
// setImmediate(() => console.log('immedietae 1 over'));

// fs.readFile('test-file.txt', () => {
//   console.log('I/O finished');
// });

// console.log('hlo form top lvl code');

const EventListner = require('events');
const myEmmiter = new EventListner();

myEmmiter.on('newSale', () => {
  console.log('there was a new sale!');
});

myEmmiter.on('newSale', () => {
  console.log('cusotmer name akash');
});

myEmmiter.emit('newSale');

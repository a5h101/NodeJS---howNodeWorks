const EventEmitter = require('events');
const http = require('http');

class sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmmiter = new sales();

myEmmiter.on('newSale', (item) => {
  console.log('there was a new sale, Sale no =' + item);
});

myEmmiter.emit('newSale', 3);

const server = http.createServer();

server.on('request', (req, res, error) => {
  console.log('request recieved');
  console.log(req.url);
  if (error) console.log(error);
  res.end('request recieved');
});

server.on('request', (req) => {
  console.log('request 2 recieved');
  console.log(req.url);

  //   res.end('request recieved😁');
});

server.on('close', () => {
  console.log('server closed');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('waiting for request');
});

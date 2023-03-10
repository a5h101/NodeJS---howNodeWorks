const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req, res, err) => {
  //Soln-1
  //   if (err) console.log(err);

  //   fs.readFile('test-file.txt', (error, data) => {
  //     if (error) console.log(error);
  //     res.end(data);
  //   });

  // Soln-2
  //   const readable = fs.createReadStream('test-file.txt');

  //   readable.on('data', (chunk) => {
  //     res.write(chunk);
  //   });

  //   readable.on('end', () => {
  //     res.end();
  //   });

  //   readable.on('error', (er) => {
  //     console.log(er);
  //     res.statusCode = 500;
  //     res.end('file not found');
  //   });

  // Soln-3
  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening...');
});

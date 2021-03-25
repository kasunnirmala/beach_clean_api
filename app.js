const express = require('express');
const app = express();
var http = require('http').createServer(app);
require('./db');
const bodyParse = require('body-parser');
const cors = require('cors');

const io = require('socket.io')(http);
const PostDataRoute = require('./routes/post-data');


app.use(cors());

app.use(bodyParse.json({ limit: '50mb', extended: true }));
app.use(bodyParse.urlencoded({ limit: '50mb', extended: true }));


app.use('/api/v1/post-data', PostDataRoute);

// io.on('connection', (socket) => {
//   console.log('USER CONNECTED ' + socket.client.conn.id);
//   module.exports = socket;
//   //  socket.emit('msg',"Connected");
// });


// http is used to use this for io socket in future
http.listen(6654, () => {
  console.log('listening on *:6654');
});

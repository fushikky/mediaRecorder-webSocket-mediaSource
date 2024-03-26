const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs');

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 80 });

wss.on('connection', function (ws) {
  console.log('websocket connected');
  ws.on('message', function (data) {
    ws.send(data);
    console.log(data);
  });
  ws.on('close', function () {
    console.log("socket disconnected!");
  });
});
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// 정적 파일 제공 (public 폴더 내의 파일)
app.use(express.static(path.join(__dirname, 'public')));

// WebSocket 연결을 설정합니다.
wss.on('connection', (ws,) => {
  console.log('웹 소켓 연결이 열렸습니다.');
  
  // 웹 소켓으로부터 메시지를 수신하고 클라이언트로 다시 전송
  ws.on('message', (message) => {
    console.log(`받은 메시지: ${message}`);
    ws.send(`서버에서 다시 보낸 메시지: ${message}`);
  });

  // 연결이 닫힌 경우
  ws.on('close', () => {
    console.log('웹 소켓 연결이 닫혔습니다.');
  });
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

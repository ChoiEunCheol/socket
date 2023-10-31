const express = require('express');
const app = express();
const path = require('path');

// 포트 번호 설정
const port = 8000;

// 정적 파일 제공 (index.html 파일을 포함)
app.use(express.static(path.join(__dirname, 'public')));

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
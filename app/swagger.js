const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });
const PORT = 3000; // 사용하는 포트 번호에 맞게 변경

const options = {
  info: {
    title: 'API 명세',
    description: '내전봇 API 명세서',
  },
  servers: [
    {
      url: `http://localhost:${PORT}`, // base URL
    },
  ],
  schemes: ['http'] // 사용할 프로토콜
};


const outputFile = './swagger/swagger-output.json'; // 생성될 Swagger 설정 파일의 경로 및 파일명
const endpointsFiles = ['../app.js']; // 기본 라우터 즉, app.use("/", router)가 정의된 파일의 경로
swaggerAutogen(outputFile, endpointsFiles, options); // Swagger 문서를 outputFile 경로에 생성
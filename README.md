# express-rabbitmq-mongodb
도커와 도커컴포즈를 활용한 express api, rabbitmq, mongodb 서버 만들기

# 설치방법
> docker-compose up -d --build

# 사용방법
express api 서버
- localhost:3000

유저
- 목록: get localhost:3000/users
- 저장: post localhost:3000/users

rabbitmq 매니지먼트
- localhost:15672
- 계정: guest/guest

mongodb
- localhost:27017

# docker
none 태그 이미지 한번에 삭제하기
- docker rmi $(docker images -f "dangling=true" -q)
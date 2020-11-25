# Springboot-ReactJS
> A Springboot-React application that implements an Employee control system.  
> 스프링부트, 리액트 프레임워크를 사용한 종업원 관리 시스템


## 🎨 Features / 주요 기능
- List employee
- Create employee
- Update employee
- Delete employee



## 🐾 Examples / 사용 예제

스크린 샷과 코드 예제를 통해 사용 방법을 자세히 설명합니다.



## 📚 Stack / 개발 환경
- [Springboot](#https://spring.io) - The backend application
- [PostgreSQL](#https://www.postgresql.org) - The Database
- [ReactJS](#http://reactjs.org) - The Frontend application
- [Docker](#www.docker.com) - The container for the application
- Java

## Installation / 실행 방법


### 1. Docker Setup
```sh
git clone https://github.com/chaerim-kim/Springboot-ReactJS.git

cd Springboot-ReactJS

docker-compose up -d workspace postgres frontend
```

### 2. Build and Run the Springboot App with Maven
```sh
docker-compose exec workspace bash

./mvnw spring-boot:run
```

### 3. Build and Run the React Frontend App
```sh
cd frontend

npm start
```
Then access: http://localhost:3000/user





## 📜 License
This project is licensed under the terms of the MIT license.
> You can check out the full license [here](#https://opensource.org/licenses/mit-license.php)

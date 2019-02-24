# sparrowPortal
Backend and Frontend for Sparrow Project

Required Tools
  - MongoDB
  - Node JS 
  - Vue JS

Compenents
  - websocketServer (Dummy Machine Websocket Server)
  - server (Node JS backend connect with mongo DB and machine through websocket)
  - vue-element-admin for interaction with machine

Build and run websocket server
```sh
$ npm install 
$ node src/index.js
```

Build and run server (default port is 8081)
```sh
$ npm install 
$ npm start
$ you can config the mongo connection in src/config/mogoose.js
```

Build and run Vue js (default port is 9527)
```sh
$ npm install 
$ npm run dev
$ Login is using 'users' API  - email / password
```

API 
```sh
$ http://localhost:8081/users  HTTP POST
{
        "roles": [
            "admin"
        ],
        "token": "admin",
        "introduction": "I am super admin",
        "avatar": "http://wifi.h2popo.com:8084/myAvatar.png",
        "name": "Super admin",
        "email": "laikwoktai1@gmail.com",
        "password": "23969904",
        "__v": 0
}
```
```sh
$ http://localhost:8081/users/list  HTTP GET
[
    {
        "roles": [
            "admin"
        ],
        "_id": "5c4dc1e407a0bc4958052091",
        "token": "admin",
        "introduction": "I am super admin",
        "avatar": "http://wifi.h2popo.com:8084/myAvatar.png",
        "name": "Super admin",
        "email": "laikwoktai@gmail.com",
        "password": "23969904",
        "__v": 0
    },
    {
        "roles": [
            "admin"
        ],
        "_id": "5c7171a63f2b1b61ac3d7d6c",
        "token": "admin",
        "introduction": "I am super admin",
        "avatar": "http://wifi.h2popo.com:8084/myAvatar.png",
        "name": "Super admin",
        "email": "laikwoktai1@gmail.com",
        "password": "23969904",
        "__v": 0
    }
]
```
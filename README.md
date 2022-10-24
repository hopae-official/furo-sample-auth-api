# FURO-SAMPLE-AUTH-API

# Getting started

## Installation

Clone the repository
```
$ git clone https://github.com/hopae-official/furo-sample-auth-api
```
Switch to the repo folder
```
$ cd furo-sample-auth-api
```
Install dependencies
```
$ npm install
```
Generate `.env` file and set `PRIVATE_KEY` (for signing jwt)
```
//.env
PRIVATE_KEY="YOUR_KEY"
```

## Start application
```
$ npm run start
```
Test api with `http://localhost:3000` (default port is 3000)

# Usage
### Sign JWT

url: `POST /sign`

#### Request Body

`payload`(optional): object  
Eg: `{ name: 'John Doe', uid: 'a0d53af8-5ce1-4f6f-a904-111ba7e1d61a' }`  

`options`(optional): object  
Eg: `{ expiresIn: '2h' }`

[View more](https://github.com/auth0/node-jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback)

Sample:
```
curl --location --request POST 'http://localhost:3000/sign' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payload": { "name": "John Doe", "uid": "a0d53af8-5ce1-4f6f-a904-111ba7e1d61a" },
    "options": { "expiresIn": "2h" }
}'
```
---
### Verify JWT

url: `GET /verify`

#### Request Header

`Authorization`(required): jwt  
Eg: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

Sample:
```
curl --location --request GET 'http://localhost:3000/verify' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJ1aWQiOiJhMGQ1M2FmOC01Y2UxLTRmNmYtYTkwNC0xMTFiYTdlMWQ2MWEiLCJpYXQiOjE2NjY2MDU1NzcsImV4cCI6MTY2NjYxMjc3N30.iGFNrFDcP_i8wvrnQBa8Rc0gLSbrgK-yyqWnNzY34mo'
```

You can visit [jwt.io](https://jwt.io/) to decode jwt easily.

# Customize
You can customize code by changing `routes/index.js` file for your own logic.

# Imported Modules
- [express](https://expressjs.com/ko/)
- [express-generator](https://expressjs.com/ko/starter/generator.html)
- [babel](https://babeljs.io/)
- [nodemon](https://nodemon.io/)
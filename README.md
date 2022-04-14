## Booking Manager API

This is a Node.js Koa web application to make table reservation from restaurants.

### Production

Make sure you have a recent version of Docker installed. Then you can build and run your own image from the projects directory:

```
$ docker build -t booking-manager-api .
$ docker run -d -p 8080:5451 --name my-booking-manager-api booking-manager-api
```

The default port (5451) for application is hard coded inside the Dockerfile.
You should be able to make request via Postman or browser from http://{$HOST}:8080/ address.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/8af1f3cb94b60a2560a1?action=collection%2Fimport)

### Development

In order to run from source you'll need Node.js v16.14+ installed. Supported runtime version is also mentioned in .nvmrc file.
```
$ npm install
```
Then you can either run with nodemon or compile TS and run from JS output.

```
$ npm run watch # runs TS code with hot-reload functionality
$ npm run build && npm run start:js # builds and runs from compiled code just like inside the Docker container
```

### Tech used

* Node.js
* MongoDB
* TypeScript
* Koa
* mongoose
* Docker
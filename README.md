# express-validator Node.js tutorial

This repository contains sample code on how use the [express-validator](https://github.com/express-validator/express-validator) together with _Typescript_.

<h3 align="center">Please help this repo with a ⭐️ if you find it useful! 😁</h3>

This repository contains the code for the flowwing[express-validator Node.js tutorial on Youtube](https://www.youtube.com/watch?v=7i7xmwowwCY).

[![express-validator-node-js-tutorial](images/express-validator-node-js-tutorial.png)](https://www.youtube.com/watch?v=7i7xmwowwCY)

For updates, please reach out to [@productioncoder](https://twitter.com/productioncoder) on Twitter.

Please also check out my website at [jangoebel.com](https://jangoebel.com)

# How to run this application

## Running the project

Make sure to install the dependencies with `npm`

```
npm install
```

You can then run the project by executing

```
npm run dev
```

which will start up a development server on port `8080`.

## API

### POST /register

Expected payload

```
{
    "email": "john@example.com",
    "password": "your-password"
}
```

The server will return a `400` bad request error if the request body does not conform to the expected schema (valid email and a password with at least `5` characters).

Please also check out the `./schema` directory to learn more about the expected request body.

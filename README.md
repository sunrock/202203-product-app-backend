## Prerequsite
node version 16.1x greater than 16.10

npm version greater than 8.5

## Setup step
1, Download repo

2, cd into project root directory

3, Run `npm i` to install node modules

4, Run `npm run dev` for a dev server, server is hosted on `http://localhost:3000/`

5, Run `npm run jest` to execute the unit tests via Jest.

## Design

Although I am not that into backend, I was still trying to make code more organised by adding two middleware validators

One is to check if we can fetch the product before actions of getting / editing or deleting it.

Another one is to check if the body of the request body is valid when adding or editing a product.

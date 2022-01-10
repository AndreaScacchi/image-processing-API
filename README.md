# image-processing-API

## Overview
This is a project for the Udacity **Nanodegree Full-Stack JavaScript Developer**.
The API can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters for rapid prototyping. 
The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size.

## Get Started
Clone the repository and install all depencencies with `npm install`

To start the server run `npm run start`

To test the project run `npm run test`

To prettifies and lints the code run `npm run prettier` and `npm run lint`

To compiles the typescript files to javascript run `npm run build`

To runs the code through the nodemon development server run `npm run dev`

## Technologies
- **Typescript**
- **Expres.js** **Node.js** for the Back-End Development
- **Jasmine** for testing the code
- **Git**
- **eslint** and **prettier** for linting and formatting the code
- **Sharp** for image resizing functionality
- **Supertest** to help Jasmine with unit testing

## Starting the Server & resizing the image on the endpoint
Once the server is started with `npm run start`, you can resize the image by typing an imagename (jpg), width, and height.

*example*: http://localhost:5000/api/route?imagename=santamonica&width=500&height=500

## Author
**_[Andrea Scacchi](https://andreascacchi.netlify.app/)_**

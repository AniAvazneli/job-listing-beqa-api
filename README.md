# Job Listing API

### Table of Contents
* [Prerequisites](#Prerequisites)
* [Tech Stack](#Tech-Stack)
* [Getting Started](#Getting-Started)
* [Project Structure](#Project-Structure)
* [Author](#Author)

#
### Prerequisites


* <img src="readme/npm.png" width="25" style="top: 8px" /> *npm @8 and up*
* <img src="readme/typescript.png" width="25" style="top: 8px" /> *typescript*

#
### Tech Stack

* <img src="readme/express.png" width="25" style="top: 8px" /> *Express @4.18.2 - JS web framework*
* <img src="readme/mongodb.png" width="25" style="top: 8px" /> *MongoDB @4.12.1 - DataBase*
* <img src="readme/mongoose.png" width="25" style="top: 8px" /> *Mongoose @6.8.0 - MongoDB object modeling tool*
* <img src="readme/dotenv.png" width="25" style="top: 8px" /> *Dotenv @16.0.3 -  JS library for loading environment variables*
* <img src="readme/cors.png" width="25" style="top: 8px" /> *Cors @2.8.5 -  security feature*
* <img src="readme/nodemon.png" width="25" style="top: 8px" /> *Nodemon @2.0.20 -  utility that automatically restarts a Node.js server*



#
### Getting Started
1. First of all you need to clone app repository from github:
```
git clone git@github.com:beqa200/job-listing-api.git
```
2. Next step requires install all the dependencies.

```
npm install
```
3. To start server 

```
nodemon
```

#
### Project Structure

```
|--- controllers
|   |--- jobs.ts # create get request
|--- models
|   |--- jobs.ts # connecting to mongodb and write schema for data
|--- utils
|   |--- config.ts # declare port
- app.ts # add middlewares
- main.ts # entry file


```


#
### Author
* [LinkedIn](https://www.linkedin.com/in/beqa-maisuradze-76a730234/)

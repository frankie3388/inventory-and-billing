const express = require('express');

// make a server instance 
const app = express();

// CORS required to connect to frontend
const cors = require('cors');

const corsOptions = {
    //            frontend localhost,  frontend deployed
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200
}



app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (request, response) => {
    response.json({
        message:"Hello world"
    });
});

// Routes
app.use("/products", require("./controllers/ProductsController"));

// const UserRouter = require('./controllers/UserController');
// app.use('/users', UserRouter);

// app.use("/productpost", require("./controllers/ProductPostController"));


module.exports = {
    app
}
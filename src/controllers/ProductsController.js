const express = require('express');
const router = express.Router();
const { Products } = require("../models/ProductsModel");

require('dotenv').config();

// Find all products
router.get("/all", async (request, response) => {
     const results = await Products.find({});

     response.json({
         Product: results
     });
 // } else {
 //     response.status(403).json({ message: "Forbidden: Authentication failed" });
 // }
 
});

// Create Product post
// POST localhost:3000/products/createproduct
router.post("/createproduct", async (request, response) => {
    try{

        console.log("request.body", request.body)

        // Create a new product entry in the database
        const result = await Products.create({
            productName: request.body.productName,
            category: request.body.category,
            price: request.body.price,
            quantity: request.body.quantity,
            description: request.body.description,
        });

	    response.json({
	    	Product: result
	    });
    } catch (error) {
        console.error("Error:", error);
        response.status(500).json({ error: "Internal Server Error" });
    }
})


module.exports = router;
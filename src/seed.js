require('dotenv').config();

// const mongoose = require('mongoose');
// const bcrypt = require("bcrypt");
const { User } = require("./models/UserModel");
const { Products } = require("./models/ProductsModel");
const { databaseConnect } = require('./database');

databaseConnect().then(async () => {

    console.log("Creating seed data!");

	// Create User first
    // await seedUser();

    // Retrieve the newly created user
    // const newUser = await User.findOne({ email: "admin@example.com" });


    let newProduct = new Products({
        // blogid: 1,
		// date: "01/01/2023",
        productName: "DB02 Deluxe Blockout Fabric Roller Blinds",
        category: "Deluxe Blockout Roller Blinds",
		price: 100,
		quantity: 5,
		description: "Our commercial roller blind with Deluxe Blockout Fabric provides a room darkening fabric for your Apartment or Office Fitout.",
		// favouritePlacesToChill: ["Shinjuku", "Shibuya"],
		// imagedata: "https://travellingdiarybucket.s3.ap-southeast-2.amazonaws.com/japanimage.jpg",
		// user: newUser,
    })

    await newProduct.save().then(() => {
		console.log(`${newProduct.productName} is in the DB`);
	});

})
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { User } = require("../models/UserModel");

const ProductsSchema = new Schema({
	dateCreated: {
		type: Date,
		required: false,
		unique: false,
		default: new Date(Date.now())
	},
    productName: {
		type: String,
		required: true,
		unique: false
	},
    category: {
		type: String,
		required: true,
		unique: false
	},
	price: {
		type: Number,
		required: true,
		unique: false
	},
	quantity: {
		type: Number,
		required: true,
		unique: false
	},
	description: {
		type: String,
		required: true,
		unique: false
	}
	// imagedata: {
	// 	type: [String],
	// 	required: true,
	// 	unique: false
	// },
	// imageUrls: {
	// 	type: [String],
	// 	required: false,
	// 	unique: false
	// },
	// user: {
	// 	type: mongoose.Types.ObjectId,
	// 	ref: 'User'
	// }
});

const Products = mongoose.model('Products', ProductsSchema);

module.exports = {
	Products
}
import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

await connectDB();

const importData = async () => {
  try {
    await Order.deleteMany(); //delete all orders
    await Product.deleteMany(); //delete all products
    await User.deleteMany(); //delete all users

    const createdUsers = await User.insertMany(users); // insert all users

    const adminuser = await createdUsers[0]._id;

    const samplProducts = await products.map((product) => {
      return { ...product, user: adminuser };
    });
    await Product.insertMany(samplProducts); //

    console.log("data imported !");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany(); //delete all orders
    await Product.deleteMany(); //delete all products
    await User.deleteMany(); //delete all users
    console.log("data deleted");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData(); //
} else {
  importData();
}

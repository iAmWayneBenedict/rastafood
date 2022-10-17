const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/usersRoutes");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// db connection
//mongoose
//	.connect(process.env.MONGODB_URI)
//	.then(() => {
//		app.listen(process.env.PORT, () => {
//			console.log(`Listening on port ${process.env.PORT}`);
//		});
//	})
//	.catch((err) => console.log(err));

const mongooseConnect = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGODB_URI)
        const listen = await app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        });
    } catch(err) {
        console.log(err)
    }
}

mongooseConnect()

// routes
app.use("/api/users", userRoutes);

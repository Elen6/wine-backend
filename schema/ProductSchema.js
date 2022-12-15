import mongoose from "mongoose";
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    price: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

export default mongoose.model('Wine', ProductSchema);
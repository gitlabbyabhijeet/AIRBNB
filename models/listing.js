// const mongoose = require("mongoose");
// const Schema = mongoose.Schema

// const listingSchema = new Schema({
//     title: {
//        type: String,
//     },
//     description: String,
//     // image: {
//     //   filename: {
//     //     type: String,
//     //     default: "", // or null if you prefer
//     //    },
//     //   url: {
//     //     type: String,
//     //     default: "https://unsplash.com/photos/mountains-and-a-lake-under-a-cloudy-sky-4dfNWybkf10",
//     //     set: (v) =>
//     //       v === "" 
//     //         ? "https://unsplash.com/photos/mountains-and-a-lake-under-a-cloudy-sky-4dfNWybkf10" 
//     //         : v,
//     //   }
//     // },
//     image :{
//       filename: String,
//       url : String
//     },
//     price: Number,
//     location: String,
//     country: String,
// });

// //creating model by the use of listingSchema
// const Listing = mongoose.model("Listing",listingSchema )
// //exporting our model to app.js
// module.exports = Listing;




const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: "default-image"
        },
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            set: (v) =>
                v === "" 
                    ? "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                    : v,
        }
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

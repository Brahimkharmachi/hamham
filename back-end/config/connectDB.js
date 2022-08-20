const mongoose = require('mongoose');



const connectDB = () => {
    mongoose.connect("mongodb+srv://Barhama:gGkpPGL9obcgyTFj@cluster0.fumomfp.mongodb.net/mehmetcik?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(console.log("DB is connected"))
        .catch(err => console.log(err))
}

module.exports = connectDB
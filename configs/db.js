const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://sunil:sunil123@flipkart.fpbf0.mongodb.net/flipkart?retryWrites=true&w=majority", {
     useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
})
}

module.exports = connect;
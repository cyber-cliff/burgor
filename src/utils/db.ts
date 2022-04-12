require('dotenv').config();

//_____DATABASE_____///
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const  dataSchema = new Schema({
    name: String,
    data: Array
})

const dataModel = mongoose.model('project-data', dataSchema);

async function getData() {
    const result = await dataModel.findOne({name: "burgor"}).exec()
    return await result;
}

export { getData } 
import mongoose from 'mongoose';
/*

*/
const speciesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    classification: String,
    designation: String,
    average_height: String,
    skin_colors: String,
    hair_colors: String,
    eye_colors: String,
    average_lifespan: String,
    homeworld: String,
    language: String,
    people: [String],
    films: [String],
    created: String,
    edited: String,
    url: String,
    id: String,
    userId: {type: String, required: false},
});

export default mongoose.models?.Species || mongoose.model('Species', speciesSchema);
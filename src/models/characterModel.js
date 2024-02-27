import mongoose from 'mongoose';
/*

*/
const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: String,
    films: [String],
    species: [String],
    vehicles: [String],
    starships: [String],
    created: String,
    edited: String,
    url: String,
    id: String,
    userId: {type: String, required: false},
});

export default mongoose.models?.Character || mongoose.model('Character', characterSchema);
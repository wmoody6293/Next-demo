import mongoose from 'mongoose';
/*

*/
const planetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: String,
    residents: [String],
    films: [String],
    created: String,
    edited: String,
    url: String,
    id: String,
    userId: {type: String, required: false},
});

export default mongoose.models?.Planet || mongoose.model('Planet', planetSchema);
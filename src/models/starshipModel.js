import mongoose from 'mongoose';
/*

*/
const starshipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    model: String,
    manufacturer: String,
    cost_in_credits: String,
    length: String,
    max_atmosphering_speed: String,
    crew: String,
    passengers: String,
    cargo_capacity: String,
    consumables: String,
    hyperdrive_rating: String,
    MGLT: String,
    starship_class: String,
    pilots: [String],
    films: [String],
    created: String,
    edited: String,
    url: String,
    id: String,
    userId: {type: String, required: false},
});

export default mongoose.models?.Starship || mongoose.model('Starship', starshipSchema);
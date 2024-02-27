import mongoose from 'mongoose';
/*

*/
const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    episode_id: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: String,
    characters: [String],
    planets: [String],
    starships: [String],
    vehicles: [String],
    species: [String],
    created: String,
    edited: String,
    url: String,
    id: String,
    userId: {type: String, required: false},
});

export default mongoose.models?.Film || mongoose.model('Film', filmSchema);
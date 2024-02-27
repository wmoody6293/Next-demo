interface Base {
    id?:string,
    name: string,
    created: string,
    edited: string,
    url: string
}
interface VehicleBase extends Base {
    model: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    max_atmosphering_speed: string,
    crew: string,
    passengers: string,
    cargo_capacity: string,
    consumables: string,
    pilots: string[] | [],
    films: string[] | [],
}
export interface FilmType {
    id?:string,
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    characters: string[],
    planets: string[],
    starships: string[],
    vehicles: string[],
    species: string[],
    created: string,
    edited: string,
    url: string,
}
export interface PeopleType extends Base{
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[] | [],
    species: string[] | [],
    vehicles: string[] | [],
    starships: string[] | [],
}
export interface PlanetType extends Base{
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    residents: string[] | [],
    films: string[] | [],
}

export interface SpeciesType extends Base{
    classification: string,
    designation: string,
    average_height: string,
    skin_colors: string,
    hair_colors: string,
    eye_colors: string,
    average_lifespan: string,
    homeworld: string | null,
    language: string,
    people: string[] | [],
    films: string[] | [],
}

export interface StarshipType extends VehicleBase {
    hyperdrive_rating: string,
    MGLT: string,
    starship_class: string,
}
export interface VehicleType extends VehicleBase{
    vehicle_class: string,
}
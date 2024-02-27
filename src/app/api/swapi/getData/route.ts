import { NextRequest, NextResponse } from "next/server";
import {connectDB} from "@/dbConfig/dbConfig";
import axios from "axios";
connectDB();
const BASE_URL = process.env.BASE_URL!;
export async function GET(){
    try {
        const data = await getData();
        return NextResponse.json({data}, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error}, {status: 500})
    }
}

async function getData(){
    try {
        
        console.log('starting film fetch...')
        const {films} = await getFilms();


        const {characters} = await getPeople();

        const {planets} = await getPlanets();


        const {species} = await getSpecies();

        const {vehicles} = await getVehicles();

        const {starships} = await getStarships();

        const allData = {films, characters, planets, species, vehicles, starships};

        return allData;
    } catch (error:any) {
        return NextResponse.json({error: error}, {status: 500})
    }
}
async function getFilms(){
    try {
        const response = await axios.get(`${BASE_URL}/api/swapi/films`);
        return response.data;
    } catch (error:any) {
        return error.message;
    }
}
async function getPeople(){
    try {
        const response = await axios.get(`${BASE_URL}/api/swapi/people`);
        return response.data;
    } catch (error:any) {
        return error.message;
    }
}

async function getSpecies(){
    try {
        const response = await axios.get(`${BASE_URL}/api/swapi/species`);
        return response.data;
    } catch (error:any) {
        return error.message;
    }
};

async function getPlanets(){
    try {
        const response = await axios.get(`${BASE_URL}/api/swapi/planets`);
        return response.data;
    } catch (error:any) {
        return error.message;
    }
};

async function getVehicles(){
    try {
        const response = await axios.get(`${BASE_URL}/api/swapi/vehicles`);
        //console.log('vehicles response: ', response);
        return response.data;
    } catch (error:any) {
        return error.message;
    }
}

async function getStarships(){
    try {
        const response = await axios.get(`${BASE_URL}/api/swapi/starships`);
        return response.data;
    } catch (error:any) {
        return error.message;
    }
};

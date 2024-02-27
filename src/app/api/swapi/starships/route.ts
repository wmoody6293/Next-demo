import { NextRequest, NextResponse } from "next/server";
import { StarshipType } from "../types/swapiTypes";
import { getAllIdsFromArr, getIdFromUrl } from "../../shared/sharedFuncs";
import Starship from '@/models/starshipModel';

export async function GET(){
    try {
        const starships = await Starship.find();
        return NextResponse.json({starships}, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
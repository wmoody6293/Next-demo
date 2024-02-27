import { NextRequest, NextResponse } from "next/server";
import { PlanetType } from "../types/swapiTypes";
import { getAllIdsFromArr, getIdFromUrl } from "../../shared/sharedFuncs";
import Planet from '@/models/planetModel'

export async function GET(){
    try {
        const planets = await Planet.find();
        return NextResponse.json({planets}, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
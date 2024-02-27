import { NextRequest, NextResponse } from "next/server";
import { SpeciesType } from "../types/swapiTypes";
import { getAllIdsFromArr, getIdFromUrl } from "../../shared/sharedFuncs";
import Species from '@/models/speciesModel';

export async function GET(){
    try {
        const species = await Species.find();
        return NextResponse.json({species}, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
import { NextRequest, NextResponse } from "next/server";
import { VehicleType } from "../types/swapiTypes";
import { getAllIdsFromArr, getIdFromUrl } from "../../shared/sharedFuncs";
import Vehicle from '@/models/vehicleModel';

export async function GET(){
    try {
        const vehicles = await Vehicle.find();
        return NextResponse.json({vehicles}, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
import { NextRequest, NextResponse } from "next/server";
import { FilmType } from "../types/swapiTypes";
import { getAllIdsFromArr, getIdFromUrl } from "../../shared/sharedFuncs";
import Film from '@/models/filmModel';

export async function GET(){
    try {
        const films = await Film.find();
        return NextResponse.json({films}, {status: 200});
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

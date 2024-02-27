import { NextRequest, NextResponse } from "next/server";
import { PeopleType } from "../types/swapiTypes";
import { getAllIdsFromArr, getIdFromUrl } from "../../shared/sharedFuncs";
import Character from '@/models/characterModel';

export async function GET(){
    try {
        const characters = await Character.find();
        return NextResponse.json({characters}, {status: 200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
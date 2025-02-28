import { dbConnect } from "@/dbConfig/dbConfig";
import Apod from "@/models/apodModel";
import axios from "axios";
import { NextResponse } from "next/server";

await dbConnect();

export async function GET(req) {
    const apods = await Apod.find();

    if(!apods){
        return NextResponse.error("Error fetching APOD");
    }
    
    return NextResponse.json(apods);
}
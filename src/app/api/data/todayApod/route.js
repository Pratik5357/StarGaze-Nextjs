import { dbConnect } from "@/dbConfig/dbConfig";
import Apod from "@/models/apodModel";
import axios from "axios";
import { NextResponse } from "next/server";

await dbConnect();

export async function GET(req) {

    let response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API}`);
    const newApod = response.data;
    let apod = await Apod.findOne({ date: newApod.date });
    if (!apod) {
        apod = new Apod(newApod);
        await apod.save();
    }
    
    return NextResponse.json(newApod);
}
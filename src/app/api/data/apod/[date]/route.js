import { dbConnect } from "@/dbConfig/dbConfig";
import Apod from "@/models/apodModel";
import axios from "axios";
import { NextResponse } from "next/server";

await dbConnect();

export async function GET(req, { params }) {
    const { date } = params;
    console.log(date);

    const apod = await Apod.findOne({ date });
    console.log(apod);

    if (!apod) {
        let response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API}&date=${date}`);
        const newApod = response.data;
        console.log(newApod);

        const newApodDoc = new Apod(newApod);
        await newApodDoc.save();
        return NextResponse.json(newApod);
    }

    return NextResponse.json(apod);
}
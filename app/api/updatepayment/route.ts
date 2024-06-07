import conn from "@/lib/db";
import project from "@/lib/db/models/project.model";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const body = await req.json();
    console.log(body.id);
    await conn();
    try {
        const item = await project.findByIdAndUpdate(body.id, { $set: { paymentstatus: "true" } }, { new: true });
        return new NextResponse(JSON.stringify(item), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
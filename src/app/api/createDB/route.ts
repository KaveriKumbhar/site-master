// /api/createDB/route

import { NextRequest, NextResponse } from "next/server";

// custom operation url
const MONGODB_API_URL="https://ap-south-1.aws.data.mongodb-api.com/app/data-ddsnncd/endpoint/data/v1/action";
let operation = "/insertOne";
//               /findOne

// Define the handler for the API route
export async function POST(req: NextRequest) {
  try {
    // Parse the request body (if the request includes any data)
    const requestBody = await req.json();

    // Prepare the headers
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": process.env.MONGO_API_KEY as string,
      "Access-Control-Request-Headers": "*",
    };

    // Send the POST request to MongoDB API
    const response = await fetch((MONGODB_API_URL + operation), {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody), // Send the provided JSON body
    });

    console.log(response);
    

    // Check if the response is OK
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: "Failed to insert document", details: errorData }, { status: response.status });
    }

    // Parse the response from MongoDB API
    const data = await response.json();

    // Return the response data
    return NextResponse.json(data);
  } catch (error) {
    // Handle any errors that occurred during the request
    return NextResponse.json({ error: "An error occurred", details: error }, { status: 500 });
  }
}

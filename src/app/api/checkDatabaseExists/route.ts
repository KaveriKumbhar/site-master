// /api/checkDatabaseExists

import { NextRequest, NextResponse } from "next/server";

const MONGODB_API_URL = "https://ap-south-1.aws.data.mongodb-api.com/app/data-ddsnncd/endpoint/data/v1/action/findOne";

// Define the handler for the API route
export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { database, collection } = await req.json();

    console.log(req.body!);
    

    // Prepare the headers
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": process.env.MONGO_API_KEY as string,
      "Access-Control-Request-Headers": "*",
    };

    // Define the request body for the findOne operation
    const body = {
      dataSource: "Cluster0",
      database,
      collection,
      filter: {}, // Adjust the filter if needed to make sure it checks correctly
    };

    // Send the POST request to MongoDB API to check if the database exists
    const response = await fetch(MONGODB_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    // Handle response
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: "Failed to check database", details: errorData }, { status: response.status });
    }

    const data = await response.json();

    // If a document is found, return that it exists
    if (data.document) {
      return NextResponse.json({ exists: true });
    }

    // If no document found, return that it does not exist
    return NextResponse.json({ exists: false });
  } catch (error) {
    // Handle any errors that occurred during the request
    return NextResponse.json({ error: "An error occurred", details: error }, { status: 500 });
  }
}

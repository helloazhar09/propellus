// import { NextResponse } from "next/server";
// import { RichTextBlock, RichTextChild } from "../../types/strapi";

// const STRAPI_URL =
//   process.env.STRAPI_URL ||
//   process.env.NEXT_PUBLIC_STRAPI_URL ||
//   "http://127.0.0.1:1337";
// const STRAPI_API_KEY = process.env.STRAPI_API_KEY;

// // Helper function to extract plain text from Strapi rich text description
// function extractTextFromDescription(description: RichTextBlock[]): string {
//   if (!description || !Array.isArray(description)) return "";

//   let text = "";
//   description.forEach((block: RichTextBlock) => {
//     if (block.type === "paragraph" && block.children) {
//       block.children.forEach((child: RichTextChild) => {
//         if (child.type === "text" && child.text) {
//           text += child.text;
//         }
//       });
//     }
//   });

//   return text;
// }

// export async function GET() {
//   try {
//     console.log("Attempting to fetch from Strapi URL:", STRAPI_URL);
//     console.log("Using API Key:", STRAPI_API_KEY ? "Yes" : "No");

//     const headers: HeadersInit = {
//       "Content-Type": "application/json",
//     };

//     if (STRAPI_API_KEY) {
//       headers["Authorization"] = `Bearer ${STRAPI_API_KEY}`;
//     }

//     // Populate all fields including sections
//     const fullUrl = `${STRAPI_URL}/api/terms-of-services?populate%5BTerms%5D=*`;
//     console.log("Full URL:", fullUrl);

//     const response = await fetch(fullUrl, {
//       headers,
//       cache: "no-store", // Disable caching for debugging
//     });

//     console.log("Response status:", response.status);
//     console.log(
//       "Response headers:",
//       Object.fromEntries(response.headers.entries())
//     );

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error(
//         `Strapi API error: ${response.status} ${response.statusText}`
//       );
//       console.error("Error response body:", errorText);

//       return NextResponse.json(
//         {
//           error: `Strapi API error: ${response.status} ${response.statusText}`,
//           details: errorText,
//           url: fullUrl,
//         },
//         { status: response.status }
//       );
//     }

//     const responseData = await response.json();
//     console.log("Full Strapi response:", JSON.stringify(responseData, null, 2));

//     if (!responseData.data || !responseData.data[0]?.Terms) {
//       console.error("No Terms-of-service content found in Strapi");
//       return NextResponse.json(
//         { error: "No Terms-of-service content found in Strapi" },
//         { status: 404 }
//       );
//     }

//     const rawData = responseData.data[0].Terms[0];
//     console.log("Raw terms data:", JSON.stringify(rawData, null, 2));

//     const transformedData = {
//       title: rawData.title || "",
//       last_update_date: rawData.last_update_date || "",
//       intro: rawData.intro ? extractTextFromDescription(rawData.intro) : "",
//       sections: rawData.sections
//         ? rawData.sections.map((section: any) => ({
//             heading: section.section_heading || "",
//             detail: section.section_detail ? extractTextFromDescription(section.section_detail) : "",
//           }))
//         : [],
//     };

//     console.log("Transformed terms data:", JSON.stringify(transformedData, null, 2));

//     return NextResponse.json(transformedData);
//   } catch (error) {
//     console.error("Error fetching terms data:", error);

//     return NextResponse.json(
//       {
//         error: "Failed to fetch data from Strapi",
//         details: error instanceof Error ? error.message : "Unknown error",
//         strapiUrl: STRAPI_URL,
//       },
//       { status: 500 }
//     );
//   }
// }

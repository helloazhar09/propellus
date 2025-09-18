import { NextResponse } from "next/server";

// Helper to extract plain text from Strapi rich text blocks
function extractTextFromDescription(description: any[]): string {
  if (!description || !Array.isArray(description)) return "";
  let text = "";
  description.forEach((block) => {
    if (block.type === "paragraph" && block.children) {
      block.children.forEach((child) => {
        if (child.type === "text" && child.text) {
          text += child.text;
        }
      });
    }
  });
  return text;
}

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const STRAPI_API_KEY = process.env.STRAPI_API_KEY;

export async function GET() {
  try {
    const headers: HeadersInit = { "Content-Type": "application/json" };
    if (STRAPI_API_KEY) headers["Authorization"] = `Bearer ${STRAPI_API_KEY}`;

    const url = `${STRAPI_URL}/api/terms-of-services?populate=Terms,Terms.sections`;
    const response = await fetch(url, { headers, cache: "no-store" });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Strapi API error: ${response.status} ${response.statusText}`, details: errorText },
        { status: response.status }
      );
    }

    const json = await response.json();

    if (!json.data || !json.data[0]?.Terms?.length) {
      return NextResponse.json({ error: "No Terms-of-service content found in Strapi" }, { status: 404 });
    }

    const rawTerm = json.data[0].Terms[0];

    const transformedData = {
      title: rawTerm.title,
      last_update_date: rawTerm.last_update_date,
      intro: extractTextFromDescription(rawTerm.intro),
      sections: rawTerm.sections?.map((section: any) => ({
        heading: section.section_heading,
        detail: extractTextFromDescription(section.section_detail),
      })) || []
    };

    return NextResponse.json(transformedData);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch data from Strapi", details: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}

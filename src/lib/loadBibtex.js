// utils/loadBibtex.js
import Cite from "citation-js";

export async function loadBibFile() {
    try {
        const response = await fetch("/ref.bib");
        const bibText = await response.text();
    
        const cite = new Cite(bibText);
        const parsedData = cite.format("data"); // Parse as JSON data
        // Ensure parsedData is an array
        console.log('parsed data '+parsedData)
        console.log(typeof parsedData)
        // return parsedData
        if (typeof parsedData === "string") {
            console.warn("Parsed data is a string. Trying to parse it as JSON...");
            return JSON.parse(parsedData); // Attempt to parse if needed
        } else {
            return parsedData
        }
        // return Array.isArray(parsedData) ? parsedData : [parsedData];
      } catch (error) {
        console.error("Error fetching or parsing BibTeX data:", error);
        return [];
      }
}
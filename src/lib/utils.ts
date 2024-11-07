import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// import fs from 'fs'
// import path from "path";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}

// export const readJsonFile = async (filePath: string): Promise<any> => {
//   try {
//     // Resolve the absolute path
//     const absolutePath = path.resolve(filePath);

//     // Check if the file exists
//     if (!fs.existsSync(absolutePath)) {
//       console.log(`File does not exist at path: ${absolutePath}`);
//       return null;
//     }

//     // Read the file asynchronously
//     const data = await fs.promises.readFile(absolutePath, 'utf-8');

//     // Parse and return the JSON content
//     return JSON.parse(data);
//   } catch (error) {
//     console.error(`Error reading or parsing JSON file: ${error}`);
//     return null;
//   }
// };





// components/Publications.js
"use client";
import { useEffect, useState } from "react";
import { PubCard, PubCardProps} from "./pub-card";

// import { loadBibFile } from "../lib/loadBibtex.js";

// const traverseObject = (obj, depth = 0) => {
//     if (typeof obj !== 'object' || obj === null) {
//       return null; // Not an object or is null, stop recursion
//     }

//     return Object.keys(obj).map((key) => (
//       <div key={key} style={{ marginLeft: `${depth * 20}px` }}>
//         <strong>Key:</strong> {key}, <strong>Value:</strong>
//         {typeof obj[key] === 'object' && obj[key] !== null ? (
//           <div>{traverseObject(obj[key], depth + 1)}</div>
//         ) : (
//           <span> {JSON.stringify(obj[key])}</span>
//         )}
//       </div>
//     ));
// };

// const PublicationsProcessingFrombib = () => {
//   const [publications, setPublications] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await loadBibFile();
//       console.log("Parsed publications data:", data);
//       setPublications(data);
      
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Publications</h1>
//       {publications.map((entry, index) => (
//         <div key={index} className="publication"> 
            
//         </div>
//       ))
//       }
//     </div>
//   );
// };

const Publications = () => {
  const [data, setData] = useState<PubCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/bib.json'); // URL relative to the `public` folder
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);



  return (
    <div id="pubs">
        <ul className="bg-white, w-full">
            {data && (data.map((publication, index) => ( 
                <PubCard key={index}
                    type={publication.type}
                    title={publication.title}
                    authors={publication.authors}
                    year={publication.year}
                    booktitle={publication.booktitle? publication.booktitle:"NA"}
                    shortname={publication.shortname? publication.shortname:"NA"}
                    journal={publication.journal? publication.journal:"NA"}
                    issue={publication.issue? publication.issue:"NA"}
                    volume={publication.volume? publication.volume:"NA"}
                    location={publication.location? publication.location: "NA"}
                    patentno={publication.patentno? publication.patentno:[]}
                    publink={publication.publink? publication.publink: "#"}
                    links={publication.links? publication.links: '#'}
                    pages={publication.pages? publication.pages:"NA"}

                />
            ))
            )}
        </ul>
    </div>
  );
};

export default Publications;

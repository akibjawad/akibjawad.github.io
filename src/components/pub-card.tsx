import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export interface PubCardProps {
  type: string;
  title: string;
  authors: string;
  shortname?:string;
  location?:string;
  year: string;
  issue?:string;
  volume?:string;
  pages?:string;
  booktitle?: string;
  journal?: string;
  patentno: Array<string>;
  publink:string;
  links: string;
}

export function PubCard({
  type,
  title,
  authors,
  shortname,
  year,
  issue,
  volume,
  pages,
  location,
  booktitle,
  journal,
  patentno,
  publink,
  links
}: PubCardProps) {
  if (type == 'Conference') {
    return (
      <li key={title}>
        <div className="border border-gray-200 rounded-lg p-4 shadow-sm my-4">
          <h1 className="font-semibold text-xl"> {title} </h1>
          <h2 className="text-lg"> Authors: {authors} </h2>
          <div className="flex flex-col md:flex-row items-center gap-2 justify-between">
            <div className="flex flex-col md:flex-row items-center">
              <span className="bg-green-100 dark:bg-green-900 rounded-lg px-2 py-1 text-lg font-bold">
                Conference:
              </span>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{booktitle}</h2>
              <Link href={publink} target="_blank" className="text-lg font-semibold text-blue-500 px-1 underline">
                ({shortname})
              </Link>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{location}</h2>
            </div>
            <Link href={links} target="_blank" className="bg-blue-100 rounded-lg px-2 py-1 text-lg font-bold transition-colors duration-300 hover:bg-blue-700">
              <FontAwesomeIcon icon={faFilePdf} size="1x" className="text-red-500" />
              <i className="text-red-600">pdf</i>
            </Link>
          </div>
        </div>
      </li>
    );

  } else if (type == 'Journal') {
    return (
      <li key={title}>
        <div className="border border-gray-200 rounded-lg p-4 shadow-sm my-4">
          <h1 className="font-semibold text-xl"> {title} </h1>
          <h2 className="text-lg"> Authors: {authors} </h2>
          <div className="flex flex-col md:flex-row items-center gap-2 justify-between">
            <div className="flex flex-col md:flex-row items-center">
              <span className="bg-green-100 dark:bg-green-900 rounded-lg px-2 py-1 text-lg font-bold">
                Journal:
              </span>
              <h2 className="text-lg font-semibold">{journal}</h2>

              <Link href={publink} target="_blank" className="text-lg font-semibold text-blue-500 px-1 underline">
                ({shortname})
              </Link>
              <h2 className="text-lg font-semibold">vol. {volume}({issue}), {pages}</h2>
            </div>
            <Link href={links} target="_blank" className="bg-blue-100 rounded-lg px-2 py-1 text-lg font-bold transition-colors duration-300 hover:bg-blue-400">
              <FontAwesomeIcon icon={faFilePdf} size="1x" className="text-red-500" />
              <i className="text-red-600">pdf</i>
            </Link>
          </div>
        </div>
      </li>
    );

  } else {
    return (
      <li key="title">
        <div className="flex-row border border-gray-200 rounded-lg p-4 shadow-sm my-4 overflow-visible">
          <h1 className="font-semibold text-xl"> {title} </h1>
          <h2 className="text-lg"> Authors: {authors} </h2>
          <div className="flex flex-col md:flex-row items-center gap-2 justify-center">
              {patentno.map((patent, index) => (
                <span key={index} className="bg-green-100 dark:bg-green-900 rounded-lg px-2 py-1 text-lg font-bold">
                  <Link href={links} target="_blank" className="justify-right text-lg font-bold" >
                    {patent}
                  </Link>
                </span>
              )
              )}
          </div>
        </div>
      </li>
    );
  }
  
}

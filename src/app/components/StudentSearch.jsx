"use client";

import { useState, useEffect, useMemo } from "react";
import Fuse from "fuse.js";
import students from "../../data/students";

export default function StudentSearchAndTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [fuse, setFuse] = useState(null);
  const [displayCount, setDisplayCount] = useState(20);

  const groupNames = [
    { key: 1, name: "Parzival's Commanders", color: "red" },
    { key: 2, name: "Anorak's Strategists", color: "#FAFAFA" },
    { key: 3, name: "Artemis' Warriors", color: "pink" },
    { key: 4, name: "Aech's Aces", color: "purple" },
    { key: 5, name: "I-r0k's Raiders", color: "orange" },
    { key: 6, name: "Shoto's Survivors", color: "green" },
    { key: 7, name: "Acererak's Crew", color: "yellow" },
    { key: 8, name: "Zandor's Insurgents", color: "#00008B" },
    { key: 9, name: "Og’s Enforcers", color: "#C19A6B" },
    { key: 10, name: " Iron Giants", color: "black" },
    { key: 11, name: "Daito’s Defenders", color: "gray" },
    { key: 12, name: "BOT 101 Battalion", color: "#800000" },
    { key: 13, name: "Sorrento’s Army ", color: "#EF2B7C" },
  ];

  const groupMap = useMemo(() => {
    return groupNames.reduce((acc, group) => {
      acc[group.key] = group;
      return acc;
    }, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fuseInstance = new Fuse(students, {
      keys: ["name"],
      threshold: 0.3,
    });
    setFuse(fuseInstance);
  }, []);

  useEffect(() => {
    if (fuse && searchTerm) {
      const results = fuse.search(searchTerm);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, fuse]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const sortedStudents = useMemo(() => {
    return [...students].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  return (
    // WHOLE CONTAINER
    <div className="relative mb-10">
      <h1
        className="font-chopsic text-2xl sm:text-3xl md:text-4xl lg:text-5xl
      text-transparent bg-clip-text bg-gradient-to-br from-[#81ECDE] to-[#59958480] drop-shadow
      flex items-center justify-center
       tracking-[1.6px] pb-8 md:pb-14
      "
      >
        Search Gunter:
      </h1>
      <div className="w-full max-w-6xl mx-auto py-5 px-5 bg-[rgb(1,0,4)]/80 backdrop-blur-md relative rounded-lg">
        <div className="relative mb-6">
          <input
            type="search"
            placeholder="Search students..."
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-[#81ECDE]  text-gray-900 text-sm md:text-base placeholder-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#81ecde] focus:border-transparent"
            aria-label="Search students"
          />
          {searchResults.length > 0 && (
            <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-sm max-h-60 overflow-y-auto">
              {searchResults.map((result) => (
                <li
                  key={result.item.name}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                  onClick={() => setSearchTerm(result.item.name)}
                >
                  {/* SEARCH RESULT */}
                  {result.item.name} - (
                  {groupMap[result.item.groupKey]?.name || "Unknown"})
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* NAMES LIST CONTAINER */}

        <div
          div
          className="overflow-x-auto max-h-[500px] md:max-h-[400px] rounded-lg text-[12px] md:text-base"
        >
          <table className="w-full text-left border ">
            <thead>
              <tr className="text-center">
                <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700 border-b">
                  Name
                </th>
                <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700 border-b">
                  Group
                </th>
                <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700 border-b">
                  Color Code
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-scroll">
              {sortedStudents.slice(0, displayCount).map((student) => {
                const group = groupMap[student.groupKey];
                return (
                  <tr key={student.name} className="hover:bg-gray-700">
                    <td className="py-2 px-4 border-b">{student.name}</td>
                    <td className="py-2 px-4 border-b font-bold text-center">
                      {group?.name || "Unknown"}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      <div
                        className="w-8 h-8 md:w-10 md:h-10 rounded-lg mx-auto border border-white"
                        style={{
                          backgroundColor: group?.color || "transparent",
                        }}
                      ></div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {displayCount < students.length && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setDisplayCount((prevCount) => prevCount + 20)}
              className="px-2 py-1 bg-[#59958480] border border-[#81ecde] 
            text-white rounded-md hover:bg-[#65ab97]
            focus:outline-none focus:ring-2 focus:ring-[#81ecde] focus:ring-offset-2"
            >
              More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

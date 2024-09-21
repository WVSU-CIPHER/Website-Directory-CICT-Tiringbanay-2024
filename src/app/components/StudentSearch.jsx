'use client'

import { useState, useEffect } from 'react'
import Fuse from 'fuse.js'
import students from "../../data/students"

export default function StudentSearchAndTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [fuse, setFuse] = useState(null)
  const [displayCount, setDisplayCount] = useState(25)

  useEffect(() => {
    // Initialize Fuse instance
    const fuseInstance = new Fuse(students, {
      keys: ['name'],
      threshold: 0.3
    })
    setFuse(fuseInstance)
  }, [])

  useEffect(() => {
    // Perform search whenever searchTerm changes
    if (fuse && searchTerm) {
      const results = fuse.search(searchTerm)
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchTerm, fuse])

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  // Sort students alphabetically by name
  const sortedStudents = [...students].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative mb-6">
        <input
          type="search"
          placeholder="Search students..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full px-4 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                {result.item.name} (Group: {result.item.groupKey})
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700 border-b">Name</th>
              <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700 border-b">Group</th>
            </tr>
          </thead>
          <tbody>
            {sortedStudents.slice(0, displayCount).map((student) => (
              <tr key={student.name} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{student.name}</td>
                <td className="py-2 px-4 border-b">{student.groupKey}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {displayCount < students.length && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setDisplayCount(prevCount => prevCount + 25)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            More Students
          </button>
        </div>
      )}
    </div>
  )
}
import axios from "axios"
import React, { useState, useEffect } from "react"

const FirearmsList = () => {
  const [firearms, setFirearms] = useState([])
  const [customFirearms, setCustomFirearms] = useState([])
  const [newFirearms, setNewFirearms] = useState([])
  const [newEntry, setNewEntry] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  
  useEffect(() => {
    const fetchFirearmsData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
          params: {
            action: 'parse',
            page: 'List_of_firearms',
            format: 'json',
            origin: '*',
          },
        });

        const data = response.data

        const parser = new DOMParser()
        const htmlDoc = parser.parseFromString(data.parse.text["*"], "text/html")

        const firearmElements = htmlDoc.querySelectorAll("li")
        const firearmsList = Array.from(firearmElements)
          .map((li) => li.textContent.replace(/\([^()]*\)/g, "").trim())
          .filter((name) => name.length > 0)

        setFirearms(firearmsList);
      } catch (err) {
        setError(err.message || "Failed to fetch firearms data")
      } finally {
        setLoading(false)
      }
    }
    
    fetchFirearmsData()
  }, [])

  const handleNewEntry = () => {
    const cleanedEntry = newEntry.trim()

    if (!cleanedEntry) return

    const existsInOriginal = firearms.some(
      (firearm) => firearm.toLowerCase() === cleanedEntry.toLowerCase()
    )
    const existsInCustom = customFirearms.some(
      (firearm) => firearm.toLowerCase() === cleanedEntry.toLowerCase()
    )

    if (existsInOriginal || existsInCustom) {
      if (!newFirearms.includes(cleanedEntry)) {
        setNewFirearms((preFirearms) => [...preFirearms, cleanedEntry])
      }
    } else {
      setCustomFirearms((prevCustomFirearms) => [...prevCustomFirearms, cleanedEntry])
    }

    setNewEntry("")
  }

  return (
    <div style={{ padding: "20px" }}>

      <div> 
        {loading && <p>Loading firearms data...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      {newFirearms.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>New Firearms</h3>
          <ul>
            {newFirearms.map((firearm, index) => (
              <li key={`${index}`} style={{ color: "green" }}>
                {firearm}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <h3>Add a New Firearm</h3>
        <input
          type="text"
          placeholder="Enter firearm name"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          style={{ padding: "10px", width: "300px" }}
        />
        <button
          onClick={handleNewEntry}
          style={{ marginLeft: "10px", padding: "10px 20px" }}
        >
          Add Firearm
        </button>
      </div>
    </div>
  )
}

export default FirearmsList

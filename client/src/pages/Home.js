import React, { useEffect, useState } from "react";

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched events:", data);
        setEvents(data);
      })
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>

      {events.length === 0 ? (
        <p>No events found</p>
      ) : (
        events.map((event) => (
          <div
            key={event._id}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <h3>{event.name}</h3>
            <p>{event.location}</p>
            <p>{event.category}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
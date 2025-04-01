import './App.css';
import React, { useState, useEffect } from 'react';
import CardList from './Components/CardList/CardList.js';
import Card from './Components/Cards/Card.js';
import { SearchBar } from './Components/SearchBar/SearchBar.js';
import { fakeFetchJob } from './Temp-Data/fakeJobs.js';

function App() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fakeFetchJob(searchTerm).then((data) => {
      setJobs(data);
    });
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Job Board</h1>
      {/* <SearchBar /> */}
      <input
        type="text"
        placeholder="Search Jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ margin: '20px', padding: '5px', width: '300px' }}
      />
      {
        jobs.map((job) => {
          console.log("job", job);
          return <Card key={job.id} title={job.title} company={job.company} location={job.location} />
        })
      }
    </div>
  );
}

export default App;

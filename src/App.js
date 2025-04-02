import './App.scss';
import React, { useState, useEffect } from 'react';
import CardList from './Components/CardList/CardList.js';
import CardShow from './Components/Cards/CardShow.js';
import { SearchBar } from './Components/SearchBar/SearchBar.js';
import { fakeFetchJob } from './Temp-Data/fakeJobs.js';
import { NavBar } from './Components/NavBar/NavBar.js'; 
import { Button, Input, Select, Space } from 'antd';

const { Search } = Input;

function App() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState({});
  
  // Fetch API Data for Jobs using the search
  useEffect(() => {
    fakeFetchJob(searchTerm).then((data) => {
      setJobs(data);
    });
  }, [searchTerm]);

  // Gather the selected job from the cardlist
  useEffect(() => {
    setSelectedJob(selectedJob);
    console.log("selected job", selectedJob)

  }, [selectedJob]);

  return (
    <div className="App">
      <NavBar />
      <h1>Job Flow</h1>
      {/* <SearchBar /> */}
      <Space.Compact style={{ width: '30%', marginBottom: '3%' }}>
        <Input 
          placeholder="Search"         
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="primary">Submit</Button>
      </Space.Compact>
      {/* <input
        type="text"
        placeholder="Search Jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ margin: '20px', padding: '5px', width: '300px' }}
      /> */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <section>
            {
              jobs.map((job) => {
                return <CardList key={job.id} title={job.title} company={job.company} location={job.location} setSelectedJob={setSelectedJob}/>
              })
            }
        </section>
        <section style={{ width: '25%' }}>
            <CardShow selectedJob={selectedJob} />
        </section>
      </div>
    </div>
  );
}

export default App;

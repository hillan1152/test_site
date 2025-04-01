const fakeJobs = [
    { id: 1, title: "Web Developer", company: "TechCo", location: "SF" },
    { id: 2, title: "Data Analyst", company: "JobCorp", location: "NY" },
    { id: 3, title: "Frontend Engineer", company: "WebWorks", location: "LA" },
    { id: 4, title: "Backend Dev", company: "ServerSys", location: "SF" },
    { id: 5, title: "Designer", company: "ArtInc", location: "Chicago" },
    { id: 6, title: "Account Representative", company: "Indeed", location: "CT" },
    { id: 7, title: "Custodian", company: "Serivce Master", location: "MA" },
    { id: 8, title: "Architect", company: "JS Held", location: "MA" }
];

export const fakeFetchJob = (searchTerm) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtered = searchTerm
            ? fakeJobs.filter(job => 
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.location.toLowerCase().includes(searchTerm.toLowerCase()))
            : fakeJobs;
            resolve(filtered);
        }, 300);
    },)    
};
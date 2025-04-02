export const fakeJobs = [
    { id: 1, title: "Web Developer", company: "TechCo", location: "San Francisco, CA" },
    { id: 2, title: "Data Analyst", company: "JobCorp", location: "New York, NY" },
    { id: 3, title: "Frontend Engineer", company: "WebWorks", location: "Los Vegas, NV" },
    { id: 4, title: "Backend Dev", company: "ServerSys", location: "San Francisco, CA" },
    { id: 5, title: "Designer", company: "ArtInc", location: "Chicago, Illinois" },
    { id: 6, title: "Account Representative", company: "Indeed", location: "Stamford, CT" },
    { id: 7, title: "Custodian", company: "Serivce Master", location: "Boston, MA" },
    { id: 8, title: "Architect", company: "JS Held", location: "Needham, MA" }
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
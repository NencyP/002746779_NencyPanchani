import React from 'react';
import './jobs.css';
import NavBar from '../../Components/navbar';
import JobCard from '../Jobs/Cards/JobCard/jobCard';

const Jobs = () => {
  const jobs = [
    {
      title: 'Software Engineer',
      description: 'We are looking for a skilled software engineer to help us build awesome things!'
    },
    {
      title: 'UX Designer',
      description: 'We are seeking a talented UX designer to join our team and help us create beautiful user experiences.'
    },
    {
      title: 'Project Manager',
      description: 'We need an experienced project manager to help us keep our projects on track and deliver high-quality results.'
    }
  ];

  return (
    <div className="jobs">
        <NavBar />
      <h1>Job Openings</h1>
      <div className="job-cards">
        {jobs.map(job => (
          <JobCard
            title={job.title}
            description={job.description}
          />
        ))}
      </div>
      <p>If you're interested in any of these positions, please get in touch with us using the contact link above.</p>
    </div>
  );
};

export default Jobs;

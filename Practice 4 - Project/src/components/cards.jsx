import React from 'react';
import {Bookmark} from 'lucide-react'
function card(job, idx) {
  return (
      <div key={idx} className="card">
        <div className="top">
          <img src={job.logo} alt='logo'></img>
          <button value="Save">Save <Bookmark id="bookmark"/></button>
        </div>

        <div className="centre">
          <h2 id="name">{job.name} <span>{job.dateposted}</span></h2>
          <h1 id="Role">{job.role}</h1>
          <div>
            <span id="time"><h3>{job.worktime}</h3></span>
            <span id="experience"><h3>{job.experience}</h3></span>
          </div>
        </div>
        
        <div className="bottom">
          <div>
            <h2 id="salary">{job.salary}</h2>
            <p id="location">{job.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    )
}

export default card;
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NavPage from '../components/NavPage';
import styles from './Jobs.module.css';
import JobList from '../components/JobList';
import JobDescription from '../components/JobDescription';
import JobDescriptionDesktop from '../components/JobDescriptionDesktop';


const joblist = [
    {
      id: 1,
      company: "TCS",
      position: "SDE",
      job_type: "full-time",
      job_location: "Remote",
      job_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, hic? Minima quibusdam natus delectus, necessitatibus nobis quis sed, quas fuga quo sapiente, provident possimus dicta unde autem explicabo nulla quidem!",
      created_by: 1
    },
    {
      id: 2,
      company: "Infosys",
      position: "Data Analyst",
      job_type: "internship",
      job_location: "on site",
      job_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, hic? Minima quibusdam natus delectus, necessitatibus nobis quis sed, quas fuga quo sapiente, provident possimus dicta unde autem explicabo nulla quidem!",
      created_by: 1
    },
    {
      id: 3,
      company: "Hidden Leaf Village",
      position: "genin",
      job_type: "full-time",
      job_location: "on site",
      job_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, hic? Minima quibusdam natus delectus, necessitatibus nobis quis sed, quas fuga quo sapiente, provident possimus dicta unde autem explicabo nulla quidem!",
      created_by: 2
    },
    {
      id: 5,
      company: "Hidden Leaf Village",
      position: "Jonin",
      job_type: "full-time",
      job_location: "on site",
      job_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, hic? Minima quibusdam natus delectus, necessitatibus nobis quis sed, quas fuga quo sapiente, provident possimus dicta unde autem explicabo nulla quidem!",
      created_by: 2
    },
    {
        id: 4,
        company: "Meta",
        position: "ML Engineer alksdjkladslajsdl",
        job_type: "full-time",
        job_location: "on site",
        job_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, hic? Minima quibusdam natus delectus, necessitatibus nobis quis sed, quas fuga quo sapiente, provident possimus dicta unde autem explicabo nulla quidem!",
        created_by: 2
      },
  ]


function Jobs(){
    const [showNavPage, setShowNavPage] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(()=>{
        if (window.screen.width >= 800){
            setShowNavPage(false);
        }
        window.onresize = function (){
            if (window.screen.width >= 800){
                setShowNavPage(false);
            }
        }
    },[]);

    return (
        <div>
            <Navbar setShowNavPage={setShowNavPage}/>

            <div className={styles.container}>
                <div className={styles.firstDiv}>
                    <h2>New Jobs</h2>
                    <JobList joblist={joblist} setSelectedJob={setSelectedJob}/>
                </div>

                {
                    selectedJob && <JobDescription job={selectedJob} setSelectedJob={setSelectedJob}/>
                }

                <JobDescriptionDesktop job={selectedJob} setSelectedJob={setSelectedJob}/>

            </div>

            {/* {
                showNavPage && <NavPage setShowNavPage={setShowNavPage}/>
            } */}

            <NavPage setShowNavPage={setShowNavPage} showNavPage={showNavPage}/>
            
        </div>
    );
}

export default Jobs;
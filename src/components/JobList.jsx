import JobItem from "./JobItem";
import styles from "./JobList.module.css";

function JobList({joblist, setSelectedJob}){

    return (
        <div className={styles.container}>
            {
                joblist.map(job => <JobItem job={job} key={job.id} setSelectedJob={setSelectedJob}/>)
            }
        </div>
    );
}

export default JobList;
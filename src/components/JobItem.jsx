
import styles from "./JobItem.module.css";

function JobItem({job, setSelectedJob}){

    return (
        <div className={styles.container} onClick={() => setSelectedJob(job)}>
            <div className={styles.companyLogo}></div>
            <div className={styles.info}>
                <h3>{job.position}</h3>
                <p>{job.company}</p>
            </div>
        </div>
    );
}

export default JobItem;
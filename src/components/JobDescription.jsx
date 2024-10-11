import styles from "./JobDescription.module.css";
import { FaLocationDot, FaSuitcase } from "react-icons/fa6";

function JobDescription({job, setSelectedJob}){

    return (
        <div className={styles.container}>
            <div className={styles.closeButton} onClick={() => setSelectedJob(null)}> &#10006; </div>

            <div className={styles.jobDescription}>

                <div className={styles.top}>
                    <div className={styles.logo}></div>
                    <div className={styles.title}>
                        <h2>{job.position}</h2>
                        <p>{job.company}</p>
                    </div>
                </div>

                <div className={styles.middle}>
                    <div><FaLocationDot className={styles.icon}/> <p>{job.job_location}</p></div>
                    <div><FaSuitcase className={styles.icon}/> <p>{job.job_type}</p></div>
                </div>

                <div className={styles.bottom}>
                    <p>Description</p>
                    <div className={styles.description}>
                        <p>{job.job_description}</p>
                    </div>
                </div>

                <button className={styles.applyButton}>Apply</button>

            </div>
        </div>
    );
}


export default JobDescription;
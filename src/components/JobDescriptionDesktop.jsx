import styles from "./JobDescriptionDesktop.module.css";

function JobDescriptionDesktop({job, setSelectedJob}){

    return (
        <div className={styles.container}>
            <button onClick={() => setSelectedJob(null)}>close</button>
            <h2>{job ? job.position : 'Job'}</h2>
            <p>{job ? job.company : 'Company'}</p>
        </div>
    );
}


export default JobDescriptionDesktop;
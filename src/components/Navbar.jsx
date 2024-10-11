import styles from "./Navbar.module.css";


function Navbar({setShowNavPage}){

    return (
        <div className={styles.container}>
            <div className={styles.logo}>Jobs</div>
            <img className={styles.menu} src="HamMenu.png" alt="HamMenu" onClick={() => setShowNavPage(true)}/>
            {/* <nav></nav> */}
        </div>
    );
}


export default Navbar;
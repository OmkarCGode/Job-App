import styles from "./NavPage.module.css";
import { FaSuitcase, FaPaperPlane, FaUserCircle } from "react-icons/fa";
import { PiNewspaperFill } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";


function NavPage({setShowNavPage, showNavPage}){

    function handleNavigation(){
        setShowNavPage(false);
    }

    return (
        <div className={showNavPage ? styles.container : styles.hide}>
            <div className={styles.topDiv}>
                <img src="ArrowLeft.png" alt="ArrowLeft" onClick={() => setShowNavPage(false)}/>
                <div className={styles.logoDiv}>
                    <div className={styles.logo}>Jobs</div>
                </div>
            </div>

            <div className={styles.mainDiv}>
                <nav>
                    <NavLink className={styles.tab} to='/'><div className={styles.navlink} onClick={()=>handleNavigation()}><FaSuitcase className={styles.icon}/><p>Jobs</p></div></NavLink>
                    <NavLink className={styles.tab} to='/applied'><div className={styles.navlink} onClick={()=>handleNavigation()}><FaPaperPlane className={styles.icon}/><p>Applied</p></div></NavLink>
                    <NavLink className={styles.tab} to='/posted'><div className={styles.navlink} onClick={()=>handleNavigation()}><PiNewspaperFill className={styles.icon}/><p>Posted</p></div></NavLink>
                    <NavLink className={styles.tab} to='/profile'><div className={styles.navlink} onClick={()=>handleNavigation()}><FaUserCircle className={styles.icon}/><p>Profile</p></div></NavLink>

                    <div className={styles.logout}><FiLogOut className={styles.icon}/><p>Logout</p></div>
                </nav>

            </div>
        </div>
    );
}

export default NavPage;
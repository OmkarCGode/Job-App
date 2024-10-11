import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NavPage from '../components/NavPage';
import styles from './Profile.module.css';

function Profile(){
    const [showNavPage, setShowNavPage] = useState(false);

    useEffect(()=>{
        if (window.screen.width >= 500){
            setShowNavPage(false);
        }
        window.onresize = function (){
            if (window.screen.width >= 500){
                setShowNavPage(false);
            }
        }
    },[]);

    return (
        <div>
            <Navbar setShowNavPage={setShowNavPage}/>

            <div className={styles.container}>
                <h2>Profile</h2>
            </div>

            {/* {
                showNavPage && <NavPage setShowNavPage={setShowNavPage}/>
            } */}

            <NavPage setShowNavPage={setShowNavPage} showNavPage={showNavPage}/>
        </div>
    );
}

export default Profile;
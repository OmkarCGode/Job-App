import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NavPage from '../components/NavPage';
import styles from './Posted.module.css';

function Posted(){
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
                <h2>Posted</h2>
            </div>

            {/* {
                showNavPage && <NavPage setShowNavPage={setShowNavPage}/>
            } */}

            <NavPage setShowNavPage={setShowNavPage} showNavPage={showNavPage}/>
            
        </div>
    );
}

export default Posted;
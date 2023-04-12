import React from 'react';
import SideStyles from "../styles/PharmacyPage.module.css"
import Sidebar from '../Components/Sidenav3';
import Searchbar from '../Components/FinalSearchBar2';

export default function Pharmacy() {
    return (
        <div className={SideStyles.body}>
            <div>
                <Sidebar/>
            </div>
            <div>
                <div className={SideStyles.imageContainer}>
                    <div className={SideStyles.bottomCenter}>
                        <SearchBar />
                    </div>
                </div>
            </div>
        </div>
    );
}
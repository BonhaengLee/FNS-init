import React from 'react';
import NavLayout from '../components/NavLayout';
import LeftMenu from '../components/LeftMenu';
import MainPage from '../components/MainPage/MainPage';

export default function Home() {
    return (
        <div>
            <NavLayout>
                <LeftMenu />
                <MainPage />
            </NavLayout>
        </div>
    );
}

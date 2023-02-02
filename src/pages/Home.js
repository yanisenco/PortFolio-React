import React from 'react';
import HeaderHomePage from '../components/organisme/HeaderHomePage';
import NavigationHeader from '../components/template/NavigationHeader';

const Home = () => {
    return (
        <div className="h-full w-full">
            <div className="w-32 h-32 bg-pink-500"></div>

            <HeaderHomePage />
            <NavigationHeader />
        </div>
    );
};

export default Home;
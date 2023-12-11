import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

const Layout = () => {
    return (
        <>
            <motion.div
                initial={ { opacity: 0 } }
                animate={ { opacity: 1 } }
                exit={ { opacity: 0 } }
            >
                <main className="App">
                    <Navbar />
                    <Outlet />
                    <Footer />
                </main>
            </motion.div>
        </>
    );
};

export default Layout;

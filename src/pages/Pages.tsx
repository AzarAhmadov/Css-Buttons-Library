import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../common/Header';
import ButtonArea from '../components/ButtonArea';
import ButtonDetails from '../components/ButtonDetails';

const Pages: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const transition = {
        scale: { initial: 0.96, animate: 1, exit: 0.1 },
        opacity: { initial: 0, animate: 1, exit: 0 },
    };

    const animationDuration = 0.5;

    return (
        <>
            <Header />
            <AnimatePresence>
                <Routes location={location}>
                    <Route
                        path="/"
                        element={
                            <motion.div
                                key="buttonArea"
                                initial={{ scale: transition.scale.initial, opacity: transition.opacity.initial }}
                                animate={{ scale: transition.scale.animate, opacity: transition.opacity.animate }}
                                exit={{ scale: transition.scale.exit, opacity: transition.opacity.exit }}
                                transition={{ duration: animationDuration }}
                            >
                                <ButtonArea />
                            </motion.div>
                        }
                    />
                    <Route
                        path="/buttons/:ButtonName"
                        element={
                            <motion.div
                                key="buttonDetails"
                                initial={{ scale: transition.scale.initial, opacity: transition.opacity.initial }}
                                animate={{ scale: transition.scale.animate, opacity: transition.opacity.animate }}
                                exit={{ scale: transition.scale.exit, opacity: transition.opacity.exit }}
                                transition={{ duration: animationDuration }}
                            >
                                <ButtonDetails />
                            </motion.div>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </>
    );
};

export default Pages;

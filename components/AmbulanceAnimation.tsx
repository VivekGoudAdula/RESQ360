import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/ambulance.json';

const AmbulanceAnimation: React.FC = () => {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
            <div className="w-full max-w-lg">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

export default AmbulanceAnimation;

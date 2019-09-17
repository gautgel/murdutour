import React from 'react';

function Preloader (props) {
        return (
            <div className="preloader">
                <div className="cycle-wrapper">
                    <div className="cycle-wheel cycle-wheel-back">
                        <div className="cycle-wheel-outer">
                            <div className="cycle-wheel-inner">
                                <div className="cycle-wheel-inner-padding">
                                    <div className="inner-disc"></div>
                                    <div className="inner-disc-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chain-up"></div>
                    <div className="chain-bottom"></div>
                    <div className="chain-rotation">
                        <div className="outer-axle"></div>
                        <div className="chain-disc-outer">
                            <div className="chain-disc-inner"></div>
                        </div>
                        
                    </div>
                    <div className="chain-rods">
                        <div className="pedal-rod"></div>
                    </div>
                </div>
            </div>
        );
    }

export default Preloader;
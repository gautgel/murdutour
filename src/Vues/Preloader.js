import React, { Component } from 'react';

function Preloader (props) {
        return (
            <div className="preloader">
                <div className="cycle-wrapper">
                    <div class="cycle-wheel cycle-wheel-back">
                        <div class="cycle-wheel-outer">
                            <div class="cycle-wheel-inner">
                                <div class="cycle-wheel-inner-padding">
                                    <div class="inner-disc"></div>
                                    <div class="inner-disc-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chain-up"></div>
                    <div class="chain-bottom"></div>
                    <div class="chain-rotation">
                        <div class="outer-axle"></div>
                        <div class="chain-disc-outer">
                            <div class="chain-disc-inner"></div>
                        </div>
                        
                    </div>
                    <div class="chain-rods">
                        <div class="pedal-rod"></div>
                    </div>
                </div>
            </div>
        );
    }

export default Preloader;
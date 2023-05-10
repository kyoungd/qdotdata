import React from 'react';

const PreLoader = () => {
    return (
        <>
            <div id="preloader">
                <div id="ambrox-preloader" className="ambrox-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="Q" className="letters-loading">
                                Q
                            </span>
                            <span data-text-preloader="D" className="letters-loading">
                                D
                            </span>
                            <span data-text-preloader="O" className="letters-loading">
                                O
                            </span>
                            <span data-text-preloader="T" className="letters-loading">
                                T
                            </span>
                            <span data-text-preloader="D" className="letters-loading">
                                D
                            </span>
                            <span data-text-preloader="A" className="letters-loading">
                                A
                            </span>
                            <span data-text-preloader="D" className="letters-loading">
                                D
                            </span>
                            <span data-text-preloader="A" className="letters-loading">
                                A
                            </span>
                        </div>
                    </div>
                    <div className="loader">
                        <div className="row">
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreLoader;
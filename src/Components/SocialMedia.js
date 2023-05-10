import React from 'react';

const SocialMedia = () => {
    return (
        <>
            <ul>
                <li className="facebook">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <i className="ri-facebook-fill"></i>
                    </a>
                </li>
                <li className="behance">
                    <a href="https://www.behance.net/" target="_blank" rel="noreferrer" >
                        <i className="ri-behance-fill"></i>
                    </a>
                </li>
                <li className="dribbble">
                    <a href="https://dribbble.com/" target="_blank" rel="noreferrer" >
                        <i className="ri-dribbble-fill"></i>
                    </a>
                </li>
            </ul>
        </>
    );
};

export default SocialMedia;
import React from 'react';

const HeaderLogo = () => {
    const _headerLogoStyles = {
        logo: {
            height: "38px",
            width: "auto",
            display: "flex",
            cursor: "pointer",
            position: "absolute",
            left: "24px"
        }  
    }

    return (
        <>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            alt=""
            style={{..._headerLogoStyles.logo}} />
        </>
    );
};

export default HeaderLogo;
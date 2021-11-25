import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderLogo from '../Components/HeaderLogo';
import HeaderOptions from '../Components/HeaderOptions';
import HeaderSearchbar from '../Components/HeaderSearchbar';

const InstagramHeader = () => {

    const isPC = useMediaQuery({query: '(min-width: 1000px)'});
    const _headerStyles = {
        header: {
            position: "fixed",
            height: "54px",
            width: "100%",
            display: "flex",
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #e4e4e4",
            zIndex: "100"
        },
        layout: {
            position: "absolute",
            height: "100%",
            width: isPC ? "1000px" : "100%",
            left: "50%",
            transform: "translate(-50%, 0)",
            alignItems: "center",
            display: "flex"
        }
    }
    return (
        <div style={{..._headerStyles.header}}>
            <div style={{..._headerStyles.layout}}>
                <HeaderLogo/>
                <HeaderSearchbar/>
                <HeaderOptions/>
            </div>
        </div>
    );
};

export default InstagramHeader;
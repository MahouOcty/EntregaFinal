import React from 'react';
import InstagramPosts from '../components/Posts/Layout/InstagramPosts';


const InstagramContent = () => {

    const _InstagramContentStyles = {
        container: {
            height: "1000px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            zIndex: "0",
            position: "absolute",
            backgroundColor: "transparent",
            left: "50%",
            transform: "translate(-50%, 0)"
        },
        layout: {
            position: "absolute",
            height: "auto",
            left: "50%",
            transform: "translate(-50%, 0)",
            width: "952px"
        }
    }

    return (
        <div
        style={{..._InstagramContentStyles.container}}>
            <div
            style={{..._InstagramContentStyles.layout}}>
                <InstagramPosts/>
                
            </div>
        </div>
    );
};

export default InstagramContent;
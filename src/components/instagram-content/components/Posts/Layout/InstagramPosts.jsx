import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Post from '../Components/Post';

const InstagramPosts = () => {

    const isTablet = useMediaQuery({query: '(max-width: 1000px)'});

    const _InstagramsPostsLayoutStyles = {
        layout: {
            display: "flex",
            heigth: "auto",
            width: "600px",
            top: "80px",
            flexDirection: "column",
            position: "absolute",
            left: isTablet ? "50%" : "0",
            transform: isTablet ? "translate(-50%, 0)" : ""
        }
    }
    return (
        <div
        style={{..._InstagramsPostsLayoutStyles.layout}}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default InstagramPosts;
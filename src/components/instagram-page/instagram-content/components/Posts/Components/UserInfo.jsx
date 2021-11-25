import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const UserInfo = () => {

    const [underline, setUnderline] = useState("none");

    const _UserInfoStyle = {
        container: {
            display: "flex",
            height: "50px",
            width: "600px",
            color: "black",
            alignItems: "center"
        },
        photo: {
            width: "32px",
            height: "32px",
            cursor: "pointer",
            borderRadius: "50%"
        },
        buttonPhoto: {
            padding: "0",
            border: "none",
            cursor: "pointer",
            margin: "16px",
            backgroundColor: "transparent"
        },
        userName: {
            cursor: "pointer",
            textDecoration: `${underline}`,
            border: "none",
            fontSize: "13px",
            fontWeight: "bold",
            backgroundColor: "transparent",
            padding: "0"
        },
        options: {
            cursor: "pointer",
            backgroundColor: "transparent",
            padding: "0",
            border: "none",
            position: "absolute",
            right: "16px"
        }
    }
    return (
        <div
        style={{..._UserInfoStyle.container}}>
            <button
            style={{..._UserInfoStyle.buttonPhoto}} >
                <img 
                src="https://picsum.photos/32"
                alt=""
                style={{..._UserInfoStyle.photo	}} />
            </button>
            <button
            style={{..._UserInfoStyle.userName}}
            onMouseEnter={() => setUnderline("underline")}
            onMouseLeave={() => setUnderline("none")} >
                johndoe
            </button>
            <button
            style={{..._UserInfoStyle.options}} >
                <FontAwesomeIcon icon={faEllipsisH} />
            </button>

        </div>
    );
};

export default UserInfo;
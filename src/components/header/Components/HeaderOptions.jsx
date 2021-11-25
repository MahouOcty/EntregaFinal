import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome  } from '@fortawesome/free-solid-svg-icons';
import {faHeart, faCompass, faPaperPlane, faPlusSquare} from "@fortawesome/free-regular-svg-icons"
import { auth } from '../../../Initializers/firebase-Config';

const HeaderOptions = () => {
    
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        auth.onAuthStateChanged(() => {
            setUser(user);
        })
    })

    const buttonSize = "26px";

    const _headerOptionStyles = {
        optionsContainer: {
            display: "flex",
            right: "24px",
            width: "auto",
            position: "absolute",
            alignItems: "center"
        },
        button: {
            display: "flex",
            cursor: "pointer",
            height: `${buttonSize}`,
            width: `${buttonSize}`,
            color: "#262626",
            margin: "8px",
            border: "none",
            backgroundColor: "white",
            alignItems: "center",
            justifyItems: "center"
        },
        icon: {
            height: `${buttonSize}`,
            width: `${buttonSize}`,
            borderRadius: "50%"
        }
    }
    return (
        <div
        style={{..._headerOptionStyles.optionsContainer}}>
            <button
            style={{..._headerOptionStyles.button}}>
                <FontAwesomeIcon
                icon={faHome}
                style={{..._headerOptionStyles.icon}} />
            </button>
            <button
            style={{..._headerOptionStyles.button}}>
                <FontAwesomeIcon
                icon={faPaperPlane}
                style={{..._headerOptionStyles.icon}} />
            </button>
            <button
            style={{..._headerOptionStyles.button}}>
                <FontAwesomeIcon
                icon={faPlusSquare}
                style={{..._headerOptionStyles.icon}} />
            </button>
            <button
            style={{..._headerOptionStyles.button}}>
                <FontAwesomeIcon
                icon={faCompass}
                style={{..._headerOptionStyles.icon}} />
            </button>
            <button
            style={{..._headerOptionStyles.button}}>
                <FontAwesomeIcon
                icon={faHeart}
                style={{..._headerOptionStyles.icon}} />
            </button>
            <button
            style={{..._headerOptionStyles.button}}>
                <img
                src={user.photoURL}
                alt=""
                style={{..._headerOptionStyles.icon}} />
            </button>
        </div>
    );
};

export default HeaderOptions;
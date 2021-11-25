import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const HeaderSearchbar = () => {

    const [searchColor, setSearchColor] = useState("#babbbd");

    const _HeaderSearchbarStyles = {
        searchContainer: {
            height: "24px",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fafafa",
            left: "50%",
            transform: "translate(-50%, 0)",
        },
        searchIcon: {
            height: "11px",
            width: "auto",
            position: "absolute",
            left: "10px",
            cursor: "text",
            color: "#babbbd",
        },
        searchBar: {
            height: "100%",
            width: "150px",
            display: "flex",
            backgroundColor: "#fafafa",
            color: `${searchColor}`,
            border: "1px solid #babbbd",
            borderRadius: "3px",
            paddingLeft: "27px",
            paddingRight: "15px"
        }
    }
    return (
        <div
        style={{..._HeaderSearchbarStyles.searchContainer}}>
            <FontAwesomeIcon
            icon= {faSearch} 
            style={{..._HeaderSearchbarStyles.searchIcon}} />
            <input
            type="text"
            style={{..._HeaderSearchbarStyles.searchBar}}
            placeholder="Buscar"
            onFocus={() => {setSearchColor("black")}}
            onBlur={() => {setSearchColor("#babbbd")}} />
        </div>
    );
};

export default HeaderSearchbar;
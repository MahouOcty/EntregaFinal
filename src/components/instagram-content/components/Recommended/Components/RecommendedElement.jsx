import React, { useState } from 'react';

const RecommendedElement = (props) => {

  const [underlineText, setUnderlineText] = useState('none');

  const _stylesLayout = {
    recom: {
      width: '50%',
      display:'flex',
      alignItems:'center',
      fontSize:'11px'
    },
    img: {
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      padding: '10px',
      cursor: 'pointer',
    },
    userName: {
      fontSize: '13px',
      fontWeight: 'bold',
      cursor: 'pointer',
      textDecoration: `${underlineText}`,
      width:'83%',
      color:'#3f3f3f'
    },
    info:{
      display:'flex',
      flexFlow:'column',
      width:'57%',
    },
    xtraInfo:{
      color:'#acacac'
    },
    text:{
      color:'#0095f6',
      fontWeight:'bold',
      cursor:'pointer'
    }
  };

  return (
    <div style={_stylesLayout.recom}>
      <div>
        <img src={props.image} alt="" style={_stylesLayout.img} />
      </div>
      <div style={_stylesLayout.info}>
        <span 
        style={_stylesLayout.userName}
        onMouseEnter={() => setUnderlineText('underline')}
        onMouseOut={() => setUnderlineText('none')}
        >
          {props.userName}
        </span>
        <span style={_stylesLayout.xtraInfo}>Followed by lola45 + 2 more...</span>
      </div>
      <span style={_stylesLayout.text}>Follow</span>
    </div>
  );
};

export default RecommendedElement;
import React from 'react';

const Login = () => {

  const _stylesLayout = {
   
    words: {
      display: 'flex ',
      justifyContent: 'space-evenly',
      alignSelf:'flex-end',
      flexFlow: 'column',
      width: '100%',
      textAlign: 'left',
      margin:'auto'
    },
    individual: {
      color: '#8e8e8e',
      fontSize: '11px',     
      padding: '5px',
      cursor: 'pointer',
      margin:'auto'
    },
  };

    return (
        <div style={_stylesLayout.words}>
          <span style={_stylesLayout.individual}>Meta   About   Blog   Jobs   Help   API   Privacy   Terms   Top Accounts   Hashtags   Locations   Instagram Lite </span>
          <span style={_stylesLayout.individual}>Beauty   Dance   Fitness   Food & Drink   Home & Garden   Music   Visual Arts</span>
          <span style={_stylesLayout.individual}>English © 2021 Instagram from Meta</span>
        </div>
    )
};

export default Login;

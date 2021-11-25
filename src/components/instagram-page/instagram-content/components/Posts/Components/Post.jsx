import { faBookmark, faComment, faHeart, faPaperPlane, faSmile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import UserInfo from './UserInfo';

const Post = () => {

    const [likeHover, setLikeHover] = useState("#262626");
    const [commentHover, setCommentHover] = useState("#262626");
    const [sendHover, setSendHover] = useState("#262626");
    const [saveHover, setSaveHover] = useState("#262626");
    const [likesPostHover, setLikesPostHover] = useState("none");

    const _PostStyles = {
        post: {
            display: "flex",
            flexDirection: "column",
            width: "600px",
            height: "auto",
            backgroundColor: "white",
            marginBottom: "20px",
            border: "1px solid #e4e4e4",
            justifyContent: "center",
            alignContent: "center"
        },
        image: {
            width: "600px",
            height: "auto"
        },
        interaction: {
            display: "flex",
            margin: "15px 0px",
            width: "576px",
            height: "25px",
            alignContent: "center"
        },
        interactionButton: {
            height: "25px",
            width: "auto",
            padding: "0px 6px",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer"
        },
        likeButton: {
            color: `${likeHover}`,
            marginLeft: "10px"
        },
        commentButton: {
            color: `${commentHover}`,
            margin: "0px 4px"
        },
        sendButton: {
            color: `${sendHover}`
        },
        saveButton: {
            color: `${saveHover}`,
            position: "absolute",
            right: "10px"
        },
        interactionIcon: {
            height: "25px",
            width: "auto"
        },
        postLikes: {
            width: "100%",
            height: "18px",
            display: "flex",
            alignContent: "center",
            fontSize: "14px"
        },
        imageLikes: {
            width: "20px",
            height: "20px",
            cursor: "pointer",
            borderRadius: "50%",
            margin: "0px 16px"
        },
        boldLikes: {
            fontWeight: "bold",
            cursor: "pointer"
        },
        userLikes: {
            textDecoration: `${likesPostHover}` 
        },
        postComments:{
            display: "flex",
            alignContent: "center",
            fontSize: "14px",
            cursor: "pointer",
            margin: "7px 16px",
            opacity: "50%"
        },
        postTime:{
            display: "flex",
            alignContent: "center",
            fontSize: "9px",
            cursor: "pointer",
            margin: "4px 16px",
            opacity: "50%"
        },
        publicationButton:{
            color: "LightBlue",
            fontWeight: "bold",
            width: "100%",
            height: "18px",
            display: "flex",
            alignContent: "center",
            fontSize: "14px",
            cursor: "text",
            margin: "7px 0px",
            marginLeft:"220px",
            opacity: "85%"
        },
        commentInPost: {
            width: "100%",
            height: "42px",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            borderTop: "1px solid #e4e4e4",
            marginTop: "15px"
        },
        emojiButton: {
            margin: "0px 16px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0"
        },
        emojiIcon: {
            height: "25px",
            width: "25px",
            color: "#262626"
        },
        comment: {
            flex: "1",
            height: "14px",
            fontSize: "14px",
            border: "none",
            backgroundColor: "transparent",
            color: "black"
        },
        uploadComment: {
            marginRight: "16px",
            color:"#B3DFFC",
            fontSize: "14px",
            backgroundColor: "transparent",
            padding: "0",
            border: "none"
        }
    }
    return (
        <div
        style={{..._PostStyles.post}}>
            <UserInfo/>
            <img
            src="https://picsum.photos/600"
            alt=""
            style={{..._PostStyles.image}} />
            <div
            style={{..._PostStyles.interaction}}>
                <button
                style={{..._PostStyles.interactionButton, ..._PostStyles.likeButton}}
                onMouseEnter={() => setLikeHover("#9a9a9a")}
                onMouseLeave={() => setLikeHover("#262626")} >
                    <FontAwesomeIcon 
                    icon={faHeart}
                    style={{..._PostStyles.interactionIcon}} />
                </button>
                <button
                style={{..._PostStyles.interactionButton, ..._PostStyles.commentButton}}
                onMouseEnter={() => setCommentHover("#9a9a9a")}
                onMouseLeave={() => setCommentHover("#262626")} >
                    <FontAwesomeIcon 
                    icon={faComment}
                    style={{..._PostStyles.interactionIcon}} />
                </button>
                <button
                style={{..._PostStyles.interactionButton, ..._PostStyles.sendButton}}
                onMouseEnter={() => setSendHover("#9a9a9a")}
                onMouseLeave={() => setSendHover("#262626")} >
                    <FontAwesomeIcon 
                    icon={faPaperPlane}
                    style={{..._PostStyles.interactionIcon}} />
                </button>
                <button
                style={{..._PostStyles.interactionButton, ..._PostStyles.saveButton}}
                onMouseEnter={() => setSaveHover("#9a9a9a")}
                onMouseLeave={() => setSaveHover("#262626")} >
                    <FontAwesomeIcon 
                    icon={faBookmark}
                    style={{..._PostStyles.interactionIcon}} />
                </button>
            </div>
            <div
            style={{..._PostStyles.postLikes}} >
                <img
                src="https://picsum.photos/18"
                alt=""
                style={{..._PostStyles.imageLikes}} />
                Les gusta a&nbsp; 
                <div 
                style={{..._PostStyles.boldLikes, ..._PostStyles.userLikes}} 
                onMouseEnter={() => setLikesPostHover("underline")} 
                onMouseLeave={() => setLikesPostHover("none")}>
                    janedoe
                </div>
                &nbsp;y&nbsp; 
                <div style={{..._PostStyles.boldLikes}}>
                    50 personas más
                </div>
            </div>
            <div style={{..._PostStyles.postComments}} >
                    Ver los 38 comentarios
            </div>
            <div style={{..._PostStyles.postTime}} >
                    HACE 12 HORAS
            </div>
            <div
            style={{..._PostStyles.commentInPost}}>
                <button
                style={{..._PostStyles.emojiButton}} >
                    <FontAwesomeIcon
                    icon={faSmile}
                    style={{..._PostStyles.emojiIcon}} />
                </button>
                <input
                type="text"
                style={{..._PostStyles.comment}}
                placeholder="Agrega un comentario..."/>
                <button
                style={{..._PostStyles.uploadComment}} >
                    Publicar
                </button>
            </div>
        </div>
    );
};

export default Post;
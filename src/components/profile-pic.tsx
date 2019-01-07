import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import profilePic from '../imgs/profile-pic.png'
import { inherits } from 'util';

const ProfilePicStyle = {
    container: {
        height: "100%",
        width: '100%',
        //opacity: 1,
        backgroundColor: 'rgba(0, 0, 0,)',
        
    },


    content: {
        height: "100%",
        margin: '0 auto',
        display: 'block',
        borderRadius: '20%',
        opacity: 0.9
    }
}



class ProfilePic extends Component {
    render() {
        return (
            <div style={ProfilePicStyle.container}>
                <img src={profilePic} style = {ProfilePicStyle.content}></img>
            </div>
        );
    }
}

export default ProfilePic;
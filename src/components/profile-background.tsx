import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import backgroundPic from '../imgs/background.png'
import ProfilePic from './profile-pic'

const backgroundStyle = {

    header: {
        width: "100%",
        height: "250px",
        backgroundImage: "url(" + backgroundPic + ")",
        //padding: '200px',
        
    },



    content: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        margin: '50px auto'
    }
}



class ProfileBackGround extends Component {
    render() {
        return (
            <div style={backgroundStyle.header}>
                <div style = {backgroundStyle.content}>
                    <ProfilePic />
                </div>
            </div>
        );
    }
}

export default ProfileBackGround;
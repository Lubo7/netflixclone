import React from 'react'
import "./Banner.css";
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Rising_phoenix from '../../assets/Banner.png';

function Banner() {
    return (
        <div className="banner">
            <img src={Rising_phoenix} alt="rising phoenix" className="banner_image" />
            <h3>NETFLIX <small>ORIGINAL</small></h3>
            <h1>RISING PHOENIX</h1>
            <div className="button_div">
                <button className="button1">
                    <PlayArrowIcon style={{ fontSize: 10}}/> Play
                </button>
                <button className="button2">
                    <AddIcon style={{ fontSize: 10}}/> My list
                </button>
            </div>

            <div className="intro_container">
                <p className="intro">
                The Netflix documentary "Rising Phoenix" explains that Paralympics is "para" 
                as in "parallel," not "paralyzed." The world-class athletes that comprise the event 
                are astonishingly powerful: A man without arms competes in archery, using his legs 
                and feet to pull back the bow and shoot the arrow smack into the bullseye.
                </p>
            </div>
        </div>

    )
}

export default Banner

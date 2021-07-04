import React, { useState, useEffect, useRef } from 'react';
// import { Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
// import Sound from "react-sound";
import Song from "./papa.mp3";

// import ReactAudioPlayer from "react-audio-player";
import Progressbar from "./progressbar"
import ControlPanel from "./controlpanel";

function Mpp() {
    const [mlass, setClass] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    function handlerChange() {

        setClass(!mlass);
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audio.pause();
        }
        else {
            audio.play();
        }
    }
    const [percentage, setPercentage] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const audioRef = useRef()
    const onChange = (e) => {
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
    }




    const audio = audioRef.current
    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime

        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))

    }






    return (
        <React.Fragment>
            
                <div className="img">
                    <img className="img-circle " src="pic2.jpg" id={mlass ? "anime" : ""} alt="dskn" srcset="" />
                </div>
                <ControlPanel
                    duration={duration}
                    currentTime={currentTime}
                />
                {/* <Slider percentage={percentage} onChange={onChange} /> */}
                <Progressbar percentage={percentage} onChange={onChange} />
                <div className="controls">
                    <div className="backward" title="Backward">
                        < FastRewindIcon />
                    </div>

                    <div className="play" title="" onClick={() => { handlerChange() }} >
                        {isPlaying ?
                            <PauseIcon />
                            :
                            <PlayArrowIcon />
                        }
                    </div>
                    <div className="forward" title="Forward">
                        <FastForwardIcon />
                    </div>
                    <audio
                        ref={audioRef}
                        onTimeUpdate={getCurrDuration}
                        onLoadedData={(e) => {
                            setDuration(e.currentTarget.duration.toFixed(2))
                        }}
                        src={Song}


                    ></audio>
                    {/* <Sound url={Song} ref={SoundRef} onTimeUpdate={getCurrDuration}  onLoadedData={(e) => {setDuration(e.currentTarget.duration.toFixed(2))}} playStatus={isPlaying?Sound.status.PLAYING:Sound.status.STOPPED}/>  */}
                </div>
            
        </React.Fragment>
    )
}
export default Mpp;

import React, { useEffect, useState } from 'react';
import './results.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useLocation } from 'react-router-dom';
function Results(){
    const location = useLocation();
    const { topic, maxque,score } = location.state || {};
    const [accurasy,setAccuracy]=useState('');
    const percentage=((score/maxque)*100).toFixed(2)
    var {rollno}=location.state||'You';
    if(rollno==null) rollno='You'
    useEffect(() => {
        const percentage = (score / maxque) * 100;

        if (percentage < 35)
            setAccuracy('Low');
        else if (percentage < 75)
            setAccuracy('Intermediate');
        else
            setAccuracy('Advanced');
    }, [maxque, score,percentage]);
     const firstLineMessage = `${rollno} SCORED ${score} / ${maxque}`;

     const secondLineMessage = `on ${topic} with ${accurasy} accuracy`;




    // State for the circular progress bar
    const [percentag, setPercentage] = useState(0);

    useEffect(() => {
        // Update the percentage state based on accuracy
        const timer = setTimeout(() => {
            if (percentag < percentage) {
                setPercentage(percentag + 1);
            }
        }, 10); // Change the delay to 100 milliseconds for slower movement

        return () => clearTimeout(timer);
    }, [percentag, percentage]);

    return (
        <div className='result-display' >
            <div className='background-image'></div>
            <div className='content'>
                <p className='text-style'>{firstLineMessage}</p>
                <p className='textone-style'>{secondLineMessage}</p>
                {/* Circular progress bar */}
                <div style={{textAlign:"center"}}>
                    <div style={{ width: 150,marginLeft:300}}>
                        <CircularProgressbar value={percentag} text={`${percentage}%`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Results;
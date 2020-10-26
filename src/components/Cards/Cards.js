import React from 'react';
import CountUp from 'react-countup';




const Cards = ({ data : { confirmed, deaths, lastUpdate, recovered } }) => {
    if(!confirmed) {
        return 'Loading...';
    }
    return (
        <div>
            <div className="parent confirmed">
                <p className='para'>confirmed</p>
                <h5 className='h51'>
                    <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                </h5>
                <h5 className='h52'>{new Date(lastUpdate).toDateString()}</h5>
                <div className='last'>Number of active of COVID-19</div>
            </div>
            <div className="parent recovered">
                <p className='para'>recovered</p>
                <h5 className='h51'>
                    <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                </h5>
                <h5 className='h52'>{new Date(lastUpdate).toDateString()}</h5>
                <div className='last'>Number of recoveries of COVID-19</div>
            </div>
            <div className="parent deaths">
                <p className='para'>deaths</p>
                <h5 className='h51'>
                    <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                </h5>
                <h5 className='h52'>{new Date(lastUpdate).toDateString()}</h5>
                <div className='last'>Number of active of COVID-19</div>
            </div>
        </div>
    );
}
 
export default Cards;
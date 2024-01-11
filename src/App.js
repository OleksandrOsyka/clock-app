import Ipbase from '@everapi/ipbase-js';
import './App.css';

import Quote from './components/Quote';
import Greeting from './components/Greeting';
import Time from './components/Time';
import Location from './components/Location';
import MoreLessButton from './components/MoreButton';
import MoreContent from './components/MoreContent';
import { useEffect, useState } from 'react';

function App() {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [timeZone, setTimezone] = useState('');
  const [dayOfYear, setDayOfYear] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [weekNumber, setWeekNumber] = useState('');
  const [isDay, setIsDay] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const checkDay = hours => {
    if(hours >= 5 && hours < 18) {
      return true;
    }

    return false;
  }

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone/Europe/Kyiv')
      .then(response => response.json())
      .then(data => {
        const { datetime, timezone, day_of_year, day_of_week, week_number } = data;
        let date = new Date(datetime);
        console.log(date.getMinutes())
        setHours(date.getHours());
        setMinutes(date.getMinutes());
        setTimezone(timezone);
        setDayOfYear(day_of_year);
        setDayOfWeek(day_of_week);
        setWeekNumber(week_number);
        setIsDay(checkDay(date.getHours()));
       
      })
  }, []);

  const toggleShowMore = () => setShowMore(prev => !prev);
 
  return (<div className={`app ${isDay ? 'app__daytime' : 'app__nighttime'}`}>
    <div className='main-container'>
    <Quote hide={showMore}/>
    <div className='grid-container'>
    <Greeting hours={hours} />
    <Time hours={hours} minutes={minutes} />
    <Location />
    <MoreLessButton showMore={showMore} toggleShowMore={toggleShowMore} />
   
    </div>
    </div>

    <MoreContent showMore={showMore} isDay={isDay} timeZone={timeZone} dayOfYear={dayOfYear} dayOfWeek={dayOfWeek} weekNumber={weekNumber} />
  </div>);
}




export default App;

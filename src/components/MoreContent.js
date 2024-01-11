import './MoreContent.css';

function MoreContent({ showMore, isDay, timeZone, dayOfYear, dayOfWeek, weekNumber }) {
    return(
        <div className={`more-content ${showMore && "more-content__opened"} ${isDay && "more-content__day"}`}>
    <div className='more-content-item'><span>Current timezone</span>{timeZone}</div>
      <div className='more-content-item'><span>Day of the year</span>{dayOfYear}</div>
      <div className='more-content-item'><span>Day of the week</span>{dayOfWeek}</div>
      <div className='more-content-item'><span>Week number</span>{weekNumber}</div>
    </div>
    );
}

export default MoreContent;
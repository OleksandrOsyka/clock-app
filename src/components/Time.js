import './Time.css';

function Time ({ hours, minutes }) {
    return(
        <div className='time'>{`${hours}:${minutes}`}</div>
    );
}

export default Time;
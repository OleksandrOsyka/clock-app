import "./MoreButton.css";

function MoreLessButton({ showMore, toggleShowMore}) {
    console.log('showMore' + showMore)
    return(
        <button className={`more-less-button ${showMore ? 'less' : 'more'}`} onClick={toggleShowMore}><img src='../assets/desktop/icon-arrow-up.svg' width={32} height={32} /></button>
    );
}

export default MoreLessButton;
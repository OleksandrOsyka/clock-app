import { useEffect, useState } from "react";
import './Quote.css';

function Quote({ hide }) {
    const [refresh, setRefresh] = useState(false);
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    

    const loadQuote = () => {
        fetch('https://api.quotable.io/quotes/random')
          .then(response => response.json())
          .then(data => {
            setRefresh(true);
        
            setTimeout(() => {
                setContent(data[0].content);
                setAuthor(data[0].author);
                setRefresh(false);

            }, 1000);
          })
    }

    useEffect(() => {
        loadQuote();
    }, [])

    return(
        <div className={`quote ${(hide || refresh) && 'hide'}`}>
            <p>“{content}”</p>
            <span>{author}</span>
            <button onClick={loadQuote}><img src="../assets/desktop/icon-refresh.svg" width={16.5} height={16.5} alt="refresh icon"/></button>
        </div>
    );
}

export default Quote;
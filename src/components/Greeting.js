import "./Greeting.css";

function Greeting({ hours }) {
    let greeting = '';
    let icon = <img src="../assets/desktop/icon-moon.svg" />;

    if(hours >= 5 && hours < 18) {
        icon = <img src="../assets/desktop/icon-sun.svg" />;
    }


    if(hours >= 5 && hours < 12) {
        greeting = "Good morning";
    }
    if(hours >= 12 && hours < 18) {
        greeting = "Good afternoon";
    }
    if(hours >= 18 || hours < 5) {
        greeting = "Good evening";
    }

    return(
        <div className="greeting">{icon}{greeting}</div>
    );
}

export default Greeting;
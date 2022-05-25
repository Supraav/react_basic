import React from "react";
import  ReactDOM  from "react-dom";
import './style.css'

function App()
{
    return <div>
        <h1>multiple websites</h1>
        <p> click on the website you want to open</p>
    </div>
}

// ReactDOM.render( <h1>hello world</h1>,document.getElementById("root" ));
ReactDOM.render(<App/>,document.getElementById("root"));
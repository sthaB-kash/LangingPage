import React from 'react'
import ReactDom from 'react-dom'
import App from './App'


function MainPage(){
    return (
        <React.Fragment>
            <App />
             
        </React.Fragment>
    );
}

ReactDom.render(<MainPage/>, document.getElementById('root'));

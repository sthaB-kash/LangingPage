import React from 'react'
import ReactDom from 'react-dom'
import App from './App'


// import HomePage from './homepage/home'

function MainPage(){
    return (
        <React.Fragment>
            <App />
            {/* <HomePage /> */}
        </React.Fragment>
    );
}

ReactDom.render(<MainPage/>, document.getElementById('root'));

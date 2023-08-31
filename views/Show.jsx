// import React from "react";
const React = require('react')

function Show (props){
    const {fruit} = props
    return(
        <main>
            <h1>Show Page</h1>
            <h2>The {fruit.name} is {fruit.color}</h2>
            <p>{fruit.readyToEat? "It is ready to eat" : "It is not ready to eat" }</p>
        </main>
    )
}


module.exports = Show
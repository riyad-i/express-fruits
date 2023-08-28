// import React from "react";
const React = require('react')

function Show (props){
    const {fruit} = props
    return(
        <main>
            <h1>Show Page</h1>
            <h2>The {fruit.name} is {fruit.color}</h2>
            <p>{fruit.readyToEat? "It's is ready to eat" : "It is not ready to eat... Can't touch this" }</p>
        </main>
    )
}


module.exports = Show
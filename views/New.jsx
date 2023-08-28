
const React = require('react')


function New(){
    return (
        <div>
            <h1>New Page</h1>
            <form action='/fruits' method='POST'>
                Name: <input type='text' name='name' required/><br/><br/>
                Color: <input type='text' name='color'required/><br/><br/>
                Ready To Eat: <input type='checkbox' name='readyToEat'/><br/><br/>
                <button>Create Fruit</button>
            </form>
        </div>
    )
}


module.exports = New
const React = require('react')



function Index(props){
    const {fruits} = props
    return(
        <main>
            <nav>
                <a href='/fruits/new'>Create Fruit</a>
            </nav>
            <h1>Index Page</h1>
            <ul>
                {fruits.map((fruit, i) => {
                    return(
                        <li>
                            The {''}
                            <a href={`/fruits/${i}`}>
                                {fruit.name}
                            </a>
                            {' '} is {fruit.color}
                            <br/>
                            {fruit.readyToEat 
                            ? 'It is ready to eat!'
                            :'It is not ready to eat'}
                        </li>
                    )
                })}
            </ul>
        </main>

    )
}


module.exports = Index 
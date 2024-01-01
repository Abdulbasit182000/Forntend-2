import { useState } from "react";

const Home = () => {
    const [word, setName] = useState('mario')
    const handleClick = () => {
        let name = document.getElementById('numb').value
        console.log('hello ' + name)
        setName(name)
    }
    const handleClickAgain = (name) => {
        console.log('hello '+ name)
    }
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <div>
                <p>Enter your name</p>
                <input id="numb" />
                <button onClick={handleClick}>Submit</button>
            </div>
            <div>
                <button onClick={() => {
                    handleClickAgain('mario')
                }}>Clicke me Again</button>
            </div>
            <div>
                <h2>Welcome {word}</h2>
            </div>
        </div>
    );
}
 
export default Home;
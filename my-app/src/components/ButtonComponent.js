import { useState } from 'react' // This is a React hook


function Button(props){


    //define the state variable i
    const[buttonColour,setButtonColour] = useState('green');

    const buttonStyles = {
        borderRadius: '5px',
        border : '1px solid black',
        backgroundColor: buttonColour,
        color: '#fff',
        fontSize: '2rem',
        borderRadius: '10px',
        padding:'2px 4px'
    }

        const changeColour = () =>{
            setButtonColour('red');
        }

    return(
        <button onClick={changeColour} class='button' style={buttonStyles}>
            Click me 
        </button>
    )
}

export default Button;
import { useState } from 'react';
   

function Form(props) {
    const [name,setName]=useState(''); //This is a state for the imput personName
    const [dropdownState,setDropdownState] = useState('apple');

    const submitFunction = (e)=>{
        e.preventDefault()  
        console.log("My favorite fruit is:",dropdownState )
    }
    return(
        <>
    <form action="" onSubmit={submitFunction}>

    <label htmlFor="personName"> Your name</label>

        <input type="text" 
        name="name" 
        id="personName"
         value={name}
         onChange={(e) => setName(e.target.value)}
         />
    <div>
        <select name="dropdown-choices" id="dropdown-choices" value={dropdownState} onChange={(e)=> setDropdownState(e.target.value)}>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="banana">Banana</option>
        </select>
    </div>
    <button type="submit">Submit choices</button>
    </form>
    <div className="display" style={{fontSize:'4rem'}}>
    {name} 
    <p>Dropdown state is : {dropdownState} </p>
    </div>  
    </>
    )
}

export default Form;
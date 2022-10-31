function Dog({dogYears,colour,bread,name}){
//logic goes at the top outside of the return statement
const styles={
    backgroundColor : colour
    }
    function calculateHumanYears(n){
        return n * 7;
    }
    const humanYears = calculateHumanYears(dogYears);

    return(
        <div style={styles}>
        <h2> Hi,i am a dog</h2>
        <p>My name is {name}</p>
       {/* dog years  */}
       <p>I am {dogYears} years old in dog years. That is {humanYears} human years</p>
        </div>   
         ) 
}
export default Dog;
import Button from "./ButtonComponent";

function Cat(props){

     // const { name, colour, lackOfCommonSense } = props;


    const styles = {
        backgroundColor: props.colour,
        color: props.textColour
    }
    return (
    <div style={styles}>
    <h2> Hi,i am a cat</h2>
    <p>My name is {props.name}</p>
    

    <Button />
    </div>
    )
}

export default Cat;
    
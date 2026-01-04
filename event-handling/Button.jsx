let styles = {
    color: "pink",
    backgroundColor: "black",
}


function doSomthing() {
    console.log("Work!");
    
}
function doSomthing2(event) {
    console.log("Work mouse!");
    console.log(event);
}


export default function Button() {
    return (
        <div>
            <button onClick={doSomthing} style={styles}>Click me!</button>
            <p
                style={{ color: "red" }}
                onMouseOver={doSomthing2}
            >
                Hover over me!  Hover over me!  Hover over me!  Hover over me!
                Hover over me!  Hover over me!  Hover over me!  Hover over me!
                Hover over me!  Hover over me!  Hover over me!
                Hover over me!  Hover over me!  Hover over me!  Hover over me!
            </p>


        </div>
    )
}
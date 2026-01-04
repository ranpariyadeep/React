
function Price({oldPrice,newPrice}){
    let olsStyles = {
            textDecorationLine: "line-through",
    };
    let newStyles ={
           fontWeight: "bold",
    };
    let styles = {
           backgroundColor: "#e0c367",
           height: "30px",
           borderBottomLeftRadius: "14px",
           borderBottomRightRadius: "14px"
    };
    return(
        <div style={styles} >
            <span style={olsStyles}> {oldPrice} </span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}

export default Price;
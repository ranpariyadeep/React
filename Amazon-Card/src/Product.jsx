import "./Product.css";

import Price from "./Price.jsx";
function Product({title, idx}){
    let oldPrices =["39","67","45","99"];
    let newPrices =["29","57","33","69"];
    let description =[["8,000 DPI","5 Programmable Buttons"],["Intuitive touch surface","Designed for iPad Pro"],["Intuitive touch surface","Designed for iPad Pro"],["Wireless Mouse 2.4GHz","Optical Orientation"]];

    return(
        <div className="Product">
       <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />

        </div>
    );
}

export default Product;
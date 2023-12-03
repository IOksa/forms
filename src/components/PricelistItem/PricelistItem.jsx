import css from "./PricelistItem.module.css";

const PricelistItem =({item})=>{

    const {id, description, price}=item;
    let formatPrice=price;
    if(!isNaN(Number(price))){
        if(Number(price)===0){
            formatPrice="";
        }else{
            formatPrice=Number(price).toLocaleString(("en-IN"));
         }
    }  

    return(
        <>
            <div className={css.pricelistId}><span>{id}</span></div>
            <div className={css.pricelistDescription}><span>{description}</span></div>
            <div className={css.pricelistPrice}><span>{formatPrice}</span></div>
        </>
    );

}

export default PricelistItem;
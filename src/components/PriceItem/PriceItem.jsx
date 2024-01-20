import css from "./PriceItem.module.css";

const PriceItem =({item})=>{

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
            <div className={id%2===0 ? css.pricelistItemWrapperEven: css.pricelistItemWrapperOdd}>
                <div className={css.pricelistDescription}>
                    <span className={css.descriptionText}>{description}</span>
                </div>
                <div className={css.priceWrapper}>
                    {/* <div className={id%2===0 ? css.firstCircleEven: css.firstCircleOdd}> */}
                        {/* <div className={id%2===0 ? css.secondCircleEven: css.secondCircleOdd}> */}
                            <span className={css.priceText}>{formatPrice} 
                                <span className={css.descriptionText}> грн.</span>
                            </span>
                        {/* </div> */}
                         
                    {/* </div> */}
                </div>
            </div>
        </>
    );

}

export default PriceItem;
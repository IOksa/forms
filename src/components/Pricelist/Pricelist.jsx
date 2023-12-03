
import pricelist from "../../data/price.json";
import PricelistItem from "../PricelistItem/PricelistItem";
import css from "./Pricelist.module.css";

const Pricelist = ()=>{
    let halfArray=0;
    if(pricelist?.length>0){
        halfArray=Math.ceil(pricelist.length/2);
    }
    
    return (
        <section id="pricelist" className={css.pricelist}>
            <div className="container">
                <h2 className={css.pricelistTitle}>Наші ціни</h2>
                <div className={css.pricelistWrapper}>
                    <ul className={css.pricelistList}>
                        <li className={css.pricelistItem}>
                            <PricelistItem item={{id: "№ з/п", description: "Найменування", price: "Ціна, грн."}}/>
                        </li>
                        
                        {pricelist?.length>0 && pricelist.filter(item => item.id<=halfArray).map(item=>(
                            <li key={item.id} className={css.pricelistItem} >
                                <PricelistItem item={item}/>
                            </li>
                            ))}
                        {/* {pricelist?.length>0 && pricelist.map(item => (
                            <li key={item.id} className={css.pricelistItem} >
                                <PricelistItem item={item}/>
                            </li>
                            ))} */}
                    </ul>
                    <ul className={css.pricelistList}>
                        <li className={css.pricelistItem}>
                            <PricelistItem item={{id: "№ з/п", description: "Найменування", price: "Ціна, грн."}}/>
                        </li>
                        
                       
                        {pricelist?.length>0 && pricelist.filter(item => item.id>halfArray).map(item=>(
                            <li key={item.id} className={css.pricelistItem} >
                                <PricelistItem item={item}/>
                            </li>
                            ))} 

                    </ul>
                </div>
            </div>
        </section>
        
    );

}

export default Pricelist;
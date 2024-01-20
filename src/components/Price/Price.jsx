import pricelist from "../../data/price.json";
import PricelistItem from "../PriceItem/PriceItem";
import css from "./Price.module.css";

const Price = ()=>{
    
    return (
        <section id="price" className={css.pricelist}>
            <div className="container">
                <h2 className="section-title">Прейскурант</h2>
                <div className={css.pricelistWrapper}>
                    <ul className={css.pricelistList}>
                        {pricelist?.length>0 && pricelist.map(item => (
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

export default Price;
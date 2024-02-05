import {RotatingLinesSpinner} from "../Spinner/RotatingLinesSpinner";
import icons from '../../assets/icons/icons.svg';
import css from "./Button.module.css";

const Button = ({ type, caption, disabled=false, isClickBut=false, isFetchOk=false,openModal }) => {
    
    if(isClickBut || isFetchOk){
        disabled=true;
    }
      
    return (
        <>
           
            <button type={type} disabled={disabled} onClick={openModal} className={css.button}>
                {isClickBut ? (<RotatingLinesSpinner/>) : 
                isFetchOk ?
                    (<svg className={css.icon} width="22px" height="22px">
                        <use href={`${icons}#icon-check`}></use>
                    </svg>)
                    : (`${caption}`)} 
               
            </button>
          
        </>
    );
};

export default Button;
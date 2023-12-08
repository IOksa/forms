import css from "./Button.module.css";

const Button = ({ type, caption, disabled=false}) => {

    return (
        <>
            <button type={type} className={css.button} disabled={disabled}>
                {caption}
            </button>
        </>
    );
};

export default Button;

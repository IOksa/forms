import css from "./Button.module.css";

const Button = ({ type, caption}) => {

    return (
        <>
            <button type={type} className={css.button}>
                {caption}
            </button>
        </>
    );
};

export default Button;

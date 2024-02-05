import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button";
import useLocalStorage from "hooks/useLocalStorage";
import icons from '../../assets/icons/icons.svg';
import css from "../CallForm/CallForm.module.css";

const LS_CHECKBOX_KEY='checkbox';

const Checkbox = () => {
    const [policy, setPolicy] = useLocalStorage (LS_CHECKBOX_KEY, false);

    const handleChange = (evt) => {
        const { checked } = evt.target;   
        setPolicy(checked); 
     };

   
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!policy) {
            toast.error(
                `Поставте "V" у полі "Погоджуюся з Політикою конфіденційності"`,
                { duration: 3000, position: "top-center" }
            );
        } else {
                     
            setPolicy(false);
        }
    };

    return (
        <div className={css.wrapper}>
            <Toaster />
            <h2>Checkbox из localstorage</h2>
            <form className={css.formCall} onSubmit={handleSubmit}>
                <h3 className={css.formTitle}>
                    Залиште свої дані,
                    <br /> ми вам передзвонимо
                </h3>
               
                <div className={css.butWrapper}>
                    <Button type="submit" caption="Передзвонити" disabled={!policy}/>
                </div>

                <div className={css.policyWrapper}>
                    <input
                        type="checkbox"
                        name="policy"
                        id="policy"
                        className={css.checkboxPolicy}
                        checked={policy}
                        onChange={handleChange}
                    />
                    <svg width="16" height="15" className={css.checkboxIcon}>
                        <use href={`${icons}#icon-check`}></use>
                    </svg>
                    <label htmlFor="policy" className={css.policyLabel}>
                        Погоджуюся з
                        <a
                            href="/"
                            className={css.policyLink}
                        >
                            {" "}
                            Політикою конфіденційності
                        </a>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Checkbox;
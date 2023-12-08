import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button";
import services from "../../data/services";
import icons from '../../assets/icons/icons.svg';
import useLocalStorage from "hooks/useLocalStorage";
import css from "../CallForm/CallForm.module.css";

const LS_KEY='form';

const Form3 = () => {
    const initialValues = {name: "", surname: "", phone: "", servicethree: "", comment: "", policythree:false};
    const [data, setData] = useLocalStorage (LS_KEY, initialValues);
    const {name, surname, phone, servicethree, commentthree, policythree}=data;

    const handleChange = (evt) => {
        const { name, value, type, checked} = evt.target;    
        setData(prevState=>({...prevState, [name]: type === "checkbox" ? checked : value})); 
     };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (servicethree === "") {
            toast.error(`Оберіть потрібну послугу з переліку`, {
                duration: 3000,
                position: "top-center",
            });
        } else if (!policythree) {
            toast.error(
                `Поставте "V" у полі "Погоджуюся з Політикою конфіденційності"`,
                { duration: 3000, position: "top-center" }
            );
        } else {
            console.log(
                `Ім'я: ${name}\nПрізвище: ${surname}\nТелефон: ${phone}\nПослуга: ${servicethree}\nКоментарій: ${commentthree}`
            );

            setData({name: "", surname: "", phone: "", servicethree: "", commentthree: "", policythree: ""});
           
        }
    };

    return (
        <div className={css.wrapper}>
            <Toaster />
            <h2>Форма с объектом useState</h2>
            <p>Для select и textarea может выдавать ошибку</p>
            <p>A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.</p>
            <form className={css.formCall} onSubmit={handleSubmit}>
                <h3 className={css.formTitle}>
                    Залиште свої дані,
                    <br /> ми вам передзвонимо
                </h3>
                <label className={css.formLabel}>
                    <input
                        type="text"
                        className={css.formInput}
                        name="name"
                        placeholder="Введіть ваше ім'я"
                        minLength="2"
                        pattern="[A-Za-zА-Яа-яІіїЇЄє'\-]{2,50}"
                        title="Ім'я повинно містити тільки літери та  апостроф ', довжина імені від 2 до 50 символів"
                        autoFocus
                        required
                        value={name}
                        onChange={handleChange}
                    />
                </label>

                <label className={css.formLabel}>
                    <input
                        type="text"
                        className={css.formInput}
                        name="surname"
                        placeholder="Введіть ваше прізвище"
                        required
                        minLength="2"
                        pattern="[A-Za-zА-Яа-яІіЇїЄє'\-]{2,70}"
                        title="Прізвище повинно містити тільки літери, '-', апостроф ', довжина імені від 2 до 70 символів"
                        value={surname}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="servicethree" className={css.formLabel}>
                    <select
                        id="servicethree"
                        name="servicethree"
                        className={css.formSelect}
                        value={servicethree}
                        onChange={handleChange}
                    >
                        <option value="">
                            Оберіть послугу
                        </option>
                        {services?.length > 0 &&
                            services.map(({ id, title }) => (
                                <option key={id} value={title}>
                                    {title}
                                </option>
                            ))}
                    </select>
                </label>
                <label className={css.formLabel}>
                    <input
                        type="tel"
                        className={css.formInput}
                        name="phone"
                        pattern="[+]{1}[0-9]{12}"
                        title="Телефонний номер повинен починатися з '+' та мати 12 цифр"
                        placeholder="Введіть телефон +380XXXXXXXXX"
                        required
                        value={phone}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="commentthree">
                    <textarea
                        className={css.formTextarea}
                        name="commentthree"
                        id="commentthree"
                        placeholder="Введіть текст повідомлення"
                        value={commentthree}
                        onChange={handleChange}
                    />
                </label>
                <div className={css.butWrapper}>
                    <Button type="submit" caption="Передзвонити" />
                </div>

                <div className={css.policyWrapper}>
                    <input
                        type="checkbox"
                        name="policythree"
                        id="policythree"
                        className={css.checkboxPolicy}
                        checked={policythree}
                        onChange={handleChange}
                    />
                    <svg width="16" height="15" className={css.checkboxIcon}>
                        <use href={`${icons}#icon-check`}></use>
                    </svg>
                    <label htmlFor="policythree" className={css.policyLabel}>
                        Погоджуюся з
                        <a
                            href="./PrivatePolicy.docx"
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

export default Form3;

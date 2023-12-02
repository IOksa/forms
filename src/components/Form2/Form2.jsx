import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button";
import services from "../../data/services";
import icons from '../../assets/icons/icons.svg';
import css from "../CallForm/CallForm.module.css";

const Form2 = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const {name, surname, phone,servicetwo,commenttwo, policytwo}=formJson;

        console.log("formJson=",formJson);

        if (servicetwo === "") {
            toast.error(`Оберіть потрібну послугу з переліку`, {
                duration: 3000,
                position: "top-center",
            });
        } else if (policytwo!=="on") {
            toast.error(
                `Поставте "V" у полі "Погоджуюся з Політикою конфіденційності"`,
                { duration: 3000, position: "top-center" }
            );
        } else {
            console.log(
                `Ім'я: ${name}\nПрізвище: ${surname}\nТелефон: ${phone}\nПослуга: ${servicetwo}\nКоментарій: ${commenttwo}`
            );

     
        }
    };

    return (
        <div className={css.wrapper}>
            <Toaster />
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
                        
                    />
                </label>
                <label htmlFor="servicetwo" className={css.formLabel}>
                    <select
                        id="servicetwo"
                        name="servicetwo"
                        className={css.formSelect}
            
                 
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
                   
                        
                    />
                </label>

                <label htmlFor="commenttwo">
                    <textarea
                        className={css.formTextarea}
                        name="commenttwo"
                        id="commenttwo"
                        placeholder="Введіть текст повідомлення"
                 
                     
                    />
                </label>
                <div className={css.butWrapper}>
                    <Button type="submit" caption="Передзвонити" />
                </div>

                <div className={css.policyWrapper}>
                    <input
                        type="checkbox"
                        name="policytwo"
                        id="policytwo"
                        className={css.checkboxPolicy}
                        defaultChecked={false}
                    />
                    <svg width="16" height="15" className={css.checkboxIcon}>
                        <use href={`${icons}#icon-check`}></use>
                    </svg>
                    <label htmlFor="policytwo" className={css.policyLabel}>
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

export default Form2;
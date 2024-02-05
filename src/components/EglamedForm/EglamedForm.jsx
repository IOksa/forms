import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from 'framer-motion';
import Button from "../Button/Button";
import services from "../../data/services.json";
import {animation} from "../../data/animation";
import * as API from "../../services/api";
import useLocalStorage from "../../hooks/useLocalStorage";
import icons from '../../assets/icons/icons.svg';
import css from "./EglamedForm.module.css";

const LS_KEY='eglcall_form';

const EglamedForm = () => {
    const initialValues = {name: "", surname: "", phone: "", eglservice: "", comment: "", egleglpolicy: false};

    const [data, setData] = useLocalStorage(LS_KEY, initialValues);
    const {name, surname, phone, eglservice, comment, eglpolicy}=data;
    const [isClickBut, setIsClickBut]=useState(false);
    const [isFetchOk, setIsFetchOk]=useState(false);
   
    // localStorage для next.js  - добавить то, что в useEffect
    // useEffect(() => {
    //     const storedData = JSON.parse(window.localStorage.getItem(LS_KEY)) || initialValues;
    //     setData(storedData);
    // }, [setData]);
   
    const handleChange = (evt) => {
        const { name, value, type, checked } = evt.target;   
        setData(prevState=>({...prevState, [name]: type === "checkbox" ? checked : value}));   
    };
  

    const handleSubmit = (e) => {
        e.preventDefault();
  
        if (eglservice === "") {
            toast.error(`Оберіть потрібну послугу з переліку`, {
                duration: 3000,
                position: "top-center",
            });
        } else 
        if (!eglpolicy) {
            toast.error(
                `Поставте "V" у полі "Погоджуюся з Політикою конфіденційності"`,
                { duration: 3000, position: "top-center" }
            );
        } else {
            const message = `Ім'я: ${name}\nПрізвище: ${surname}\nТелефон: ${phone}\nПослуга: ${eglservice}\nКоментарій: ${comment}`;
            
            setIsClickBut(true);
    
            API.sendMessageToTelegram(message)
            .then(response=>{
                setTimeout(() => {
                    setIsClickBut(false);
                }, 500);
            
                setIsFetchOk(true);
                setTimeout(() => {
                    setIsFetchOk(false);
                 }, 4000);
                
            })
            .catch(error=>{
                const errorMessage="Ой! Щось пішло не так :( Перезавантажте сторінку та спробуйте ще раз.\n";
                toast.error(errorMessage);
                
                setIsClickBut(false);
              })
            .finally(()=> {
                setData(initialValues);              
            });
        }
    };

    return(
        <section id="callform" className={css.callform}>
            <div className="container">
                <motion.div 
                    className={css.wrapper}

                    initial="hide"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={animation}>

                    <Toaster />
                    <form className={css.formCall} onSubmit={handleSubmit} id="callform">
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
                                pattern="[A-Za-zА-Яа-яІіїЇЄєЁё'\-]{2,50}"
                                title="Ім'я повинно містити тільки літери та  апостроф ', довжина імені від 2 до 50 символів"
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
                                pattern="[A-Za-zА-Яа-яІіЇїЄєЁё'\-]{2,70}"
                                title="Прізвище повинно містити тільки літери, '-', апостроф ', довжина імені від 2 до 70 символів"
                                value={surname}
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="eglservice" className={css.formLabel}>
                            <select
                                id="eglservice"
                                name="eglservice"
                                className={css.formSelect}
                                value={eglservice}
                                onChange={handleChange}
                
                            >
                                <option value="" disabled>
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

                        <label htmlFor="comment">
                            <textarea
                                className={css.formTextarea}
                                name="comment"
                                id="comment"
                                placeholder="Введіть текст повідомлення"
                                value={comment}
                                onChange={handleChange}
                            />
                        </label>
                        <div className={css.butWrapper}>
                            <div className={css.butWrap}>
                            <Button type="submit" caption="Передзвонити" isClickBut={isClickBut} isFetchOk={isFetchOk} />
                            </div>
                        </div>

                        <div className={css.policyWrapper}>
                            <input
                                type="checkbox"
                                name="eglpolicy"
                                id="eglpolicy"
                                className={css.checkboxPolicy}
                                checked={eglpolicy}
                                onChange={handleChange}
                            />
                            <svg width="16" height="15" className={css.checkboxIcon}>
                                <use href={`${icons}#icon-check`}></use>
                            </svg>
                            <label htmlFor="eglpolicy" className={css.policyLabel}>
                                Погоджуюся з
                                <a
                                    href="./Privatepolicy.docx"
                                    className={css.policyLink}
                                >
                                    {" "}
                                    Політикою конфіденційності
                                </a>
                            </label>
                        </div>
                    </form>
                {isFetchOk && <p className={css.text}>Дані відправлено успішно</p>}
                </motion.div>
            </div>
        </section>
    );
};

export default EglamedForm;

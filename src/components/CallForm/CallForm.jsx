import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button";
import services from "../../data/services";
import icons from '../../assets/icons/icons.svg';
import css from "./CallForm.module.css";

const CallForm = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [comment, setComment] = useState("");
    const [policy, setPolicy] = useState(false);

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        switch (name) {
            case "name":
                setName(value);
                break;

            case "surname":
                setSurname(value);
                break;

            case "phone":
                setPhone(value);
                break;

            case "service":
                setService(value);
                break;

            case "comment":
                setComment(value);
                break;

            default:
                console.warn(`Тип поля name - ${name} не обрабатывается`);
        }
    };

    const handleChangeCheckbox = () => {
        setPolicy(!policy);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (service === "") {
            toast.error(`Оберіть потрібну послугу з переліку`, {
                duration: 3000,
                position: "top-center",
            });
        } else if (!policy) {
            toast.error(
                `Поставте "V" у полі "Погоджуюся з Політикою конфіденційності"`,
                { duration: 3000, position: "top-center" }
            );
        } else {
            console.log(
                `Ім'я: ${name}\nПрізвище: ${surname}\nТелефон: ${phone}\nПослуга: ${service}\nКоментарій: ${comment}`
            );

            setName("");
            setSurname("");
            setPhone("");
            setService("");
            setComment("");
            setPolicy(false);
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
                <label htmlFor="service" className={css.formLabel}>
                    <select
                        id="service"
                        name="service"
                        className={css.formSelect}
                        value={service}
                        onChange={handleChange}
                    >
                        <option value="" disabled="disabled">
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
                        placeholder="Введіть телефон +XXXXXXXXXXXX"
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
                    <Button type="submit" caption="Передзвонити" />
                </div>

                <div className={css.policyWrapper}>
                    <input
                        type="checkbox"
                        name="policy"
                        id="policy"
                        className={css.checkboxPolicy}
                        checked={policy}
                        onChange={handleChangeCheckbox}
                    />
                    <svg width="16" height="15" className={css.checkboxIcon}>
                        <use href={`${icons}#icon-check`}></use>
                    </svg>
                    <label htmlFor="policy" className={css.policyLabel}>
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

export default CallForm;

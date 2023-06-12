import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
let BASE_URL: string = "http://localhost:3103";

interface AddClientProps { }

type Inputs = {
    client: string;
    date: string;
    email: string;
    password: number;
    city: string;
    status: string;
    telNumber: number;
    branch: string;
    secTelNumber: number;
    hotel: string
    from_city: string
    to_city: string
    exampleRequired: string;
};

type typeUser = {
    client: string;
    date: string;
    email: string;
    password: number;
    city: string;
    status: string;
    telNumber: number;
    branch: string;
    secTelNumber: number;
    hotel: string
    from_city: string
    to_city: string
    id: number;
};

const AddClient: React.FC<AddClientProps> = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {

        axios.post(BASE_URL + "/customers", data)
            .then((res) => console.log(res.data));
    };

    return (
        <div>
            <div className="flex items-center justify-between max-w-[1470px] m-auto px-6 mb-[50px]">
                <div className="w-[440px] flex items-center justify-between">
                    <h1 className="text-[36px] text-[#000] font-semibold">
                        Добавить клиента
                    </h1>
                </div>
            </div>

            <div className="bg-[#F1F2F4] flex items-center justify-center py-5">
                <div className="w-[1280px] bg-[#fff] px-10 py-6 rounded-[14px]">
                    <span className="text-[22px] text-[#22B5DC] ">Общая информация</span>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-[30px] flex justify-between">
                            <div className="text-[#333333] text-[18px]">
                                <label>
                                    <p className="font-semibold">ФИО</p>
                                    <input
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]"
                                        type="text"
                                        {...register("client", { pattern: /^[A-Za-z]+$/i, required: true, maxLength: 20 })}
                                    />
                                </label>

                                <div className="flex justify-between items-center mt-[20px]">
                                    <label>
                                        <p className="font-semibold">Дата рождения</p>
                                        <input
                                            className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333] select-none"
                                            type="date"
                                            {...register("date")}
                                        />
                                    </label>
                                    <label>
                                        <p className="font-semibold">Город проживания</p>
                                        <input
                                            className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]"
                                            type="text"
                                            {...register("city", { pattern: /^[A-Za-z]+$/i, required: true, maxLength: 20 })}
                                        />
                                    </label>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mt-[20px]">
                                        <label>
                                            <p className="font-semibold">Телефон пациента</p>
                                            <input
                                                className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]"
                                                type="number"
                                                {...register("telNumber", { required: true, pattern: /^[0-9+-]+$/ })}
                                            />
                                        </label>
                                        <label>
                                            <p className="font-semibold">{errors.email ? <span className="text-[red] text-[12px]">Почта должна включать в себя @</span> : 'e-mail'}</p>
                                            <input
                                                className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]"
                                                type="email"
                                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                            />
                                        </label>
                                    </div>
                                    <label>
                                        <input
                                            className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]"
                                            type="number"
                                            {...register("secTelNumber", { required: true, pattern: /^[0-9+-]+$/ })}
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="text-[#333333] text-[18px]">
                                <label>
                                    <p className="font-semibold">Статус</p>
                                    {/* <select
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333] mb-[20px]"
                                        {...register("status", { pattern: /^[A-Za-z]+$/i })}
                                    >
                                        <option value="">В поцессе</option>
                                        <option value="">Оплачен</option>
                                        <option value="">Прилетел</option>
                                    </select> */}
                                    <input
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]"
                                        type="text"
                                        {...register("status", { pattern: /^[A-Za-z]+$/i })}
                                    />
                                </label>

                                <label>
                                    <p className="font-semibold">Филиал</p>
                                    {/* <select
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333] mb-[20px]"
                                        {...register("branch", { pattern: /^[A-Za-z]+$/i })}
                                    >
                                        <option value="">Нью Йорк</option>
                                        <option value="">Анкара</option>
                                        <option value="">Берлин</option>
                                        <option value="">Осло</option>
                                        <option value="">Грамаду</option>
                                        <option value="">Стамбул</option>
                                    </select> */}
                                    <input
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]"
                                        type="text"
                                        {...register("branch", { pattern: /^[A-Za-z]+$/i })}
                                    />
                                </label>

                                <div className="flex justify-between items-center mt-[20px]">
                                    <label>
                                        <p className="font-semibold">Вылет из города</p>
                                        <input
                                            className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]"
                                            type="text"
                                            {...register("from_city", { pattern: /^[A-Za-z]+$/i })}

                                        />
                                    </label>
                                    <label>
                                        <p className="font-semibold">Город посещения</p>
                                        <input
                                            className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]"
                                            type="text"
                                            {...register("to_city", { pattern: /^[A-Za-z]+$/i })}
                                        />
                                    </label>
                                </div>

                                <label>
                                    <p className="font-semibold">Отель</p>
                                    {/* <select
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333] mb-[20px]"
                                        {...register("hotel", { pattern: /^[A-Za-z]+$/i })}
                                    >
                                        <option value="">Хьюстон</option>
                                        <option value="">Мумбаи</option>
                                        <option value="">Регистон</option>
                                        <option value="">Six Senses Laamu</option>
                                        <option value="">Bless Hotel</option>
                                        <option value="">Hotel Colline de France</option>
                                    </select> */}
                                    <input
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]"
                                        type="text"
                                        {...register("hotel", { pattern: /^[A-Za-z]+$/i })}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="w-[440px] m-auto  flex justify-between mt-[50px]">
                            <button className="w-[200px] py-5 bg-[#4992CC] text-[#fff] font-semibold rounded-[8px]">
                                Сохранить
                            </button>
                            <Link to={'/'}>
                                <button className="w-[200px] py-5 bg-[#EB5757] text-[#fff] font-semibold rounded-[8px]">
                                    Отменить
                                </button>
                            </Link>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClient;

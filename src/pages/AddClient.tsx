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
    city: string;
    telNumber: number;
    secTelNumber: number;
    from_city: string
    to_city: string
    exampleRequired: string;
};

type typeHotel = {
    id: number
    city: string;
    hotelName: string;
    telNumber: number;
    pricePerNight: string
    exampleRequired: string;
};


const AddClient: React.FC<AddClientProps> = () => {
    const [hotel, setHotel] = useState<Array<typeHotel>>([]);
    const [branches, setBranches] = useState<string | undefined>();
    const [statuses, setStatuses] = useState<string | undefined>();
    const [hotels, setHotels] = useState<string | undefined>();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {

        data = {
            branch: branches,
            status: statuses,
            hotel: hotels,
            cost: 230000,
            takeOff: 'В: 30 января, 2023 | 06:35',
            arrive: 'П: 31 января, 2023 | 14:35',
            ...data
        };

        axios.post(BASE_URL + "/customers", data)
            .then((res) => console.log(res.data));
    };

    useEffect(() => {

        const getHotels = async () => {
            const res = await axios.get(BASE_URL + "/hotels")
            setHotel(res.data);
        }

        getHotels()

    }, []);


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
                                    <select
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333] mb-[20px]"
                                        onClick={(e: any) => setStatuses(e.target.value)}
                                    >
                                        <option value="Новое обращение">Новое обращение</option>
                                        <option value="Предоплата">Предоплата</option>
                                        <option value="Оплачен полностью">Оплачен полностью</option>
                                        <option value="Вылетел">Вылетел</option>
                                        <option value="Проблемы с клиентом">Проблемы с клиентом</option>
                                        <option value="Прилетел">Прилетел</option>
                                    </select>
                                </label>

                                <label>
                                    <p className="font-semibold">Филиал</p>
                                    <select
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333] mb-[20px]"
                                        onClick={(e: any) => setBranches(e.target.value)}
                                    >
                                        <option value="Анкара">Анкара</option>
                                        <option value="Нью Йорк">Нью Йорк</option>
                                        <option value="Берлин">Берлин</option>
                                        <option value="Осло">Осло</option>
                                        <option value="Грамаду">Грамаду</option>
                                        <option value="Стамбул">Стамбул</option>
                                    </select>
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
                                    <select
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333] mb-[20px]"
                                        onClick={(e: any) => setHotels(e.target.value)}
                                    >
                                        {
                                            hotel.map(item => <option key={item.id} value="The Ankara Hotel">{item.hotelName}</option>)
                                        }
                                    </select>
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

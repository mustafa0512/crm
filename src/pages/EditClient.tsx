import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
let BASE_URL: string = "http://localhost:3103";



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

type typeClient = {
    id: number
    client: string;
    date: string;
    email: string;
    city: string;
    status: string;
    telNumber: number;
    branch: string;
    secTelNumber: number;
    hotel: string
    from_city: string
    to_city: string
    cost: number
    takeOff: string
    arrive: string
    exampleRequired: string;
};


interface EditClientProps {

}

const EditClient: React.FC<EditClientProps> = () => {
    const [hotel, setHotel] = useState<Array<typeHotel>>([]);
    const [person, setPerson] = useState<Array<typeClient>>([]);
    const [branches, setBranches] = useState<string | undefined>();
    const [statuses, setStatuses] = useState<string | undefined>();
    const [hotels, setHotels] = useState<string | undefined>();

    const id: any = window.location.href.split("/").at(-1);
    const filPerson = person.filter(item => item.id === +id)

    console.log(filPerson);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {

        axios.patch(BASE_URL + `/customers/${id}`, {
            status: statuses,
            branch: branches,
            hotel: hotels,
            client: data.client,
            date: data.date,
            city: data.city,
            telNumber: data.telNumber,
            from_city: data.from_city,
            to_city: data.to_city,
            secTelNumber: data.secTelNumber
        })
            .then(res => console.log(res.data))

    };

    useEffect(() => {

        const getHotels = async () => {
            const res = await axios.get(BASE_URL + "/hotels")
            setHotel(res.data);
        }

        getHotels()

    }, []);

    useEffect(() => {

        const getUsers = async () => {
            const res = await axios.get(BASE_URL + "/customers")
            setPerson(res.data);
        }

        getUsers()

    }, []);

    const navigate = useNavigate();
    const getLocalUser: any = localStorage.getItem("user")

    JSON.parse(getLocalUser)

    if (getLocalUser?.length === 0 || getLocalUser === null) {
        navigate('/signin')
    }

    return (
        <div>
            <div className="flex items-center justify-between max-w-[1470px] m-auto px-6 mb-[50px]">
                <div className="min-w-[130px] flex items-center justify-between">
                    <Link to={'/'} >
                        <img src="/img/chevron-left.svg" alt="" />
                    </Link>
                    <h1 className="text-[36px] ml-[20px] text-[#000] font-semibold">
                        {filPerson[0]?.client}
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
                                        placeholder={filPerson[0]?.client}
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
                                            placeholder={filPerson[0]?.city}
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
                                                value={filPerson[0]?.telNumber}
                                            />
                                        </label>
                                        <label>
                                            <p className="font-semibold">{errors.email ? <span className="text-[red] text-[12px]">Почта должна включать в себя @</span> : 'e-mail'}</p>
                                            <input
                                                className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]"
                                                type="email"
                                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                                placeholder={filPerson[0]?.email}
                                            />
                                        </label>
                                    </div>
                                    <label>
                                        <input
                                            className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]"
                                            type="number"
                                            {...register("secTelNumber", { required: true, pattern: /^[0-9+-]+$/ })}
                                            value={filPerson[0]?.telNumber}
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
                                        <option value={filPerson[0]?.status}>{filPerson[0]?.status}</option>
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
                                        <option value={filPerson[0]?.branch} >{filPerson[0]?.branch}</option>
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
                                            placeholder={filPerson[0]?.from_city}

                                        />
                                    </label>
                                    <label>
                                        <p className="font-semibold">Город посещения</p>
                                        <input
                                            className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]"
                                            type="text"
                                            {...register("to_city", { pattern: /^[A-Za-z]+$/i })}
                                            placeholder={filPerson[0]?.to_city}
                                        />
                                    </label>
                                </div>

                                <label>
                                    <p className="font-semibold">Отель</p>
                                    <select
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333] mb-[20px]"
                                        onClick={(e: any) => setHotels(e.target.value)}
                                    >
                                        <option value={filPerson[0]?.hotel} >{filPerson[0]?.hotel}</option>

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

export default EditClient;
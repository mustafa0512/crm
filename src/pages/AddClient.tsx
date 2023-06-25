import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
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

type typeBranch = {
    id: number
    city: string;
    branchName: string;
    telNumber: number;
    exampleRequired: string;
}

const AddClient: React.FC<AddClientProps> = () => {
    const [hotel, setHotel] = useState<Array<typeHotel>>([]);
    const [branches, setBranches] = useState<string | undefined>();
    const [statuses, setStatuses] = useState<string | undefined>();
    const [hotels, setHotels] = useState<string | undefined>();
    const [branch, setBranch] = useState<Array<typeBranch>>([]);

    useEffect(() => {

        const getBranch = async () => {
            const res = await axios.get(BASE_URL + "/branches")
            setBranch(res.data);
        }

        getBranch()

    }, []);
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

    const { t } = useTranslation()

    const navigate = useNavigate();
    const getLocalUser: any = localStorage.getItem("user")

    JSON.parse(getLocalUser)

    if (getLocalUser?.length === 0 || getLocalUser === null) {
        navigate('/signin')
    }


    return (
        <div>
            <div className="flex items-center justify-between max-w-[1470px] m-auto px-6 mb-[50px]">
                <div className="w-[440px] flex items-center justify-between">
                    <h1 className="text-[36px] text-[#000] font-semibold">
                        {t('addClient')}
                    </h1>
                </div>
            </div>

            <div className="bg-[#F1F2F4] flex items-center justify-center py-5">
                <div className="w-[1280px] bg-[#fff] px-10 py-6 rounded-[14px]">
                    <span className="text-[22px] text-[#22B5DC] ">{t('info')}</span>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-[30px] flex justify-between">
                            <div className="text-[#333333] text-[18px]">
                                <label>
                                    <p className="font-semibold">{t('name')}</p>
                                    <input
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]"
                                        type="text"
                                        {...register("client", { pattern: /^[A-Za-z]+$/i, required: true, maxLength: 20 })}
                                    />
                                </label>

                                <div className="flex justify-between items-center mt-[20px]">
                                    <label>
                                        <p className="font-semibold">{t('birthDade')}</p>
                                        <input
                                            className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333] select-none"
                                            type="date"
                                            {...register("date")}
                                        />
                                    </label>
                                    <label>
                                        <p className="font-semibold">{t('liveCity')}</p>
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
                                            <p className="font-semibold">{t('patuentPhone')}</p>
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
                                    <p className="font-semibold">{t('status')}</p>
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
                                    <p className="font-semibold">{t('branch')}</p>
                                    <select
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333] mb-[20px]"
                                        onClick={(e: any) => setBranches(e.target.value)}
                                    >
                                        {
                                            branch.map((item: any, inx: number) => <option key={inx} value={item.city}>{item.city}</option>)
                                        }
                                    </select>
                                </label>

                                <div className="flex justify-between items-center mt-[20px]">
                                    <label>
                                        <p className="font-semibold">{t('takeoff')}</p>
                                        <input
                                            className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]"
                                            type="text"
                                            {...register("from_city", { pattern: /^[A-Za-z]+$/i })}

                                        />
                                    </label>
                                    <label>
                                        <p className="font-semibold">{t('visit')}</p>
                                        <input
                                            className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]"
                                            type="text"
                                            {...register("to_city", { pattern: /^[A-Za-z]+$/i })}
                                        />
                                    </label>
                                </div>

                                <label>
                                    <p className="font-semibold">{t('hotel')}</p>
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
                                {t('save')}
                            </button>
                            <Link to={'/'}>
                                <button className="w-[200px] py-5 bg-[#EB5757] text-[#fff] font-semibold rounded-[8px]">
                                    {t('cancel')}
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

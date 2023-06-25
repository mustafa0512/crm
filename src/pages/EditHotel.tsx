import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
let BASE_URL: string = "http://localhost:3103";

interface EditHotelProps { }

type Inputs = {
    city: string;
    hotelName: string;
    telNumber: number;
    pricePerNight: string;
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

const EditHotel: React.FC<EditHotelProps> = () => {
    const [hotel, setHotel] = useState<Array<typeHotel>>([]);


    const id: any = window.location.href.split("/").at(-1);
    const filPerson = hotel.filter(item => item.id === +id)

    console.log(filPerson);

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {

        axios.patch(BASE_URL + `/customers/${id}`, {
            hotelName: data.telNumber,
            telNumber: data.telNumber,
            city: data.city,
            pricePerNight: data.pricePerNight

        })
            .then(res => console.log(res.data))
    };

    const delComment = () => {

        axios.delete(BASE_URL + `/hotels/${id}`)
            .then(res => console.log(res.data))

    }

    useEffect(() => {

        const getUsers = async () => {
            const res = await axios.get(BASE_URL + "/hotels")
            setHotel(res.data);
        }

        getUsers()

    }, []);

    const { t } = useTranslation()

    // --------


    const navigate = useNavigate();
    const getLocalUser: any = localStorage.getItem("user")

    JSON.parse(getLocalUser)

    if (getLocalUser?.length === 0 || getLocalUser === null) {
        navigate('/signin')
    }
    return (
        <div>
            <div className="flex items-center justify-between max-w-[1470px] m-auto px-6 mb-[50px]">
                <div className="w-[370px] flex items-center justify-between">
                    <Link to={'/hotel'} >
                        <img src="/img/chevron-left.svg" alt="" />
                    </Link>
                    <h1 className="text-[36px] text-[#000] font-semibold">
                        {filPerson[0]?.hotelName}
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
                                    <p className="font-semibold">{t('hotelName')}</p>
                                    <input
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]"
                                        type="text"
                                        placeholder={filPerson[0]?.hotelName}
                                        {...register("hotelName", { pattern: /^[A-Za-z]+$/i, required: true, maxLength: 20 })}
                                    />
                                </label>

                                <label>
                                    <p className="font-semibold mt-[20px]">{t('telNumber')}</p>
                                    <input
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]"
                                        type="number"
                                        value={filPerson[0]?.telNumber}
                                        {...register("telNumber", { required: true, pattern: /^[0-9+-]+$/ })}
                                    />
                                </label>

                                <div>

                                </div>
                            </div>

                            <div className="text-[#333333] text-[18px]">

                                <label>
                                    <p className="font-semibold">{t('city')}</p>
                                    <input
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]"
                                        type="text"
                                        placeholder={filPerson[0]?.city}
                                        {...register("city", { pattern: /^[A-Za-z]+$/i })}

                                    />
                                </label>
                                <label>
                                    <p className="font-semibold mt-[20px]">{t('perNight')}</p>
                                    <input
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]"
                                        type="number"
                                        placeholder={filPerson[0]?.pricePerNight}
                                        {...register("pricePerNight", { required: true, pattern: /^[0-9+-]+$/ })}
                                    />
                                </label>

                            </div>
                        </div>

                        <div className="w-[440px] m-auto  flex justify-between mt-[50px]">
                            <button className="w-[200px] py-5 bg-[#4992CC] text-[#fff] font-semibold rounded-[8px]">
                                {t('save')}
                            </button>
                            <Link to={'/hotel'}>
                                <button
                                    onClick={delComment}
                                    className="w-[200px] py-5 bg-[#EB5757] text-[#fff] font-semibold rounded-[8px]"
                                >
                                    {t('del')}
                                </button>
                            </Link>

                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default EditHotel;
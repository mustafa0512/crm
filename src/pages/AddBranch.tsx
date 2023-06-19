import React from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
let BASE_URL: string = "http://localhost:3103";

interface AddAgencyProps { }

type Inputs = {
    city: string;
    branchName: string;
    telNumber: number;
    exampleRequired: string;
};


const AddAgency: React.FC<AddAgencyProps> = () => {

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {

        axios.post(BASE_URL + "/branches", data)
            .then((res) => console.log(res.data));
    };

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
                        Добавить филиал
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
                                    <p className="font-semibold">Названия филиал</p>
                                    <input
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]"
                                        type="text"
                                        {...register("branchName", { pattern: /^[A-Za-z]+$/i, required: true, maxLength: 20 })}
                                    />
                                </label>

                                <label>
                                    <p className="font-semibold mt-[20px]">Номер</p>
                                    <input
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]"
                                        type="number"
                                        {...register("telNumber", { required: true, pattern: /^[0-9+-]+$/ })}
                                    />
                                </label>

                                <div>

                                </div>
                            </div>

                            <div className="text-[#333333] text-[18px]">

                                <label>
                                    <p className="font-semibold">Город</p>
                                    <input
                                        className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]"
                                        type="text"
                                        {...register("city", { pattern: /^[A-Za-z]+$/i })}

                                    />
                                </label>

                            </div>
                        </div>

                        <div className="w-[440px] m-auto  flex justify-between mt-[50px]">
                            <button className="w-[200px] py-5 bg-[#4992CC] text-[#fff] font-semibold rounded-[8px]">
                                Сохранить
                            </button>
                            <Link to={'/branches'}>
                                <button className="w-[200px] py-5 bg-[#EB5757] text-[#fff] font-semibold rounded-[8px]">
                                    Отменить
                                </button>
                            </Link>

                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default AddAgency;

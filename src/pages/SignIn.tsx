import axios from "axios";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
let BASE_URL: string = "http://localhost:3103";

interface SignInProps { }

type Inputs = {
    name: string;
    email: string;
    password: number;
    exampleRequired: string;
};

type typeUser = {
    name: string;
    email: string;
    password: number;
    id: number;
};

const SignIn: React.FC<SignInProps> = () => {

    const [user, setUser] = useState<Array<typeUser>>([]);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        user.filter(item => {
            if (item.email === data.email && item.password === data.password) {
                navigate('/')
                localStorage.setItem("user", JSON.stringify(data))
                localStorage.setItem("fullUser", JSON.stringify(item))
            } else if (item.email !== data.email || item.password !== data.password) {
                console.log('Проверьте правельно ли заполнили все')
            }
        })
    };

    useEffect(() => {
        axios.get(BASE_URL + "/users")
            .then((res) => setUser(res.data));
    }, []);

    return (
        <div>
            <div className="w-[800px] flex items-center justify-between rounded-[25px] overflow-hidden shadow-xl mt-[30px] m-auto">
                <img src="/img/signUpImg.png" alt="" />
                <div className="w-full flex flex-col items-center justify-between">
                    <div className="flex flex-col items-center mb-[30px]">
                        <img src="/img/logo.svg" alt="" />
                        <span className="text-[24px] font-medium mt-[10px]">
                            Войти в CRM
                        </span>
                        <p className="text-[#9FA2B4] text-[12px] mt-[10px]">
                            Введите свой адрес электоронной почты и пароль ниже
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="ml-[20px]">
                        <p className="text-[18px] font-semibold mt-[10px]">{errors.email ? <span className="text-[red] text-[12px]">Почта должна включать в себя @</span> : 'e-mail'}</p>
                        <input
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            className="w-[350px] text-[#9FA2B4] rounded-[10px] border-[1.5px] border-[#101010] py-2 px-4 mt-[10px]"
                            type="email"
                            placeholder="Введите свой e-mail"
                        />
                        <p className="text-[18px] font-semibold mt-[10px]">{errors.password ? <span className="text-[red] text-[12px]">Пароль должен включать в себя цифры, не менее 4 цифр</span> : 'Пароль'}</p>
                        <input
                            {...register("password", { required: true, pattern: /^[0-9+-]+$/, minLength: 4, maxLength: 12 })}
                            className="w-[350px] text-[#9FA2B4] rounded-[10px] border-[1.5px] border-[#101010] py-2 px-4 mt-[10px]"
                            type="password"
                            placeholder="Введите свой пароль"
                        />

                        <button className="w-[350px] bg-[#101010] rounded-[10px] text-[#fff] py-2 mt-[20px]">
                            Войти
                        </button>
                    </form>

                    <p className="text-[#9FA2B4] text-[14px] mt-[30px]">
                        Нету аккаунта?{" "}
                        <Link to={"/signup"}>
                            <span className="text-[#101010] font-medium">Sign Up</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

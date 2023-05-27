import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface SignInProps { }

let BASE_URL: string = 'http://localhost:3103'

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
}

const SignIn: React.FC<SignInProps> = () => {

    const [user, setUser] = useState<Array<typeUser>>([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {

        const userCheck = user.filter(item => {
            if (data.name === item.name || data.email === item.email) {
                console.log('Аккаунт уже сушествует');
            } else {
                axios.post(BASE_URL + '/users', data)
                    .then(res => console.log(res.data))
            }

        })

        return userCheck
    }




    useEffect(() => {
        axios.get(BASE_URL + '/users')
            .then(res => setUser(res.data))
    }, [])

    return (
        < div >
            <div className="w-[800px] flex items-center justify-between rounded-[25px] overflow-hidden shadow-xl mt-[30px] m-auto">
                <img src="/img/signUpImg.png" alt="" />
                <div className="w-full flex flex-col items-center justify-between">
                    <div className="flex flex-col items-center mb-[30px]">
                        <img src="/img/logo.svg" alt="" />
                        <span className="text-[24px] font-medium mt-[10px]">
                            Регистрация для CRM
                        </span>
                        <p className="text-[#9FA2B4] text-[12px] mt-[10px]">
                            Введите свое имя, адрес электоронной почты и пароль ниже
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="ml-[20px]">
                        <p className="text-[18px] font-semibold">{errors.name ? <span className="text-[red] text-[12px]">Имя не должно включать в себя пробелы и цифры</span> : 'Имя'}</p>
                        <input
                            className="w-[350px] text-[#9FA2B4] rounded-[10px] border-[1.5px] border-[#101010] py-2 px-4 mt-[10px]"
                            {...register("name", { pattern: /^[A-Za-z]+$/i, required: true, maxLength: 20 })}
                            type="test"
                            placeholder="Введите свое имя"
                        />
                        <p className="text-[18px] font-semibold mt-[10px]">{errors.email ? <span className="text-[red] text-[12px]">Почта должна включать в себя @</span> : 'e-mail'}</p>
                        <input
                            className="w-[350px] text-[#9FA2B4] rounded-[10px] border-[1.5px] border-[#101010] py-2 px-4 mt-[10px]"
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            type="email"
                            placeholder="Введите свой e-mail"
                        />
                        <p className="text-[18px] font-semibold mt-[10px]">{errors.password ? <span className="text-[red] text-[12px]">Пароль должен включать в себя цифры, не менее 4 цифр</span> : 'Пароль'}</p>
                        <input
                            className="w-[350px] text-[#9FA2B4] rounded-[10px] border-[1.5px] border-[#101010] py-2 px-4 mt-[10px]"
                            {...register("password", { required: true, pattern: /^[0-9+-]+$/, minLength: 4, maxLength: 12 })}
                            type="password"
                            placeholder="Введите свой пароль"
                        />
                        <button className="w-[350px] bg-[#101010] rounded-[10px] text-[#fff] py-2 mt-[20px]">
                            Зарегистрироваться
                        </button>


                    </form>

                    <p className="text-[#9FA2B4] text-[14px] mt-[10px]">
                        Уже есть аккаунт?{" "}
                        <Link to={"/signin"}>
                            <span className="text-[#101010] font-medium">Sign In</span>
                        </Link>
                    </p>


                </div>
            </div>
        </  div>
    );
};

export default SignIn;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
let BASE_URL: string = "http://localhost:3103";


interface BLogProps { }


type Inputs = {
    comment: string;
    exampleRequired: string;
};

const BLog: React.FC<BLogProps> = () => {
    const [areaValue, setAreaValue] = useState<string>();



    const navigate = useNavigate();
    const getLocalUser: any = localStorage.getItem("fullUser")

    const local_user = JSON.parse(getLocalUser)

    useEffect(() => {
        if (getLocalUser?.length === 0 || getLocalUser === null) {
            navigate('/signin')
        }
    }, [])



    const {
        register,
        handleSubmit
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        axios.post(BASE_URL + '/blog', data)
            .then(res => console.log(res.data))
    }


    return (
        <div className='flex items-center justify-center'>

            <div className='w-full h-full bg-[#F1F2F4FF] rounded-[14px] py-10'>

                <div className=' w-[700px] m-auto bg-[#fff]  py-6 px-6  rounded-[14px] overflow-hidden'>

                    <div className='flex items-center mb-[20px]'>
                        <div className='w-[50px] h-[50px] rounded-[50%] bg-[#C4CDD5] mr-[20px] '></div>

                        <div>
                            {/* <input type="file" /> */}
                            <p className='text-[20px] text-[#333333] font-semibold'>{local_user?.name}</p>
                            <span className='text-[#637381] text-[16x]'>{local_user?.email}</span>
                        </div>
                    </div>

                    <h1 className='text-[24px] text-center font-bold mb-[20px]'>Ваш коментарий</h1>

                    <p className='text-[18px] w-[94%] '>
                        {areaValue === '' ? 'Закрытое или открытое торговое пространство, включающее множество торговых точек (магазинов и т.д.) Бизнес-центр (лифты, стойка администрации, холл, прилифтовая зона)' : areaValue}
                    </p>
                </div>

                <div className=' w-[700px] m-auto mt-[50px] bg-[#fff] py-6 px-6  rounded-[14px]'>

                    <form action="" onSubmit={handleSubmit(onSubmit)}>

                        <label>
                            <p className="font-semibold">Напишите коментарий</p>
                            <textarea onKeyUp={(e: any) => setAreaValue(e.target.value)} {...register("comment")} className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-full min-h-[80px] h-fit outline-none py-2 px-3 text-[#333333]" ></textarea>
                        </label>

                        <div className='mt-[30px]'>
                            <button className='border-[#333333] border-[1px]  text-[#333333] w-[200px] py-2'>Сохранить</button>
                            <Link to={'/map'}>
                                <button className='bg-[#333333] text-[#fff] w-[200px] py-2 ms-3'>Выйти</button>
                            </Link>
                        </div>
                    </form>
                </div>


            </div>


        </div>
    );
};

export default BLog;
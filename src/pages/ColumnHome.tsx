import React from 'react';
import { Link } from 'react-router-dom';
import UserCart from '../components/UserCart';

interface ColumnHomeProps {

}


let colArr: any = [
    {
        name: 'Новое обращение',
        id: 1
    },
    {
        name: 'Предоплата',
        id: 2
    },
    {
        name: 'Оплачен полностью ',
        id: 3
    },
    {
        name: 'Вылетел',
        id: 4
    },
    {
        name: 'Проблемы с клиентом',
        id: 5
    },
    {
        name: 'Прилетел',
        id: 6
    },
]

const ColumnHome: React.FC<ColumnHomeProps> = () => {
    return (
        <div>
            <div className='flex items-center justify-between max-w-[1470px] m-auto px-6'>

                <div className='w-[300px] flex items-center justify-between mb-[40px]'>

                    <h1 className='text-[36px] text-[#000] font-semibold'>Клиенты</h1>

                    <div className='w-[70px] flex justify-between'>
                        <img src="/img/colActive.svg" className='w-[22px]' alt="" />
                        <Link to={'/'}>
                            <img src="/img/rowBlack.svg" className='w-[22px]' alt="" />
                        </Link>
                    </div>
                </div>

            </div>

            <div className='bg-[#F1F2F4] px-14 py-5 flex items-center justify-between'>

                {
                    colArr.map((item: any, inx: number) => (

                        <div key={inx} className='w-[230px] bg-[#fff] rounded-[12px] px-4 py-4'>

                            <div className='flex items-center justify-between mb-[30px]'>
                                <h2 className='text-[23px] h-[50px] font-bold'>{item.name}</h2>
                                <div className='w-[30px] h-[27px] text-[#fff] text-[16px] font-bold bg-[#22B5DC] flex items-center justify-center rounded-[50%]'>3</div>
                            </div>

                            <UserCart />

                        </div>

                    ))
                }



            </div>

        </div>
    );
};

export default ColumnHome;
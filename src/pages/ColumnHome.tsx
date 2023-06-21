import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
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
        name: 'Оплачен полностью',
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

            <div className='flex items-start pt-[30px] justify-between bg-[#F1F2F4] px-8'>
                {
                    colArr.map((item: any, inx: number) => <Categories key={inx} item={item} />)
                }
            </div>




        </div >
    );
};

export default ColumnHome;
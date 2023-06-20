import React from 'react';
import { Link } from 'react-router-dom';

interface ColumnHomeProps {

}

const ColumnHome: React.FC<ColumnHomeProps> = () => {
    return (
        <div>
            <div className='flex items-center justify-between max-w-[1470px] m-auto px-6'>

                <div>

                    <div className='w-[300px] flex items-center justify-between'>

                        <h1 className='text-[36px] text-[#000] font-semibold'>Клиенты</h1>

                        <div className='w-[70px] flex justify-between'>
                            <img src="/img/colActive.svg" className='w-[22px]' alt="" />
                            <Link to={'/'}>
                                <img src="/img/rowBlack.svg" className='w-[22px]' alt="" />
                            </Link>
                        </div>
                    </div>

                </div>



            </div>
            <div className='bg-[#F1F2F4] px-14 py-5 flex items-center justify-between'>

                <div className='w-[230px] bg-[#fff] rounded-[12px] px-4 py-4'>

                    <div className='flex items-center justify-between'>
                        <h2 className='text-[23px] font-bold'>Новое обращение</h2>
                        <div className='w-[30px] h-[27px] text-[#fff] text-[16px] font-bold bg-[#22B5DC] flex items-center justify-center rounded-[50%]'>3</div>
                    </div>

                </div>
                <div className='w-[230px] bg-[#fff] rounded-[12px] px-4 py-4'>

                    <div className='flex items-center justify-between'>
                        <h2 className='text-[23px] font-bold'>Предоплата</h2>
                        <div className='w-[30px] h-[27px] text-[#fff] text-[16px] font-bold bg-[#22B5DC] flex items-center justify-center rounded-[50%]'>3</div>
                    </div>

                </div>
                <div className='w-[230px] bg-[#fff] rounded-[12px] px-4 py-4'>

                    <div className='flex items-center justify-between'>
                        <h2 className='text-[23px] font-bold'>Оплачен полностью </h2>
                        <div className='w-[30px] h-[27px] text-[#fff] text-[16px] font-bold bg-[#22B5DC] flex items-center justify-center rounded-[50%]'>1</div>
                    </div>

                </div>

                <div className='w-[230px] bg-[#fff] rounded-[12px] px-4 py-4'>

                    <div className='flex items-center justify-between'>
                        <h2 className='text-[23px] font-bold'>Вылетел</h2>
                        <div className='w-[30px] h-[27px] text-[#fff] text-[16px] font-bold bg-[#22B5DC] flex items-center justify-center rounded-[50%]'>3</div>
                    </div>

                </div>
                <div className='w-[230px] bg-[#fff] rounded-[12px] px-4 py-4'>

                    <div className='flex items-center justify-between'>
                        <h2 className='text-[23px] font-bold'>Проблемы с клиентом</h2>
                        <div className='w-[30px] h-[27px] text-[#fff] text-[16px] font-bold bg-[#22B5DC] flex items-center justify-center rounded-[50%]'>1</div>
                    </div>

                </div>
                <div className='w-[230px] bg-[#fff] rounded-[12px] px-4 py-4'>

                    <div className='flex items-center justify-between'>
                        <h2 className='text-[23px] font-bold'>Прилетел</h2>
                        <div className='w-[30px] h-[27px] text-[#fff] text-[16px] font-bold bg-[#22B5DC] flex items-center justify-center rounded-[50%]'>1</div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ColumnHome;
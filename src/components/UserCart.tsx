import React from 'react';

interface UserCartProps {
    item: any
}



const UserCart: React.FC<UserCartProps> = ({ item }) => {

    return (
        <div
            draggable={true}
            className='px-2 py-4 w-[200px] bg-[#F1F2F4] rounded-[14px] mt-[20px] cursor-pointer'>

            <h1 className='font-semibold text-[18px] mb-[15px]'>{item.client}</h1>

            <p className='text-[14px] text-[#909090]'>{item.date} <span> {item.city}</span>, Хан Анна </p>

            <div>

                <div className='flex items-center justify-between mt-[20px] mb-[10px]'>
                    <div className='flex items-center'>
                        <img src="/img/clipboard.svg" alt="" />
                        <p className='ml-[15px] text-[#909090] text-[12px]'>Диагноз</p>
                    </div>
                    <p className='ml-[15px] text-[#909090] text-[12px] mr-[10px]'>10.01</p>
                </div>

                <h1 className='font-semibold text-[16px] mb-[15px] ml-[30px]'>Обратился с диагнозом “Птоз”</h1>

            </div>

            <div>

                <div className='flex items-center justify-between mt-[20px] mb-[10px]'>
                    <div className='flex items-center'>
                        <img src="/img/aeroplane.svg" alt="" />
                        <p className='ml-[15px] text-[#909090] text-[12px]'>Вылет</p>
                    </div>
                    <p className='ml-[15px] text-[#909090] text-[12px] mr-[10px]'>30.01</p>
                </div>

                <h1 className='font-semibold text-[16px] mb-[15px] ml-[30px]'>Вылет пациента в клинику</h1>

            </div>

        </div>
    );
};

export default UserCart;
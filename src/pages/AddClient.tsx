import React from 'react';

interface AddClientProps {

}

const AddClient: React.FC<AddClientProps> = () => {
    return (
        <div>

            <div className='flex items-center justify-between max-w-[1470px] m-auto px-6 mb-[50px]'>

                <div className='w-[440px] flex items-center justify-between'>
                    <h1 className='text-[36px] text-[#000] font-semibold'>Добавить клиента</h1>
                </div>

            </div>

            <div className='bg-[#F1F2F4] flex items-center justify-center py-5'>

                <div className='w-[1280px] bg-[#fff] px-10 py-6 rounded-[14px]'>

                    <span className='text-[22px] text-[#22B5DC] '>Общая информация</span>

                    <form>

                        <div className='mt-[30px] flex justify-between'>
                            <div className='text-[#333333] text-[18px]' >

                                <label>
                                    <p className='font-semibold'>ФИО</p>
                                    <input className='mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]' type="text" />
                                </label>

                                <div className='flex justify-between items-center mt-[20px]'>

                                    <label>
                                        <p className='font-semibold'>Дата рождения</p>
                                        <input className='mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]' type="text" />
                                    </label>
                                    <label>
                                        <p className='font-semibold'>Город проживания</p>
                                        <input className='mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]' type="text" />
                                    </label>

                                </div>

                                <div>
                                    <div className='flex justify-between items-center mt-[20px]'>

                                        <label>
                                            <p className='font-semibold'>Телефон пациента</p>
                                            <input className='mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]' type="number" />
                                        </label>
                                        <label>
                                            <p className='font-semibold'>Email</p>
                                            <input className='mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]' type="email" />
                                        </label>

                                    </div>
                                    <label>
                                        <input className='mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]' type="number" />
                                    </label>

                                </div>

                            </div>

                            <div className='text-[#333333] text-[18px]'>

                                <label>
                                    <p className='font-semibold'>Статус</p>
                                    <input className='mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333] mb-[20px]' type="text" />
                                </label>

                                <label>
                                    <p className='font-semibold'>Филиал</p>
                                    <input className='mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]' type="text" />
                                </label>

                                <div className='flex justify-between items-center mt-[20px]'>

                                    <label>
                                        <p className='font-semibold'>Вылет из города</p>
                                        <input className='mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]' type="text" />
                                    </label>
                                    <label>
                                        <p className='font-semibold'>Город посещения</p>
                                        <input className='mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[260px] outline-none py-2 px-3 text-[#333333]' type="text" />
                                    </label>

                                </div>

                                <label>
                                    <p className='font-semibold'>Отель</p>
                                    <input className='mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-[550px] outline-none py-2 px-3 text-[#333333]' type="text" />
                                </label>
                            </div>
                        </div>

                        <div className='w-[440px] m-auto  flex justify-between mt-[50px]'>
                            <button className='w-[200px] py-5 bg-[#4992CC] text-[#fff] font-semibold rounded-[8px]'>Сохранить</button>
                            <button className='w-[200px] py-5 bg-[#EB5757] text-[#fff] font-semibold rounded-[8px]'>Отменить</button>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default AddClient;
import React from 'react';

interface MapProps {

}

const Map: React.FC<MapProps> = () => {
    return (
        <div>

            <iframe className='h-[85%] w-[100%] absolute z-[-1]' src='//www.zeemaps.com/pub?group=4727803&x=9.921997&y=54.693764&z=16'></iframe>

            <div className='px-20 py-14 h-[600px] w-[760px] overflow-y-scroll ml-[800px] ' >

                <div className='w-[570px] h-[300px] bg-[#fff] mt-[30px] rounded-[12px] px-6 py-7 flex flex-col justify-between'>

                    <div className='flex items-center'>
                        <div className='w-[50px] h-[50px] rounded-[50%] bg-[#C4CDD5] mr-[20px] '></div>
                        <div>
                            {/* <input type="file" /> */}
                            <p className='text-[20px] text-[#333333] font-semibold'>Name Surname</p>
                            <span className='text-[#637381] text-[16x]'>Email</span>
                        </div>
                    </div>

                    <p className='w-[80%] text-[#637381] text-[14px]'>
                        Закрытое или открытое торговое пространство, включающее множество торговых точек (магазинов и т.д.)
                        Бизнес-центр (лифты, стойка администрации, холл, прилифтовая зона)
                    </p>

                    <div>
                        <button className='bg-[#333333] text-[#fff] w-[200px] py-2 '>Удалить</button>
                        <button className='ms-3 border-[#333333] border-[1px]  text-[#333333] w-[200px] py-2'>Именить</button>
                    </div>

                </div>

                <div className='w-[570px] h-[300px] bg-[#fff] mt-[30px] rounded-[12px] px-6 py-7 flex flex-col justify-between'>

                    <div className='flex items-center'>
                        <div className='w-[50px] h-[50px] rounded-[50%] bg-[#C4CDD5] mr-[20px] '></div>
                        <div>
                            {/* <input type="file" /> */}
                            <p className='text-[20px] text-[#333333] font-semibold'>Name Surname</p>
                            <span className='text-[#637381] text-[16x]'>Email</span>
                        </div>
                    </div>

                    <p className='w-[80%] text-[#637381] text-[14px]'>
                        Закрытое или открытое торговое пространство, включающее множество торговых точек (магазинов и т.д.)
                        Бизнес-центр (лифты, стойка администрации, холл, прилифтовая зона)
                    </p>

                    <div>
                        <button className='bg-[#333333] text-[#fff] w-[200px] py-2 '>Удалить</button>
                        <button className='ms-3 border-[#333333] border-[1px]  text-[#333333] w-[200px] py-2'>Именить</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Map;
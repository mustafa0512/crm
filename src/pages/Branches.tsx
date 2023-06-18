import React from 'react';
import BranchTable from '../components/BranchTable';

interface BranchesProps {

}

const Branches: React.FC<BranchesProps> = () => {
    return (
        <div>
            <div className='flex items-center justify-between max-w-[1470px] m-auto px-6'>

                <div>

                    <div className='w-[300px] flex items-center justify-between'>

                        <h1 className='text-[36px] text-[#000] font-semibold'>Филиалы</h1>

                        <div className='w-[70px] flex justify-between'>
                            <img src="/img/buttonRow.svg" className='w-[22px]' alt="" />
                            <img src="/img/buttonLine.svg" className='w-[22px]' alt="" />
                        </div>
                    </div>

                </div>

                <div className='flex items-center '>
                    <p className='text-[#828282] text-[14px]'>1-6 из 22</p>

                    <div className='flex items-center justify-between w-[230px] h-[50px] text-[18px] text-[#414141] ml-[30px] rounded-[8px] border-[1px] border-[#DEE2E6] px-1 cursor-pointer'>
                        <button className='h-[50px] border-r-[1px] border-[#DEE2E6] px-2'>Prev</button>
                        <p className=' hover:underline'>1</p>
                        <p className=' hover:underline'>2</p>
                        <p className=' hover:underline'>3</p>
                        <button className='h-[50px] border-l-[1px] border-[#DEE2E6] px-2'>Next</button>
                    </div>
                </div>

            </div>

            <BranchTable />

        </div>
    );
};

export default Branches;
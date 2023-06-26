import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
let BASE_URL: string = "http://localhost:3103";

interface BranchesProps { }

type typeBranch = {
    id: number
    city: string;
    branchName: string;
    telNumber: number;
    exampleRequired: string;
};


const Branches: React.FC<BranchesProps> = () => {
    const [branch, setBranch] = useState<Array<typeBranch>>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [branchPerPage] = useState<number>(6);

    const totalBranch: any = branch.length
    const pageNumbers: number[] = []

    for (let i = 1; i <= Math.ceil(totalBranch / branchPerPage); i++) {
        pageNumbers.push(i)
    }

    const lastUserIndex = currentPage * branchPerPage
    const firstUserIndex = lastUserIndex - branchPerPage
    const currentBranch = branch.slice(firstUserIndex, lastUserIndex)

    const paginate = (pageNumbers: any) => setCurrentPage(pageNumbers)
    const nextPage = () => setCurrentPage(prev => totalBranch <= prev ? prev + 0 : prev + 1)
    const prevPage = () => setCurrentPage(prev => prev <= 1 ? prev - 0 : prev - 1)

    useEffect(() => {

        const getBranch = async () => {
            const res = await axios.get(BASE_URL + "/branches")
            setBranch(res.data);
        }

        getBranch()

    }, []);

    const navigate = useNavigate();
    const getLocalUser: any = localStorage.getItem("user")

    JSON.parse(getLocalUser)

    if (getLocalUser?.length === 0 || getLocalUser === null) {
        navigate('/signin')
    }

    const { t } = useTranslation()



    return (
        <div>
            <div className='flex items-center justify-between max-w-[1470px] m-auto px-6'>

                <div>

                    <div className='w-[300px] flex items-center justify-between'>

                        <h1 className='text-[36px] text-[#000] font-semibold'>{t('branch')}</h1>

                    </div>

                </div>

                <div className='flex items-center '>
                    <p className='text-[#828282] text-[14px]'>{lastUserIndex} {t('of')} {totalBranch}</p>

                    <div className='flex items-center justify-between w-[230px] h-[50px] text-[18px] text-[#414141] ml-[30px] rounded-[8px] border-[1px] border-[#DEE2E6] px-1 cursor-pointer'>
                        <button onClick={prevPage} className='h-[50px] border-r-[1px] border-[#DEE2E6] px-2'>{t('prev')}</button>
                        {
                            pageNumbers.map(num => (
                                <p key={num} onClick={() => paginate(num)} className='hover:underline ml-2 mr-2'>{num}</p>
                            ))
                        }
                        <button onClick={nextPage} className='h-[50px] border-l-[1px] border-[#DEE2E6] px-2'>{t('next')}</button>
                    </div>
                </div>

            </div>

            <div>
                <TableContainer sx={{ border: 'none', marginTop: '30px', boxShadow: 'none', background: '#F1F2F4' }} component={Paper}>
                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ height: '80px' }} >
                                <TableCell sx={{ color: '#828282', fontSize: '13px' }}>{t('branch')}</TableCell>
                                <TableCell sx={{ color: '#828282', fontSize: '13px' }} align='left' >{t('city')}</TableCell>
                                <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="left">{t('telNumber')}</TableCell>
                                <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="left"></TableCell>
                                <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="left"></TableCell>
                                <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentBranch.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '77px' }}
                                >
                                    <TableCell sx={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: 500, marginTop: '10px' }} component="th" scope="row">
                                        <img className='mr-[30px]' src="/img/dash.svg" alt="" />
                                        {row.branchName}
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 500, fontSize: '14px' }} align="left">{row.city}</TableCell>
                                    <TableCell sx={{ fontWeight: 500, fontSize: '14px' }} align="left">{row.telNumber}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div >

        </div>
    );
};

export default Branches;
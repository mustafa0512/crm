import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
let BASE_URL: string = "http://localhost:3103";


interface HomeProps {
    pageNumbers: number[];
    setCurrentPage: number
}

interface PaginationProps { }


type typeClient = {
    id: number
    client: string;
    date: string;
    email: string;
    city: string;
    status: string;
    telNumber: number;
    branch: string;
    secTelNumber: number;
    hotel: string
    from_city: string
    to_city: string
    cost: number
    takeOff: string
    arrive: string
    exampleRequired: string;
};



const Home: React.FC<HomeProps> = () => {

    const [person, setPerson] = useState<Array<typeClient>>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [userPerPage] = useState<number>(6);

    const totalUser: any = person.length
    const pageNumbers: number[] = []

    for (let i = 1; i <= Math.ceil(totalUser / userPerPage); i++) {
        pageNumbers.push(i)
    }

    const lastUserIndex = currentPage * userPerPage
    const firstUserIndex = lastUserIndex - userPerPage
    const currentUser = person.slice(firstUserIndex, lastUserIndex)


    const paginate: React.FC<PaginationProps> = pageNumbers => setCurrentPage(pageNumbers)
    const nextPage = () => setCurrentPage(prev => totalUser <= prev ? prev + 0 : prev + 1)
    const prevPage = () => setCurrentPage(prev => prev <= 1 ? prev - 0 : prev - 1)

    useEffect(() => {

        const getUsers = async () => {
            const res = await axios.get(BASE_URL + "/customers")
            setPerson(res.data);
        }

        getUsers()

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

                    <div className='min-w-[100px] flex items-center justify-between'>

                        <h1 className='text-[36px] text-[#000] font-semibold'>{t('client')}</h1>

                        <div className='w-[70px] flex justify-between ml-[40px]'>
                            <Link to={'/column'}>
                                <img src="/img/buttonRow.svg" className='w-[22px]' alt="" />
                            </Link>
                            <img src="/img/buttonLine.svg" className='w-[22px]' alt="" />
                        </div>
                    </div>

                </div>

                <div className='flex items-center '>
                    <p className='text-[#828282] text-[14px]'>{lastUserIndex} из {totalUser}</p>

                    <div className='flex items-center justify-between min-w-[230px] h-[50px] text-[18px] text-[#414141] ml-[30px] rounded-[8px] border-[1px] border-[#DEE2E6] px-1 cursor-pointer'>
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

            <TableContainer sx={{ border: 'none', marginTop: '30px', boxShadow: 'none', background: '#F1F2F4' }} component={Paper}>
                <Table sx={{ minWidth: 650, }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ height: '80px' }} >
                            <TableCell sx={{ color: '#828282', fontSize: '13px' }}>{t('client')}</TableCell>
                            <TableCell sx={{ color: '#828282', fontSize: '13px' }} align='center' >{t('status')}</TableCell>
                            <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="center">{t('date')}</TableCell>
                            <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="center">{t('departure')}</TableCell>
                            <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="center">{t('visit')}</TableCell>
                            <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="center">{t('cost')}</TableCell>
                            <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="center">{t('arrival')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentUser.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '76px' }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link to={`/editclient/${row?.id}`} >
                                        <div className='flex items-center text-[16px] font-medium mt-[10px]'>
                                            <img className='mr-[30px]' src="/img/dash.svg" alt="" />
                                            {row.client}
                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell sx={{ fontWeight: 500, fontSize: '14px' }} align="right">{row.status}</TableCell>
                                <TableCell sx={{ fontWeight: 500, fontSize: '14px' }} align="center">{row.date}</TableCell>
                                <TableCell sx={{ fontWeight: 500, fontSize: '14px' }} align="center">{row.from_city}</TableCell>
                                <TableCell sx={{ fontWeight: 500, fontSize: '14px' }} align="center">{row.to_city}</TableCell>
                                <TableCell sx={{ fontWeight: 500, fontSize: '14px' }} align="center">{row.cost.toLocaleString("ru-RU") + " сум"}</TableCell>
                                <TableCell sx={{ fontWeight: 500, fontSize: '14px' }} align="center">
                                    <div className='font-[500]'>
                                        <p>{row.takeOff}</p>
                                        <span>{row.arrive}</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default Home;
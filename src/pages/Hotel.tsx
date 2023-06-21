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
let BASE_URL: string = "http://localhost:3103";

interface HotelProps { }

type typeClient = {
    id: number
    city: string;
    hotelName: string;
    telNumber: number;
    pricePerNight: string
    exampleRequired: string;
};

interface PaginationProps { }

const Hotel: React.FC<HotelProps> = () => {
    const [hotel, setHotel] = useState<Array<typeClient>>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hotelPerPage] = useState<number>(6);

    const totalHotel: any = hotel.length
    const pageNumbers: number[] = []

    for (let i = 1; i <= Math.ceil(totalHotel / hotelPerPage); i++) {
        pageNumbers.push(i)
    }

    const lastUserIndex = currentPage * hotelPerPage
    const firstUserIndex = lastUserIndex - hotelPerPage
    const currentHotel = hotel.slice(firstUserIndex, lastUserIndex)

    const paginate: React.FC<PaginationProps> = pageNumbers => setCurrentPage(pageNumbers)
    const nextPage = () => setCurrentPage(prev => totalHotel <= prev ? prev + 0 : prev + 1)
    const prevPage = () => setCurrentPage(prev => prev <= 1 ? prev - 0 : prev - 1)

    useEffect(() => {

        const getUsers = async () => {
            const res = await axios.get(BASE_URL + "/hotels")
            setHotel(res.data);
        }

        getUsers()

    }, []);

    const navigate = useNavigate();
    const getLocalUser: any = localStorage.getItem("user")

    JSON.parse(getLocalUser)

    if (getLocalUser?.length === 0 || getLocalUser === null) {
        navigate('/signin')
    }

    return (
        <div>
            <div className='flex items-center justify-between max-w-[1470px] m-auto px-6'>

                <div>

                    <div className='w-[240px] flex items-center justify-between'>

                        <h1 className='text-[36px] text-[#000] font-semibold'>Отели</h1>


                    </div>

                </div>

                <div className='flex items-center '>
                    <p className='text-[#828282] text-[14px]'>{lastUserIndex} из {totalHotel}</p>

                    <div className='flex items-center justify-between w-[230px] h-[50px] text-[18px] text-[#414141] ml-[30px] rounded-[8px] border-[1px] border-[#DEE2E6] px-1 cursor-pointer'>
                        <button onClick={prevPage} className='h-[50px] border-r-[1px] border-[#DEE2E6] px-2'>Prev</button>
                        {
                            pageNumbers.map(num => (
                                <p key={num} onClick={() => paginate(num)} className='hover:underline ml-2 mr-2'>{num}</p>
                            ))
                        }
                        <button onClick={nextPage} className='h-[50px] border-l-[1px] border-[#DEE2E6] px-2'>Next</button>
                    </div>
                </div>

            </div>

            <div>
                <TableContainer sx={{ border: 'none', marginTop: '30px', boxShadow: 'none', background: '#F1F2F4' }} component={Paper}>
                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ height: '80px' }} >
                                <TableCell sx={{ color: '#828282', fontSize: '13px' }}>Отели</TableCell>
                                <TableCell sx={{ color: '#828282', fontSize: '13px' }} align='left' >Город</TableCell>
                                <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="left">цена за ночь</TableCell>
                                <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="left">Номер</TableCell>
                                <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="left"></TableCell>
                                <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="left"></TableCell>
                                <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentHotel.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '80px' }}
                                >
                                    <TableCell sx={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: 500, marginTop: '10px' }} component="th" scope="row">
                                        <img className='mr-[30px]' src="/img/dash.svg" alt="" />
                                        {row.hotelName}
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 500, fontSize: '14px' }} align="left">{row.city}</TableCell>
                                    <TableCell sx={{ fontWeight: 500, fontSize: '14px' }} align="left">{row.pricePerNight + " сум"}</TableCell>
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

export default Hotel;
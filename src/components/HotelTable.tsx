import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
let BASE_URL: string = "http://localhost:3103";

interface HoteiTableProps {

}

type typeClient = {
    id: number
    city: string;
    hotelName: string;
    telNumber: number;
    pricePerNight: string
    exampleRequired: string;
};

const HotelTable: React.FC<HoteiTableProps> = () => {
    const [otel, setOtel] = useState<Array<typeClient>>([]);

    useEffect(() => {
        axios.get(BASE_URL + "/hotels")
            .then((res) => setOtel(res.data));
    }, []);

    return (
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
                        {otel.map((row) => (
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
    );
};

export default HotelTable;
import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
let BASE_URL: string = "http://localhost:3103";

interface TableProps {

}

function createData(
    name: string,
    calories: string,
    fat: string,
    carbs: string,
    protein: string,
    a: number,
    v: string,
) {
    return { name, calories, fat, carbs, protein, a, v };
}

const rows = [
    createData('Борисова Ольга', 'В процессе', '10 января,', 'Узбекистан', 'ОАЭ', 25000000, 'В: 30 января, 2023 | 06:35'),
    createData('Борисова Ольга', 'В процессе', '10 января,', 'Узбекистан', 'ОАЭ', 25000000, 'В: 30 января, 2023 | 06:35'),
    createData('Борисова Ольга', 'В процессе', '10 января,', 'Узбекистан', 'ОАЭ', 25000000, 'В: 30 января, 2023 | 06:35'),
    createData('Борисова Ольга', 'В процессе', '10 января,', 'Узбекистан', 'ОАЭ', 25000000, 'В: 30 января, 2023 | 06:35'),
    createData('Борисова Ольга', 'В процессе', '10 января,', 'Узбекистан', 'ОАЭ', 25000000, 'В: 30 января, 2023 | 06:35'),
];


const TableList: React.FC<TableProps> = () => {

    useEffect(() => {
        axios.get(BASE_URL + "/customers")
            .then((res) => console.log(res.data));
    }, []);

    return (
        <div>
            <TableContainer sx={{ border: 'none', marginTop: '30px', boxShadow: 'none', background: '#F1F2F4' }} component={Paper}>
                <Table sx={{ minWidth: 650, }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ height: '80px' }} >
                            <TableCell sx={{ color: '#828282', fontSize: '13px' }}>Клиент</TableCell>
                            <TableCell sx={{ color: '#828282', fontSize: '13px' }} align='center' >Статус</TableCell>
                            <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="center">Дата обращения</TableCell>
                            <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="center">Вылет</TableCell>
                            <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="center">Страна посещения</TableCell>
                            <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="center">Общая стоимость</TableCell>
                            <TableCell sx={{ color: '#828282', fontSize: '13px' }} align="center">Вылет и прилет</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '80px' }}
                            >
                                <TableCell sx={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: 600, marginTop: '10px' }} component="th" scope="row">
                                    <img className='mr-[30px]' src="/img/dash.svg" alt="" />
                                    {row.name}
                                </TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '14px' }} align="right">{row.calories}</TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '14px' }} align="center">{row.fat}</TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '14px' }} align="center">{row.carbs}</TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '14px' }} align="center">{row.protein}</TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '14px' }} align="center">{row.a}</TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '14px' }} align="center">{row.v}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default TableList;
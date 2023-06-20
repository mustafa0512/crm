import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
let BASE_URL: string = "http://localhost:3103";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface MapModalProps {
    handleClose: boolean;
    open: boolean;
    comID: number
}

interface editComProps {
    id: number
}

type Inputs = {
    comment: string;
    exampleRequired: string;
};

const MapModal: React.FC<MapModalProps> = ({ open, handleClose, comID }) => {
    const [areaValue, setAreaValue] = useState<any>();

    const {
        register,
        handleSubmit
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => setAreaValue(data)

    const changeComment: React.FC<editComProps> = () => {

        axios.patch(BASE_URL + `/blog/${comID}`, {
            comment: areaValue?.comment
        })
            .then(res => console.log(res.data))
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>

                        <label>
                            <p className="font-semibold">Напишите коментарий</p>
                            <textarea {...register("comment")} className="mt-[15px] border-[1px] border-[#D6D5D5] rounded-[5px] w-full min-h-[80px] h-fit outline-none py-2 px-3 text-[#333333]" ></textarea>
                        </label>

                        <div className='mt-[30px] '>
                            <button onClick={() => changeComment()} className='border-[#333333] border-[1px]  text-[#333333] w-[150px] py-2'>Сохранить</button>
                            <button type='button' onClick={handleClose} className='bg-[#333333] text-[#fff] w-[150px] py-2 ms-3'>Отмена</button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default MapModal;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapModal from '../components/MapModal';
let BASE_URL: string = "http://localhost:3103";

interface MapProps { }

interface delComProps {
    id: number
}



const Map: React.FC<MapProps> = () => {
    const [comment, setComment] = useState<Array<string>>([]);
    const [comID, setComID] = useState<string>()
    const [open, setOpen] = useState(false);

    const getLocalUser: any = localStorage.getItem("fullUser")
    const navigate = useNavigate();
    const local_user = JSON.parse(getLocalUser)

    useEffect(() => {
        if (getLocalUser?.length === 0 || getLocalUser === null) {
            navigate('/signin')
        }
    }, [])

    useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get(BASE_URL + "/blog")
            setComment(res.data);
        }

        getUsers()
    }, [])

    const delComment: React.FC<delComProps> = (id) => {

        axios.delete(BASE_URL + `/blog/${id}`)
            .then(res => console.log(res.data))

        location.reload()

    }


    const handleOpen = (id) => {
        setOpen(true)
        setComID(id)

    };
    const handleClose = () => {
        setOpen(false);
        location.reload()
    }

    return (
        <div>

            <iframe className='h-[85%] w-[100%] absolute z-[-1]' src='//www.zeemaps.com/pub?group=4730449'></iframe>

            <div className='forNoScroll px-20 py-14 h-[600px] w-[760px] overflow-y-scroll fixed top-[100px] right-[-30px]' >

                {
                    comment.map((item: any, inx: number) => (
                        <div key={inx} className='w-[570px] min-h-[200px] bg-[#fff] mt-[30px] rounded-[12px] px-6 py-7 flex flex-col justify-between'>

                            <div className='flex items-center mb-[30px]'>
                                <div className='w-[50px] h-[50px] rounded-[50%] bg-[#C4CDD5] mr-[20px] '></div>
                                <div>
                                    {/* <input type="file" /> */}
                                    <p className='text-[20px] text-[#333333] font-semibold'>{local_user?.name}</p>
                                    <span className='text-[#637381] text-[16x]'>{local_user?.email}</span>
                                </div>
                            </div>

                            <p className='w-[90%] text-[#637381] text-[14px]'>
                                {item.comment}
                            </p>

                            <div className='mt-[30px]'>
                                <button onClick={() => delComment(item.id)} className='bg-[#333333] text-[#fff] w-[200px] py-2 '>Удалить</button>
                                <button onClick={() => handleOpen(item.id)} className='ms-3 border-[#333333] border-[1px]  text-[#333333] w-[200px] py-2'>Именить</button>
                            </div>

                        </div>
                    ))
                }

            </div>

            <MapModal comID={comID} open={open} handleClose={handleClose} />
        </div>
    );
};

export default Map;
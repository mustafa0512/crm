import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCart from './UserCart';
let BASE_URL: string = "http://localhost:3103";

interface CategoriesProps {
    item: any
}

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

const Categories: React.FC<CategoriesProps> = ({ item }) => {
    const [person, setPerson] = useState<Array<typeClient>>([]);
    const fildCat = person.filter(el => el?.status == item?.name)
    const [cartList, setCartList] = useState<Array<typeClient>>();


    useEffect(() => {

        const getUsers = async () => {
            const res = await axios.get(BASE_URL + "/customers")
            setPerson(res.data);
        }

        getUsers()

    }, []);
    return (
        <div className='w-[240px] bg-[#fff] rounded-[12px] px-4 py-4'>

            <div className='flex items-center justify-between mb-[30px]'>
                <h2 className='text-[23px] h-[50px] font-bold'>{item.name}</h2>
                <div className='w-[30px] h-[27px] text-[#fff] text-[16px] font-bold bg-[#22B5DC] flex items-center justify-center rounded-[50%]'>3</div>
            </div>

            {
                fildCat.map((item: any, inx: number) => <UserCart key={inx} item={item} />)
            }

        </div>
    );
};

export default Categories;
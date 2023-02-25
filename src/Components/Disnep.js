import axios from 'axios';
import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export const Disnep = () => {

    let navigate = useNavigate();

    const {_id} = useParams();
    const [item, setItem] = useState();
    const fetch=async() => {
        const res = await axios.get(`https://api.disneyapi.dev/characters/${_id}`);
        setItem(res.data);
    }
    fetch();
  return (
    <>
    {
        (!item)? "":(
            <div className='char-content'>
                <div className='right-panel'>
                    <img src={`${item.imageUrl}`} alt=""/>
                </div>
                <div className='left-panel'>
                    <h1>{item.name}</h1>
                    <h4>{item.tvShows}</h4>
                    <h4>{item.films}</h4>
                </div>
            </div>
        )
    }
    <button className='button' onClick={()=>navigate(-1)}>BACK</button>
    </>
  )
}

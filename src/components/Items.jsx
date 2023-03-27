import React, { useEffect, useState } from 'react'
import { data } from '../utils/data'
import { Item } from './Item';
export const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(data);
        console.log(items);
    }, [])

    return (
        <div className="d-flex justify-content-evenly">
            {items.map((item) => {
                return <Item item={item} key={item.published_at} />
            })}
        </div>
    )
}
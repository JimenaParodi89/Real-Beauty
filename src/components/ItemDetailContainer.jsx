import data from '../data/products.json'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });

        get.then((data) => {
            const filter = data.find( p => p.id === Number(id))
            setProduct(filter);
        });
    }, [id]);

    if(!product) return <div>loading</div>

    return (
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer
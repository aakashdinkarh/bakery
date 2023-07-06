import { useEffect, useState } from 'react';
import dummyData from './dummyData';

export const getItem = (id) => {
    return dummyData.find((item) => item.id === id);
}

export default function useGetItem({ id = '' } = {}){
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        if(id){
            (async () => {
                try {
                    setLoading(true);
                    const res = await new Promise((res) => setTimeout(() => {
                        const data = getItem(id);
                        res(data);
                    }, [1000]));
        
                    setData(res);
                } catch (e) {
                    console.error(e);
                    setData({});
                } finally {
                    setLoading(false);
                }
            })();
        }
    }, [id]);

    return {
        loading,
        data,
        getItem
    }
}
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h2 className='font-semibold mb-3'>Dragon News Home</h2>
            <p className='text-gray-400 text-sm'>
                {data.length} News found on This Category.
            </p>
            <div>
                {
                    data.map((singleNews) => (
                        <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
                    ))
                }
                </div>
        </div>
    );
};

export default CategoryNews;
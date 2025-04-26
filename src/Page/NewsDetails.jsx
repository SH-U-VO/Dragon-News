import React from 'react';
import Header from '../components/Header';
import RightNav from '../components/Layout-components/RightNav';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const data = useLoaderData();

    return (
        <div>
            <header>
                <Header />
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-12 gap-4'>
                <section className='col-span-9'>
                    <h2 className='font-semibold mb-3'>Dragon News</h2>


                    <div className="card bg-base-100 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={data && data.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{data.title}</h2>
                            <p>{data && data.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${data?.category_id}`} className="btn btn-primary">Back to Category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightNav />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
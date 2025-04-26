import { FaBookmark, FaShareAlt, FaEye } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, image_url, author, details, rating, total_view } = news;
    return (
        <div>
        <div className="card bg-base-100 shadow border">
            <div className="card-body p-5">
                {/* Top Bar: Author and Action Icons */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                        <img src={author?.img} alt={author?.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <h4 className="font-semibold">{author?.name}</h4>
                            <p className="text-sm text-gray-500">{author?.published_date?.split(' ')[0]}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                        <FaBookmark className="cursor-pointer" />
                        <FaShareAlt className="cursor-pointer" />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold leading-snug mb-3">
                    {title}
                </h2>

                {/* Main Image */}
                <img src={image_url} alt={title} className="rounded-lg mb-4 w-full object-cover" />

                {/* Details */}
                <p className="text-sm text-gray-600">
                    {details.length > 250
                        ? <>
                            {details.slice(0, 250)}... <Link to={`/news/${news._id}`} className="text-blue-600 font-medium cursor-pointer">Read More</Link>
                        </>
                        : details}
                </p>

                {/* Footer: Rating and Views */}
                <div className="flex justify-between items-center pt-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1 text-orange-500">
                        {[...Array(5)].map((_, i) => (
                            <AiFillStar key={i} className={`${i < Math.round(rating?.number) ? 'text-orange-500' : 'text-gray-300'}`} />
                        ))}
                        <span className="ml-2 text-black font-medium">{rating?.number}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaEye /> {total_view}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default NewsCard;
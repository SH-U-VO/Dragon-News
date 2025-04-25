import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
        
    },[])
    return (
        <div>
            <h2 className="font-semibold mb-3">All Category {categories.length}</h2>

            <div className="flex flex-col gap-4">
                {
                    categories.map(category => {
                        return (
                            <NavLink to={`/category/${category.id}`} className="btn" key={category.id}>{category.name}</NavLink>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default LeftNavbar;
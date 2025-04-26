import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../Page/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Page/Login";
import Register from "../Page/Register";
import NewsDetails from "../Page/NewsDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/1"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryNews />,
                loader: async ({ params }) => {
                    const res = await fetch("/news.json");
                    const allNews = await res.json();
                    const filteredNews = allNews.filter(news => news.category_id === params.id)
                    return filteredNews;
                }
            }
        ]

    },
    {
        path: "/news/:id",
        element: <NewsDetails />,
        loader: async ({ params }) => {
            const res = await fetch("/news.json");
            const allNews = await res.json();
            const requiredNews = allNews.find(news => news._id === params.id)
            return requiredNews;
        }
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element: <Login />
            },
            {
                path: "/auth/register",
                element: <Register />
            }
        ]
    },
    {
        path: "*",
        element: <h1>Error</h1>
    }
])

export default router;
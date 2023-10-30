import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

const Index = () => {
    const [posts, setPosts] = useState();
    const [currentPage, setCurrentPage] = useState(2);
    const perPage = 8;
    const totalPages = Math.ceil(posts?.length / perPage);
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const visibleItems = posts?.slice(startIndex, endIndex);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts") //https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${perPage}
        .then((res) => res.json())
        .then((res) => setPosts(res));
    }, []);

    return (
        <>
        <main className="flex flex-col justify-center items-center h-screen text-left">
            {visibleItems?.map((post) => {
                return <div><strong>{post.id}.</strong> {post.title}</div>;
            })}
        </main>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
        </>
    );
};

export default Index;

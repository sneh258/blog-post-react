import React, { useState,createContext } from 'react';

export const BlogPostContext = createContext({});


export const BlogPostProvider = ({ children }) => {
    const [allBlogData, setAllBlogPost] = useState([]);
    return (
        <BlogPostContext.Provider value={{ allBlogData, setAllBlogPost }}>
            {children}
        </BlogPostContext.Provider>
    )

}
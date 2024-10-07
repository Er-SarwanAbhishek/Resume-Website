import React from 'react';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { useParams } from 'react-router-dom';
import Error from '../pages/Error';
import './BlogPostPage.css';

const BlogPostPage = () => {
  const { blogPath } = useParams();
  const { blogPosts } = useContext(GlobalContext);

  // Find the blog post by ID
  const post = blogPosts.find(post => post.postPath === blogPath);

  if (!post) {
    return <Error />;
  }

  return (
    <div className="blog-post-page">
     {post.title}

    </div>
  );
};

export default BlogPostPage;

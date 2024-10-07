import React, { useContext } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import './BlogPage.css';
import GetJob from '../../assets/blog-images/Get Job.jpg';
import GlobalContext from '../context/GlobalContext';

const BlogPage = () => {
  const navigate = useNavigate();
  const { blogPosts } = useContext(GlobalContext);

  return (
    <div className="blog-page">
      <header className='blog-page-header'>
        <div className='blog-page-row-section'>
          <div className='blog-text-heading'>
            <h1>Expert Tips and Insights for Crafting the Perfect CV</h1>
            <p>Welcome to the CVmaker Blog! Here, we share valuable insights and expert advice on creating standout CVs and resumes that catch employers' eyes.</p>
            <button onClick={() => navigate("/templates") }>Build Your Resume</button>
          </div>
        </div>

      </header>

      <main className="blog-main">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.postPath}`} className="blog-post-link" key={post.id}>
            <article className="blog-post">
              <img src={GetJob} alt={post.title} className="post-image" />
              <div className='content'>
                <h4 className="post-title">{post.title}</h4>
                <p className="post-date">{post.date}</p>
                <p className="post-excerpt">{post.excerpt}</p>
                <button className='read-more'>Read More</button>
              </div>
            </article>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default BlogPage;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../data/posts';

const PostDetailPage = () => {
  const { id } = useParams(); // Get the post ID from the URL

  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2em' }}>
        <h2>Post Not Found</h2>
        <p>The blog post you are looking for does not exist.</p>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Go back to home</Link>
      </div>
    );
  }

  const pageStyle = {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const titleStyle = {
    color: '#333',
    marginBottom: '15px',
    textAlign: 'center',
  };

  const metaStyle = {
    fontSize: '0.9em',
    color: '#666',
    marginBottom: '25px',
    textAlign: 'center',
  };

  const contentStyle = {
    lineHeight: '1.8',
    color: '#444',
  };

  const backLinkStyle = {
    display: 'block',
    marginTop: '30px',
    textAlign: 'center',
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '1.1em',
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>{post.title}</h1>
      <p style={metaStyle}>By {post.author} on {post.date}</p>
      {/* Using dangerouslySetInnerHTML to render HTML content */}
      <div style={contentStyle} dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link to="/" style={backLinkStyle}>&larr; Back to all posts</Link>
    </div>
  );
};

export default PostDetailPage;
import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';

function App() {
  const appContainerStyle = {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  };

  return (
    <Router>
      <div style={appContainerStyle}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          {/* You can add a 404 page here */}
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.5em' }}>
              <h2>404 - Page Not Found</h2>
              <p>Oops! The page you're looking for doesn't exist.</p>
              <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Go Home</Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
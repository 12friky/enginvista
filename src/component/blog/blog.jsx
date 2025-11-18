import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './blog.css';
import SurveyTech from '../../assets/images/cadastary.jpg';
import PropertyBoundaries from '../../assets/images/ingineeringSurvey.jpg';
import DroneMapping from '../../assets/images/dronSurvery.jpg';
import GISApplications from '../../assets/images/mindsurvey.jpg';
import ConstructionSurvey from '../../assets/images/indenture.avif';
import MiningSurvey from '../../assets/images/gisAndMapping.jpg';
import BlogHero from '../../assets/images/slide2.jpg';
import UrbanPlanning from '../../assets/images/guy2.jpeg';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedArticle, setExpandedArticle] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Land Surveying Technology: From Theodolites to Drones",
      excerpt: "Explore how surveying technology has transformed over the decades and what it means for modern construction and development projects.",
      content: "Land surveying has come a long way from the traditional theodolites and chains. Today, advanced technologies like GPS, LiDAR, and drone photogrammetry have revolutionized how we measure and map the earth's surface. These innovations have not only improved accuracy but also significantly reduced the time required for surveying projects. The integration of digital tools and software has made data processing more efficient, allowing surveyors to deliver comprehensive results faster than ever before. Modern surveyors now use robotic total stations, 3D laser scanning, and advanced GPS systems that provide centimeter-level accuracy. This technological evolution has transformed the surveying profession, making it more precise, efficient, and capable of handling complex projects that were once unimaginable.",
      image: SurveyTech,
      category: 'technology',
      author: 'Michael Anderson',
      date: '2024-01-15',
      readTime: '6 min read',
      featured: true
    },
    {
      id: 2,
      title: "How Drone Surveying is Revolutionizing Construction Projects",
      excerpt: "Discover how drone technology is providing unprecedented efficiency and accuracy in construction site monitoring and progress tracking.",
      content: "Drone surveying has become a game-changer in the construction industry. With the ability to capture high-resolution aerial imagery and create detailed 3D models, drones provide construction managers with real-time data for better decision-making. This technology enables rapid topographic mapping, volume calculations, and progress monitoring that would be impossible with traditional methods. The cost savings and safety improvements make drone surveying an essential tool for modern construction projects. Drones can cover large areas in a fraction of the time required by ground crews, reducing survey time by up to 90%. They also eliminate the need for workers to access dangerous areas, significantly improving site safety. The data collected by drones integrates seamlessly with BIM software, providing comprehensive digital twins of construction sites.",
      image: DroneMapping,
      category: 'drones',
      author: 'Sarah Chen',
      date: '2024-01-12',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 3,
      title: "Understanding Cadastral Surveys: Protecting Your Property Rights",
      excerpt: "Learn why cadastral surveys are essential for property ownership and how they help prevent boundary disputes.",
      content: "Cadastral surveys form the legal foundation of property ownership. These precise boundary determinations ensure that property lines are accurately established and documented. Whether you're buying, selling, or developing land, a proper cadastral survey provides the certainty needed to protect your investment and avoid costly legal disputes with neighbors. Cadastral surveys involve detailed research of historical records, physical measurements of the land, and the establishment of permanent markers. They are conducted by licensed surveyors who follow strict legal standards to ensure the accuracy and admissibility of the survey in court. A proper cadastral survey not only defines property boundaries but also identifies easements, rights-of-way, and other encumbrances that may affect property use.",
      image: PropertyBoundaries,
      category: 'surveying',
      author: 'David Thompson',
      date: '2024-01-08',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 4,
      title: "GIS Mapping: Transforming Data into Actionable Insights for Urban Development",
      excerpt: "See how Geographic Information Systems are shaping smarter cities and more efficient infrastructure planning.",
      content: "Geographic Information Systems (GIS) have become indispensable tools for urban planners and developers. By integrating spatial data with demographic, environmental, and infrastructure information, GIS enables smarter decision-making for city development. From optimizing transportation networks to managing utilities and planning green spaces, GIS provides the insights needed for sustainable urban growth. Modern GIS platforms can analyze complex datasets to identify patterns, predict trends, and simulate the impact of development decisions. They help cities manage resources more efficiently, respond to emergencies faster, and engage citizens through interactive maps and data visualization tools. The integration of real-time sensor data with traditional GIS has opened new possibilities for smart city applications.",
      image: GISApplications,
      category: 'gis',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 5,
      title: "The Critical Role of Engineering Surveys in Major Infrastructure Projects",
      excerpt: "Understand how precise engineering surveys ensure the success of bridges, roads, and large-scale construction projects.",
      content: "Engineering surveys provide the precise spatial data that forms the foundation of every major infrastructure project. From initial site analysis to construction layout and final as-built documentation, these surveys ensure that structures are built exactly according to design specifications. The accuracy of engineering surveys directly impacts project safety, cost-effectiveness, and long-term structural integrity. Engineering surveyors use advanced equipment like robotic total stations, GPS receivers, and laser scanners to establish control networks, set out construction points, and verify the position of structural elements. Their work ensures that bridges align perfectly, buildings are constructed level and plumb, and underground utilities are installed in the correct locations. Without precise engineering surveys, modern infrastructure projects would be impossible to execute successfully.",
      image: ConstructionSurvey,
      category: 'engineering',
      author: 'Robert Kim',
      date: '2024-01-02',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 6,
      title: "Mine Surveying: Ensuring Safety and Efficiency in Mining Operations",
      excerpt: "Learn about the specialized techniques used in mine surveying to maintain safety standards and optimize resource extraction.",
      content: "Mine surveying plays a crucial role in ensuring both safety and efficiency in mining operations. Surveyors use advanced equipment to monitor pit walls, calculate ore volumes, and track production progress. Regular surveys help identify potential geotechnical hazards and ensure compliance with mining plans, contributing to safer working environments and more profitable operations. Modern mine surveyors employ technologies like laser scanning, drone photogrammetry, and GPS to create detailed 3D models of mining sites. These models help optimize extraction sequences, monitor slope stability, and calculate stockpile volumes with unprecedented accuracy. The data collected by mine surveyors is essential for regulatory compliance, resource management, and long-term mine planning, making them invaluable members of any mining team.",
      image: MiningSurvey,
      category: 'mining',
      author: 'James Wilson',
      date: '2023-12-28',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 7,
      title: "The Future of Urban Planning: Integrating Survey Data with Smart City Technologies",
      excerpt: "Explore how modern surveying techniques are enabling the development of smarter, more sustainable cities.",
      content: "Urban planning is undergoing a digital transformation, with survey data playing a central role in smart city development. High-precision surveys provide the spatial framework for integrating IoT devices, autonomous vehicles, and intelligent infrastructure systems. This data-driven approach enables more efficient resource management, better traffic flow, and improved quality of life for urban residents. Surveyors are now creating detailed digital twins of cities that simulate everything from traffic patterns and energy consumption to emergency response scenarios. These digital models allow planners to test development proposals virtually before implementation, reducing risks and optimizing outcomes. The combination of traditional surveying expertise with emerging technologies like AI and machine learning is creating new opportunities for sustainable urban development that balances growth with environmental preservation.",
      image: UrbanPlanning,
      category: 'planning',
      author: 'Lisa Zhang',
      date: '2023-12-22',
      readTime: '8 min read',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles', count: blogPosts.length },
    { id: 'technology', name: 'Survey Technology', count: blogPosts.filter(post => post.category === 'technology').length },
    { id: 'drones', name: 'Drone Surveying', count: blogPosts.filter(post => post.category === 'drones').length },
    { id: 'surveying', name: 'Land Surveying', count: blogPosts.filter(post => post.category === 'surveying').length },
    { id: 'gis', name: 'GIS & Mapping', count: blogPosts.filter(post => post.category === 'gis').length },
    { id: 'engineering', name: 'Engineering', count: blogPosts.filter(post => post.category === 'engineering').length },
    { id: 'mining', name: 'Mine Surveying', count: blogPosts.filter(post => post.category === 'mining').length },
    { id: 'planning', name: 'Urban Planning', count: blogPosts.filter(post => post.category === 'planning').length }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const handleReadFullArticle = (postId) => {
    setExpandedArticle(expandedArticle === postId ? null : postId);
  };

  const closeExpandedArticle = () => {
    setExpandedArticle(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('article-expanded-box')) {
      closeExpandedArticle();
    }
  };

  return (
    <div className={`blog-page ${expandedArticle ? 'modal-open' : ''}`}>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">home</Link> / <span>blog</span>
      </div>

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-content">
          <h1>VistaView Consult Blog</h1>
          <p>Expert insights, industry trends, and technical knowledge from Ghana's leading surveying and engineering consultancy</p>
        </div>
        <div className="hero-image">
          <img src={BlogHero} alt="Surveying and Engineering Insights" />
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts">
        <h2>Featured Articles</h2>
        <div className="featured-grid">
          {featuredPosts.map(post => (
            <article key={post.id} className="featured-card">
              <div className="featured-image">
                <img src={post.image} alt={post.title} />
                <span className="category-tag">{categories.find(cat => cat.id === post.category)?.name}</span>
              </div>
              <div className="featured-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="post-meta">
                  <span className="author">By {post.author}</span>
                  <span className="date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <button 
                  className="read-more-btn"
                  onClick={() => handleReadFullArticle(post.id)}
                >
                  Read Full Article
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <div className="blog-content">
        {/* Categories Sidebar */}
        <aside className="categories-sidebar">
          <h3>Categories</h3>
          <ul className="category-list">
            {categories.map(category => (
              <li key={category.id}>
                <button
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="category-name">{category.name}</span>
                  <span className="post-count">({category.count})</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Newsletter Signup */}
          <div className="newsletter-box">
            <h4>Stay Updated</h4>
            <p>Get the latest articles and industry insights delivered to your inbox</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </aside>

        {/* Blog Posts Grid */}
        <main className="posts-grid">
          <div className="posts-header">
            <h2>
              {activeCategory === 'all' ? 'All Articles' : categories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p className="results-count">Showing {filteredPosts.length} articles</p>
          </div>

          <div className="posts-list">
            {filteredPosts.map(post => (
              <article key={post.id} className="post-card">
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <span className="category-badge">{categories.find(cat => cat.id === post.category)?.name}</span>
                </div>
                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <p className="post-preview">{post.content.substring(0, 150)}...</p>
                  
                  <div className="post-meta">
                    <div className="author-info">
                      <span className="author">By {post.author}</span>
                    </div>
                    <div className="post-details">
                      <span className="date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span className="read-time">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="read-more-btn"
                    onClick={() => handleReadFullArticle(post.id)}
                  >
                    Read Full Article →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {filteredPosts.length > 6 && (
            <div className="load-more">
              <button className="load-more-btn">Load More Articles</button>
            </div>
          )}
        </main>
      </div>

      {/* CTA Section */}
      <section className="blog-cta">
        <div className="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact our expert team for professional surveying and engineering solutions tailored to your needs.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn primary">Get in Touch</Link>
            <Link to="/services" className="cta-btn secondary">Our Services</Link>
          </div>
        </div>
      </section>

      {/* Expanded Article Box - Moved outside the main content to prevent blinking */}
      {expandedArticle && (
        <div className="article-expanded-box" onClick={handleOverlayClick}>
          <div className="expanded-content">
            <button 
              className="close-expanded-btn"
              onClick={closeExpandedArticle}
            >
              ×
            </button>
            {(() => {
              const post = blogPosts.find(p => p.id === expandedArticle);
              return (
                <>
                  <h3>{post.title}</h3>
                  <div className="expanded-meta">
                    <span className="author">By {post.author}</span>
                    <span className="date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <div className="article-full-content">
                    <p>{post.content}</p>
                  </div>
                  <button 
                    className="close-article-btn"
                    onClick={closeExpandedArticle}
                  >
                    Close Article
                  </button>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
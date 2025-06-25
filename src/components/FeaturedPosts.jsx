import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon.jsx';
import Section from './Section.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Badge from './Badge.jsx';
import Grid from './Grid.jsx';

const {FiClock,FiUser,FiArrowRight}=FiIcons;

const FeaturedPosts=()=> {
  const posts=[ 
    {
      id: 2,
      title: "Mastering React Hooks: Advanced Patterns and Best Practices",
      excerpt: "Deep dive into advanced React Hooks patterns that will elevate your component architecture.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Michael Chen",
      date: "Dec 12,2024",
      readTime: "12 min read",
      category: "Technology"
    },
    {
      id: 3,
      title: "Design Systems That Scale: Building for the Future",
      excerpt: "Learn how to create design systems that grow with your product and team.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Emma Rodriguez",
      date: "Dec 10,2024",
      readTime: "10 min read",
      category: "Design"
    },
    {
      id: 4,
      title: "The Psychology of User Experience: What Drives Engagement",
      excerpt: "Understand the psychological principles that make interfaces intuitive and engaging.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "David Park",
      date: "Dec 8,2024",
      readTime: "15 min read",
      category: "Business"
    }
  ];

  const handleLinkClick=()=> {
    window.scrollTo({top: 0,behavior: 'smooth'});
  };

  return (
    <Section variant="default" padding="lg" container="7xl">
      <Section.Header
        title="Featured Articles"
        description="Discover our most popular and insightful content, carefully curated for you."
        centered={true}
      />

      <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={8} stagger={true}>
        {posts.map((post) => (
          <Card key={post.id} variant="elevated" padding="none" className="group overflow-hidden">
            <div className="relative overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 left-4">
                <Badge variant="primary" className="shadow-lg">
                  {post.category}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            <Card.Body padding="lg">
              <Card.Title className="group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                {post.title}
              </Card.Title>
              
              <Card.Description className="mb-4 line-clamp-2">
                {post.excerpt}
              </Card.Description>
              
              <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiUser} className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiClock} className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              <Link to={`/post/${post.id}`} onClick={handleLinkClick}>
                <Button 
                  variant="ghost" 
                  size="sm"
                  icon={FiArrowRight}
                  iconPosition="right"
                  className="group-hover:bg-primary-50 group-hover:text-primary-700 w-full justify-center"
                >
                  Read More
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Grid>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link to="/blog" onClick={handleLinkClick}>
          <Button 
            variant="outline"
            size="lg"
            icon={FiArrowRight}
            iconPosition="right"
          >
            View All Articles
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
};

export default FeaturedPosts;
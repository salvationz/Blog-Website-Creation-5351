import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import MarkdownRenderer from '../components/MarkdownRenderer';
import TableOfContents from '../components/TableOfContents';

const { FiArrowLeft, FiClock, FiUser, FiCalendar, FiTag, FiShare2, FiHeart, FiBookmark } = FiIcons;

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog posts with Markdown content
  const blogPosts = {
    1: {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      content: `
The landscape of web development is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will reshape how we build and interact with web applications.

![Web Development Future](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80 "The future of web development is bright and full of possibilities")

## AI-Powered Development Tools

Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming indispensable for modern developers.

### Key Benefits

- **Faster Development**: AI can generate boilerplate code instantly
- **Bug Detection**: Advanced AI can spot potential issues before they become problems
- **Code Optimization**: AI suggests improvements for better performance

> "GitHub Copilot and similar tools are just the beginning of this transformation. We're entering an era where AI becomes our coding partner."

\`\`\`javascript
// Example: AI-generated React component
const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};
\`\`\`

![AI Development](https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80 "AI is transforming how we write code")

## WebAssembly (WASM) Adoption

WebAssembly continues to gain traction, enabling near-native performance for web applications. This technology opens up new possibilities for complex applications that were previously limited to desktop environments.

### Use Cases

1. **Gaming Applications** - High-performance browser games
2. **Image/Video Processing** - Real-time media manipulation
3. **Scientific Computing** - Complex calculations in the browser
4. **Legacy Code Migration** - Bringing C++ applications to the web

## Progressive Web Apps (PWAs) Evolution

PWAs are becoming more sophisticated, offering app-like experiences that rival native applications.

| Feature | Traditional Web | PWA | Native App |
|---------|----------------|-----|------------|
| Offline Support | ❌ | ✅ | ✅ |
| Push Notifications | ❌ | ✅ | ✅ |
| Installation | ❌ | ✅ | ✅ |
| App Store Distribution | ❌ | ✅ | ✅ |
| Cross-Platform | ✅ | ✅ | ❌ |

![PWA Features](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80 "Progressive Web Apps bridge the gap between web and native")

## Micro-Frontends Architecture

As applications grow in complexity, micro-frontends provide a way to break down large applications into manageable, independently deployable pieces.

### Benefits

- **Team Autonomy**: Different teams can work on different parts
- **Technology Diversity**: Each micro-frontend can use different frameworks
- **Scalable Development**: Easier to scale development teams
- **Independent Deployment**: Deploy features without affecting the entire app

## Serverless and Edge Computing

The shift towards serverless architectures and edge computing is accelerating. These technologies offer:

- **Improved Performance**: Content served from locations closer to users
- **Reduced Costs**: Pay only for what you use
- **Better Scalability**: Automatic scaling based on demand
- **Global Distribution**: Deploy functions worldwide instantly

![Edge Computing](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80 "Edge computing brings processing closer to users")

---

## Conclusion

The future of web development is bright and full of possibilities. By staying informed about these trends and continuously learning, developers can build better, more efficient, and more user-friendly applications.

**Key Takeaways:**

- Embrace AI tools to accelerate development
- Consider WebAssembly for performance-critical applications
- Build PWAs for better user experiences
- Adopt micro-frontends for scalable architectures
- Leverage serverless and edge computing for global reach

*What trends are you most excited about? Share your thoughts in the comments below!*
      `,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Technology",
      tags: ["Web Development", "Technology", "Trends", "AI", "WebAssembly"]
    },
    2: {
      id: 2,
      title: "Mastering React Hooks: Advanced Patterns and Best Practices",
      content: `
React Hooks have revolutionized how we write React components, making functional components more powerful and expressive. Let's dive deep into advanced patterns that will elevate your React development skills.

![React Hooks](https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80 "React Hooks make functional components powerful")

## Understanding Hook Fundamentals

Before diving into advanced patterns, let's recap the fundamental hooks:

- **useState**: Manages component state
- **useEffect**: Handles side effects
- **useContext**: Consumes React context
- **useReducer**: Manages complex state logic

## Advanced Hook Patterns

### Custom Hooks for Logic Reuse

Custom hooks allow you to extract component logic into reusable functions.

\`\`\`javascript
// Custom hook for API calls
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
\`\`\`

### useReducer for Complex State Management

When state logic becomes complex, \`useReducer\` provides better organization:

\`\`\`javascript
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload 
            ? { ...todo, completed: !todo.completed } 
            : todo
        )
      };
    default:
      return state;
  }
};
\`\`\`

![React State Management](https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80 "Managing complex state with useReducer")

### Optimization with useMemo and useCallback

Prevent unnecessary re-renders and computations:

\`\`\`javascript
const ExpensiveComponent = ({ items, filter }) => {
  // Memoize expensive calculations
  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // Memoize callback functions
  const handleItemClick = useCallback((item) => {
    console.log('Clicked:', item);
  }, []);

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id} onClick={() => handleItemClick(item)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
\`\`\`

## Best Practices

### Hook Dependencies

Always include all dependencies in your hook dependency arrays:

> **Rule of Hooks**: Only call hooks at the top level of your React function, never inside loops, conditions, or nested functions.

### Custom Hook Naming

- Always prefix custom hooks with "use"
- Use descriptive names that indicate what the hook does
- Keep hooks focused on a single responsibility

### Error Boundaries with Hooks

While hooks can't directly replace error boundaries, you can create custom hooks for error handling:

\`\`\`javascript
const useErrorHandler = () => {
  const [error, setError] = useState(null);

  const resetError = () => setError(null);

  const captureError = (error) => {
    setError(error);
    // Log to error reporting service
    console.error('Captured error:', error);
  };

  return { error, resetError, captureError };
};
\`\`\`

![Error Handling](https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80 "Proper error handling improves user experience")

## Advanced Patterns Summary

| Pattern | Use Case | Benefits |
|---------|----------|----------|
| Custom Hooks | Logic reuse | DRY principle, testability |
| useReducer | Complex state | Predictable state updates |
| useMemo | Expensive calculations | Performance optimization |
| useCallback | Callback optimization | Prevent unnecessary re-renders |

---

## Conclusion

Mastering these advanced React Hook patterns will significantly improve your component architecture and application performance. Remember to:

1. **Keep hooks simple and focused**
2. **Use custom hooks for reusable logic**
3. **Optimize with useMemo and useCallback when needed**
4. **Follow the rules of hooks consistently**

*Happy coding with React Hooks! 🚀*
      `,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "12 min read",
      category: "Technology",
      tags: ["React", "Hooks", "JavaScript", "Frontend"]
    },
    3: {
      id: 3,
      title: "Design Systems That Scale: Building for the Future",
      content: `
Design systems are the backbone of scalable product development. They ensure consistency, improve efficiency, and enable teams to build better user experiences faster.

![Design Systems](https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80 "A well-organized design system is the foundation of great products")

## What is a Design System?

A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build applications.

### Core Components

- **Design Tokens** - Colors, typography, spacing
- **Component Library** - Buttons, forms, navigation
- **Guidelines** - Usage patterns and best practices
- **Documentation** - How to implement and use

## Building Scalable Design Systems

### Start with Design Tokens

Design tokens are the atomic elements of your design system:

\`\`\`css
/* Color Tokens */
:root {
  --color-primary-50: #eff6ff;
  --color-primary-500: #3b82f6;
  --color-primary-900: #1e3a8a;

  /* Typography Tokens */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;

  /* Spacing Tokens */
  --spacing-1: 0.25rem;
  --spacing-4: 1rem;
  --spacing-8: 2rem;
}
\`\`\`

### Component Architecture

Build components with composition in mind:

\`\`\`jsx
// Base Button Component
const Button = ({ variant = 'primary', size = 'medium', children, ...props }) => {
  const baseClasses = 'btn';
  const variantClasses = \`btn--\${variant}\`;
  const sizeClasses = \`btn--\${size}\`;

  return (
    <button 
      className={\`\${baseClasses} \${variantClasses} \${sizeClasses}\`}
      {...props}
    >
      {children}
    </button>
  );
};

// Usage Examples
<Button variant="primary" size="large">Primary Action</Button>
<Button variant="secondary" size="small">Secondary Action</Button>
\`\`\`

![Component Library](https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80 "A comprehensive component library accelerates development")

### Documentation Strategy

Good documentation is crucial for adoption:

| Documentation Type | Purpose | Audience |
|-------------------|---------|----------|
| Getting Started | Quick setup guide | Developers |
| Component Docs | Usage examples | Designers & Developers |
| Design Guidelines | Visual principles | Designers |
| Migration Guides | Version updates | All teams |

## Governance and Maintenance

### Version Control Strategy

Use semantic versioning for design system releases:

- **Major (1.0.0)**: Breaking changes
- **Minor (1.1.0)**: New features, backwards compatible
- **Patch (1.1.1)**: Bug fixes

### Team Structure

Successful design systems require dedicated teams:

1. **Design System Team** - Core maintainers
2. **Contributors** - Feature developers
3. **Consumers** - Product teams using the system

## Tools and Technologies

### Popular Design System Tools

- **Figma** - Design collaboration
- **Storybook** - Component documentation
- **Chromatic** - Visual testing
- **Design Tokens Studio** - Token management

\`\`\`json
{
  "name": "@company/design-system",
  "version": "2.1.0",
  "dependencies": {
    "styled-components": "^5.3.0",
    "react": "^18.0.0"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  }
}
\`\`\`

![Design Tools](https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80 "The right tools make design systems more effective")

## Measuring Success

### Key Metrics to Track

- **Adoption Rate** - Percentage of products using the system
- **Consistency Score** - Visual consistency across products
- **Development Velocity** - Time to build new features
- **Bug Reports** - Quality of components

### Success Indicators

> "A successful design system reduces design debt, accelerates development, and creates cohesive user experiences across all touchpoints."

## Common Pitfalls to Avoid

### Over-Engineering

- Don't build components before you need them
- Start simple and evolve based on real needs

### Lack of Governance

- Establish clear contribution guidelines
- Regular review and approval processes

### Poor Communication

- Regular updates to consuming teams
- Clear migration paths for breaking changes

---

## Conclusion

Building a scalable design system is an investment in your organization's future. It requires:

- **Clear Vision** - Align on goals and principles
- **Strong Foundation** - Start with solid design tokens
- **Iterative Approach** - Build and improve continuously
- **Team Collaboration** - Bridge design and development

Remember: A design system is never "done" – it's a living, evolving asset that grows with your organization.

*Start small, think big, and always keep your users at the center of every decision.*
      `,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      author: "Emma Rodriguez",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Design",
      tags: ["Design Systems", "UI/UX", "Scalability", "Components"]
    }
  };

  const post = blogPosts[id] || blogPosts[1]; // Fallback to first post if ID not found

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content with TOC */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiUser} className="w-5 h-5" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiClock} className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 mb-8">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <SafeIcon icon={FiHeart} className="w-5 h-5" />
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <SafeIcon icon={FiBookmark} className="w-5 h-5" />
                  <span>Save</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <SafeIcon icon={FiShare2} className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </motion.header>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MarkdownRenderer content={post.content} />
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiTag} className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-700 font-medium">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 p-6 bg-gray-50 rounded-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{post.author}</h3>
                  <p className="text-gray-600">
                    Senior Web Developer and Technology Enthusiast. Passionate about creating beautiful and functional web experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Table of Contents Sidebar */}
          <div className="lg:col-span-1">
            <TableOfContents content={post.content} />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
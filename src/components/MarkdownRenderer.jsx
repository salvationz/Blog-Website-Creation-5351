import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

const MarkdownRenderer = ({ content }) => {
  // Generate ID from heading text
  const generateId = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  const components = {
    // Custom heading components with IDs for TOC
    h1: ({ children }) => {
      const id = generateId(children.toString());
      return (
        <h1 
          id={id} 
          className="text-4xl font-bold text-gray-900 dark:text-white mb-6 mt-8 pb-2 border-b border-gray-200 dark:border-gray-700 scroll-mt-24"
        >
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = generateId(children.toString());
      return (
        <h2 
          id={id} 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-8 scroll-mt-24"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = generateId(children.toString());
      return (
        <h3 
          id={id} 
          className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-6 scroll-mt-24"
        >
          {children}
        </h3>
      );
    },
    h4: ({ children }) => {
      const id = generateId(children.toString());
      return (
        <h4 
          id={id} 
          className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-4 scroll-mt-24"
        >
          {children}
        </h4>
      );
    },
    h5: ({ children }) => {
      const id = generateId(children.toString());
      return (
        <h5 
          id={id} 
          className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-4 scroll-mt-24"
        >
          {children}
        </h5>
      );
    },
    h6: ({ children }) => {
      const id = generateId(children.toString());
      return (
        <h6 
          id={id} 
          className="text-base font-semibold text-gray-900 dark:text-white mb-2 mt-4 scroll-mt-24"
        >
          {children}
        </h6>
      );
    },

    // Paragraph styling
    p: ({ children }) => (
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        {children}
      </p>
    ),

    // List styling
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-6 text-lg text-gray-700 dark:text-gray-300 space-y-2 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 text-lg text-gray-700 dark:text-gray-300 space-y-2 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),

    // Image styling with caption support
    img: ({ src, alt, title }) => (
      <figure className="my-8">
        <img
          src={src}
          alt={alt}
          title={title}
          className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          loading="lazy"
        />
        {(alt || title) && (
          <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
            {title || alt}
          </figcaption>
        )}
      </figure>
    ),

    // Link styling
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline font-medium"
      >
        {children}
      </a>
    ),

    // Code blocks
    code: ({ inline, className, children }) => {
      if (inline) {
        return (
          <code className="bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400 px-2 py-1 rounded text-sm font-mono">
            {children}
          </code>
        );
      }

      return (
        <div className="my-6">
          <pre className="bg-gray-900 dark:bg-gray-950 text-white p-6 rounded-xl overflow-x-auto border border-gray-200 dark:border-gray-700">
            <code className={className}>{children}</code>
          </pre>
        </div>
      );
    },

    // Blockquote styling
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-500 dark:border-primary-400 pl-6 py-2 my-6 bg-primary-50 dark:bg-primary-900/20 rounded-r-lg">
        <div className="text-lg text-gray-700 dark:text-gray-300 italic">{children}</div>
      </blockquote>
    ),

    // Table styling
    table: ({ children }) => (
      <div className="my-8 overflow-x-auto">
        <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-50 dark:bg-gray-700">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
        {children}
      </td>
    ),

    // Horizontal rule
    hr: () => (
      <hr className="my-8 border-t-2 border-gray-200 dark:border-gray-700" />
    ),

    // Strong and emphasis
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900 dark:text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-800 dark:text-gray-200">{children}</em>
    )
  };

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
const posts = [
    {
        id:'1',
        title: 'My first blog post',
        author:'John Doe',
        date:'2025-03-15',
         content: `
      <p>This is the content of my very first blog post. It's exciting to start this journey!</p>
      <p>Here's some more text to make it a bit longer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <ul>
        <li>Point 1</li>
        <li>Point 2</li>
        <li>Point 3</li>
      </ul>
      <p>And a final paragraph.</p>
    `,
    },
     {
    id: '2',
    title: 'Learning React Hooks',
    author: 'Jane Smith',
    date: '2023-02-20',
    content: `
      <p>React Hooks have revolutionized how we write functional components. They allow us to use state and other React features without writing a class.</p>
      <p>Key hooks include <code>useState</code>, <code>useEffect</code>, and <code>useContext</code>. Understanding these is crucial for modern React development.</p>
      <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      <p>This is just a small example of what you can do with hooks.</p>
    `,
  },
  {
    id: '3',
    title: 'The Future of Web Development',
    author: 'Alice Johnson',
    date: '2023-03-10',
    content: `
      <p>Web development is constantly evolving. We're seeing more and more adoption of technologies like WebAssembly, Progressive Web Apps (PWAs), and server-side rendering (SSR) frameworks.</p>
      <p>Staying updated with these trends is important for any web developer.</p>
      <h3>Key Trends:</h3>
      <ol>
        <li>AI in Web Development</li>
        <li>No-code/Low-code Platforms</li>
        <li>Enhanced User Experience (UX)</li>
      </ol>
      <p>What are your thoughts on the future?</p>
    `,
  },
];

export default posts;
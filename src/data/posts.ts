export interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}
export const posts: Post[] = [
  {
    id: 1,
    slug: 'the-art-of-minimalism',
    title: 'The Art of Minimalism in Design',
    date: '2024-05-15',
    excerpt: 'Discover how less is more and how minimalism can bring clarity and focus to your designs and your life.',
    content: `
      <h1>The Art of Minimalism in Design</h1>
      <p>Minimalism is not just an aesthetic; it's a principle that can guide us to create more effective and user-friendly experiences. By stripping away the non-essential, we bring focus to what truly matters: the content and the user's goal.</p>
      <h2>Core Principles</h2>
      <p>At its heart, minimalism in design revolves around a few key ideas:</p>
      <ul>
        <li><strong>Clarity over clutter:</strong> Every element on the page should have a purpose. If it doesn't serve a function, it's likely noise.</li>
        <li><strong>Generous whitespace:</strong> Also known as negative space, whitespace is crucial for creating a sense of calm and guiding the user's eye.</li>
        <li><strong>Limited color palette:</strong> Using a few colors intentionally creates a stronger visual identity and reduces cognitive load.</li>
        <li><strong>Strong typography:</strong> When visual elements are sparse, typography becomes paramount. It must be legible, hierarchical, and beautiful.</li>
      </ul>
      <blockquote>"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry</blockquote>
      <p>Implementing these principles requires discipline. It's often harder to decide what to remove than what to add. But the result is a design that feels intentional, serene, and respectful of the user's attention.</p>
    `,
  },
  {
    id: 2,
    slug: 'typography-for-readability',
    title: 'Crafting Typography for Readability',
    date: '2024-05-10',
    excerpt: 'A deep dive into the science and art of choosing and pairing fonts to create a comfortable reading experience.',
    content: `
      <h1>Crafting Typography for Readability</h1>
      <p>Typography is the cornerstone of a good reading experience. It's the voice of your content. When done well, it becomes invisible, allowing the reader to be fully immersed in the text. When done poorly, it creates friction and fatigue.</p>
      <h2>Key Factors for Readability</h2>
      <h3>1. Font Choice</h3>
      <p>For long-form body text, a classic serif font like Georgia or Times New Roman is often preferred. Their serifs guide the eye along the line of text. For headings and UI elements, a clean sans-serif like Inter or Helvetica provides excellent clarity.</p>
      <h3>2. Line Length and Height</h3>
      <p>The ideal line length (or measure) is between 50-75 characters. Lines that are too long make it hard to find the next line, while lines that are too short disrupt reading rhythm. Line height (or leading) should be around 1.5x the font size to give lines room to breathe.</p>
      <pre><code>body {
  font-family: 'Georgia', serif;
  line-height: 1.6;
}</code></pre>
      <p>Ultimately, the goal is to create a typographic system that is both beautiful and functional, serving the content and the reader above all else.</p>
    `,
  },
  {
    id: 3,
    slug: 'the-power-of-whitespace',
    title: 'The Unseen Power of Whitespace',
    date: '2024-05-01',
    excerpt: 'Whitespace is not empty space; it\'s a powerful tool for creating balance, hierarchy, and elegance in your layouts.',
    content: `
      <h1>The Unseen Power of Whitespace</h1>
      <p>Often misunderstood as "empty space," whitespace is one of the most critical elements in a designer's toolkit. It is the canvas upon which all other elements are placed, and its proper use can make or break a design.</p>
      <h2>Why Whitespace Matters</h2>
      <p>Whitespace, or negative space, serves several important functions:</p>
      <ol>
        <li><strong>Improves Readability:</strong> It provides breathing room for text, making it easier to scan and comprehend.</li>
        <li><strong>Creates Visual Hierarchy:</strong> The space around an element can signify its importance. More space often implies more significance.</li>
        <li><strong>Establishes a Premium Feel:</strong> Generous use of whitespace is often associated with luxury and sophistication. It conveys confidence in the content.</li>
        <li><strong>Groups Related Elements:</strong> The law of proximity states that objects near each other are perceived as a group. Whitespace is how we create these groupings.</li>
      </ol>
      <p>Think of whitespace not as a void to be filled, but as an active element in your composition. By mastering its use, you can create layouts that are not only aesthetically pleasing but also more effective and user-friendly.</p>
    `,
  },
];
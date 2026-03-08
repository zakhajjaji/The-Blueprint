export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: number;
  featured?: boolean;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Revisiting the Fundamentals of Next.js",
    description: "A reflection on learning Next.js, the App Router and a modern stack with Clerk, Prisma and shadcn/ui—plus a short Git story.",
    date: "2026-03-08",
    category: "Development",
    readTime: 8,
    featured: true,
    content: `Recently, I collaborated and co-created a small starter repository to experiment with a modern stack combining of Next.js, Clerk authentication, Prisma ORM and shadcn/ui components. It was a great opportunity to revisit the fundamentals of setting up a project and reflect on the journey of learning these tools from scratch.

When I first encountered web development, it felt so fragmented and at times, it still can. For example, React handles the interface, something else manages routing and another tool manages the server. Then there are APIs, environment variables and databases layered on top like a glorious trifle. In my mind initially it felt all a little too much, and I guess that is why the Next.js framework was created.

Next.js has become one of the most practical frameworks for building your modern web applications. Not because it's trendy, but because it removes a lot of friction developers used to face.

## Next.js set up

Setting up a Next.js project today is surprisingly straightforward. The framework handles much of the heavy lifting for you.

### Step 1: Install Node.js

Before anything else, make sure Node.js is installed on your system (terminal). You can check with:

\`\`\`
node -v
\`\`\`

If it's not installed, download it from the official Node.js website. It can be daunting and complicated, so make sure you have a youtube video at hand or maybe ChatGPT can be your guide.

### Step 2: Create a Next.js Project

Next.js provides a simple CLI command to generate a new project:

\`\`\`
npx create-next-app@latest my-app
\`\`\`

During setup, you'll be prompted with a few configuration options such as:

- TypeScript support
- ESLint
- Tailwind CSS
- App Router
- Import aliases

For modern applications, it's recommended to enable TypeScript and the App Router.

Once the installation finishes, navigate into the project:

\`\`\`
cd my-app
npm run dev
\`\`\`

Inside your terminal, your development server will start at:

\`\`\`
http://localhost:3000
\`\`\`

At this point, you already have a working Next.js application. Click onto the \`http://localhost:3000\` link to load this into your browser. It will give you a visual of the next.js set up.

### Step 3: Structuring Your Project

A typical modern Next.js project using the App Router might look like this:

\`\`\`
app/
  layout.tsx
  page.tsx
  dashboard/
    page.tsx

components/
lib/
prisma/
public/
\`\`\`

The structure encourages a clean separation between pages, components and server logic. This structure becomes especially powerful as applications grow.

## Understanding the Next.js App Router

One of the most important concepts in modern Next.js is the App Router. Before version 13, Next.js used a system called the Pages Router, where each file inside the pages directory represented a route. The App Router introduces a more powerful and flexible structure using the app directory.

For example:

\`app/page.tsx\`

This file automatically becomes the homepage.

If you add:

\`app/blog/page.tsx\`

You instantly create the route:

\`/blog\`

The App Router also introduces powerful concepts such as:

- Server Components
- Nested layouts
- Streaming
- Loading states
- Server actions

For beginners, the key idea is this: *Your folder structure becomes your routing system !!!!*


This makes it intuitive and easy to scale as projects grow. Keep it as clean as possible, no need for unnecessary confusion.

## My first git experience (walking into the unknown)

Before building projects like this, there was another tool I had to learn first: Git. And if I'm honest, the first time installing Git felt like walking into the unknown. Maybe the matrix, or wandering into Batman's bat-cave. I remember setting up my first repository and thinking:

"I have no idea what I'm doing here."

Terms like:

- repositories
- commits
- branches
- pushes

It all felt abstract and slightly intimidating. Even installing Git and linking it to GitHub seemed like a big step at the time. But something interesting happens once you go through the process.

You run:

\`\`\`
git init
git add .
git commit -m "Initial commit"
git push
\`\`\`

And suddenly the mystery disappears, unless you forget to remember the space between 'add' and '.'

Your project appears on GitHub, version controlled, shareable and backed up. What once felt complicated quickly becomes part of your everyday workflow. That first step into Git can feel uncertain, but once you cross that line, it becomes one of the most valuable tools in a developer's toolkit.

## Final Thoughts

Next.js has become one of the most practical frameworks for building modern web applications and is certainly something I am most reliant on. With features like the App Router, built-in optimisation and seamless integration with tools like Prisma and Clerk; I believe developers like myself, can focus less on configuring infrastructure (which can be a pain).

If you're just starting out, don't worry if things feel unfamiliar at first. Every developer has experienced that moment of uncertainty when learning something new, whether it's Git, React, or Next.js. The best part about it all, everyday is a school day, so experiencing uncertainty and learning something new will be the norm; and before you realise it, what once felt like the unknown becomes second nature.

If you're curious, you can explore the starter project here:

[https://github.com/zakhajjaji/Next-js-Clerk-Prisma-Shadcn-Starter-Kit](https://github.com/zakhajjaji/Next-js-Clerk-Prisma-Shadcn-Starter-Kit)

It's a small foundation, but a useful starting point for experimenting with a modern Next.js stack, and please read the 'readme.md' file as your guide.`,
  },
  {
    slug: "building-ai-applications",
    title: "Building AI-Powered Applications",
    description: "Learn how to integrate AI capabilities into your web applications using OpenAI API and modern frameworks.",
    date: "2025-01-15",
    category: "AI/ML",
    readTime: 8,
    featured: false,
  },
];

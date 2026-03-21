export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: number;
  featured?: boolean;
  /** Short labels for the card (e.g. topics). */
  tags?: string[];
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-i-built-mochaic",
    title: "How I built Mochalc: Designing an AI chat system for SMEs.",
    description:
      "Recent UK research finds that while 56% of businesses using AI see productivity gains, 77% experience no notable revenue change. The main issue is not whether AI works, but if it integrates effectively into actual business workflows.",
    date: "2026-03-20",
    category: "AI/ML",
    readTime: 18,
    featured: true,
    tags: ["AI chat", "SMEs", "Next.js", "FastAPI"],
    content: `Recent UK research finds that while 56% of businesses using AI see productivity gains, 77% experience no notable revenue change. The main issue is not whether AI works, but if it integrates effectively into actual business workflows.

AI tools are impressive individually, yet businesses operate through specific processes and constraints. For SMEs, adoption is uneven, hinging on context, skills and readiness. Most failures occur because supporting systems are lacking, not due to model weakness.

## Mochaic, what it is and why I built it.

My approach was to engineer a scalable, adaptable, and streamlined chatbot equipped with a sophisticated AI framework, enabling SMEs to seamlessly integrate a production-grade chatbot into their operations. It can be used for internal workflows or customer experiences on their website. The main objective is to deliver accurate and timely information to the right users, connecting the power of AI for continuous around-the-clock support.

Mochaic is a small monorepo: a Next.js web app (\`apps/web/mochaic-chatbot\`) talks to a FastAPI API (\`apps/api\`). The browser never calls the Python service directly with secrets; instead, it posts to a same-origin Next.js route (\`/api/chat\`), which forwards the payload to the backend with an API key header. The backend validates that key, applies rate limits and input bounds, and then calls OpenAI and returns the updated conversation. Company-specific copy for the system prompt can live in SQLAlchemy-backed storage (SQLite by default; PostgreSQL via \`DATABASE_URL\`).

### Repository layout and responsibilities:

| Area | Role |
| :--- | :--- |
| apps/web/mochiac-chatbot/ | UI, client state, sanitisation, optional local persistence (lib/chat-messages.ts). |
| app/api/chat/route.ts | Server-side proxy to FastAPI; holds timeout and error mapping. |
| apps/api/main.py | FastAPI app: routes, middleware, rate limiting, chat orchestration. |
| apps/api/services.py | OpenAI client usage, system prompt assembly, message sanitisation, retries. |
| apps/api/schemas.py | Pydantic request/response models (ChatRequest, ChatMessage, config DTOs). |
| apps/api/auth.py | X-API-Key validation against env-configured keys. |
| apps/api/database.py | Engine, CompanyConfig model, migration from env when DB is empty. |
| apps/api/tests/ | Pytest integration tests against the FastAPI app. |

## Frontend: Next.js, React and the chat widget

The widget is a client component ("use client" in ChatWidget.tsx). It owns local React state for messages, input, loading and errors. Messages are typed (ChatMessage: role, content, timestamp, id, messageType). Outbound requests target /api/chat (relative URL), which keeps the api key on the server, not in the bundle.

Rendering safety: assistant/user content passes through SafeHTML(lib/sanatize.tsx) and DOMPurify-style patterns to mitigate XSS. Utilities (lib/utils.ts) prove helpers such as cn, IDs, and clipboard behaviour.

Persistence: lib/chat-messages.ts serialises messages to localStorage under a single STORAGE_KEY, converting things like Date to ISO strings on save and back on load, which is appropriate for client only continuity across refreshes, and not for authoritative server history. Currently, this is optional and can be scalable for specific SME needs if wanted, but certainly necessary in my opinion.

## The BFF pattern: app/api/chat/route.ts:

This route handler implements the backend-for-frontend pattern (bff): it reads the backend_api_url, next_public_api_url, attaches x-api-key when mochaic_api_key is set and fetches POST {backend}/api/chat with an AbortController timeout (FRONTEND_TIMEOUT_MS). It maps HTTP status codes to user-facing strings and logs technical detail server-side only, which is a clean separation between operator diagnostics and visitor copy.

## Backend: FastAPI application surface:

One startup, lifespan runs init_db() and migrate_from_env_vars() so an empty database can be bootstrapped from environment variables.

## Cross-cutting concerns:

* CORS from CORS_ORIGIN (comma-separated), with credentials allowed for configured origins.
* slowapi rate limiting, i.e. chat requests per minute from env.
* Request body size middle, i.e. 10MB cap to reduce DoS surface.
* Request ID middleware and structured JSON or text logging.

Chat endpoint (POST /api/chat): depends on verify_api_key because it enforces max message count and per-message length, maps Pydantic messages to plain dicts and calls chat_with_ai. The response is a ChatResponse carrying the full message list (including the new assistant turn), optionally trimmed to a window (for example last 50 messages).

Configuration API: GET/PUT /api/config (and a debug helper!) exposes CompanyConfig for runtime branding and contact details without redeploying prompt text in some setups.

Health: GET/ health reports whether critical env (e.g. OpenAI key, API keys) appears configured which is useful for orchestrators and load balancers.

## LLM integration: services.py

get_company_config() (with @lru_cache) resolves company fields from the database with env fallbacks (e.g sales email overridden by SALES_CONTACT_EMAIL).

get_system_prompt() substitues placeholders ({COMPANY_NAME}, {CURRENT_DATE}, etc.) into the default or env-driven OPENAI_SYSTEM_PROMPT.

sanitize_messages() normalises roles, drops empty lines, and strips known filler assistant greetings so the model context stays lean.

chat_with_ai() builds the OpenAI messages array (system message unless already present), reads model and max_tokens from env, and invokes client.chat.completions.create with a retry loop on transient errors (rate limit, connection, timeout). Failures surface as RuntimeError with logging suitable for operators.

*Note: today the module may initialise the openAI client at import time and require the openai api key early; operationally, some teams prefer lazy initialisation so /health and non-LLM paths can start without a key.*

## Data model and configuration:

CompanyConfig stores things like website name, company name, contact channels, description, services (JSON string in DB, list in API) and sales email. What is important to remember is that this can be easily amended to suit the needs of the SME. Migrate_from_env_vars seeds one row when the table is empty and env suggest real configuration; bridging a 12-factor deploy and database-backed multi-tenant-style config later.

## Closing thoughts:

Architecturally, Mochaic is a deliberately thin stack, no heavy agent framework, clear separation of concerns (UI to Next BFF to FastAPI to OpenAI) and defence in depth (API key, rate limits, size limits, sanitisation, structured logs). That keeps the system explainable and extendable; whether you add streaming, server-side conversation storage, or RAG later, the seams between layers are already well defined.

`,
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Revisiting the Fundamentals of Next.js",
    description: "A reflection on learning Next.js, the App Router and a modern stack with Clerk, Prisma and shadcn/ui—plus a short Git story.",
    date: "2026-03-08",
    category: "Development",
    readTime: 8,
    featured: false,
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

If it is not installed, download it from the official Node.js website. If you are new to the process, a quick YouTube walkthrough or even ChatGPT can help guide you through the installation.

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

Before building projects like this, there was another tool I had to learn first: Git. And if I'm honest, the first time installing Git felt like walking into the unknown. Maybe the matrix, or wandering into Batman's bat-cave. I remember setting up my first repository and thinking what most developers probably think the first time they touch Git:

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

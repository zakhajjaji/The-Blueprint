import React from "react";
import { Linkedin, Mail, Github } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";

const SocialTags = () => {
  return (
    <section>
        <div className="mt-12 flex flex-wrap justify-center gap-10" data-aos="fade-up" data-aos-delay="200">
      <div className="space-x-3">
        <Button size="icon" >
  <Link   href="https://www.linkedin.com/in/zak-hajjaji-m-sc-cemap-939920111/" target="_blank">
        <svg
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24px"
  height="24px"
>
  <g
    fill="none"
    stroke="#000000"
    stroke-linecap="round"
    stroke-linejoin="round"
    strokeWidth="2"
  >
    <path
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"
    />
    <circle cx="4" cy="4" r="2" />
  </g>
</svg>
</Link>
        </Button>
        <Button>
        <Mail/>
        </Button>
        <Button size="icon">
        <Link href="https://github.com/funkmafia" target="_blank">
        
        <svg
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24px"
  height="24px"
>
  <g
    fill="none"
    stroke="#000000"
    stroke-linecap="round"
    stroke-linejoin="round"
    strokeWidth="2"
  >
    <path
      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65c-.17.6-.22 1.23-.15 1.85v4"
    />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </g>
</svg>
        </Link>
        </Button>
      </div>
      </div>
    </section>
  );
};

export default SocialTags;

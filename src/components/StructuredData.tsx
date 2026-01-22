import { projects } from "@/data/projects";

export function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zak's Blueprint",
    url: "https://zakblueprint.com",
    description: "Full-stack developer specializing in Next.js, TypeScript, Python and AI integrations",
    author: {
      "@type": "Person",
      name: "Zak Hajjaji",
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zak Hajjaji",
    jobTitle: "Full-Stack Developer & AI Product Builder",
    url: "https://zakblueprint.com",
    sameAs: [
      "https://www.linkedin.com/in/zak-hajjaji-m-sc-939920111/",
      "https://github.com/funkmafia",
    ],
  };

  const projectSchemas = projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    url: project.link,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {projectSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

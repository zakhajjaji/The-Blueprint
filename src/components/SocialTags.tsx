import React from "react";
import { Linkedin, Mail, Github } from "lucide-react";

import { Button } from "./ui/button";

const SocialTags = () => {
  return (
    <section>
        <div className="mt-12 flex flex-wrap justify-center gap-10" data-aos="fade-up" data-aos-delay="200">
      <div className="space-x-3">
        <Button size="icon">
        <Linkedin />
        </Button>
        <Button>
        <Mail />
        </Button>
        <Button>
        <Github />
        </Button>
      </div>
      </div>
    </section>
  );
};

export default SocialTags;

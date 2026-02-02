import React from "react";
import { Container } from "../ui/Container";
import { Github, Linkedin, Facebook, Mail, Code2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface py-12 border-t border-white/5">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-display">
              <Code2 className="w-6 h-6 text-primary" />
              Vihanga Nimsara{" "}
            </h3>
            <p className="text-muted text-sm mt-2">
              Full Stack Developer doing detective work on bugs.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/kvn2004"
              className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vihanga-nimsara-6a8181317/"
              className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="mailto:knimsaravihanga@gmail.com"
              className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-muted text-sm">
          © {new Date().getFullYear()} Vihanga Nimsara. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

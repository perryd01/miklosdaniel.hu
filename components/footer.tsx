import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex gap-4 flex-col lg:flex-row items-center text-neutral-900 font-medium text-lg lg:text-xl">
          <a href="https://miklosdaniel.hu">miklosdaniel.hu</a>
          <a
            href="https://twitter.com/daniel_miklos"
            target={"_blank"}
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/miklos-daniel/"
            target={"_blank"}
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/perryd01"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://instagram.com/miklosdaniel.hu"
            target={"_blank"}
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

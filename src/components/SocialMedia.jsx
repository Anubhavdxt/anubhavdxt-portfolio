import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.github.com/anubhavdxt/">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/anubhavdxt/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/Anubhavdxtdev/">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://instagram.com/anubhavdxtdev">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;

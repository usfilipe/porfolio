import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/usfilipe"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-github"></i>
      </a>

      <a
        href="https://www.twitter.com/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-twitter"></i>
      </a>

      <a
        href="https://www.behance.com/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-behance"></i>
      </a>

      <a
        href="https://www.dribble.com/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-dribbble"></i>
      </a>

   
    </div>
  );
};

export default HeaderSocials;

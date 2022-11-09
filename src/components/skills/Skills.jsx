import React from "react";
import "./skills.css";
import Image1 from "../../assets/html-logo.png";
import Image2 from "../../assets/css-logo.png";
import Image3 from "../../assets/java-logo.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "HTML",
    description:
      "It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.",
  },
  {
    id: 2,
    image: Image2,
    title: "CSS",
    description:
      "It is used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
  },
  {
    id: 3,
    image: Image3,
    title: "JAVASCRIPT",
    description:
      "JavaScript allows you to add interactivity to pages. Common examples that you may have seen on the websites are sliders, click interactions, popups and so on.",
  },
  
];

const Skills = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Skills</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Skills;

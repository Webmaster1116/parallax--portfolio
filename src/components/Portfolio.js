import React, { Component } from "react";

// IMPORT STYLESHEETS
import "../stylesheets/Portfolio.css";

// IMPORT IMAGES
import PiqueSVG from "../images/portfolio/pique.svg";
import UproarSVG from "../images/portfolio/uproar.svg";
import SpellingSVG from "../images/portfolio/spelling.svg";
import SnippetsSVG from "../images/portfolio/snippets.svg";
import TodoSVG from "../images/portfolio/todo.svg";
import TypingSVG from "../images/portfolio/typing.svg";

// IMPORT COMPONENTS
import Footer from "./Footer";
import Heading from "./Heading";

class PortHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  imageLoaded(imageName) {
    this.setState(prevState => ({
      images: [...prevState.images, imageName]
    }));
  }

  componentDidMount() {
    this.props.scrollToPosition(0);
  }

  render() {
    return (
      <div className="parallax__cover__portfolio">
        {/* ------ section header -----------*/}
        <Heading
          title="Portfolio"
          para="My portfolio includes a variety of projects I have build
          end-to-end to improve my competence using web development
          technologies. I have many other projects at my Github page that
          you can also check out."
          button="GITHUB"
          link="https://github.com/devrod"
        />

        {/* ------ section One -----------*/}
        <div className="container__outer lightBG">
          <div
            className={
              this.state.images.includes("picOne")
                ? "portfolio container portImgLoaded"
                : "portfolio container"
            }
          >
            <div>
              <div className="portfolio__textTop">
                <h1 className="portfolio__header">PIQUE WEB DESIGN</h1>
                <p className="portfolio__para">
                  I built this website to implement design principles I had been
                  learning and to improve my understanding of multi-page react
                  websites.
                </p>
              </div>
              <div className="portfolio__tallLeft">
                <img
                  onLoad={() => this.imageLoaded("picOne")}
                  src={PiqueSVG}
                  className="portfolio__Img"
                  alt="Pique web design website screen shot"
                />
              </div>

              <div className="portfolio__textBottom">
                <h2 className="portfolio__innerHeader">Technologies</h2>
                <p className="portfolio__para">
                  Adobe Illustrator, Figma, React, Javascript, CSS, HTML5,
                  React-Router, and Scroll Animations.
                </p>
                <h2 className="portfolio__innerHeader">Skills</h2>
                <p className="portfolio__para">
                  Isometric design, Responsive Website Design, UI Design, and
                  Pop-up components.
                </p>
                <div className="portfolio__btnContainer">
                  <a
                    href="https://github.com/devrod/react-pique"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="portfolio__link"
                  >
                    <button className="portfolio__btn">GITHUB</button>
                  </a>
                  <a
                    href="http://devrod.github.io/react-pique"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="portfolio__link"
                  >
                    <button className="portfolio__btn portfolio__btnOrange">
                      DEMO
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------ section Two -----------*/}
        <div className="container__outer portfolio__outer__dark">
          <div
            className={
              this.state.images.includes("picFour")
                ? "portfolio container portImgLoaded"
                : "portfolio container"
            }
          >
            <h1 className="portfolio__header portfolio__fullWidth">
              CODE SNIPPETS
            </h1>
            <p className="portfolio__para portfolio__fullWidth">
              This web app provides users with an quick and easy way to store
              code snippets and other useful information that can be retrieved
              via tag or title searches.
            </p>
            <div className="portfolio__inner portfolio__innerMargin">
              <div className="portfolio__rightPanel portfolio__widePanel">
                <img
                  onLoad={() => this.imageLoaded("picFour")}
                  src={SnippetsSVG}
                  className="portfolio__Img"
                  alt="Code snippets website screen shot"
                />
              </div>
              <div className="portfolio__textBottom__thinLeft">
                <h2 className="portfolio__innerHeader">Technologies</h2>
                <p className="portfolio__para">
                  React, Node, Express, MongoDB, Javascript, CSS, HTML,
                  DigitalOcean.
                </p>
                <h2 className="portfolio__innerHeader">Skills</h2>
                <p className="portfolio__para">
                  Responsive Design, UI Design, Database, Pop-up components.
                </p>
                <div className="portfolio__btnContainer">
                  <a
                    href="https://github.com/devrod/snippets"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="portfolio__link"
                  >
                    <button className="portfolio__btn">GITHUB</button>
                  </a>
                  <a
                    href="http://www.roddo.xyz"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="portfolio__link"
                  >
                    <button className="portfolio__btn portfolio__btnOrange">
                      DEMO
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------ section Three -----------*/}
        <div className="container__outer portfolio__outer__light">
          <div
            className={
              this.state.images.includes("picThree")
                ? "portfolio container portImgLoaded"
                : "portfolio container"
            }
          >
            <h1 className="portfolio__header portfolio__fullWidth">
              SPELLING ANALYSER
            </h1>
            <p className="portfolio__para portfolio__fullWidth">
              This web app provides users with a spelling practice environment,
              gives live feedback to them about the types of mistakes they are
              making, and evaluates the users level to provide appropriately
              difficult words.
            </p>
            <div className="portfolio__innerMargin">
              <div className="portfolio__leftPanel portfolio__widePanel">
                <img
                  onLoad={() => this.imageLoaded("picThree")}
                  src={SpellingSVG}
                  className="portfolio__Img"
                  alt="Spelling analyser website screen shot"
                />
              </div>
              <div className="portfolio__textBottom__thin">
                <h2 className="portfolio__innerHeader">Technologies</h2>
                <p className="portfolio__para">
                  React, Node, Express, MongoDB, Javascript, CSS, HTML,
                  DigitalOcean.
                </p>
                <h2 className="portfolio__innerHeader">Skills</h2>
                <p className="portfolio__para">
                  Responsive Design, UI Design, Database, Data Visualization,
                  Text-To-Speech Integration.
                </p>
                <div className="portfolio__btnContainer">
                  <a
                    href="https://github.com/devrod/react-spelling"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="portfolio__link"
                  >
                    <button className="portfolio__btn">GITHUB</button>
                  </a>
                  <a
                    href="http://roddo.xyz:4000"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="portfolio__link"
                  >
                    <button className="portfolio__btn portfolio__btnOrange">
                      DEMO
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------ section Four -----------*/}
        <div className="container__outer portfolio__outer__dark">
          <div
            className={
              this.state.images.includes("picTwo")
                ? "portfolio container portImgLoaded"
                : "portfolio container"
            }
          >
            <div className="portfolio__textTop__left">
              <h1 className="portfolio__header">UPROAR WEB DESIGN</h1>
              <p className="portfolio__para">
                This website was built to improve my familiarity of multi-page
                react projects as most of my other react projects have been
                single page applications. I also wanted to improve my landing
                page design sense and font usage.
              </p>
            </div>

            <div className="portfolio__tallRight">
              <img
                onLoad={() => this.imageLoaded("picTwo")}
                src={UproarSVG}
                className="portfolio__Img"
                alt="uproar web design website screen shot"
              />
            </div>
            <div className="portfolio__textBottom__left">
              <h2 className="portfolio__innerHeader">Technologies</h2>
              <p className="portfolio__para">
                Figma, React, Javascript, CSS, HTML, and React Router.
              </p>
              <h2 className="portfolio__innerHeader">Skills</h2>
              <p className="portfolio__para">
                Responsive Design, UI Design, Routing, Pop-up components.
              </p>
              <div className="portfolio__btnContainer">
                <a
                  href="https://github.com/devrod/uproar"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="portfolio__link"
                >
                  <button className="portfolio__btn">GITHUB</button>
                </a>
                <a
                  href="http://devrod.github.io/uproar"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="portfolio__link"
                >
                  <button className="portfolio__btn portfolio__btnOrange">
                    DEMO
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ------ section Five -----------*/}
        <div className="container__outer portfolio__outer__light">
          <div
            className={
              this.state.images.includes("picThree")
                ? "portfolio container portImgLoaded"
                : "portfolio container"
            }
          >
            <h1 className="portfolio__header portfolio__fullWidth">TODO APP</h1>
            <p className="portfolio__para portfolio__fullWidth">
              This is a todo app that allows users to set timers for task, add
              tags, add colours, and clearly see progress of tasks via a card
              based layout.
            </p>
            <div className="portfolio__innerMargin">
              <div className="portfolio__leftPanel portfolio__widePanel">
                <img
                  onLoad={() => this.imageLoaded("picFive")}
                  src={TodoSVG}
                  className="portfolio__Img"
                  alt="Todo App website screen shot"
                />
              </div>
              <div className="portfolio__textBottom__thin">
                <h2 className="portfolio__innerHeader">Technologies</h2>
                <p className="portfolio__para">
                  Javascript, CSS, HTML, Webpack, SASS.
                </p>
                <h2 className="portfolio__innerHeader">Skills</h2>
                <p className="portfolio__para">
                  Responsive Design, UI Design, Local Storage.
                </p>
                <div className="portfolio__btnContainer">
                  <a
                    href="https://github.com/devrod/todo"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="portfolio__link"
                  >
                    <button className="portfolio__btn">GITHUB</button>
                  </a>
                  <a
                    href="http://devrod.github.io/todo"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="portfolio__link"
                  >
                    <button className="portfolio__btn portfolio__btnOrange">
                      DEMO
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------ section Six -----------*/}
        <div className="container__outer portfolio__outer__dark">
          <div
            className={
              this.state.images.includes("picFour")
                ? "portfolio container portImgLoaded"
                : "portfolio container"
            }
          >
            <h1 className="portfolio__header portfolio__fullWidth">
              TYPING PRACTICER
            </h1>
            <p className="portfolio__para portfolio__fullWidth">
              This web app allows users to practice there typing. It gives them
              the options to focus on text, numbers or symbols. If offers a
              typing speed test using common words. Also it allows users to
              generate there own text based to characters they need to practice.
            </p>
            <div className="portfolio__innerMargin">
              <div className="portfolio__rightPanel portfolio__widePanel">
                <img
                  onLoad={() => this.imageLoaded("picFour")}
                  src={TypingSVG}
                  className="portfolio__Img"
                  alt="Typing practicer website screen shot"
                />
              </div>
              <div className="portfolio__textBottom__thinLeft">
                <h2 className="portfolio__innerHeader">Technologies</h2>
                <p className="portfolio__para">
                  React, Javascript, CSS, HTML, and React Router.
                </p>
                <h2 className="portfolio__innerHeader">Learnt</h2>
                <p className="portfolio__para">Responsive Design, UI Design.</p>
                <div className="portfolio__btnContainer">
                  <a
                    href="https://github.com/devrod/react-typing"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="portfolio__link"
                  >
                    <button className="portfolio__btn">GITHUB</button>
                  </a>
                  <a
                    href="http://devrod.github.io/react-typing"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="portfolio__link"
                  >
                    <button className="portfolio__btn portfolio__btnOrange">
                      DEMO
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------ section Footer -----------*/}
        <Footer scrollToPosition={this.props.scrollToPosition} />
      </div>
    );
  }
}

export default PortHeader;

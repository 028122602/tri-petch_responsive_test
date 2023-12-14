import React, { useEffect, useState } from "react";
import "./App.css";
import RugPic from "./assets/rug.png";
import RugPic2 from "./assets/rug2.png";
import RugPic3 from "./assets/rug3.png";

import BasPic from "./assets/bas.png";
import Carousel from "better-react-carousel";
// import Carousel from './Carousel/Carousel'

function App() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const firstContent = () => {
    const articleList = [
      `Connect with coaches directly, you can ping coaches to view
      profile.`,
      `Work with other student athletes to  increase visability. When you
      share and like other players videos it will increase your
      visability as a player. This is the team work aspect to Surface 1.`,
      `Resources and tools for you to get better as a student Athelte.
      Access to training classes, tutor sessions, etc `,
    ];
    const article = (
      <>
        <div className="c-topic-header">
          <div className="c-topic-article-container__flex"></div>
          <div className="c-topic-article-container__flex">ATHLETS</div>
        </div>
        <div className="c-first-child_img">
          <img src={screenSize.width > 1300 ? RugPic : RugPic2} alt="" />
        </div>
        <div className="c-topic-article" style={{ height: "210px" }}>
          <div className="c-topic-article-container__flex"></div>
          <div className="c-topic-article-container paddingTop50">
            <div className="c-topic-article_header">
              <div className="c-topic-article_section">01</div>
              <div className="c-topic-article_section_text">CONNECTION</div>
            </div>
            <div className="c-topic-article_content">{articleList[0]}</div>
          </div>
        </div>

        <div
          className="c-topic-article"
          style={{
            backgroundColor: "#F5F4F9",
            height: screenSize.width > 1300 ? "267px" : "234px",
          }}
        >
          <div className="c-topic-article-container__flex"></div>
          <div className="c-topic-article-container">
            <div className="c-topic-article_header">
              <div className="c-topic-article_section">02</div>
              <div className="c-topic-article_section_text">COLLABORATION</div>
            </div>
            <div className="c-topic-article_content">{articleList[1]}</div>
          </div>
        </div>
        <div
          className="c-topic-article"
          style={{
            backgroundColor: "#5E3DB3",
            height: screenSize.width > 1300 ? "238px" : "178px",
          }}
        >
          <div className="c-topic-article-container__flex"></div>
          <div className="c-topic-article-container">
            <div className="c-topic-article_header">
              <div className="c-topic-article_section_white-border">03</div>
              <div className="c-topic-article_section_text">GROWTH</div>
            </div>
            <div className="c-topic-article_content-white">
              {articleList[2]}
            </div>
          </div>
        </div>
      </>
    );

    const moblieArticle = (
      <div className="c-mobile-container">
        <div className="c-topic-header">
          <div className="c-topic-article-container__flex">ATHLETS</div>
        </div>
        <div className="c-first-child_img">
          <img src={RugPic3} alt="" />
        </div>
        <Carousel
          cols={1}
          rows={1}
          gap={0}
          loop
          dot={MyDot}
          showDots
          mobileBreakpoint={true}
          hideArrow={true}
          containerStyle={{
            backgroundColor: "#F5F4F9",
            transform: "translateY(-50px)",
            height: "258px",
          }}
        >
          <Carousel.Item>
            <div className="c-topic-article-container">
              <div className="c-topic-article_header">
                <div className="c-topic-article_section">01</div>
                <div className="c-topic-article_section_text">CONNECTION</div>
              </div>
              <div className="c-topic-article_content">{articleList[0]}</div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="c-topic-article-container">
              <div className="c-topic-article_header">
                <div className="c-topic-article_section">02</div>
                <div className="c-topic-article_section_text">
                  COLLABORATION
                </div>
              </div>
              <div className="c-topic-article_content">{articleList[1]}</div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="c-topic-article-container">
              <div className="c-topic-article_header">
                <div className="c-topic-article_section">03</div>
                <div className="c-topic-article_section_text">GROWTH</div>
              </div>
              <div className="c-topic-article_content">{articleList[2]}</div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );

    return <>{screenSize.width <= 768 ? moblieArticle : article}</>;
  };

  const secondContent = () => {
    const articleList = [
      `Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.`,
      `Work with recruiter to increase your chances of findingtalented athlete.`,
      `Save your time, recruit proper athlets for your team.`,
    ];
    const article = (
      <>
        <div className="c-topic-header">
          <div className="c-topic-article-container__flex">PLAYERS</div>
        </div>
        <div className="c-second-child_img">
          <img src={BasPic} alt="" />
        </div>
        <div className="c-topic-article" style={{ height: "238px" }}>
          <div className="c-topic-article-container paddingTop50">
            <div className="c-topic-article_header">
              <div className="c-topic-article_section">01</div>
              <div className="c-topic-article_section_text">CONNECTION</div>
            </div>
            <div className="c-topic-article_content">{articleList[0]}</div>
          </div>
        </div>
        <div
          className="c-topic-article"
          style={{
            backgroundColor: "#F5F4F9",
            height: screenSize.width > 1300 ? "210px" : "179px",
          }}
        >
          <div className="c-topic-article-container">
            <div className="c-topic-article_header">
              <div className="c-topic-article_section">02</div>
              <div className="c-topic-article_section_text">COLLABORATION</div>
            </div>
            <div className="c-topic-article_content">{articleList[1]}</div>
          </div>
        </div>
        <div
          className="c-topic-article"
          style={{
            backgroundColor: "#090C35",
            height: screenSize.width > 1300 ? "210px" : "151px",
          }}
        >
          <div className="c-topic-article-container">
            <div className="c-topic-article_header">
              <div
                className="c-topic-article_section_white-border"
                style={{ color: "#8F6BE8" }}
              >
                03
              </div>
              <div className="c-topic-article_section_text">GROWTH</div>
            </div>
            <div className="c-topic-article_content-white">
              {articleList[2]}
            </div>
          </div>
        </div>
      </>
    );
    const moblieArticle = (
      <div className="c-mobile-container">
        <div className="c-topic-header">
          <div className="c-topic-article-container__flex">PLAYERS</div>
        </div>
        <div className="c-second-child_img">
          <img src={BasPic} alt="" />
        </div>
        <Carousel
          cols={1}
          rows={1}
          gap={0}
          loop
          dot={MyDot}
          showDots
          mobileBreakpoint={true}
          hideArrow={true}
          containerStyle={{
            backgroundColor: "#F5F4F9",
            transform: "translateY(-50px)",
            height: "258px",
          }}
        >
          <Carousel.Item>
            <div className="c-topic-article-container">
              <div className="c-topic-article_header">
                <div className="c-topic-article_section">01</div>
                <div className="c-topic-article_section_text">CONNECTION</div>
              </div>
              <div className="c-topic-article_content">{articleList[0]}</div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="c-topic-article-container">
              <div className="c-topic-article_header">
                <div className="c-topic-article_section">02</div>
                <div className="c-topic-article_section_text">
                  COLLABORATION
                </div>
              </div>
              <div className="c-topic-article_content">{articleList[1]}</div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="c-topic-article-container">
              <div className="c-topic-article_header">
                <div className="c-topic-article_section">03</div>
                <div className="c-topic-article_section_text">GROWTH</div>
              </div>
              <div className="c-topic-article_content">{articleList[2]}</div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
    return <>{screenSize.width <= 768 ? moblieArticle : article}</>;
  };
  return (
    <div className="App">
      <div className="c-first-child-container">
        <div className="c-first-child_content">{firstContent()}</div>
      </div>
      <div className="c-second-child_container">
        <div className="c-second-child_content">{secondContent()}</div>
      </div>
    </div>
  );
}

const MyDot = ({ isActive }) => (
  <span
    style={{
      display: "inline-block",
      height: "10px",
      width: "10px",
      background: isActive ? "#5C3CAF" : "#D8D8D8",
      borderRadius: "50%",
      marginBottom: "80px",
    }}
  ></span>
);

export default App;

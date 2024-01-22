import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import styles from "./MacBookAir7.module.css";

const MacBookAir7: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGrunstreifen11ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onImage141Click = useCallback(() => {
    navigate("/macbook-air-8");
  }, [navigate]);

  const onImage113Click = useCallback(() => {
    navigate("/macbook-air-4");
  }, [navigate]);

  return (
    <div className={styles.macbookAir1}>
      <div className={styles.frameA}>
        <div className={styles.frameB}>
          <div className={styles.fRAME}>
            <h1 className={styles.experienceDesignX}>
              Experience Design x Generative AI
            </h1>
            <div className={styles.thisPortfolioConsistsContainer}>
              <p className={styles.thisPortfolioConsistsOfVis}>
                <span
                  className={styles.thisPortfolioConsists}
                >{`This portfolio consists of visual explorations made by `}</span>
                <i className={styles.midjourneyAi}>MidJourney AI.</i>
                <span>{` `}</span>
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.midjourneyIsA}>
                MidJourney is a generative AI tool that can generate a wide
                array of visual concepts and designs based on textual input.
              </p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p className={styles.generativeAiCan}>
                Generative AI can quickly turn ideas into visual prototypes.
                This speeds up the design process, allowing for more iterative
                cycles and the ability to test and refine concepts faster than
                traditional methods. It often produces unexpected and novel
                design elements, encouraging designers to think outside the box.
              </p>
              <p className={styles.blankLine2}>&nbsp;</p>
              <p className={styles.blankLine3}>&nbsp;</p>
              <p className={styles.thisWorkIs}>
                This work is done by Sargam Telang as a part of the Experience
                Design ( CS-489 ) course at EPFL
              </p>
            </div>
          </div>
          <img
            className={styles.eec5515243e7439e9fa145934dIcon}
            loading="eager"
            alt=""
            src="/eec5515243e7439e9fa145934d129169-3-1@2x.png"
          />
        </div>
      </div>
      <Container
        imageDimensions="/grunstreifen1-1@2x.png"
        imageDimensionsText="/image-14-1@2x.png"
        propHeight="1142px"
        propGap="157px"
        propHeight1="265px"
        onImage121Click={onGrunstreifen11ImageClick}
        onImage141Click={onImage141Click}
      />
      <img
        className={styles.image113}
        loading="eager"
        alt=""
        src="/image-11-3@2x.png"
        onClick={onImage113Click}
      />
    </div>
  );
};

export default MacBookAir7;

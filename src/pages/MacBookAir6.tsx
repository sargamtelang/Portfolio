import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import styles from "./MacBookAir6.module.css";

const MacBookAir6: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage121Click = useCallback(() => {
    navigate("/macbook-air-5");
  }, [navigate]);

  const onImage131Click = useCallback(() => {
    navigate("/macbook-air-6");
  }, [navigate]);

  return (
    <div className={styles.macbookAir2}>
      <div className={styles.parentFrame}>
        <div className={styles.frameParent}>
          <div className={styles.experienceDesignXGenerativeParent}>
            <h1 className={styles.experienceDesignX}>
              Experience Design x Generative AI
            </h1>
            <div className={styles.thisPortfolioConsistsContainer}>
              <p className={styles.thisPortfolioConsistsOfVis}>
                <b
                  className={styles.thisPortfolioConsists}
                >{`This portfolio consists of visual explorations made by `}</b>
                <i className={styles.midjourneyAi}>MidJourney AI.</i>
                <b>{` `}</b>
              </p>
              <p className={styles.blankLine}>
                <b>&nbsp;</b>
              </p>
              <p className={styles.midjourneyIsAGenerativeAi}>
                <b>
                  MidJourney is a generative AI tool that can generate a wide
                  array of visual concepts and designs based on textual input.
                </b>
              </p>
              <p className={styles.blankLine1}>
                <b>&nbsp;</b>
              </p>
              <p className={styles.generativeAiCanQuicklyTurn}>
                <b>
                  Generative AI can quickly turn ideas into visual prototypes.
                  This speeds up the design process, allowing for more iterative
                  cycles and the ability to test and refine concepts faster than
                  traditional methods. It often produces unexpected and novel
                  design elements, encouraging designers to think outside the
                  box.
                </b>
              </p>
              <p className={styles.blankLine2}>
                <b>&nbsp;</b>
              </p>
              <p className={styles.blankLine3}>
                <b>&nbsp;</b>
              </p>
              <p className={styles.thisWorkIsDoneBySargamTe}>
                <b>
                  This work is done by Sargam Telang as a part of the Experience
                  Design ( CS-489 ) course at EPFL
                </b>
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
      <img
        className={styles.image131}
        loading="eager"
        alt=""
        src="/image-13-1@2x.png"
        onClick={onImage131Click}
      />
      <Container
        imageDimensions="/image-12-1@2x.png"
        imageDimensionsText="/image-png-1@2x.png"
        propHeight="1168px"
        propGap="169px"
        propHeight1="279px"
        onImage121Click={onImage121Click}
      />
    </div>
  );
};

export default MacBookAir6;

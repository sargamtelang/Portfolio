import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookAirFrame.module.css";

const MacBookAirFrame: FunctionComponent = () => {
  const navigate = useNavigate();

  const onExperienceDesignXClick = useCallback(() => {
    navigate("/macbook-air-1");
  }, [navigate]);

  return (
    <section className={styles.containerFRAME}>
      <div className={styles.innerFRAME}>
        <div className={styles.frameGroup}>
          <h1
            className={styles.experienceDesignX}
            onClick={onExperienceDesignXClick}
          >
            Experience Design x Generative AI
          </h1>
        </div>
        <div className={styles.frameGroup1}>
          <div className={styles.pbRectangle}>
            <img
              className={styles.pB1Icon}
              loading="eager"
              alt=""
              src="/p-b-1@2x.png"
            />
            <div className={styles.pB3Wrapper}>
              <img
                className={styles.pB3Icon}
                loading="eager"
                alt=""
                src="/p-b-3@2x.png"
              />
            </div>
            <div className={styles.frameBikerStyle}>
              <h3 className={styles.persona}>Persona</h3>
              <b className={styles.youngPersonIn}>
                //Young person in their 20s in biker style, wearing a helmet,
                getting out of a building, rolling a bike next to it. The person
                is looking directly into the camera.
              </b>
            </div>
          </div>
        </div>
        <div className={styles.frameProblemSolution}>
          <div className={styles.frameGroup2}>
            <img
              className={styles.grunstreifen12Icon}
              loading="eager"
              alt=""
              src="/grunstreifen1-2@2x.png"
            />
            <div className={styles.problemParent}>
              <h3 className={styles.problem}>Problem</h3>
              <h3 className={styles.solution}>Solution</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MacBookAirFrame;

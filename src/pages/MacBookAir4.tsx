import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookAir4.module.css";

const MacBookAir4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onExperienceDesignXClick = useCallback(() => {
    navigate("/macbook-air-1");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/macbook-air-4");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/macbook-air-6");
  }, [navigate]);

  return (
    <div className={styles.macbookAir5}>
      <section className={styles.subframeA}>
        <div className={styles.subframeB}>
          <h1
            className={styles.experienceDesignX}
            onClick={onExperienceDesignXClick}
          >
            Experience Design x Generative AI
          </h1>
          <img
            className={styles.image122}
            loading="eager"
            alt=""
            src="/image-12-2@2x.png"
          />
          <h3 className={styles.problem}>{`Problem `}</h3>
          <h3 className={styles.solution}>Solution</h3>
        </div>
      </section>
      <section className={styles.parentFrame}>
        <div className={styles.frameParent}>
          <div className={styles.ellipseElementWrapper}>
            <div className={styles.ellipseElement} />
          </div>
          <div className={styles.textboxLocationSpecificList}>
            <div className={styles.textboxProblemSolution}>
              <div className={styles.personaArchitect}>
                <b className={styles.architectsNeedTo}>
                  Architects need to adhere to local norms before designing
                  buildings.These norms are long and different for each case. It
                  takes days for architects to learn and understand them
                </b>
                <b className={styles.ourSolutionIs}>
                  Our solution is an AI tool embedded in CAD software. The
                  architect starts creating designs in the software, but the AI
                  tools shows the architect real time restrictions. These
                  restrictions are displayed in red that alert the architect
                  about the limitations related to sizes and shapes of the
                  design. We imagine the AI alerting the user through visual and
                  audio cues when they make a design beyond the limitations.
                  This was inspired by the video game - Sims, where users are
                  given feedback about the limitation when creating a house in
                  the game.
                </b>
              </div>
              <div className={styles.textboxExperienceDesign}>
                <h3 className={styles.persona}>Persona</h3>
                <div className={styles.personaArchitect1}>
                  <b className={styles.thePersonaIsContainer}>
                    <p className={styles.thePersonaIs}>
                      The persona is an architect starting a new project. The
                      initial stage of design requires delving and understanding
                      lengthy and complex regulations, which can be a
                      time-consuming and daunting task.
                    </p>
                  </b>
                  <b className={styles.itSwiftlyCompilesContainer}>
                    <p className={styles.itSwiftlyCompiles}>
                      It swiftly compiles a location-specific list of
                      regulations, eliminating the need for manual research.
                      While working within AutoCAD, this AI companion offers
                      real-time prompts and alerts, ensuring that the
                      architect's vision aligns seamlessly with local standards.
                    </p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.inEssenceOur}>
                      In essence, our AI tool not only expedites the design
                      phase but also minimizes errors, guaranteeing compliance
                      with local regulations
                    </p>
                  </b>
                </div>
              </div>
            </div>
            <div className={styles.groupPreviousNext}>
              <button
                className={styles.rectangleParent}
                onClick={onGroupButtonClick}
              >
                <div className={styles.frameChild} />
                <b className={styles.previous}>previous</b>
              </button>
              <Button
                className={styles.groupPreviousNextChild}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "13",
                  background: "rgba(255, 8, 5, 0.37)",
                  borderRadius: "13px",
                  "&:hover": { background: "rgba(255, 8, 5, 0.37)" },
                  height: 26,
                }}
                onClick={onGroupButton1Click}
              >
                next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MacBookAir4;

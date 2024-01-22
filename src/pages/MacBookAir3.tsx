import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookAir3.module.css";

const MacBookAir3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onExperienceDesignXClick = useCallback(() => {
    navigate("/macbook-air-1");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/macbook-air-5");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/macbook-air-7");
  }, [navigate]);

  return (
    <div className={styles.macbookAir6}>
      <section className={styles.frameParent}>
        <div className={styles.experienceDesignAI}>
          <h1
            className={styles.experienceDesignX}
            onClick={onExperienceDesignXClick}
          >
            Experience Design x Generative AI
          </h1>
        </div>
        <div className={styles.deviceFrame}>
          <div className={styles.urineCollectionText}>
            <div className={styles.automaticCupFrame}>
              <b className={styles.problem}>Problem</b>
              <b className={styles.urineCollectionIsContainer}>
                <p
                  className={styles.urineCollectionIs}
                >{`Urine collection is a common healthcare procedure but it often entails an uncomfortably awkward and intimate experience for patients. `}</p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p
                  className={styles.patientsAreRequired}
                >{`Patients are required to retrieve an empty cup, fill it with their urine sample, manually inscribe their name, and return it to hospital staff. `}</p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.patientsStruggleWith}>
                  Patients struggle with the appropriate amount of urine to
                  collect and how to perform the collection accurately. The
                  procedure is highly private, making the reduction of human
                  interaction and conversation a desirable feature.
                </p>
              </b>
            </div>
          </div>
          <img
            className={styles.ethonSuARealisticPhotograpIcon}
            loading="eager"
            alt=""
            src="/ethon-su-a-realistic-photograph-of-a-middle-age-man-handing-ove-5c4a3169b23e41e28724ef22ede1bf58removebgpreview-1@2x.png"
          />
        </div>
      </section>
      <section className={styles.previousNextGroup}>
        <div className={styles.childFrame}>
          <div className={styles.ellipseShape}>
            <div className={styles.ellipseShapeChild} />
          </div>
          <div className={styles.solutionText}>
            <div className={styles.ourSolution}>
              <div className={styles.imageRemoveBG}>
                <div className={styles.previousNext}>
                  <b className={styles.persona}>Persona</b>
                  <b className={styles.theDeviceIs}>
                    The device is intended for patients who value their privacy
                    and seek a less awkward urine collection process. It also
                    caters to patients, who may have language preferences. The
                    design ensures inclusivity and ease of use for all patients.
                  </b>
                </div>
                <div className={styles.automaticUrineCup}>
                  <b className={styles.ourSolutionIsContainer}>
                    <p className={styles.blankLine2}>&nbsp;</p>
                    <p className={styles.ourSolutionIs}>
                      Our solution is an innovative automatic urine cup disposal
                      and collection device. This machine records patient data,
                      disposes cups, provides instructions for sample
                      collection, and offers instant test results or informs
                      patients of the expected wait time for their results.
                    </p>
                  </b>
                  <b className={styles.solution}>Solution</b>
                </div>
              </div>
              <img
                className={styles.image13RemovebgPreview1Icon}
                loading="eager"
                alt=""
                src="/image--13-removebgpreview-1@2x.png"
              />
            </div>
            <div className={styles.previousNextGroup1}>
              <div
                className={styles.rectangleParent}
                onClick={onGroupContainerClick}
              >
                <div className={styles.frameChild} />
                <b className={styles.previous}>previous</b>
              </div>
              <div
                className={styles.rectangleGroup}
                onClick={onGroupContainer1Click}
              >
                <div className={styles.frameItem} />
                <b className={styles.next}>next</b>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MacBookAir3;

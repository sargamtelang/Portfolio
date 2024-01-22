import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./FrameGroupContainer.module.css";

const FrameGroupContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/macbook-air-1");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/macbook-air-4");
  }, [navigate]);

  return (
    <section className={styles.ellipseShapeWrapper}>
      <div className={styles.ellipseShape}>
        <div className={styles.frameHowMightWeCreate}>
          <div className={styles.ourSolutionBox} />
        </div>
        <div className={styles.groupPreviousNext}>
          <div className={styles.textProblemSolutionGroup}>
            <div className={styles.frameCyclistFriendlyUrbanE}>
              <div className={styles.howMightWeContainer}>
                <p className={styles.howMightWeCreateACyclist}>
                  <span className={styles.howMightWe}>
                    <i className={styles.howMightWe1}>How might we</i>
                    <i className={styles.i}>{` `}</i>
                  </span>
                  <b>
                    <span className={styles.createA}>{`create a `}</span>
                    <span className={styles.cyclistFriendly}>
                      cyclist-friendly
                    </span>
                    <span
                      className={styles.urbanEnvironmentIn}
                    >{` urban environment in `}</span>
                    <span className={styles.lausanne}>Lausanne</span>
                  </b>
                  <span>
                    <b>
                      {" "}
                      that not only promotes safety but also enhances the
                      overall experience of cyclists while making turns and
                      weaving between multiple lanes of cars?
                    </b>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span>
                    <b>&nbsp;</b>
                  </span>
                </p>
                <p className={styles.howMightWeIdeateInnovative}>
                  <span>
                    <i className={styles.howMightWe2}>How might we</i>
                    <b>
                      {" "}
                      ideate innovative solutions that prioritise safety,
                      convenience, and an enjoyable riding experience while
                      navigating busy city centres?
                    </b>
                  </span>
                </p>
                <p className={styles.blankLine1}>
                  <span>
                    <b>&nbsp;</b>
                  </span>
                </p>
              </div>
            </div>
            <b className={styles.ourSolutionIncludesContainer}>
              <p
                className={styles.ourSolutionIncludes}
              >{`Our solution includes an innovative redesign of the action space "street".  At the expense of one car lane, the living space of the city center is not only improved in terms of safety, but also made more inclusive and closer to nature: `}</p>
              <p
                className={styles.theRightmostCar}
              >{`The rightmost car lane disappears, and instead half of it will be planted with bushes and trees while the other half is used as a cycle lane. `}</p>
              <p className={styles.blankLine2}>&nbsp;</p>
              <p className={styles.theIncreasedDistance}>
                The increased distance guarantees a safer driving experience for
                car drivers and cyclists alike.
              </p>
              <p
                className={styles.inAdditionThe}
              >{`In addition, the greenery serves as a natural lung in the city of Lausanne and thus gives all road users a sense of calm. `}</p>
              <p className={styles.blankLine3}>&nbsp;</p>
              <p className={styles.cyclistsGainSafety}>
                Cyclists gain safety and well-being through physical separation
                from traffic, and pedestrians gain a quieter living environment
                through the noise shielding of the shrubbery.
              </p>
            </b>
          </div>
          <div className={styles.textGroupPreviousNext}>
            <div className={styles.groupGroup}>
              <button
                className={styles.rectangleParent}
                onClick={onGroupButtonClick}
              >
                <div className={styles.frameChild} />
                <b className={styles.previous}>previous</b>
              </button>
              <Button
                className={styles.groupGroupChild}
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
      </div>
    </section>
  );
};

export default FrameGroupContainer;

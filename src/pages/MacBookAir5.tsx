import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookAir5.module.css";

const MacBookAir5: FunctionComponent = () => {
  const navigate = useNavigate();

  const onExperienceDesignXClick = useCallback(() => {
    navigate("/macbook-air-1");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/macbook-air-5");
  }, [navigate]);

  return (
    <div className={styles.macbookAir4}>
      <img
        className={styles.imageWithTransparencyRemoveIcon}
        loading="eager"
        alt=""
        src="/image-with-transparencyremovebgpreview-1@2x.png"
      />
      <div className={styles.parentFrame}>
        <div className={styles.headerText}>
          <h1
            className={styles.experienceDesignX}
            onClick={onExperienceDesignXClick}
          >
            Experience Design x Generative AI
          </h1>
          <div className={styles.subheaderText}>
            <div className={styles.solutionText}>
              <div className={styles.ellipseShape}>
                <h3 className={styles.problem}>Problem</h3>
                <div className={styles.howCanWeContainer}>
                  <p className={styles.howCanWeChallengeTheIdea}>
                    <i className={styles.howCanWe}>How can we</i>
                    <b>{` challenge the idea of luxury items? Wealthy individuals often indulge in overconsumption of luxury goods, and this pattern is intrinsically unsustainable. `}</b>
                  </p>
                  <p className={styles.blankLine}>
                    <b>&nbsp;</b>
                  </p>
                  <p className={styles.howCanWeCraftLuxuryItems}>
                    <i className={styles.howCanWe1}>How can we</i>
                    <b>
                      {" "}
                      craft luxury items that entice rich people to indulge in a
                      more sustainable manner?
                    </b>
                  </p>
                  <p className={styles.throughThisWeGiveHighlight}>
                    <b>{`Through this we give highlight the saying : `}</b>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.personaText}>
              <h3 className={styles.persona}>Persona</h3>
              <b className={styles.aFemaleCeo}>
                //a female CEO carrying a beautiful handbag that looks like
                Hermes handbag made of stitched old electric batteries. CEO is
                feeling stylish
              </b>
            </div>
            <div className={styles.previousArrow}>
              <h3 className={styles.solution}>Solution</h3>
              <b className={styles.ourUniqueSystemContainer}>
                <p className={styles.ourUniqueSystem}>
                  Our unique system within luxury stores, enables individuals to
                  donate their old electronic devices to designated collection
                  boxes. In return , users can receive exclusive discount
                  coupons.
                </p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.theNextStep}>
                  The next step is dismantling old batteries and PCB boards from
                  these electronic devices. Rather than throwing them to waste,
                  we've stitch them into the creation of luxurious handbags.
                  These upcycled handbags are then made available to buy.
                </p>
                <p className={styles.blankLine2}>&nbsp;</p>
                <p className={styles.inEssenceOur}>
                  In essence, our concept redefinines luxury, emphasizing the
                  societal and environmental consequences of overconsumption by
                  the wealthy.
                </p>
              </b>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.firstChildFrame}>
        <div className={styles.secondChildFrame}>
          <div className={styles.secondChildFrameChild} />
          <div className={styles.secondChildFrameInner}>
            <div className={styles.image191Parent}>
              <img
                className={styles.image191}
                loading="eager"
                alt=""
                src=""
              />
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.ellipseParent}>
                      <div className={styles.frameChild} />
                      <i className={styles.oldToGoldContainer}>
                        <p className={styles.oldToGold}>{`"Old to gold" `}</p>
                        <p className={styles.blankLine3}>&nbsp;</p>
                        <p className={styles.turningOldBroken}>
                          Turning old, broken electronic items into something
                          sophisticated and luxury
                        </p>
                      </i>
                    </div>
                  </div>
                  <div
                    className={styles.rectangleParent}
                    onClick={onGroupContainerClick}
                  >
                    <div className={styles.frameItem} />
                    <b className={styles.previous}>previous</b>
                  </div>
                </div>
                <div
                  className={styles.rectangleGroup}
                  onClick={onGroupContainer2Click}
                >
                  <div className={styles.frameInner} />
                  <b className={styles.next}>next</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MacBookAir5;

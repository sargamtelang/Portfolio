import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookAir1.module.css";

const MacBookAir1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onExperienceDesignXClick = useCallback(() => {
    navigate("/macbook-air-1");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/macbook-air-7");
  }, [navigate]);

  return (
    <div className={styles.macbookAir8}>
      <section className={styles.macbookAir8Inner}>
        <div className={styles.experienceDesignXGenerativeParent}>
          <h1
            className={styles.experienceDesignX}
            onClick={onExperienceDesignXClick}
          >
            Experience Design x Generative AI
          </h1>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.problemParent}>
                  <h3 className={styles.problem}>Problem</h3>
                  <b className={styles.inTheBustlingContainer}>
                    <span>{`In the bustling suburb of Andheri, Mumbai, stray dogs faces the daily struggle for `}</span>
                    <span className={styles.sustenance}>sustenance</span>
                    <span>{`. These dogs resort to scavenging through trash for food, exposing themselves to health risks associated with consuming unsuitable substances. `}</span>
                  </b>
                </div>
                <b className={styles.theUncheckedReproductionContainer}>
                  <span>{`The `}</span>
                  <span className={styles.uncheckedReproduction}>
                    unchecked reproduction
                  </span>
                  <span>
                    {" "}
                    and pack behaviour of these dogs result in stress, injuries,
                    and a dissonance within the community. Addressing this issue
                    necessitates an approach that integrates community
                    engagement, education, and a sustainable solution to control
                    the stray dog population.
                  </span>
                </b>
                <div className={styles.frameContainer}>
                  <div className={styles.personaParent}>
                    <h3 className={styles.persona}>Persona</h3>
                    <b className={styles.strayDogsIn}>Stray dogs in Mumbai</b>
                  </div>
                  <div className={styles.image251Parent}>
                    <img
                      className={styles.image251}
                      loading="eager"
                      alt=""
                      src="/image-25-1@2x.png"
                    />
                    <img
                      className={styles.mumbaibandradog1Icon}
                      loading="eager"
                      alt=""
                      src="/mumbaibandradog-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.solTempleforcoexistence1Parent}>
                <img
                  className={styles.solTempleforcoexistence1Icon}
                  loading="eager"
                  alt=""
                  src="/sol-templeforcoexistence-1@2x.png"
                />
                <img
                  className={styles.image142}
                  loading="eager"
                  alt=""
                  src="/image-14-2@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.macbookAir8Child}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.solutionsParent}>
                <h3 className={styles.solutions}>Solutions</h3>
                <b className={styles.ourProposalIsContainer}>
                  <p className={styles.ourProposalIs}>
                    Our proposal is food trucks that go around the city and
                    provide food to stray dogs.
                  </p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p
                    className={styles.theseFoodTrucks}
                  >{`These food trucks can also encourage citizens in the neighbourhood to give any extra or waste food that can be suitable for dogs to eat to the food trucks. `}</p>
                  <p className={styles.blankLine1}>&nbsp;</p>
                  <p className={styles.thisInitiativeNot}>
                    This initiative not only addresses the issue of sustenance
                    for stray dogs but also promotes community involvement and
                    responsible waste management.
                  </p>
                  <p className={styles.blankLine2}>&nbsp;</p>
                </b>
                <div className={styles.frameWrapper1}>
                  <button
                    className={styles.rectangleParent}
                    onClick={onGroupButtonClick}
                  >
                    <div className={styles.frameItem} />
                    <b className={styles.previous}>previous</b>
                  </button>
                </div>
              </div>
              <b className={styles.theDesignIdeaContainer}>
                <p
                  className={styles.theDesignIdea}
                >{`The design idea proposes the transformation of religious sites into sterilization and care centers for stray dogs. `}</p>
                <p className={styles.blankLine3}>&nbsp;</p>
                <p
                  className={styles.theInitiativeAims}
                >{`The initiative aims to collaborate with the community, encouraging responsible ownership and humane treatment of stray dogs. `}</p>
                <p className={styles.blankLine4}>&nbsp;</p>
                <p className={styles.residentsAreEncouraged}>
                  Residents are encouraged to bring street dogs to the centres
                  after taking care of them, bridging the gap between care and
                  intervention.
                </p>
              </b>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MacBookAir1;

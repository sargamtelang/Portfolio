import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookAir2.module.css";

const MacBookAir2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onExperienceDesignXClick = useCallback(() => {
    navigate("/macbook-air-1");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/macbook-air-6");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/macbook-air-8");
  }, [navigate]);

  return (
    <div className={styles.macbookAir7}>
      <section className={styles.containerFRAME}>
        <div className={styles.fRAME}>
          <h1
            className={styles.experienceDesignX}
            onClick={onExperienceDesignXClick}
          >
            Experience Design x Generative AI
          </h1>
          <div className={styles.tEXTSLOGAN}>
            <div className={styles.fRAMEPROBLEMSOL}>
              <div className={styles.rECTANGLELOGO}>
                <img
                  className={styles.imagePng2Icon}
                  loading="eager"
                  alt=""
                  src="/image-png-2@2x.png"
                />
                <div className={styles.fRAMEROLEXLEARN}>
                  <div className={styles.fRAMEPROBLEMSOL1}>
                    <img
                      className={styles.image231}
                      loading="eager"
                      alt=""
                      src="/image-23-1@2x.png"
                    />
                    <img
                      className={styles.image241}
                      loading="eager"
                      alt=""
                      src="/image-24-1@2x.png"
                    />
                  </div>
                  <div className={styles.fRAMEPROBLEMSOL2}>
                    <img
                      className={styles.image221}
                      loading="eager"
                      alt=""
                      src="/image-22-1@2x.png"
                    />
                    <img
                      className={styles.smolSpacesnekAnImageOfTheIcon}
                      loading="eager"
                      alt=""
                      src="/smol-spacesnek-an-image-of-the-rolex-learning-centre-34c2ac926cfe45a8a79ffb870dc650e1-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.gROUPEPFLGROUP}>
                <h3 className={styles.problem}>Problem</h3>
                <h3 className={styles.solution}>Solution</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.fRAMEEMPTYGROUP}>
        <div className={styles.eLLIPSEICON}>
          <div className={styles.tEXTSTUDENTSWOR}>
            <div className={styles.fRAMEPERSONA} />
          </div>
          <div className={styles.tEXTSTUDENTDESC}>
            <div className={styles.iMAGEMICROWAVEC}>
              <div className={styles.gROUPEPFLCLUSTE}>
                <b
                  className={styles.studentsAtEpfl}
                >{`Students at EPFL often use the library to work, but during lunchtime it is difficult for them to find a spot to sit and eat. Students also have to queue in a long line to heat up their lunch due to the lack of microwaves in the building. Thus there is a lack of a social space for students. `}</b>
                <div className={styles.tEXTPROBLEMSOLU}>
                  <h3 className={styles.persona}>Persona</h3>
                  <b
                    className={styles.studentsAtEpfl1}
                  >{`Students at EPFL want a space where they can take a lunch break and socialise. `}</b>
                </div>
              </div>
              <b className={styles.aClusterOfContainer}>
                <p
                  className={styles.aClusterOf}
                >{`A cluster of microwaves outside the Rolex Learning Center transforms the mundane act of reheating food into an outdoor social affair. This innovative arrangement not only facilitates the quick warming of meals but also encourages students to step outside, bask in fresh air, and savour their lunch breaks. `}</p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.thisSignificantlyDiminishes}>
                  This significantly diminishes wait times, ensuring that
                  students can enjoy a delightful and fulfilling lunch break
                  without unnecessary delays.
                </p>
              </b>
            </div>
            <div className={styles.iMAGEROLEXLIBRA}>
              <div className={styles.fRAMEGROUPPREVI}>
                <button
                  className={styles.rectangleParent}
                  onClick={onGroupButtonClick}
                >
                  <div className={styles.frameChild} />
                  <b className={styles.previous}>previous</b>
                </button>
                <Button
                  className={styles.fRAMEGROUPPREVIChild}
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
    </div>
  );
};

export default MacBookAir2;

import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Container.module.css";

type ContainerType = {
  imageDimensions?: string;
  imageDimensionsText?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propGap?: CSSProperties["gap"];
  propHeight1?: CSSProperties["height"];

  /** Action props */
  onImage121Click?: () => void;
  onImage141Click?: () => void;
};

const Container: FunctionComponent<ContainerType> = ({
  imageDimensions,
  imageDimensionsText,
  propHeight,
  propGap,
  propHeight1,
  onImage121Click,
  onImage141Click,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      gap: propGap,
    };
  }, [propHeight, propGap]);

  const imagePng1IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div className={styles.macbookAir2Inner}>
      <div className={styles.frameWrapper}>
        <div className={styles.circleShapeParent} style={frameDivStyle}>
          <div className={styles.circleShape}>
            <b className={styles.projectsDone}>projects done :</b>
            <div className={styles.ellipseShapeParent}>
              <div className={styles.ellipseShape} />
              <img
                className={styles.image121}
                loading="eager"
                alt=""
                src={imageDimensions}
                onClick={onImage121Click}
              />
            </div>
          </div>
          <div className={styles.thirdFrame}>
            <img
              className={styles.imagePng1Icon}
              loading="eager"
              alt=""
              src={imageDimensionsText}
              style={imagePng1IconStyle}
              onClick={onImage141Click}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;

import { FunctionComponent } from "react";
import MacBookAirFrame from "../components/MacBookAirFrame";
import FrameGroupContainer from "../components/FrameGroupContainer";
import styles from "./MacBookAir.module.css";

const MacBookAir: FunctionComponent = () => {
  return (
    <div className={styles.macbookAir3}>
      <MacBookAirFrame />
      <FrameGroupContainer />
    </div>
  );
};

export default MacBookAir;

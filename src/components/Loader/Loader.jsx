import css from "./Loader.module.css";
import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <CircleLoader color="rgba(52, 112, 255, 1)" />
    </div>
  );
};

export default Loader;

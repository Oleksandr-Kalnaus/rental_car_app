import css from "./NotFoundPage.module.css";
import PageNotFoundImage from "/PageNotFound.jpg";

function NotFoundPage() {
  return (
    <div className={css.NotFoundPage}>
      <img
        className={css.imgNotFoundPage}
        src={PageNotFoundImage}
        alt="404 - Not Found"
      />
    </div>
  );
}

export default NotFoundPage;

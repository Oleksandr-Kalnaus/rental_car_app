import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./RentalForm.module.css";

const RentalForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    bookingDate: Yup.date().required("Required"),
    comment: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Booking Details:", values);
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <h3>Book your car now</h3>
      <p>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.fieldGroup}>
              <Field type="text" name="name" placeholder="Name*" />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldGroup}>
              <Field type="email" name="email" placeholder="Email*" />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldGroup}>
              <Field type="date" name="bookingDate" />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldGroup}>
              <Field as="textarea" name="comment" placeholder="Comment" />
              <ErrorMessage
                name="comment"
                component="div"
                className={styles.error}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.button}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RentalForm;

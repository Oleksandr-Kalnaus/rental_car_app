import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RentalForm.module.css";
import toast, { Toaster } from "react-hot-toast";

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
    toast.success("Booking successful! We will contact you soon.", {
      duration: 4000,
    });
    resetForm();
  };

  return (
    <div className={css.formContainer}>
      <h3 className={css.heading}>Book your car now</h3>
      <p className={css.slogan}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.fieldGroup}>
              <Field type="text" name="name" placeholder="Name*" />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div className={css.fieldGroup}>
              <Field type="email" name="email" placeholder="Email*" />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.fieldGroup}>
              <Field type="date" name="bookingDate" />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.comment}>
              <Field as="textarea" name="comment" placeholder="Comment" />
              <ErrorMessage
                name="comment"
                component="div"
                className={css.error}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={css.button}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default RentalForm;

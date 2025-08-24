import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 chars").required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          const data = await res.json();
          alert("Formik Registered (mock): " + JSON.stringify(data, null, 2));
          resetForm();
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ display: "grid", gap: 12 }}>
          <label>
            Username
            <Field name="username" placeholder="jane_doe" />
            <ErrorMessage name="username" component="small" style={{ color: "crimson" }} />
          </label>

          <label>
            Email
            <Field name="email" type="email" placeholder="jane@example.com" />
            <ErrorMessage name="email" component="small" style={{ color: "crimson" }} />
          </label>

          <label>
            Password
            <Field name="password" type="password" placeholder="••••••••" />
            <ErrorMessage name="password" component="small" style={{ color: "crimson" }} />
          </label>

          <button type="submit" disabled={isSubmitting}>Register</button>
        </Form>
      )}
    </Formik>
  );
}

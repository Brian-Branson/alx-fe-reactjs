import RegistrationForm from "./components/RegistrationForm.jsx";
import FormikForm from "./components/formikForm.js";

export default function App() {
  return (
    <main style={{ maxWidth: 520, margin: "2rem auto", fontFamily: "system-ui" }}>
      <h1>Form Handling in React</h1>
      <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: 12, marginBottom: 24 }}>
        <h2>Step 1: Controlled Components</h2>
        <RegistrationForm />
      </section>

      <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: 12 }}>
        <h2>Step 2: Formik + Yup</h2>
        <FormikForm />
      </section>
    </main>
  );
}

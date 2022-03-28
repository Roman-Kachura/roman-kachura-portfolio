import * as React from "react";
import {withFormik, FormikProps} from "formik";
import * as Yup from "yup";
import style from "./Contacts.module.scss";
import {contactApi} from "./contactApi";

interface FormValues {
    email: string;
    name: string;
    message: string;
}

interface MyFormProps {
    initialEmail?: string;
    initialName?: string;
    initialMessage?: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = props;

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <input
                className={style.formControl}
                value={values.name}
                name='name'
                placeholder='Name*'
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
            />

            <input
                className={style.formControl}
                value={values.email}
                name='email'
                placeholder={'Email*'}
                type={'text'}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <textarea
                className={style.formControl}
                name='message'
                placeholder={'Message*'}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            <button
                className={style.btn}
                type="submit"
                disabled={
                    isSubmitting || (!!(errors.email && touched.email) ||
                        !!(errors.name && touched.name) ||
                        !!(errors.message && touched.message))
                }
            >
                send
            </button>
        </form>
    );
};

const MyForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
        email: props.initialEmail || "",
        name: props.initialName || "",
        message: props.initialMessage || ""
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        name: Yup.string().required("Name is required"),
        message: Yup.string().required("Message is required")
    }),

    handleSubmit(
        {name, email, message}: FormValues,
        {props, setSubmitting, setErrors}
    ) {
        contactApi.sendMessage(name, email, message);
    }
})(InnerForm);

export default MyForm;

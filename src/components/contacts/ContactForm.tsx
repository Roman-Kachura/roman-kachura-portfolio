import * as React from 'react';
import {FC, useEffect} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import style from './Contacts.module.scss';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import {useSendMessageMutation} from '../../store/api/appService';
import {SendMessageRequest} from '../../types/SendMessageRequest';


const ContactForm: FC = () => {
  const [sendMessage, {isSuccess}] = useSendMessageMutation();
  const formik = useFormik({
    initialValues: {
      name: '',
      message: '',
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Email not valid')
        .required('Email is required'),
      name: Yup.string().required('Name is required'),
      message: Yup.string().required('Message is required')
    }),
    onSubmit: () => {
      const data: SendMessageRequest = {
        name: formik.values.name,
        email: formik.values.email,
        message: formik.values.message
      }
      sendMessage(data);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      formik.resetForm();
    }
  }, [isSuccess]);

  return (
    <form className={style.form} onSubmit={formik.handleSubmit}>
      <label className={`${style.formControl} ${style.input}`}>
        <input
          className={formik.errors.name ? `${style.error}` : ''}
          value={formik.values.name}
          name="name"
          placeholder="Name*"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <ExclamationCircleOutlined
          rev={null}
          className={formik.errors.name ? `${style.span} ${style.error}` : `${style.span}`}
        />
      </label>

      <label className={`${style.formControl} ${style.input}`}>
        <input
          className={formik.errors.email ? `${style.error}` : ''}
          value={formik.values.email}
          name="email"
          placeholder={'Email*'}
          type={'text'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <ExclamationCircleOutlined
          rev={null}
          className={formik.errors.email ? `${style.span} ${style.error}` : `${style.span}`}
        />
      </label>

      <label className={`${style.formControl} ${style.textarea}`}>
                <textarea
                  className={formik.errors.message ? `${style.error}` : ''}
                  name="message"
                  placeholder={'Message*'}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
        <ExclamationCircleOutlined
          rev={null}
          className={formik.errors.message ? `${style.span} ${style.error}` : `${style.span}`}
        />
      </label>

      <button
        className={style.btn}
        type="submit"
        disabled={
          formik.isSubmitting || (!!(formik.errors.email && formik.touched.email) ||
            !!(formik.errors.name && formik.touched.name) ||
            !!(formik.errors.message && formik.touched.message))
        }
      >
        send
      </button>
    </form>
  );
};

export default ContactForm;

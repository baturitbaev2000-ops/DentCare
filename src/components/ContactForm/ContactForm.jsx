import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { services } from '../../data';
import './ContactForm.css';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Минимум 2 символа').max(50, 'Максимум 50 символов').required('Имя обязательно'),
  phone: Yup.string()
    .matches(/^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/, 'Формат: +7 (XXX) XXX-XX-XX')
    .required('Телефон обязателен'),
  email: Yup.string().email('Некорректный email'),
  service: Yup.string().required('Выберите услугу'),
  date: Yup.date()
    .min(new Date(), 'Дата должна быть в будущем')
    .nullable(),
  comment: Yup.string().max(500, 'Максимум 500 символов'),
  agree: Yup.boolean().oneOf([true], 'Необходимо согласие'),
});

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="contact-form-wrap">
      <h4 className="form-section-title">Запись на приём</h4>
      {success && (
        <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
          ✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.
        </Alert>
      )}
      <Formik
        initialValues={{ name: '', phone: '', email: '', service: '', date: '', comment: '', agree: false }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setTimeout(() => {
            setSuccess(true);
            resetForm();
            setSubmitting(false);
          }, 1500);
        }}
      >
        {({ errors, touched, isSubmitting, isValid, dirty }) => (
          <Form noValidate>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Имя *</label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Ваше имя"
                  className={`form-control ${touched.name ? (errors.name ? 'is-invalid' : 'is-valid') : ''}`}
                />
                <ErrorMessage name="name" component="div" className="invalid-feedback" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Телефон *</label>
                <Field
                  name="phone"
                  type="tel"
                  placeholder="+7 (700) 000-00-00"
                  className={`form-control ${touched.phone ? (errors.phone ? 'is-invalid' : 'is-valid') : ''}`}
                />
                <ErrorMessage name="phone" component="div" className="invalid-feedback" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  className={`form-control ${touched.email ? (errors.email ? 'is-invalid' : 'is-valid') : ''}`}
                />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Услуга *</label>
                <Field
                  as="select"
                  name="service"
                  className={`form-select ${touched.service ? (errors.service ? 'is-invalid' : 'is-valid') : ''}`}
                >
                  <option value="">Выберите услугу</option>
                  {services.map(s => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </Field>
                <ErrorMessage name="service" component="div" className="invalid-feedback" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Дата приёма</label>
                <Field
                  name="date"
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className={`form-control ${touched.date ? (errors.date ? 'is-invalid' : '') : ''}`}
                />
                <ErrorMessage name="date" component="div" className="invalid-feedback" />
              </div>

              <div className="col-12">
                <label className="form-label">Комментарий</label>
                <Field
                  as="textarea"
                  name="comment"
                  rows={3}
                  placeholder="Опишите вашу проблему или пожелания..."
                  className={`form-control ${touched.comment ? (errors.comment ? 'is-invalid' : '') : ''}`}
                />
                <ErrorMessage name="comment" component="div" className="invalid-feedback" />
              </div>

              <div className="col-12">
                <div className="form-check">
                  <Field
                    type="checkbox"
                    name="agree"
                    id="agree"
                    className={`form-check-input ${touched.agree ? (errors.agree ? 'is-invalid' : 'is-valid') : ''}`}
                  />
                  <label className="form-check-label" htmlFor="agree">
                    Согласен с <a href="#privacy">политикой конфиденциальности</a>
                  </label>
                  <ErrorMessage name="agree" component="div" className="invalid-feedback" />
                </div>
              </div>

              <div className="col-12">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting || !(isValid && dirty)}
                  className="w-100 submit-btn"
                >
                  {isSubmitting ? (
                    <><Spinner animation="border" size="sm" className="me-2" />Отправка...</>
                  ) : 'Записаться на приём'}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

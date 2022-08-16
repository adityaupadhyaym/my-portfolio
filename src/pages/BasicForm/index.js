import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PrimaryButton from '../../components/PrimaryButton';

import './style.css';

 const BasicForm = () => {
  return (
    <div className='BasicForm'>
        <Formik
            initialValues={{
                message: '',
                email: '',
                subject: ''
            }}
            validate={values => {
                const errors = {};


               if(!values.message){
                errors.message='Required';
               }else if(values.message.length<=5){
                errors.message='minimum message length 5'
               }

                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }


                if(!values.subject){
                    errors.subject='Required';
                   }else if(values.subject.length<=5){
                    errors.subject='minimum message length 5'
                   }


                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>

                    <div className='input-wrapper'>

                        <div>
                            <input
                                type="text"
                                name="message"
                                placeholder='Your Message*'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                            />
                            {errors.message && touched.message && <small> {errors.message} </small>}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder='Your Email*'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && <small>{errors.email} </small>}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="subject"
                                placeholder='Your Subject*'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.subject}
                            />
                            {errors.subject && touched.subject && <small>{errors.subject} </small>}
                        </div>
                    </div>
                    <div className='btn-containar'>
                        <div>
                            <textarea placeholder='Message' />
                        </div>
                        <PrimaryButton >Submit Message <img src={`${process.env.PUBLIC_URL}/assets/images/icon/btn-2.png`} /></PrimaryButton>
                    </div>
                </form>
            )}
        </Formik>
    </div>
)

// return (
//  <div className='contact-input-section'>
// <div className='input-wrapper'>
//   <input type="text" placeholder="Your Message*" />
//   <input type="text" placeholder="Your Email*" />
//   <input type="text" placeholder="Your Subject*" />
// </div>
// <div className='btn-wrapper'>
//   <textarea type="text" placeholder='Your Message' />
//   <PrimaryButton >Submit Message <img src={`${process.env.PUBLIC_URL}/assets/images/icon/btn-2.png`} /></PrimaryButton>
// </div>


// </div> 
// );
 };

 export default BasicForm;
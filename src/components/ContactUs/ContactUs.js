import { useForm } from 'react-hook-form';
import "./contactus.css";

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    

    return (
        <div className='ContactUs'>
            <div className='form-container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='ContactUs'>
                            {/* onSubmit={handleSubmit()} */}
                            <form id='contact-form'  method='POST' action='https://script.google.com/macros/s/AKfycbxrgqrB5qOqqkYCfAHX4L0Nn2ZdPwAkPeK-maYw1y2-VNlmgash7XqIFTzZq3INp8JBkQ/exec'>
                                {/* Row 1 of form */}
                                <div className='row formRow'>
                                    <div className='col'>
                                        <input
                                            type='text'
                                            name='Name'
                                            {...register('Name', {
                                                required: { value: true, message: 'Please enter your name' },
                                                maxLength: {
                                                    value: 30,
                                                    message: 'Please use 30 characters or less'
                                                }
                                            })}
                                            className='form-control formInput'
                                            placeholder='Name'
                                        ></input>
                                        {errors.Name && <span className='errorMessage'>{errors.Name.message}</span>}
                                    </div>
                                </div>
                                <div className='row formRow'>
                                    <div className='col'>
                                        <input
                                            type='email'
                                            name='Email'
                                            {...register('Email', {
                                                required: true,
                                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                            })}
                                            className='form-control formInput'
                                            placeholder='Email address'
                                        ></input>
                                        {errors.Email && (
                                            <span className='errorMessage'>Please enter a valid Email address</span>
                                        )}
                                    </div>
                                </div>
                                    <div className='row formRow'>
                                    <div className='col'>
                                        <input
                                            type='number'
                                            name='Phoneno'
                                            {...register('Name', {
                                                required: { value: true, message: 'Please enter your Phone no.' },
                                                pattern: /^\+?([0-9]{3})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/,
                                                maxLength: {
                                                    value: 30,
                                                    message: 'Please use 30 characters or less'
                                                }
                                            })}
                                            className='form-control formInput'
                                            placeholder='+123-01234-56789'
                                        ></input>
                                        {errors.Phoneno && (
                                            <span className='errorMessage'>Please enter a valid Phone No.</span>
                                        )}
                                    </div>
                                    </div>
                                
                                {/* Row 2 of form */}
                                <div className='row formRow'>
                                    <div className='col'>
                                        <input
                                            type='text'
                                            name='Subject'
                                            {...register('Subject', {
                                                required: { value: true, message: 'Please enter a Subject' },
                                                maxLength: {
                                                    value: 75,
                                                    message: 'Subject cannot exceed 75 characters'
                                                }
                                            })}
                                            className='form-control formInput'
                                            placeholder='Subject'
                                        ></input>
                                        {errors.Subject && (
                                            <span className='errorMessage'>{errors.Subject.message}</span>
                                        )}
                                    </div>
                                </div>
                                {/* Row 3 of form */}
                                <div className='row formRow'>
                                    <div className='col'>
                                        <textarea
                                            rows={3}
                                            name='Message'
                                            {...register('Message', {
                                                required: true
                                            })}
                                            className='form-control formInput'
                                            placeholder='Message'
                                        ></textarea>
                                        {errors.Message && <span className='errorMessage'>Please enter a message</span>}
                                    </div>
                                </div>
                                <button className='submit-btn' type='submit'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
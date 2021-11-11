import React from 'react';
import { useForm } from "react-hook-form";
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
init("user_3ZA6c1NOdo6f2Hp6nTTA2");

const Contact = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, event) => {
        event.preventDefault();
        const templateParams = {
            name: data.fullName,
            email: data.email,
            phone: data.phone,
            message: data.message
        };
        emailjs.send('service_frjy9ki', 'template_d92v7na', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message Sent Success !');

            }, function (error) {
                console.log('FAILED...', error);
            });
        console.log(data);
    }

    return (
        <div className='pt-5'>
            <div className='container-sm w-75 mt-5'>
                <h5>Contact with me using the form below!</h5>
                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-12">
                        <label className="form-label badge rounded bg-primary">Full Name</label>
                        {/* <input type="email" className="form-control" id="inputEmail4" /> */}
                        <input placeholder="Full Name" type='text' className="form-control" {...register("fullName", { required: true, maxLength: 20 })} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label badge rounded bg-primary"> Email</label>
                        <input placeholder="E-mail" type='email' className="form-control" {...register("email", { required: true, maxLength: 20 }, { pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6">
                        <label className="form-label badge rounded bg-primary"> Phone </label>
                        <input placeholder="Phone No" type="phone" className="form-control" {...register("phone")} />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label badge rounded bg-primary"> Message </label>
                        <textarea placeholder="What's on your mind ..... " className="form-control" aria-label="With textarea" {...register("message", { required: true })}></textarea>
                    </div>
                    <div className="col-md-12 mt-5">
                        <button className="btn styled-btn styled-btn-bg" type="submit">Submit</button>
                        {/* <input className="form-control " type="submit" /> */}
                    </div>
                </form>

                    {/* <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex:'5'}}>
                        <div id="liveToast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <img src="..." class="rounded me-2" alt="..." />
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div className="toast-body">
                                Hello, world! This is a toast message.
                            </div>
                        </div>
                    </div> */}
            
            </div>
        </div>
    );
};

export default Contact;
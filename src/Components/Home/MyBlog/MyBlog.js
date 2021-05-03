import React from 'react';
import blog1 from '../../../images/blog1.jpeg';
import blog2 from '../../../images/blog2.jpeg';
import blog3 from '../../../images/blog3.jpeg';

const MyBlog = () => {
    return (
        <div className='container pt-5 pb-5'>
            <h6 className='text-danger'>BLOGS</h6>
            <h3 className='counter-no'>My Latest Articles</h3>
            <div className="row pt-5 pb-5 blog-section">
                <div className="col-md-4">
                    <div className='skill-card'>
                    <img src={blog1} className='img-fluid' alt=""/>
                    <h4 className='pt-3'>JavaScript Shortcuts</h4>
                    <p className='text-muted'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum explicabo ex ducimus alias quos fuga nisi, commodi perspiciatis culpa inventore! </p>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className='skill-card'>
                    <img src={blog2} className='img-fluid' alt=""/>
                    <h4 className='pt-3'>OOP Secreats</h4>
                    <p className='text-muted'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ducimus reiciendis veniam est amet quaerat vero odio magnam! Necessitatibus, est! </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='skill-card'>
                    <img src={blog3} className='img-fluid' alt=""/>
                    <h4 className='pt-3'>Design Material-UI</h4>
                    <p className='text-muted'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni rerum quas, eius repudiandae nisi! Qui excepturi odit asperiores dolorem! </p>
                    </div>
                </div>
            </div>
            <p className='text-muted'>Coming Soon......</p>
        </div>
    );
};

export default MyBlog;
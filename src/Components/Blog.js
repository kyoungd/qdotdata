import React from 'react';
import BlogGallery from './BlogGallery';
import BlogModal1 from './BlogModal1';
import BlogModal2 from './BlogModal2';
import BlogModal3 from './BlogModal3';
import BlogModal4 from './BlogModal4';
import BlogModal5 from './BlogModal5';
import BlogModal6 from './BlogModal6';

const Blog = () => {
    return (
        <>
            <div name="blog" className="blog-style-one-area blog-area default-padding-top bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Status</h4>
                                <h2 className="title">Current Projects / Partners</h2>
                                <div className="divider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <BlogGallery />
                <BlogModal1 />
                <BlogModal2 />
                <BlogModal3 />
                <BlogModal4 />
                <BlogModal5 />
                <BlogModal6 />
            </div>
        </>
    );
};

export default Blog;
import React, { Component } from 'react';
import Navbar from '../Homepage/Navbar';
import Aux from '../../../hoc/Aux';

class Homepage extends Component {
    render(){
        return(
            <Aux>
                <Navbar/>
                <section className="home bg-img-1" id="home">
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <div className="home-fullscreen">
                                    <div className="full-screen">
                                        <div className="home-wrapper home-wrapper-alt">
                                            <h2 className="font-light text-white">Best Industry Mobile attendance App with Face Recognition & GPS integrated</h2>
                                            <h4 className="text-white">With years of experiences in time attendance management, a group of experts want
                                                to develop a low cost, easy-to-use, mobile and cloud-based solution for HR practitioners who need to
                                                manage roster or timesheet effectively. Let us do the hard work and focus on the important stuff.</h4>
                                            <a href="#"
                                               target="_blank" className="btn btn-custom">Subscribe Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section" id="features">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <h3 className="title">Smart real-time attendance tracking</h3>
                                <p className="text-muted sub-title">Who’s in? Who’s late? Who’s off? All these questions can be answered in a real-time
                                    <br/>basis within our mobile app.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-4">
                                <div className="features-box">
                                    <i className="fa fa-diamond"></i>
                                    <h4>Daily attendance roaster</h4>
                                    <p className="text-muted">It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="features-box">
                                    <i className="fa fa-bicycle"></i>
                                    <h4>Company shift allocation</h4>
                                    <p className="text-muted">User friendly shift planning and employee scheduling app that can
                                        increase your productivity.
                                    </p>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="features-box">
                                    <i className="fa fa-signal"></i>
                                    <h4>Leave application</h4>
                                    <p className="text-muted">Leave application, approval and record enquiry can all be done through our app.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section className="section p-t-0">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-5">
                                <div className="feat-description m-t-20">
                                    <h4>Integrated Time and Attendance.</h4>
                                    <p className="text-muted">Using technology to track time and attendance is helpful
                                        in creating an employee schedule. If your workplace does not use a time and
                                        attendance software application, then make sure your scheduling software
                                        service allows for time and attendance functionality as an add-on.</p>
                                    <a href="" className="btn btn-custom">Learn More</a>
                                </div>
                            </div>

                            <div className="col-sm-6 col-sm-offset-1">
                                <img src="images/mac_1.png" alt="img" className="img-responsive m-t-20"/>
                            </div>

                        </div>

                    </div>
                </section>


                <section className="section">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-6">
                                <img src="images/mac_2.png" alt="img" className="img-responsive"/>
                            </div>

                            <div className="col-sm-5 col-sm-offset-1">
                                <div className="feat-description">
                                    <h4>Define Scheduling Rules.</h4>
                                    <p className="text-muted">Regulations, policies, and processes all drive how you
                                        make the work schedule. And it can get complicated quickly. Seniority,
                                        overtime status, location, and certifications are common factors that can
                                        trigger special rules that need to be reflected in the hourly schedule.
                                        Rules can vary depending on the situation.</p>
                                        <a href="" className="btn btn-custom">Learn More</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section className="section">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-5">
                                <div className="feat-description">
                                    <h4>Assess Resource Pool.</h4>
                                    <p className="text-muted">Once you understand exactly what you need, you can assess
                                        whether your current resources are a match. Your hourly workers are the primary
                                        resource to consider, but there may also be non-personnel resources to schedule.</p>
                                    <a href="" className="btn btn-custom">Learn More</a>
                                </div>
                            </div>

                            <div className="col-sm-6 col-sm-offset-1">
                                <img src="images/mac_3.png" alt="img" className="img-responsive"/>
                            </div>

                        </div>

                    </div>
                </section>


                <section className="section bg-img-1">
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                <div className="owl-carousel text-center">
                                    <div className="item">
                                        <div className="testimonial-box">
                                            <h4>Excellent support for a tricky issue related to our customization of the
                                                template. Author kept us updated as he made progress on the issue and
                                                emailed us a patch when he was done.</h4>
                                            <img src="images/user.jpg" className="testi-user img-circle"
                                                 alt="testimonials-user"/>
                                                <p>- Ubold User</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-box">
                                            <h4>Flexible, Everything is in, Suuuuuper light, even for the code is much
                                                easier to cut and make it a theme for a productive app..</h4>
                                            <img src="images/user2.jpg" className="testi-user img-circle"
                                                 alt="testimonials-user"/>
                                                <p>- Ubold User</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-box">
                                            <h4>Not only the code, design and support are awesome, but they also update
                                                it constantly the template with new content, new plugins. I will buy
                                                surely another coderthemes template!</h4>
                                            <img src="images/user3.jpg" className="testi-user img-circle"
                                                 alt="testimonials-user"/>
                                                <p>- Ubold User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section" id="pricing">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <h3 className="title">Pricing</h3>
                                {/*<p className="text-muted sub-title">The clean and well commented code allows easy*/}
                                {/*    customization of the theme.It's <br/> designed for describing your app, agency or*/}
                                {/*        business.</p>*/}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-10 col-lg-offset-1">
                                <div className="row">
                                    <article className="pricing-column col-lg-4 col-md-4">
                                        <div className="inner-box">
                                            <div className="plan-header text-center">
                                                <h3 className="plan-title">Regular</h3>
                                                <h2 className="plan-price">$24</h2>
                                                <div className="plan-duration">Per License</div>
                                            </div>
                                            <ul className="plan-stats list-unstyled">
                                                <li><i className="pe-7s-server"></i>Number of users <b>1 - 50</b></li>
                                                <li><i className="pe-7s-graph"></i>Customer support</li>
                                                <li><i className="pe-7s-mail-open"></i>Free Updates</li>
                                                <li><i className="pe-7s-tools"></i>24x7 Support</li>
                                            </ul>

                                            <div className="text-center">
                                                <a href="#" className="btn btn-sm btn-custom">Subscribe Now</a>
                                            </div>
                                        </div>
                                    </article>


                                    <article className="pricing-column col-lg-4 col-md-4">
                                        <div className="inner-box active">
                                            <div className="plan-header text-center">
                                                <h3 className="plan-title">Multiple</h3>
                                                <h2 className="plan-price">$120</h2>
                                                <div className="plan-duration">Per License</div>
                                            </div>
                                            <ul className="plan-stats list-unstyled">
                                                <li><i className="pe-7s-server"></i>Number of users <b>51 - 200</b></li>
                                                <li><i className="pe-7s-graph"></i>Customer support</li>
                                                <li><i className="pe-7s-mail-open"></i>Free Updates</li>
                                                <li><i className="pe-7s-tools"></i>24x7 Support</li>
                                            </ul>

                                            <div className="text-center">
                                                <a href="#" className="btn btn-sm btn-custom">Subscribe Now</a>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="pricing-column col-lg-4 col-md-4">
                                        <div className="inner-box">
                                            <div className="plan-header text-center">
                                                <h3 className="plan-title">Extended</h3>
                                                <h2 className="plan-price">$999</h2>
                                                <div className="plan-duration">Per License</div>
                                            </div>
                                            <ul className="plan-stats list-unstyled">
                                                <li><i className="pe-7s-server"></i>Number of users <b> > 201</b></li>
                                                <li><i className="pe-7s-graph"></i>Customer support</li>
                                                <li><i className="pe-7s-mail-open"></i>Free Updates</li>
                                                <li><i className="pe-7s-tools"></i>24x7 Support</li>
                                            </ul>

                                            <div className="text-center">
                                                <a href="#" className="btn btn-sm btn-custom">Subscribe Now</a>
                                            </div>
                                        </div>
                                    </article>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section p-t-0" id="clients">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <h3 className="title">Trusted by Thousands</h3>
                                <p className="text-muted sub-title">
                                    Subscribe and experience the mobile attendance era.
                                    It's designed <br/>for increase the utilization of your current workforce.</p>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="col-sm-12">
                                <ul className="list-inline client-list">
                                    <li><a href="" title="Microsoft"><img src="images/clients/microsoft.png"
                                                                          alt="clients"/></a></li>
                                    <li><a href="" title="Google"><img src="images/clients/google.png"
                                                                       alt="clients"/></a></li>
                                    <li><a href="" title="Instagram"><img src="images/clients/instagram.png"
                                                                          alt="clients"/></a></li>
                                    <li><a href="" title="Converse"><img src="images/clients/converse.png"
                                                                         alt="clients"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <a className="navbar-brand logo" href="index.html">
                                    You<span className="text-custom">&</span>me
                                </a>
                            </div>
                            <div className="col-lg-4 col-lg-offset-3 col-md-7">
                                <ul className="nav navbar-nav">
                                    <li><a href="#">How it works</a></li>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Clients</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <ul className="social-icons">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

                <a href="#" className="back-to-top" id="back-to-top"> <i className="fa fa-angle-up"></i> </a>
            </Aux>
        );
    }
}

export default Homepage;
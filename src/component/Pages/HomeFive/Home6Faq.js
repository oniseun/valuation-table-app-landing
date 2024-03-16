import React from 'react';
import { Fade } from 'react-reveal';
import faqApps from '../../../assets/images/feature/faq-apps.png'

const Home6Faq = () => {
    return (
        <>
            <section className="sc-crypto-faq-style sc-pt-160 sc-md-pt-80 sc-pb-140 sc-md-pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Fade bottom>
                                <div className="sc-faq-images shake-y sc-pr-50 sc-md-pr-0 sc-md-mb-50">
                                    <img src={faqApps} alt="Images" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <div className="sc-faq-pages-area sc-pl-10">
                                <div className="sc-heading-area sc-mb-25">
                                    <h2 className="heading-title white-color">Buy Or Sell With Just One-<span className="yellowColor">Click</span></h2>
                                </div>
                                <div className="accordion sc-faq-style" id="accordionExample">
                                    <p className="des white-dark-color">
                                        Distinctively recaptiualize client-centric methods of empowerment and one-to-one results. Completely extend transparent innovation with
                                        corporate strategic theme areas fashion timely materials.
                                    </p>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                How are the prices calculated for various crypto?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong
                                                >Phasellus egestas tellus rutrum tellus pellentesque. Neque laoreet the suspendisse interdum consectetur. Consequat semper viverra
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                What is "Market Capitalization" and how is it calculated?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong
                                                >Phasellus egestas tellus rutrum tellus pellentesque. Neque laoreet the suspendisse interdum consectetur. Consequat semper viverra
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                What is difference between a "Coin" and "Token" on site?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong
                                                >Phasellus egestas tellus rutrum tellus pellentesque. Neque laoreet the suspendisse interdum consectetur. Consequat semper viverra
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour"
                                                aria-expanded="false"
                                                aria-controls="collapseFour"
                                            >
                                                How do I purchase cryptocurrency?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong
                                                >Phasellus egestas tellus rutrum tellus pellentesque. Neque laoreet the suspendisse interdum consectetur. Consequat semper viverra
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home6Faq;
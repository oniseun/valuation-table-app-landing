import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const Works = () => {
    return (
        <>
            <section className="sc-service-section-area2 yellow-bg sc-pb-130 sc-md-pb-70">
                <div className="container">
                    <div className="sc-heading-area sc-mb-65 text-center">
                        <h2 className="heading-title sc-mb-20">How It work’s</h2>
                        <div className="sub-title">Must powerful email marketing tools ever</div>
                    </div>
                    <div className="row">
                        <Fade bottom delay={150}>
                            <div className="col-lg-3 col-md-6">
                                <div className="service-content-box first-child text-center sc-sm-mb-30">
                                    <div className="service_icon">
                                        <svg className="pulse" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M30.1255 16.9974C30.1255 21.4309 27.9342 25.3368 24.5759 27.7109C22.4351 29.2326 19.8176 30.1256 16.9971 30.1256C14.1767 30.1256 11.5694 29.2326 9.42828 27.7109C6.07016 25.3368 3.87866 21.4306 3.87866 16.9974C3.87866 9.75324 9.75295 3.87915 16.9969 3.87915C24.251 3.87915 30.1251 9.75344 30.1251 16.9974H30.1255Z"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M26.4055 17H33" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M17 7.5945V1" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.5945 17H1" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M17 26.4055V33" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M24.576 27.7114C22.4353 29.2332 19.8178 30.1261 16.9973 30.1261C14.1769 30.1261 11.5696 29.2332 9.42847 27.7114C10.433 24.475 13.4459 22.1416 16.9973 22.1416C20.558 22.1413 23.5713 24.4747 24.576 27.7114Z"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M20.0106 15.1307C20.0106 16.7946 18.6613 18.1439 16.9974 18.1439C15.3335 18.1439 13.9841 16.7946 13.9841 15.1307C13.9841 13.4668 15.3335 12.1174 16.9974 12.1174C18.6613 12.1174 20.0106 13.4668 20.0106 15.1307Z"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="service_title"><Link to="#">Reach the Customers</Link></h4>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom delay={250}>
                            <div className="col-lg-3 col-md-6">
                                <div className="service-content-box text-center sc-sm-mb-30">
                                    <div className="service_icon">
                                        <svg className="pulse" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M31.5047 11.8476L28.9524 10.5524V2.28583C28.9524 1.0287 27.9237 0 26.6665 0L6.09531 0.000265729C4.83818 0.000265729 3.80948 1.02889 3.80948 2.28609V10.5527L1.25713 11.8478C0.495301 12.2289 0 13.0287 0 13.9048V29.7142C0 30.9713 1.02863 32 2.28583 32H30.476C31.7331 32 32.7618 30.9714 32.7618 29.7142V13.9048C32.7618 13.0287 32.3045 12.2286 31.5047 11.8478V11.8476ZM5.33355 2.28576C5.33355 1.8667 5.67634 1.52393 6.09538 1.52393H26.6666C27.0856 1.52393 27.4284 1.86672 27.4284 2.28576V16.7999L16.3809 26.0569L5.33341 16.7999L5.33355 2.28576ZM31.238 29.714C31.238 30.1331 30.8952 30.4759 30.4762 30.4759H2.28603C1.86697 30.4759 1.5242 30.1331 1.5242 29.714V13.9047C1.5242 13.5999 1.67647 13.3714 1.94326 13.2191L3.80997 12.2667L3.80971 17.1429C3.80971 17.3714 3.92397 17.5619 4.0765 17.7142L15.8859 27.6189C16.0382 27.7331 16.1907 27.8094 16.3812 27.8094C16.5717 27.8094 16.724 27.7331 16.8765 27.6189L28.6859 17.7142C28.8765 17.5619 28.9527 17.3714 28.9527 17.1429L28.9522 12.2285L30.8189 13.1809C31.0857 13.2951 31.238 13.5619 31.238 13.8665L31.238 29.714ZM23.3524 8.11427L15.7334 15.3904C15.4286 15.6572 15.0096 15.6952 14.7048 15.3904L11.924 12.9523L11.8097 12.838L11.3144 13.2951L8.91434 15.4283C8.76207 15.5429 8.57154 15.6189 8.38102 15.6189C8.19049 15.6189 7.96196 15.5426 7.80971 15.3521C7.54291 15.0473 7.54291 14.552 7.88597 14.2854L11.3144 11.2378C11.6192 10.971 12.0382 10.971 12.343 11.2378L13.3716 12.1521L15.2383 13.7901L21.6002 7.69475L22.3241 7.00918L22.4763 6.85718H21.3334C20.9143 6.85718 20.5716 6.51439 20.5716 6.09535C20.5716 5.67631 20.9144 5.33352 21.3334 5.33352H24.3811C24.8001 5.33352 25.1429 5.67631 25.1429 6.09535V9.14301C25.1429 9.56206 24.8001 9.90483 24.3811 9.90483C23.962 9.90483 23.6192 9.56204 23.6192 9.14301V7.88588L23.3524 8.11427ZM7.61924 6.09524C7.61924 5.67619 7.96203 5.33341 8.38107 5.33341H12.9524C13.3714 5.33341 13.7142 5.67621 13.7142 6.09524C13.7142 6.5143 13.3714 6.85707 12.9524 6.85707L8.38107 6.85734C7.96201 6.85734 7.61924 6.51428 7.61924 6.09524V6.09524Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="service_title"><Link to="#">Automate Marketing</Link></h4>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom delay={350}>
                            <div className="col-lg-3 col-md-6">
                                <div className="service-content-box text-center sc-sm-mb-30">
                                    <div className="service_icon">
                                        <svg className="pulse" width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M26.774 13.9687L30.0786 14.0913L26.9179 2.29591L17.7567 8.04903L19.2676 13.69L26.7737 13.9692L26.774 13.9687ZM18.3948 15.4987L19.88 21.0419C20.0076 21.5197 19.7237 22.0104 19.2465 22.1374L15.1749 23.2289C14.6975 23.3562 14.2064 23.0726 14.0794 22.5954L11.0637 11.3415H6.36078C5.07633 11.3415 4.02136 12.3959 4.02136 13.6809V24.6329C4.02136 25.9174 5.07633 26.9723 6.36078 26.9723H23.5774C24.8624 26.9723 25.9168 25.9174 25.9168 24.6329V15.7249L18.6475 15.4545L18.3951 15.4989L18.3948 15.4987ZM14.2288 16.2385L15.5764 21.2678L17.9192 20.6404L16.6256 15.8133L14.2285 16.2389L14.2288 16.2385ZM29.159 3.74252C33.3993 3.8806 34.9008 9.47881 31.296 11.7188L32.1215 14.7981H32.1201C32.2739 15.3741 31.8273 15.9433 31.225 15.9218L27.7092 15.7909V24.6325C27.7092 26.907 25.8517 28.7642 23.5775 28.7642H6.36088C4.08635 28.7642 2.22917 26.9067 2.22917 24.6325V13.6805C2.22917 11.406 4.08664 9.54883 6.36088 9.54883H10.6131C10.6075 9.17849 10.8343 8.82834 11.2018 8.69493L16.3284 6.83577L26.948 0.167168C27.5084 -0.209247 28.1811 0.0903963 28.3344 0.663714L29.1593 3.743L29.159 3.74252ZM30.7947 9.84694C32.1783 8.4722 31.5453 6.10846 29.6594 5.61024L30.7947 9.84694ZM16.1092 8.81629L12.5828 10.0952L13.7634 14.5015L17.4565 13.8459L16.1089 8.81598L16.1092 8.81629ZM29.0534 30.2076C30.2332 30.2076 30.2332 32 29.0534 32H0.884867C-0.294956 32 -0.294956 30.2076 0.884867 30.2076H29.0534Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="service_title"><Link to="#">Unlimited Campaigns</Link></h4>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom delay={450}>
                            <div className="col-lg-3 col-md-6">
                                <div className="service-content-box text-center">
                                    <div className="service_icon">
                                        <svg className="pulse" width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.24012 22.5653H4.76596C2.13982 22.5653 0 20.231 0 17.4103C0 14.0061 1.94529 11.0881 4.96049 9.92097C5.34954 6.32219 8.46201 3.50152 12.2553 3.50152C12.9362 3.50152 13.5198 3.59878 14.1033 3.69605C15.465 1.45897 17.7994 0 20.4255 0C24.5106 0 27.8176 3.59878 27.8176 7.87842C27.8176 8.36474 27.7204 8.85106 27.6231 9.43465H28.693C30.6383 9.43465 32.4863 10.31 33.9453 11.769C35.307 13.228 36.0851 15.2705 36.0851 17.3131C36.0851 20.1337 33.9453 22.4681 31.3191 22.4681H26.9422C26.4559 22.4681 26.0669 22.079 26.0669 21.5927C26.0669 21.1064 26.4559 20.7173 26.9422 20.7173H31.3191C32.9726 20.7173 34.3343 19.2584 34.3343 17.4103C34.3343 14.0061 31.8055 11.2827 28.7903 11.2827H26.5532C26.2614 11.2827 25.9696 11.1854 25.8723 10.8936C25.6778 10.6018 25.6778 10.31 25.7751 10.0182C25.9696 9.33739 26.1641 8.55927 26.1641 7.87842C26.1641 4.47416 23.6353 1.75076 20.6201 1.75076C18.4802 1.75076 16.6322 3.0152 15.6596 5.15501C15.5623 5.34954 15.3678 5.54407 15.1733 5.64134C14.9787 5.7386 14.6869 5.7386 14.4924 5.64134C13.8115 5.44681 13.228 5.25228 12.5471 5.25228C9.53191 5.25228 7.00304 7.58663 7.00304 10.5046C7.00304 10.8936 6.71125 11.2827 6.32219 11.3799C3.89058 12.0608 2.04255 14.5897 2.04255 17.3131C2.04255 19.1611 3.40425 20.6201 5.05775 20.6201H9.53191C10.0182 20.6201 10.4073 21.0091 10.4073 21.4954C10.4073 21.9818 9.72644 22.5653 9.24012 22.5653Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M14.6869 32.0001C14.2006 32.0001 13.8115 31.611 13.8115 31.1247C13.8115 30.6384 14.2006 30.2493 14.6869 30.2493C19.5501 30.2493 23.4407 26.3587 23.4407 21.4955C23.4407 16.6323 19.5501 12.7417 14.6869 12.7417C14.2006 12.7417 13.8115 12.3527 13.8115 11.8663C13.8115 11.38 14.2006 10.991 14.6869 10.991C17.5076 10.991 20.1337 12.0609 22.1763 14.1034C24.2188 16.146 25.2887 18.7721 25.2887 21.5928C25.2887 27.3314 20.5228 32.0001 14.6869 32.0001Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M15.9515 26.5532C13.0336 26.5532 10.6992 24.3162 10.6992 21.4955C10.6992 18.6748 13.0336 16.4377 15.9515 16.4377C18.8694 16.4377 21.2038 18.6748 21.2038 21.4955C21.2038 24.2189 18.8694 26.5532 15.9515 26.5532ZM15.9515 18.1885C14.1035 18.1885 12.5472 19.6475 12.5472 21.4955C12.5472 23.3435 14.1035 24.8025 15.9515 24.8025C17.7995 24.8025 19.3558 23.3435 19.3558 21.4955C19.3558 19.6475 17.7995 18.1885 15.9515 18.1885Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="service_title"><Link to="#">Apps Integration</Link></h4>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Works;
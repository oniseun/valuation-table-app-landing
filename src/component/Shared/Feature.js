import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import featureImage from '../../assets/images/feature/feature_img.png'
import featureImage1 from '../../assets/images/feature/feature_img1.png'

const Feature = (props) => {
    const { bgYellow } = props;
    return (
        <>
            <section className={`${bgYellow} sc-feature-section-area sc-pt-110 sc-md-pt-70 sc-pb-70 sc-md-pb-35`}>
                <div className="container">
                    <div className="row align-items-center">
                        <Fade bottom delay={100}>
                            <div className="col-lg-6">
                                <div className="sc-feature-item sc-pr-90">
                                    <div className="sc-heading-area sc-mb-30">
                                        <h2 className="heading-title">Best Features For Project Management</h2>
                                    </div>
                                    <div className="feature-content-box">
                                        <div className="feature-icon">
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.38982 28H3.70848C2.72535 27.9988 1.78261 27.6078 1.08754 26.9125C0.392201 26.2174 0.00115589 25.275 0 24.2915V18.6102C0.00120413 17.6271 0.392217 16.6846 1.08754 15.9892C1.78257 15.2942 2.72535 14.9029 3.70848 14.9017H9.38982C10.3729 14.9029 11.3157 15.2942 12.0108 15.9892C12.7061 16.6846 13.0971 17.6271 13.0983 18.6102V24.2915C13.0971 25.275 12.7061 26.2174 12.0108 26.9125C11.3157 27.6078 10.3729 27.9988 9.38982 28ZM11.0755 18.6103C11.0755 18.1633 10.8979 17.7347 10.5818 17.4183C10.2658 17.1022 9.83683 16.9246 9.38981 16.9246H3.70846C3.26146 16.9246 2.83253 17.1022 2.51643 17.4183C2.20037 17.7347 2.02277 18.1633 2.02277 18.6103V24.2917C2.02277 24.739 2.20037 25.1676 2.51643 25.4837C2.8325 25.7998 3.26144 25.9774 3.70846 25.9774H9.38981C9.83681 25.9774 10.2657 25.7998 10.5818 25.4837C10.8979 25.1676 11.0755 24.739 11.0755 24.2917V18.6103ZM9.38982 13.0976H3.70848C2.72535 13.0964 1.78261 12.7051 1.08754 12.0101C0.392201 11.3147 0.00115589 10.3722 0 9.38911V3.70776C0.00120413 2.72433 0.392217 1.7819 1.08754 1.08683C1.78257 0.391489 2.72535 0.000443189 3.70848 -0.0007127H9.38982C10.3729 0.000491351 11.3157 0.391504 12.0108 1.08683C12.7061 1.78186 13.0971 2.72433 13.0983 3.70776V9.38911C13.0971 10.3722 12.7061 11.3147 12.0108 12.0101C11.3157 12.7051 10.3729 13.0964 9.38982 13.0976V13.0976ZM11.0755 3.70792C11.0755 3.26061 10.8979 2.83199 10.5818 2.51589C10.2658 2.19982 9.83683 2.02223 9.38981 2.02223H3.70846C3.26146 2.02223 2.83253 2.19983 2.51643 2.51589C2.20037 2.83196 2.02277 3.2606 2.02277 3.70792V9.38927C2.02277 9.83627 2.20037 10.2649 2.51643 10.5813C2.8325 10.8974 3.26144 11.075 3.70846 11.075H9.38981C9.83681 11.075 10.2657 10.8974 10.5818 10.5813C10.8979 10.2649 11.0755 9.83629 11.0755 9.38927V3.70792ZM24.2912 13.0976H18.611C17.6279 13.0964 16.6852 12.7054 15.9901 12.0104C15.2948 11.315 14.9037 10.3722 14.9026 9.38911V3.70776C14.9038 2.72433 15.2948 1.7819 15.9901 1.08652C16.6851 0.39118 17.6279 0.000134952 18.611 -0.0007127H24.2918C25.2752 0.000491351 26.2176 0.391504 26.9127 1.08683C27.608 1.78186 27.9991 2.72433 28.0002 3.70776V9.38911C27.999 10.3722 27.608 11.3147 26.9127 12.0101C26.2177 12.7051 25.2752 13.0964 24.2918 13.0976H24.2912ZM25.9768 3.70792C25.9768 3.26061 25.7992 2.83199 25.4832 2.51589C25.1671 2.19982 24.7382 2.02223 24.2911 2.02223H18.611C18.164 2.02223 17.7354 2.19983 17.4193 2.51589C17.1029 2.83196 16.9253 3.2606 16.9253 3.70792V9.38927C16.9253 9.83627 17.1029 10.2649 17.4193 10.5813C17.7354 10.8974 18.164 11.075 18.611 11.075H24.2918C24.7391 11.075 25.1677 10.8974 25.4838 10.5813C25.7999 10.2649 25.9774 9.83629 25.9774 9.38927L25.9768 3.70792ZM16.1233 16.7849L16.7099 19.8191L21.214 24.3231L24.4505 21.0866L19.9464 16.5892L16.9122 15.9959C16.6928 15.9541 16.4667 16.0236 16.3087 16.1817C16.1507 16.3394 16.0811 16.5654 16.1233 16.7849L16.1233 16.7849ZM25.8797 22.5162L22.6432 25.7526L23.5334 26.6428H23.5331C23.7862 26.8959 24.1294 27.0383 24.4873 27.0383C24.8452 27.0383 25.1883 26.8959 25.4415 26.6428L26.7698 25.3144H26.7695C27.023 25.0616 27.1651 24.7184 27.1651 24.3605C27.1651 24.0026 27.023 23.6591 26.7695 23.4063L25.8797 22.5162Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <div className="sc-feature-text">
                                            <h4 className="feature-title"><Link to="#">Manage Smartly</Link></h4>
                                            <div className="description sc-mb-25">Stay on top of your task lists and stay in touch with what's happening</div>
                                        </div>
                                    </div>
                                    <div className="feature-content-box">
                                        <div className="feature-icon">
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23.3563 20.8486C23.1241 20.8486 22.8456 20.7556 22.66 20.57L17.9703 15.6015H10.3089C8.49801 15.6015 7.05865 14.1621 7.05865 12.3512V3.25026C7.05865 1.43936 8.49801 0 10.3089 0H24.7497C26.5606 0 28 1.43936 28 3.25026V12.3512C28 14.1621 26.5606 15.6015 24.7497 15.6015H24.3782L24.2853 19.9663C24.2853 20.3378 24.053 20.6627 23.6815 20.802C23.5886 20.8486 23.4493 20.8486 23.3563 20.8486L23.3563 20.8486ZM10.3085 1.81086C9.51921 1.81086 8.91545 2.41459 8.91545 3.20394V12.3049C8.91545 13.0942 9.51918 13.698 10.3085 13.698H18.388C18.6666 13.698 18.8988 13.791 19.0844 13.9766L22.474 17.5984L22.5203 14.5803C22.5203 14.0696 22.9381 13.6518 23.4489 13.6518H24.749C25.5383 13.6518 26.1421 13.048 26.1421 12.2587V3.15771C26.1421 2.36838 25.5384 1.76462 24.749 1.76462H10.3082L10.3085 1.81086Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M4.64366 27.7673C4.5507 27.7673 4.41142 27.7673 4.31846 27.721C3.94696 27.5817 3.71473 27.2565 3.71473 26.8386V22.4738H3.25026C1.43935 22.4738 0 21.0344 0 19.2235V10.1226C0 8.31167 1.43935 6.87231 3.25026 6.87231H5.29342C5.8042 6.87231 6.22201 7.29014 6.22201 7.8009C6.22201 8.31169 5.80418 8.72949 5.29342 8.72949H3.25026C2.46093 8.72949 1.85717 9.33322 1.85717 10.1226V19.2235C1.85717 20.0129 2.46091 20.6166 3.25026 20.6166H4.64335C5.15413 20.6166 5.57194 21.0345 5.57194 21.5452V24.4706L8.91515 20.8951C9.10074 20.7096 9.33298 20.6166 9.61152 20.6166H17.691C18.4804 20.6166 19.0841 20.0129 19.0841 19.2235C19.0841 18.7127 19.5019 18.2949 20.0127 18.2949C20.5235 18.2949 20.9413 18.7127 20.9413 19.2235C20.9413 21.0344 19.5019 22.4738 17.691 22.4738H9.98365L5.29395 27.4423C5.15435 27.6742 4.8758 27.7672 4.64356 27.7672L4.64366 27.7673Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <div className="sc-feature-text">
                                            <h4 className="feature-title"><Link to="#">B2C Communicate</Link></h4>
                                            <div className="description sc-mb-25">Stay on top of your task lists and stay in touch with what's happening</div>
                                        </div>
                                    </div>
                                    <div className="feature-content-box">
                                        <div className="feature-icon">
                                            <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M22.9256 3.92604H11.7775C11.3686 3.92604 11.0369 4.2575 11.0369 4.66671V9.29631C11.0369 9.49265 11.1149 9.68124 11.2539 9.81998C11.3929 9.95897 11.5812 10.037 11.7775 10.037H22.9256C23.122 10.037 23.3103 9.95897 23.4493 9.81998C23.5883 9.68124 23.6663 9.49265 23.6663 9.29631V4.66671C23.6663 4.47036 23.5883 4.28177 23.4493 4.14303C23.3103 4.00404 23.122 3.92603 22.9256 3.92603L22.9256 3.92604ZM22.1849 8.55564H12.5183V5.40738H22.1849V8.55564Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M27.9996 2.59251C27.9996 1.90481 27.7265 1.24549 27.2404 0.759254C26.7541 0.273041 26.0946 0 25.4071 0H9.2961C8.6086 0 7.94908 0.273074 7.46284 0.759254C6.97663 1.24547 6.70359 1.90475 6.70359 2.59251V15.5183H2.59251C1.90501 15.5183 1.24549 15.7917 0.759254 16.2779C0.27304 16.7641 0 17.4234 0 18.1111V19.2592C0 20.3396 0.429117 21.3758 1.19331 22.1401C1.95726 22.904 2.9935 23.3331 4.07418 23.3331H23.074C24.3774 23.3235 25.6247 22.8014 26.5465 21.8796C27.4683 20.9581 27.9904 19.7108 28 18.4074L27.9996 2.59251ZM6.70346 19.2591C6.69364 19.9499 6.4123 20.6094 5.92039 21.0946C5.42824 21.5798 4.76478 21.8516 4.07398 21.8516C3.38629 21.8516 2.72697 21.5785 2.24073 21.0923C1.75451 20.6061 1.48121 19.9466 1.48121 19.2591V18.111C1.47087 17.8131 1.58455 17.5243 1.7951 17.3137C2.00591 17.1029 2.29475 16.9892 2.59238 16.9998H6.70346L6.70346 19.2591ZM26.5181 18.4073C26.5181 19.3208 26.1552 20.1969 25.5093 20.8427C24.8632 21.4886 23.9871 21.8516 23.0736 21.8516H7.22184C7.83541 21.1261 8.17593 20.209 8.18473 19.2591V2.59251C8.18473 2.29774 8.30202 2.0151 8.51025 1.80687C8.71873 1.59838 9.00137 1.48135 9.29589 1.48135H25.4069C25.7017 1.48135 25.984 1.59838 26.1925 1.80687C26.401 2.01509 26.5181 2.29773 26.5181 2.59251L26.5181 18.4073Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M12.1478 14.1108H18.8515C19.2607 14.1108 19.5922 13.779 19.5922 13.3701C19.5922 12.9609 19.2607 12.6292 18.8515 12.6292H12.1478C11.7386 12.6292 11.4072 12.9609 11.4072 13.3701C11.4072 13.779 11.7386 14.1108 12.1478 14.1108Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M22.5552 17.0737H12.1478C11.7386 17.0737 11.4072 17.4052 11.4072 17.8144C11.4072 18.2234 11.7386 18.5551 12.1478 18.5551H22.5552C22.9644 18.5551 23.2958 18.2234 23.2958 17.8144C23.2958 17.4052 22.9644 17.0737 22.5552 17.0737Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <div className="sc-feature-text">
                                            <h4 className="feature-title"><Link to="#">Quick Report</Link></h4>
                                            <div className="description sc-mb-25">Stay on top of your task lists and stay in touch with what's happening</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom delay={200}>
                            <div className="col-lg-6">
                                <div className="feature-image-area shake-y">
                                    <img className="feature-img" src={featureImage} alt="Feature" />
                                    <img className="feature-img_1 pulse" src={featureImage1} alt="Feature" />
                                    <div className="feature-shape left-right-rotate"></div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Feature;
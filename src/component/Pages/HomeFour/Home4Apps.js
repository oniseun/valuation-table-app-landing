import React from 'react';
import { toast } from 'react-toastify';
import mediaImage2 from '../../../assets/images/feature/media-image2.png'

const Home4Apps = () => {

    const handleSubscribe = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Subscribed SuccessFully!")
    }

    return (
        <>
            <section className="sc-apps-media-section-area sc-md-pt-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="sc-media-content">
                                <div className="sc-heading-area sc-mb-25">
                                    <h2 className="heading-title white-color">Get Subscribe Now and join our community</h2>
                                </div>
                                <div className="description white-dark-color sc-mb-30">
                                    Phasellus egestas tellus rutrum tellus pellentesque. Neque suspendisse consect consequat semper.
                                </div>
                                <div className="sc-media-form">
                                    <form onSubmit={handleSubscribe}>
                                        <input type="email" id="emailOne" name="mail" placeholder="Enter your email" required />
                                        <button className="sc-submit" type="submit" value="subcribe">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sc-media-images">
                                <img src={mediaImage2} alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home4Apps;
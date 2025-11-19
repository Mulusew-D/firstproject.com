import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
           MediServe is an innovative hospital management and digital appointment platform designed to revolutionize how healthcare facilities operate and connect with patients. 
           Built with a vision to bridge the gap between medical professionals and patients, 
           MediServe streamlines every aspect of hospital operations — from patient registration to billing, medical records, and real-time doctor scheduling.
          </p>
          <p>We are all in 2025!</p>
          <p>We are working on Day and Night for Your Health.</p>
          <p>
           Founded on the principles of efficiency, accessibility, and innovation, MediServe empowers hospitals, clinics, 
           and healthcare providers to deliver smarter, faster, and more patient-centered care. 
           The system replaces outdated manual processes with a secure, data-driven solution that 
           ensures accuracy, transparency, and convenience for both healthcare staff and patients.
          </p>
          <p>Your incredible health is here!</p>
          <p>We work for your health Stablity!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;

import React from "react";
import Layout from "../components/Layout/Layout";
// import contactus from "../images/contactus.jpg";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src={""} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about prodduct feel free to call anytime we 24X7
            available
          </p>
          <p className="mt-3">
            <i className="bx bx-envelope"></i> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <i className="bx bx-phone"></i> : 012-3456789
          </p>
          <p className="mt-3">
            <i className="bx bx-support"></i> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

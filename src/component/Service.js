import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../component/service.css';

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: true // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <>
      <div className="container my-5">
        <center>
          <h1 data-aos="fade-up" ><b style={{color:'white'}}>Service</b></h1 >
        </center>
        <div className="row g-3">
          <div className="col-md-4" data-aos="fade-up">
            <div className="card equal-height-card">
              <div className="card-body">
                <h5 className="card-title">Comprehensive Trade Solutions</h5>
                <p className="card-text">
                At Akarswift Global, we offer a wide array of services tailored to meet the unique needs of our diverse clientele. Our expertise spans across various industries, ensuring that your goods reach their destination safely and efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card equal-height-card">
              <div className="card-body">
                <h5 className="card-title">Import Services</h5>
                <p className="card-text">
                  At Akarswift Global Pvt Ltd, we provide comprehensive import services designed to streamline the process of bringing goods into India. Our team of experts ensures that every aspect of the import process is handled with precision and efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card equal-height-card">
              <div className="card-body">
                <h5 className="card-title">Export Services</h5>
                <p className="card-text">
                  At Akarswift Global Pvt Ltd, we specialize in providing top-notch export services that are tailored to meet the diverse needs of our clients.suring that your products arrive at their international destinations efficiently and in optimal condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
         
      {/* <div className="container my-5"> */}
      <div className="row g-3" style={{marginTop: '20px'}}>
          <div className="col-md-4" data-aos="fade-up">
            <div className="card equal-height-card">
              <div className="card-body">
                <h5 className="card-title">Customs Brokerage</h5>
                <p className="card-text">
                
                  Our customs brokerage services are designed to simplify the intricate process of international trade. We ensure your shipments clear customs smoothly and efficiently,
                   avoiding delays and compliance issues. Our expert team stays up-to-date with the latest customs regulations and documentation requirements to provide seamless import and export services.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card equal-height-card">
              <div className="card-body">
                <h5 className="card-title">Supply Chain Management</h5>
                <p className="card-text">
                Optimizing your supply chain for maximum efficiency and
                cost-effectiveness. Effective supply chain management is essential to ensure seamless operations, reduce costs, and maintain high levels of customer satisfaction. 
                  Our approach to supply chain management focuses on enhancing operational efficiency, reducing lead times, and driving cost-effectiveness throughout the entire supply chain network.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card equal-height-card">
              <div className="card-body">
                <h5 className="card-title">Logistics and Transportation</h5>
                <p className="card-text">
                  Providing end-to-end logistics solutions, including warehousing and transportation.we offer comprehensive logistics and transportation services to ensure your goods move efficiently from origin to destination. Our integrated solutions streamline your supply chain, providing reliable and timely delivery while optimizing costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;

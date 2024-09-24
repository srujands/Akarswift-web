import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../component/Product.css';

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
       once: true, // Whether animation should happen only once - while scrolling down
      mirror: false ,// Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <>
     <div className="container my-5">
  <div data-aos="fade-up">
    <h1 className="text-center mb-4">
      <b style={{ color: 'white' }}>Products</b>
    </h1>
    <div className="accordion" id="productAccordion">

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            data-aos="fade-up"
          >
            Agricultural Products
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse "
          aria-labelledby="headingOne"
          data-bs-parent="#productAccordion"
        >
          <div className="accordion-body">
            <div className="card mb-3">
              <div className="card-header">
                <strong><h4>Fresh Produce, Grains, and Spices</h4></strong>
              </div>
              <div className="card-body">
                <p>At Akarswift Global, we source the finest agricultural products to meet the growing demands of the global market. Our agricultural division focuses on sustainability and quality, ensuring that every product is fresh, nutritious, and responsibly sourced.</p>
                <ul>
                  <li><strong>Fresh Produce:</strong> We offer a variety of fresh fruits and vegetables, carefully harvested to retain their natural flavors and nutrients. Our produce is sourced from certified farms that practice sustainable agriculture.</li>
                  <li><strong>Grains:</strong> We provide high-quality grains, including rice, wheat, and barley. Each grain is meticulously processed to maintain its purity and nutritional value.</li>
                  <li><strong>Spices:</strong> Our selection of spices includes turmeric, black pepper, cardamom, and more. These spices are sourced from regions renowned for their quality, ensuring that they enhance the flavor and aroma of your culinary creations.</li>
                </ul>
              </div>
              <div className="card-footer">
                <p><strong>Key Features:</strong></p>
                <ul>
                  <li>Sustainability: Commitment to eco-friendly farming practices.</li>
                  <li>Quality Assurance: Rigorous quality checks to ensure purity and freshness.</li>
                  <li>Global Sourcing: Partnerships with trusted farms and suppliers worldwide.</li>
                  <li>Nutritional Value: Products rich in essential vitamins and minerals.</li>
                  <li>Packaging: Eco-friendly packaging that preserves freshness.</li>
                </ul>
              </div>
            </div>
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
            Industrial Goods
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#productAccordion"
        >
          <div className="accordion-body">
            <div className="card mb-3">
              <div className="card-header">
                <strong><h4>Machinery, Tools, and Raw Materials</h4></strong>
              </div>
              <div className="card-body">
                <p>Akarswift Global's industrial goods division is dedicated to supplying high-quality machinery, tools, and raw materials essential for various industries. Our products are designed to enhance productivity and efficiency, catering to sectors such as manufacturing, construction, and mining.</p>
                <ul>
                  <li><strong>Machinery:</strong> We provide advanced machinery, including CNC machines, industrial robots, and automated production lines. Our machines are built for precision, durability, and high performance.</li>
                  <li><strong>Tools:</strong> Our range of tools includes hand tools, power tools, and cutting tools. Each tool is crafted to meet the highest standards of safety and reliability.</li>
                  <li><strong>Raw Materials:</strong> We supply essential raw materials such as steel, aluminum, and copper. These materials are sourced from reputable suppliers to ensure their quality and compliance with industry standards.</li>
                </ul>
              </div>
              <div className="card-footer">
                <p><strong>Key Features:</strong></p>
                <ul>
                  <li>Innovation: Cutting-edge technology for enhanced productivity.</li>
                  <li>Durability: Products built to withstand demanding industrial environments.</li>
                  <li>Compliance: Adherence to international quality and safety standards.</li>
                  <li>Customization: Tailored solutions to meet specific industrial needs.</li>
                  <li>Support: Comprehensive after-sales support and maintenance services.</li>
                </ul>
              </div>
            </div>
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
            Consumer Goods
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#productAccordion"
        >
          <div className="accordion-body">
            <div className="card mb-3">
              <div className="card-header">
                <strong><h4>Electronics, Apparel, and Home Goods</h4></strong>
              </div>
              <div className="card-body">
                <p>Our consumer goods division offers a wide range of products designed to improve the quality of life for consumers around the world. From state-of-the-art electronics to stylish apparel and practical home goods, we ensure that our products meet the highest standards of quality and innovation.</p>
                <ul>
                  <li><strong>Electronics:</strong> We offer a variety of electronics, including smartphones, laptops, and home appliances. Our products are sourced from leading manufacturers, ensuring reliability and cutting-edge technology.</li>
                  <li><strong>Apparel:</strong> Our apparel collection features trendy and comfortable clothing for men, women, and children. We prioritize sustainable fabrics and ethical manufacturing practices.</li>
                  <li><strong>Home Goods:</strong> We provide essential home goods such as kitchenware, furniture, and decor items. Each product is designed to enhance comfort and functionality in your home.</li>
                </ul>
              </div>
              <div className="card-footer">
                <p><strong>Key Features:</strong></p>
                <ul>
                  <li>Innovation: Latest technology and trends in consumer goods.</li>
                  <li>Quality: Products tested for performance and durability.</li>
                  <li>Sustainability: Eco-friendly materials and ethical production.</li>
                  <li>Variety: Wide selection to cater to diverse consumer preferences.</li>
                  <li>Customer Satisfaction: Commitment to exceptional service and support.</li>
                </ul>
              </div>
            </div>
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
            Pharmaceuticals
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#productAccordion"
        >
          <div className="accordion-body">
            <div className="card mb-3">
              <div className="card-header">
                <strong><h4>High-Quality Medicines and Healthcare Products</h4></strong>
              </div>
              <div className="card-body">
                <p>Akarswift Global's pharmaceutical division is dedicated to improving global health by providing high-quality medicines and healthcare products. Our portfolio includes essential drugs, over-the-counter medications, and healthcare supplies.</p>
                <ul>
                  <li><strong>Medicines:</strong> We offer a comprehensive range of medicines, including antibiotics, antivirals, and chronic disease medications. Our products are manufactured in compliance with stringent regulatory standards.</li>
                  <li><strong>Healthcare Products:</strong> Our healthcare products include medical devices, diagnostics, and wellness products. These products are designed to support healthcare professionals and patients in achieving better health outcomes.</li>
                </ul>
              </div>
              <div className="card-footer">
                <p><strong>Key Features:</strong></p>
                <ul>
                  <li>Regulatory Compliance: Adherence to global pharmaceutical standards.</li>
                  <li>Quality Assurance: Rigorous testing and quality control processes.</li>
                  <li>Accessibility: Efforts to make healthcare products affordable and accessible.</li>
                  <li>Innovation: Investment in research and development for advanced therapies.</li>
                  <li>Support: Comprehensive information and support for healthcare providers and patients.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Automotive
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#productAccordion"
        >
          <div className="accordion-body">
            <div className="card mb-3">
              <div className="card-header">
                <strong><h4>Vehicles and Automotive Parts</h4></strong>
              </div>
              <div className="card-body">
                <p>Our automotive division provides a wide range of vehicles and automotive parts to meet the needs of the global automotive market. From passenger cars to commercial vehicles and spare parts, we ensure that our products are reliable, efficient, and environmentally friendly.</p>
                <ul>
                  <li><strong>Vehicles:</strong> We offer a variety of vehicles, including sedans, SUVs, trucks, and buses. Our vehicles are sourced from leading manufacturers known for their innovation and quality.</li>
                  <li><strong>Automotive Parts:</strong> Our selection of automotive parts includes engines, transmissions, brakes, and more. Each part is designed to meet OEM standards and ensure optimal performance.</li>
                </ul>
              </div>
              <div className="card-footer">
                <p><strong>Key Features:</strong></p>
                <ul>
                  <li>Quality: Vehicles and parts tested for performance and safety.</li>
                  <li>Efficiency: Focus on fuel efficiency and low emissions.</li>
                  <li>Reliability: Products built to withstand rigorous use.</li>
                  <li>Innovation: Advanced technology for enhanced driving experience.</li>
                  <li>Customer Support: Comprehensive after-sales service and parts availability.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSix">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            Eco-friendly Synthetic Paper
          </button>
        </h2>
        <div
          id="collapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#productAccordion"
        >
          <div className="accordion-body">
            <div className="card mb-3">
              <div className="card-header">
                <strong><h4>Eco-friendly Synthetic Paper</h4></strong>
              </div>
              <div className="card-body">
                <p>Our eco-friendly synthetic paper is designed to meet the highest standards of security and sustainability. Ideal for secure documents such as certificates, this paper combines durability with advanced security features to prevent counterfeiting.</p>
                <p><strong>Key Features:</strong></p>
                <ul>
                  <li>High Res Border: Precision-printed high-resolution border for authenticity.</li>
                  <li>QR Code with Number: Unique QR code for easy verification.</li>
                  <li>Watermarks: Integrated watermarks for added security.</li>
                  <li>Spelling Mistake: Deliberate error to deter counterfeiting.</li>
                  <li>Invisible Ink: Security text visible under UV light.</li>
                  <li>Anti-Xerox: Features that prevent photocopying.</li>
                  <li>Ghost Image: Hidden image visible under specific conditions.</li>
                  <li>Gold Foil: Attractive and tamper-evident gold foil elements.</li>
                  <li>Mirror Text: Text that is readable in reverse.</li>
                  <li>Copy Void: "VOID" appears on copies to indicate duplication.</li>
                  <li>One Net Fill for Security Purpose: Background pattern for additional security.</li>
                  <li>Confusing Border: Complex border design to deter replication.</li>
                  <li>Guilloche Design: Intricate patterns for anti-counterfeiting.</li>
                  <li>Relief Background: Textured background for authenticity.</li>
                  <li>Microtext: Tiny text readable under magnification for verification.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

    </>
  );
};

export default Product;

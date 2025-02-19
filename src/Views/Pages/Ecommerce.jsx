import React from "react";
import Section1 from "../Pages/Components/firstComponent/Section1";
import Section3 from "../Pages/Components/firstComponent/Section3";
import Section4 from "../Pages/Components/firstComponent/Section4";
import CardPages from "../Pages/Components/Card/CardPages";

const Ecommerce = () => {
  return (
    <>
      <section>
        <Section1
          bgImg={
            "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg"
          }
          title={"Top eCommerce Development Services for Your Business"}
          titleDescription={`Give a lift to your online business with Onyx Consultancy Services Inc. Our development services deliver a secure and scalable solution with Adobe, Magento, and Shopify.`}
        />

        <div class="container-fluid py-4  s2-bg">
          <div class="row py-4 justify-content-center">
            <div class="col-12   text-center">
              <p class="m-0 fs-2  fw-bold text-color">
                Our ECommerce Development Solutions
              </p>
            </div>
          </div>
          <div class="row justify-content-center py-4 ">
            <CardPages
              title={"Adobe Commerce Development"}
              cardPara={
                "Development Custom solutions harness the full power of the Adobe platform for a seamless and hyper-personalized shopping experience."
              }
              width={`w-50`}
              img={"adobe.svg"}
            />
            <CardPages
              title={"Magento Development"}
              cardPara={
                "Customized e-commerce solutions built using Magento-rich features to achieve flexibility and scalability."
              }
              img={"magento.svg"}
            />
            <CardPages
              title={"Shopify Development"}
              cardPara={
                "Take advantage of an easy-to-use Shopify system setup, along with clear and concise themes."
              }
              img={"shopify.svg"}
            />
          </div>
        </div>
        <Section3
          cardTitle1={"Restaurant Ordering and Tracking"}
          cardTitle2={"Salesforce Upgrade Cloud Web App Case Study"}
          cardTitle3={"Taxi Booking Case Study"}
        />

        <Section4
          q1={"On which e-commerce platforms does Onyx Consultancy Services Inc specialize?"}
          q1a={
            "We specialize in creating e-commerce solutions with Adobe Commerce (Magento), Shopify, and other leading platforms. Our expertise will provide you with a tailored, user-friendly online store that scales to meet your business needs."
          }
          q2={"How does Onyx Consultancy Services Inc empower my online profile?"}
          q2a={
            "Designing and developing custom e-commerce websites that suit your business needs. We design solutions that focus on adding value to your users' interactions with an eye on security and scalability so that you can up your sales game and improve customer satisfaction."
          }
          q3={
            "What kind of customization can I expect for my e-commerce website?"
          }
          q3a={
            "We offer a high level of customization with personalized design, unique user interfaces, and functionality, along with third-party services. The general idea here is to make a site able to uphold itself within your brand and business objectives."
          }
          q4={"Is the development process of Onyx Consultancy Services Inc secure?"}
          q4a={`Yes, security is another feature that we take into consideration in all development processes. Our team applies common industry standards to implement security in safeguarding your website from threats and, more importantly, the safety of data belonging to your customers.

Stages of the development process involved are:

1. Consultation: To learn about your business requirements and goals.
2. Planning: Just a detailed project plan with a timeline.
3. Design: Design attractive and user-friendly.
4. Development: Develop an e-commerce website with all the required features and
integrations.
5. Testing: That everything works smoothly and is secure.
6. Launch: Website upload and make live.
7. Support: Ongoing support and maintenance.`}
          q5={"How does Onyx Consultancy Services Inc ensure my e-commerce website is scalable?"}
          q5a={
            "We create the websites, keeping in mind scalability such that when your business is growing, scaling up could be seamless. Our solutions are able to handle a greater amount of traffic, more products, and added features without compromised performance."
          }
          q6={
            "Does Onyx Consultancy Services Inc provide integration of the e-commerce website with other business systems?"
          }
          q6a={`Of course, we would be able to integrate your e-commerce website with most thirdparty systems, such as payment gateways, CRM systems, inventory management
software, and much more which you may be using now.`}
          q7={
            "What is the development period for an e-commerce website designed with Onyx Consultancy Services Inc?"
          }
          q7a={`The timeline for development depends on the complexity and specific requirements of your project. We work with you in establishing an appropriate timeline for the
accomplishment of quality results.`}
          q8={
            "What kind of support does Onyx Consultancy Services Inc offer after the website is launched?"
          }
          q8a={` We provide after-sale support and maintenance services so that the website stays secure, updated, and fully operational. The team is always available for any kind of postlaunch issue or updates.`}
          q9={
            "How does Onyx Consultancy Services Inc help to improve customer satisfaction on my e-commerce site?"
          }
          q9a={`We are focused on making a seamless, intuitive user experience with fast loading times, easy navigation, and secure transactions. Enhanced in these respects, it can empower
customer satisfaction and repeat business.`}
        />
      </section>
    </>
  );
};

export default Ecommerce;

import React from "react";
import Section1 from "../Pages/Components/firstComponent/Section1";
import Section3 from "../Pages/Components/firstComponent/Section3";
import Section4 from "../Pages/Components/firstComponent/Section4";
import CardPages from "../Pages/Components/Card/CardPages";
import Section5 from "./Home/Section5";

const Cloud = () => {
  return (
    <>
      <section>
        <Section1
          title={
            "Cloud Consulting Experts Energize your Business with Cloud Consulting"
          }
          bgImg={
            "cloud.jpg"
          }
          titleDescription={`Realize the potential of your business and take it to the next level with our top-notch cloud consulting services. We offer innovative, scalable, and robust cloud solutions to optimize costs and productivity. Migrate seamlessly with flexible data, application, and infrastructure migration that allows secure transfer of business operations to the cloud, giving an edge over competitors and reducing time-to-market for success.  `}
        />

        <div class="container-fluid py-4  s2-bg">
          <div class="row py-4 justify-content-center">
            <div class="col-12   text-center">
              <p class="m-0 fs-2  fw-bold text-color">Our Cloud Services</p>
            </div>
          </div>
          <div class="row justify-content-center py-4 ">
            <CardPages
              title={"Cloud Migration"}
              cardPara={`Your data and apps transition to the cloud as easily and un-disruptively as possible.`}
              img={"Cloud Integration.svg"}
            />
            <CardPages
              title={"Cloud Management"}
              cardPara={`Continuous monitoring and improvement of your cloud to maintain performance, cost, and security benefits.`}
              img={"Computer-vision.svg"}
            />
            <CardPages
              title={"Custom Cloud Development"}
              cardPara={`Cloud-native applications that meet your unique business requirements require development solutions to be tailored.`}
              img={"Dev-ops.svg"}
            />
            <CardPages
              title={"Cloud Integration"}
              cardPara={`Integration of cloud with the back office—making your systems integrated across cloud environments to flow data effectively and act in unison.`}
              img={"custom_cloud.svg"}
            />
            <CardPages
              title={"Cloud Security"}
              cardPara={`Applying strong security practices to defend your cloud against all threats and exposures.`}
              img={"cloud security.svg"}
            />
          </div>
        </div>
        <Section3
          cardTitle1={"Crypto Real Estate Web Application Case Study"}
          cardTitle2={"Salesforce Upgrade Cloud Web App Case Study"}
          cardTitle3={"Taxi Booking Case Study"}
        />

        <Section4
          q1={"What services does Onyx Consultancy Services Inc Cloud Services offer?"}
          q1a={`We provide a complete range of cloud services, including:
Cloud Migration: Seamless transition of your existing applications and data into the cloud.
Solution Tailoring: Customization of cloud infrastructure design and implementation to fit your unique requirements.
Managed Maintenance: Ongoing management and configuration of your cloud infrastructure for optimal performance.`}
          q2={"Which cloud platforms do you support?"}
          q2a={`We work with major cloud platforms like AWS, Microsoft Azure, and Google App Engine. We know these platforms inside out so you can make use of the best that each platform has to offer!`}
          q3={"How do I get started with Onyx Consultancy Services Inc Cloud Services?"}
          q3a={`Simply contact us through our website form or ring the office to get started. To begin, we'll book an initial consultation to form a plan designed for you`}
          q4={"What does the cloud migration process entail?"}
          q4a={`Our cloud migration process includes:
Assessment- Examining how all the pieces fit together.
Strategy- Development of a complex relocation plan with mapping and resource planning.
Implementation- Transitioning your applications and data to the cloud with the least disruption possible.
Optimization- Making sure your new cloud environment works optimally.`}
          q5={"How do you ensure the security of my data in the cloud?"}
          q5a={`We secure your data by employing the best security measures including encryption, several layers of access control, and regular audits. We follow tried and tested best practices and industry standards, ensuring your environment is completely secure and compliant.`}
          q6={"What kind of support do you provide after migration?"}
          q6a={`
What services does Onyx Consultancy Services Inc  Cloud Services offer?
Which cloud platforms do you support?
How do I get started with Onyx Consultancy Services Inc Cloud Services?
What does the cloud migration process entail?
How do you ensure the security of my data in the cloud?
What kind of support do you provide after migration?
Our managed services provide peace of mind:
24/7 Monitoring: Proactive monitoring of your cloud environment.
Technical Support: Access to our team of experts for troubleshooting and assistance.
Performance Optimization: Regular evaluation and modification to keep performance at its best.`}
          q7={"How do you address scalability and performance issues?"}
          q7a={`We help enable your business to scale by providing services in architecture design that are fit for purpose, keeping pace with change. We will monitor and modify the environment to ensure proper scalability and performance improvements.`}
        />
      </section>


      <Section5 />
    </>
  );
};

export default Cloud;

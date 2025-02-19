import React from "react";
import Section1 from "../Pages/Components/firstComponent/Section1";
import Section3 from "../Pages/Components/firstComponent/Section3";
import Section4 from "../Pages/Components/firstComponent/Section4";
import CardPages from "../Pages/Components/Card/CardPages";
import Section5 from "./Home/Section5";

const FullStack = () => {
  return (
    <>
      <section>
        <Section1
          title={"Top Most Full-Stack Development Company in USA and Globally"}
          bgImg={
            "https://d1ub0o53i85pdh.cloudfront.net/uploads/2021/09/Facebook-Linkedin-image-template-10.jpg"
          }
          titleDescription={`Onyx Consultancy Services Inc is considered one of the best full-stack development companies in the USA but provides services worldwide. Our highly competent team has always taken the challenges of developing full-stack solutions using diversified platforms. Harnessing a time-proven approach, we create bespoke solutions that are meticulously fitted for your unique business needs.`}
        />

        <div class="container-fluid py-4  s2-bg">
          <div class="row py-4 justify-content-center">
            <div class="col-12   text-center">
              <p class="m-0 fs-2  fw-bold text-color">
                Our Full-Stack Development Solutions
              </p>
            </div>
          </div>
          <div class="row justify-content-center py-4 ">
            <CardPages
              title={"Front-End Development"}
              cardPara={`High-level expert front-end services, providing responsiveness to your needs and combined with the latest technologies and design trends for intuitive, engaging user interfaces.
HTML5 /CSS3
                        JavaScript
                        Angular
                        ReactJS
VueJS`}
              img={"mobile-development.png"}
            />
            <CardPages
              title={"Bank-End Development"}
              cardPara={`Providing scalable, secure, and quality business solutions across a wide range of needs.
Node.js
                        Python
                        Ruby on Rails
                        PHP
Java.`}
              img={"magento.svg"}
            />
            <CardPages
              title={"Database Management"}
              cardPara={`Secure, scalable, and high-performance database solutions to support your applications.
MySQL
                            MongoDB
                            PostgreSQL
                            Oracle
                            SQL Server`}
              img={"Data-base (1).svg"}
            />
            <CardPages
              title={"API Development & Integration"}
              cardPara={`Enhance your app’s functionality with custom API solutions:
RESTful API Development
GraphQL API Development
Third-Party API Integration`}
              img={"Api (1).svg"}
            />
            <CardPages
              title={"DevOps & Cloud Services"}
              cardPara={`
Optimize your development with seamless DevOps and cloud solutions:
AWS
Azure
Google Cloud
Docker & Kubernetes
CI/CD Pipeline Setup`}
              img={"Dev-ops.svg"}
            />
          </div>
        </div>
        <Section3
          cardTitle1={"Crypto Real Estate Web Application Case Study"}
          cardTitle2={"Salesforce Upgrade Cloud Web App Case Study"}
          cardTitle3={"Taxi Booking Case Study"}
        />

        <Section4
          q1={
            "Which are the technologies that Onyx Consultancy Services Inc uses for full-stack development?"
          }
          q1a={
            "For full-scale web and application development across all platforms, we use robust technologies, such as PHP, Node.JS, and Python. Implementation of these technologies allows us to deliver high-performance, scalable solutions that are tailor-made for your needs."
          }
          q2={"What does Onyx Consultancy Services Inc include in full-stack development?"}
          q2a={`Front-end Development: It involves the creation of a front-end interface with modern frameworks
and libraries to ensure that it is appealing and responsive.
Back-End Development: Implement the server-side functionalities and integrate all of it with the
front-end for seamless running.
Database Management: Designing and managing databases to efficiently store, retrieve, and
manipulate data.`}
          q3={"How Silversepace ensures high performance and scalability?"}
          q3a={`Best practice methods are used for the backbone of cutting edge technology in domains like Performance and Scalability. It involves—- Code Optimisation: Building clean, effective codes to reduce loading times and improve experiences.
Scalable Architecture: Easy, scalable system design to scale for traffic and data growth.
Performance Monitoring: Always looking at the reliability and efficiency of the application and
maintaining them.`}
          q4={"Does Onyx Consultancy Services Inc have the ability to cope with large projects?"}
          q4a={`Yes, indeed we do cater for large projects. We have the expertise in attending to small applications right up to intricate large-scale systems and, therefore, deliver solutions to meet your requirements.`}
          q5={"How do you make your created applications secure?"}
          q5a={`Security is our top priority. We thus adopt the best practices in the industry such as:
Secure Coding Practices: Writing code that is secure by design in respect of leading to nonvulnerabilities.
Regular Security Audits: Regularly conducting detailed audits in order to identify and remedy
areas where security issues may lie.
Data Encryption: Making sure information is encrypted while in transit and at rest for the
purpose of safeguarding sensitive information.`}
          q6={"Do you offer the maintenance and support after launch?"}
          q6a={`Yes, without a doubt. We offer additional maintenance and support services to ensure that your application runs flawlessly. If necessary, we assist with problem fixes, feature additions, and enhancements.`}
          q7={"How can I get in touch with Onyx Consultancy Services Inc to get further details?"}
          q7a={`You may reach us through the contact form on this website, via email, or by phone. Our team is on standby to respond to any queries you may have and to ensure that your needs are met regarding your project.`}
        />
      </section>
      <Section5 />
    </>


  );
};

export default FullStack;

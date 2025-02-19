import React from "react";
import Section1 from "../Pages/Components/firstComponent/Section1";
import Section3 from "../Pages/Components/firstComponent/Section3";
import Section4 from "../Pages/Components/firstComponent/Section4";
import CardPages from "../Pages/Components/Card/CardPages";

const Microsoft = () => {
  return (
    <>
      <section>
        <Section1
          title={"Enterprise Development Services From Microsoft"}
          bgImg={
            "microsoft.jpg"
          }
          titleDescription={`Our Microsoft Enterprise Development Services provides an end-to-end diagram to build, customize and scale your own in-house software-supported web applications and portals within the stipulated time period. Microsoft Service Provider helps achieve high-level, object-based coding using Microsoft Technologies such as Azure Cloud with the .NET framework. `}
        />

        <div class="container-fluid py-4  s2-bg">
          <div class="row py-4 justify-content-center">
            <div class="col-12   text-center">
              <p class="m-0 fs-2  fw-bold text-color">Microsoft Services</p>
            </div>
          </div>
          <div class="row justify-content-center py-4 ">
            <CardPages
              title={"Azure Cloud Services"}
              cardPara={`Get your applications to market faster with simplified migration and management using Microsoft Azure cloud services that have been engineered in the Datacenter.`}
              img={"Azure.svg"}
            />
            <CardPages
              title={".NET Development"}
              cardPara={`Develop high-performance, secure, and scalable applications using the .NET framework for web, desktop, and mobile platforms.`}
              img={"net-core.svg"}
            />
            <CardPages
              title={"Enterprise apps development"}
              cardPara={`Get system-specific enterprise software to suit your functional requirements with intended capability and integration.`}
              img={"phone (3).png"}
            />
            <CardPages
              title={"Web and Portal Development"}
              cardPara={`Create responsive and attractive web applications that let members interact with the club through a host of different funnels.`}
              img={"Web-Api.svg"}
            />
            <CardPages
              title={"Microsoft 365 Solution"}
              cardPara={`Maximize productivity and collaboration with Microsoft 365 customized deployments that maximize the most of Teams, SharePoint, and Exchange.`}
              img={"Microsoft-cloud.svg"}
            />
            <CardPages
              title={"Business Intelligence (BI)"}
              cardPara={`Use data more effectively. Move from raw data to insight and move faster with a complete solution in one click—available on your iPad, iPhone, or via the web`}
              img={"it-support.png"}
            />
            <CardPages
              title={"Dynamics 365"}
              cardPara={`You customize it, and implement Dynamics 365 solutions which involve CRM as well as ERP to streamline business processes for customer engagement.`}
              img={"Dynamics-365"}
            />
            <CardPages
              title={"Application Modernization"}
              cardPara={`Take your old, run-down warehousing systems and bring them into the new world with improved performance, security, and compatibility.`}
              img={"Application-Modernization.svg"}
            />
            <CardPages
              title={"Cybersecurity Solutions"}
              cardPara={`Secure your digital tools with the complete security of Microsoft, such as threat detection, resource management, and compliance support.`}
              img={"Cybersecurity-solutions.svg"}
            />
            <CardPages
              title={"DevOps and CI/CD"}
              cardPara={`Combine this with Microsoft DevOps practices and continuous integration/continuous delivery pipelines to streamline development and deployment processes.`}
              img={"DevOps and CICD.svg"}
            />
          </div>
        </div>
        <Section3
          cardTitle1={"Crypto Real Estate Web Application Case Study"}
          cardTitle2={"Salesforce Upgrade Cloud Web App Case Study"}
          cardTitle3={"Taxi Booking Case Study"}
        />

        <Section4
          q1={"What Services Onyx Consultancy Services Inc Offer for Microsoft Development?"}
          q1a={
            "Service Categories Custom Software Development Data Visualization Using Power BI. NET Application Development, and Cloud Solutions Using Azure: Our aim is to aid you in optimizing your business processes by improving dated workflows & integrating enterprise applications."
          }
          q2={"What does PowerBI offer my business?"}
          q2a={`PowerBI PowerBI is basically for high-level data visualization and business intelligence. Interactive Reports and Dashboards too create highly interactive actionable insights helping one to take informed decisions based on real time data.`}
          q3={"What is the role of. Your development services NET?"}
          q3a={`. NET course is an umbrella which I can say that It provides different types of applications like web, desktop and mobile applications. We use. For NET, we can use the power of C#.NET to create tailored custom software applications that cybersecurity and can be scaled as needed for your specific business.`}
          q4={
            "So What is custom software development, and How does my business benefits?"
          }
          q4a={`A custom software development is a way in which to design or develop the solutions for unique requirements of business. It takes care of process automation or makes your business more productive by tuning it to the software you use for operating.`}
          q5={"How do you secure the cloud?"}
          q5a={`We will apply best practices and use the security features out-of-the-box provided by Azure to protect your data and applications at our discretion. This offering covers encrypting your data, applying access controls to secure it and carrying out routine security reviews for vulnerabilities against threats.`}
          q6={"Can you describe the development process?"}
          q6a={`Our solutions are created with your business needs and goals in mind, idea to an actuality that is established according to these principles of understanding what you need - designing it for accomplishing the standpoint target - testing thoroughly so we know thinks like expected. Ongoing Support, Maintenance - We maintain the solution to ensure it is useful;`}
          q7={"How long will the project take?"}
          q7a={`The size of the project dictates this. Milestones, deliverables would be defined closely with you so there is transparency in how the entire development process works.`}
        />
      </section>
    </>
  );
};

export default Microsoft;

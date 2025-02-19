import React from "react";
import CardPages from "../Pages/Components/Card/CardPages";
import Section1 from "../Pages/Components/firstComponent/Section1";
import Section3 from "../Pages/Components/firstComponent/Section3";
import Section4 from "../Pages/Components/firstComponent/Section4";

const Mobile = () => {
  return (
    <section>
      <Section1
        title={"Premier Mobile App Development Specialists"}
        bgImg={
          "https://nerdzlab.com/wp-content/uploads/2020/12/PRESTASHOP12.png"
        }
        titleDescription={`At Onyx Consultancy Services Inc, we feel proud to be recognized as one of the leading mobile app development companies not only in the USA but also globally. Our methodology for awardwinning applications, with over 10 apps named "App of the Year," ensures that we deliver. premium tailored solutions for your business across all platforms.`}
      />

      <div class="container-fluid py-4  s2-bg">
        <div class="row py-4 justify-content-center">
          <div class="col-12   text-center">
            <p class="m-0 fs-2  fw-bold text-color">
              Our Mobile Development Solutions
            </p>
          </div>
        </div>
        <div class="row justify-content-center py-4 ">
          <CardPages
            title={"Mobile App Development Personalization"}
            cardPara={
              "iOS and Android mobile apps are developed for your specific business purpose with which users will be able to get convenience and entertainment."
            }
            img={"mobile-development.png"}
          />
          <CardPages
            title={"Details of cross-platform"}
            cardPara={
              "We work with Flutter and React Native frameworks to ensure that the applications we are developing will function well on all platforms. This allows time and costs to be reduced."
            }
            img={"phone (3).png"}
          />
          <CardPages
            title={"Human-Computer Interaction"}
            cardPara={
              "With the expert knowledge of the designers, we have developed intuitive and visually appealing interfaces to guarantee maximum satisfaction and engagement of the users in every touchpoint."
            }
            img={"software-engineer.png"}
          />
          <CardPages
            title={"App Testing & Quality Assurance"}
            cardPara={
              "We put it through rigorous testing for any bugs and to run it smoothly so that a problem-free and seamlessly working application will be experienced by the end user"
            }
            img={"mobile-app.png"}
          />
          <CardPages
            title={"App Maintenance & Support"}
            cardPara={
              "Once the solution is launched, we proceed with maintaining and supporting it to ensure that your application remains up-to-date, safe, and at peak performance"
            }
            img={"it-support.png"}
          />
          <CardPages
            title={"Consulting Services"}
            cardPara={
              "We offer strategic advice on app development from the idea phase to the launch, so you can navigate your way through mobile with confidence"
            }
            img={"support (3).png"}
          />
        </div>
      </div>

      <Section3
        cardTitle1={"Online Trading App case study"}
        cardTitle2={"Taxi Booking Case Study"}
        cardTitle3={"Salesforce Upgrade Cloud Web App Case Study"}
      />
      <Section4
        q1={"What mobile platforms do you develop for?"}
        q1a={`We specialize in the development of applications for iOS, Android, Augmented Reality (AR), and hybrid mobile. Be it a native application for one specific OS, or a cross-platform solution, we have your back.`}
        q2={"How is it to create a mobile app with Onyx Consultancy Services Inc?"}
        q2a={`Below are some of the key stages in our development process:
Concept & Planning - We work with you in defining the objectives, target audience, and key
features of your app.
Design: Our team creates intuitive and engaging UI/UX designs to ensure a seamless user
experience.
Development: We develop your app adhering to the best technology practices that enable us to
ensure performance and scalability.
Testing: The application undergoes rigorous testing to identify and fix any issues, ensuring the
reliability of your application and an absence of bugs.
Deployment: We assist in the launch of your application on the app stores, and we continue
supporting you by answering issues that pop up after the launch. `}
        q3={
          "Do you provide services for both native and cross-platform development?"
        }
        q3a={`Yeah, we do native application development for both iOS and Android. We also develop applications that can be used on different platforms using such frameworks as Flutter or React Native. We will advise you on the best one to choose according to your project requirements and goals.`}
        q4={
          "What methodologies do you use in ensuring that the mobile apps you develop are of high quality?"
        }
        q4a={`We apply a well-structured quality assurance process that includes:
Code Reviews: Ensure that quality is maintained through consistent code reviews.

Automated
Testing: Automatic tests for functionality and performance. Manual Testing: Thorough manual
testing across multiple devices to pinpoint usability and compatibility issues.
User feedback: The process of incorporating user feedback to make the necessary adjustments
and improvements.`}
        q5={"What is the typical timeline for developing a mobile app?"}
        q5a={`The development time for your mobile app may depend on the complexity and features it has.It can stretch from months for simple applications to much longer for complex apps with advanced features. We provide a detailed timeline after understanding your specific requirements.`}
        q6={"Do you offer App Marketing or App Promotion service?"}
        q6a={`Yes, besides the focus in the app development process, we will give a guide with somerecommendations about the app marketing and promotion strategies. For the full marketing service, we will have another team which deals specifically with app marketing`}
        q7={"How do I get started with Silverspace Mobile App Development?"}
        q7a={`To get started, just contact us through our website or through the contacts given below. We will set up a first meeting to introduce ourselves to you and your project, elaborate on the development process, and produce a proposal specific to your needs.`}
      />
    </section>
  );
};

export default Mobile;

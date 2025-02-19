import React from "react";
import Section1 from "../Pages/Components/firstComponent/Section1";
import Section3 from "../Pages/Components/firstComponent/Section3";
import Section4 from "../Pages/Components/firstComponent/Section4";
import CardPages from "../Pages/Components/Card/CardPages";

const AIML = () => {
  return (
    <>
      <section>
        <Section1
          title={"Top AI & ML Development Experts"}
          bgImg={
            "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg"
          }
          titleDescription={`Revolutionize Your Operations with Leading Artificial Intelligence and Machine Learning Services in USA and Middle East : Leverage AI and ML solutions to stay ahead of the competition and innovate.`}
        />

        <div class="container-fluid py-4  s2-bg">
          <div class="row py-4 justify-content-center">
            <div class="col-12   text-center">
              <p class="m-0 fs-2  fw-bold text-color">
                AI and ML Next-Gen Services
              </p>
            </div>
          </div>
          <div class="row justify-content-center py-4 ">
            <CardPages
              title={"Custom AI Solutions"}
              cardPara={`Tailored AI systems in line with your unique business necessities for driving efficiency.`}
              img={"Custom-Ai.svg"}
            />
            <CardPages
              title={"Machine Learning Models"}
              cardPara={`Designing and implementing machine learning models, to achieve better predictive analytics in decision-making`}
              img={"Machin-learning.svg"}
            />
            <CardPages
              title={"Data Analytics & Insights"}
              cardPara={`Deep analysis of advanced data for finding workable insights and thus optimizing operations`}
              img={"Data-Analytics.svg"}
            />
            <CardPages
              title={"Natural Language Processing (NLP)"}
              cardPara={`Understanding and generating human language to make customer interactions better`}
              img={"Natural-Language-Processing.svg"}
            />
            <CardPages
              title={"Computer Vision"}
              cardPara={`Technologies to facilitate the automation of tasks and improvement in visual data interpretations in images and videos`}
              img={"Computer-vision.svg"}
            />
            <CardPages
              title={"AI Integration"}
              cardPara={`
AI and ML are naturally integrated into all existing software and systems, ensuring improved performance and functionality`}
              img={"Ai-Integration.svg"}
            />
            <CardPages
              title={"Predictive Maintenance"}
              cardPara={`
Use ML-based solutions for the prediction and prevention of equipment failures, thereby reducing downtime and cost savings`}
              img={"Data-base (1).svg"}
            />
            <CardPages
              title={"Personalization Engines"}
              cardPara={`
AI personalization systems to enhance the experience and satisfaction of user engagement`}
              img={"Personalization-engines.svg"}
            />
          </div>
        </div>
        <Section3
          cardTitle1={"Predictive Inventory Management System for Retail"}
          cardTitle2={"Salesforce Upgrade Cloud Web App Case Study"}
          cardTitle3={"Taxi Booking Case Study"}
        />

        <Section4
          q1={"What is the timeframe I will get job opportunities?"}
          q1a={
            "We work with various types of job opportunities, including W2, C2C, and full-time positions. A full-time job typically means 40 hours per week, and we strive to find opportunities for you as quickly as possible."
          }
          q2={"How can we get started?"}
          q2a={`You can speak with one of our career experts right away, select the plan that best meets your needs, and we will get you started as quickly as possible.`}
          q3={"What if I just have a quick question?"}
          q3a={`You can schedule a free initial consultation, which includes phone call for up to one hour. We will answer the most popular questions about our services and help provide a solution or a resource to assist you.`}
          q4={"Do you offer job placement for specific IT roles?"}
          q4a={`Yes, we specialize in various IT roles, including software development, system administration, network engineering, data analysis, and more.`}
          q5={"What are the benefits of your training programs?"}
          q5a={`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast`}
          q6={"How do you match candidates with employers?"}
          q6a={`We use a thorough screening process to match candidates' skills and experiences with employers' needs. This includes resume reviews, interviews, and skills assessments.`}
          q7={"What types of companies do you work with?"}
          q7a={`We work with a diverse range of companies, from startups to large enterprises, across various industries looking for IT talent.`}
        />
      </section>
    </>
  );
};

export default AIML;

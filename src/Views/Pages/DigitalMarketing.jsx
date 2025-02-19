import React from "react";
import Section1 from "../Pages/Components/firstComponent/Section1";
import Section3 from "../Pages/Components/firstComponent/Section3";
import Section4 from "../Pages/Components/firstComponent/Section4";
import CardPages from "../Pages/Components/Card/CardPages";
import Section5 from "./Home/Section5";

const DigitalMarketing = () => {
  return (
    <>
      <section>
        <Section1
          title={"Premier Digital Marketing Services Agency"}
          bgImg={
            "Digital-Marketing.jpg"
          }
          titleDescription={`Unlock your operational growth by abiding with tech-enabled digital marketing services that bring state-of-the-art technology, innovative marketing practices, and a data-driven approach together in an integrated way. Spark recognition through our top digital marketing services in USA and Middle East.`}
        />

        <div class="container-fluid py-4  s2-bg">
          <div class="row py-4 justify-content-center">
            <div class="col-12   text-center">
              <p class="m-0 fs-2  fw-bold text-color">
                Digital Marketing Services
              </p>
            </div>
          </div>
          <div class="row justify-content-center py-4 ">
            <CardPages
              title={"Search Engine Optimization (SEO)"}
              cardPara={`Get your website to the top page of search engines to drive more organic traffic and boost your online presence`}
              img={"Search Engine Optimization (SEO).svg"}
            />
            <CardPages
              title={"Pay Per Click Advertising (PPC)"}
              cardPara={`Run Paid Ads on Google Ads and Social Media: Attract relevant traffic to your website for fast and measurable results.`}
              img={"Pay Per Click Advertising (PPC).svg"}
            />
            <CardPages
              title={"Content Marketing"}
              cardPara={`Generate and distribute valuable content to be useful to your target audience to create brand identity and perceived value.`}
              img={"Content Marketing.svg"}
            />
            <CardPages
              title={"Social Media Marketing"}
              cardPara={`Reach the audience straightaway; engage with them; build a brand with social media through running targeted campaigns that drive traffic and sales.`}
              img={"Social Media Marketing.svg"}
            />
            <CardPages
              title={"Email Marketing"}
              cardPara={`Send emails that are to be sent to the targeted audience, so that all your email campaigns become more personalized in nature, increasing engagement, nurturing leads, and converting prospects into customers.`}
              img={"email-marketing.svg"}
            />
            <CardPages
              title={"Conversion Rate Optimization (CRO)"}
              cardPara={`Improve user experience and increase the percentage of visitors who undertake desired actions on your website.`}
              img={"Conversion Rate Optimization (CRO).svg"}
            />
            <CardPages
              title={"Influencer Marketing"}
              cardPara={`Partnership with influencers for promoting a brand, products, or services can increase your reach and prestige.`}
              img={"Influencer Marketing.svg"}
            />
            <CardPages
              title={"Video Marketing"}
              cardPara={`Think of creating attractive video content that would really capture the attention of your audience and effectively convey information to drive higher engagement rates`}
              img={"video marketing.svg"}
            />
            <CardPages
              title={"Affiliate Marketing"}
              cardPara={`Partner with affiliates who would market your products or services in return for a commission on the sales/lead generated.`}
              img={"digital-marketing.svg"}
            />
          </div>
        </div>
        <Section3
          cardTitle1={"Crypto Real Estate Web Application Case Study"}
          cardTitle2={"Salesforce Upgrade Cloud Web App Case Study"}
          cardTitle3={"Taxi Booking Case Study"}
        />

        <Section4
          q1={"What Digital Marketing services does Onyx Consultancy Services Inc offer?"}
          q1a={`Onyx Consultancy Services Inc offers a full cycle of professional digital marketing services that span from Search Engine Optimization to paid advertisement services such as Google Ads and social media ads, culminating in social media marketing.`}
          q2={"What is SEO and why should I employ it for my business?"}
          q2a={`SEO (Search Engine Optimization) is the practice of designing your content and website to rank better in search engine results. Proper use of keywords and creating informative content helps enhance content quality, boosting your search ranking. This assists in directing natural traffic to your website, allowing more views on your business and attracting potential customers from search engines.`}
          q3={"What are paid ads, and how can they benefit my business?"}
          q3a={`Paid advertising, from Google Ads to social media ads, offers the capacity for audience targeting. These paid ads appear at the top tiers of search engines or on social media
platforms to attract targeted traffic to your website. The advantage of these advertisements is instant visibility and higher conversion probability due to demographic targeting.`}
          q4={"How would I know if the digital marketing strategies work?"}
          q4a={`We provide detailed reporting and analytics for quantifiable results. You will receive weekly updates on all KPIs related to traffic, conversion rates, and ad performance. This
information lets us measure the effectiveness of our strategies and keeps you informed about the state of your digital marketing efforts.`}
          q5={"Can Onyx Consultancy Services Inc manage my social media?"}
          q5a={`Yes, we do. Our social media marketing package includes complete management of your social media accounts, creating engaging content for maximum user interaction, and
running targeted ad campaigns to boost brand awareness and increase engagement on platforms like Facebook, Instagram, Linkedin, Pinterest and X also.`}
          q6={
            "How do I get started with Silverspace’s digital marketing services?"
          }
          q6a={`Enterprise mobility refers to the use of mobile technologies and solutions to enhance business operations. It enables employees to access information and collaborate from anywhere, improving productivity and flexibility. In today’s fast-paced environment, enterprise mobility is crucial for staying competitive and responsive.`}
          q7={"How can I get started with Onyx Consultancy Services Inc?"}
          q7a={`To get started, simply contact us through our website or give us a call. We’ll schedule a consultation to understand your business goals and discuss how our digital marketing
strategies can help you achieve them. From there, we’ll create a customized plan tailored to your needs.`}
        />
      </section>

      
      <Section5 />
    </>
  );
};

export default DigitalMarketing;

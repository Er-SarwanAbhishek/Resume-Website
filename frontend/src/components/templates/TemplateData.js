import Blue_and_White_Clean_and_Professional_Resume from "./Blue White Clean and Professional Resume Template/Blue_and_White_Clean_and_Professional_Resume";
import Elegant_Resume_Template from "./Elegant Resume Template/Elegant_Resume_Template";
import BeigeTemplate from "./beige template/BeigeTemplate";

import HMATSTamplate from "./HMATSTamplate/HMATSTamplate";

import BlueModernTemplate from "./Blue Modern Template/BlueModernTemplate";

import { GrayThemeTemplate } from "./Gray Theme Template/GrayThemeTemplate";

import { FThemeTemplate } from "./F Theme Template/FThemeTemplate";

import Border_Chain_Resume from "./Border Chain Resume/Border_Chain_Resume";

import Entry_Level_Tech_Professional_Resume from "./Entry Level Tech Professional Resume/Entry_Level_Tech_Professional_Resume";

import { NuevaTemplate } from "./Nueva Template/NuevaTemplate";
import { SalesAchieverResume } from "./Sales Achiever Resume/SalesAchieverResume";

import Modern_Curriculum_Resume_Templates from "./Modern Curriculum Resume Template/Modern_Curriculum_Resume_Templates";
import Three_Side_Border_Resume from "./Three Side Border Resume/Three_Side_Border_Resume";

import Yellow_Theme__Template from "./Yellow Theme Template/Yellow_Theme__Template";
import Pattern_Style_Resume from "./Pattern Style Resume/Pattern_Style_Resume";
import Unique_Style_Resume from "./Unique Style Resume/Unique_Style_Resume";
import Box_Style_Resume from "./Box Style Resume/Box_Style_Resume";
import Ppvp_resume_temp from "./Ppvp Resume Template/Ppvp_resume_temp";

import Creative_Image_Resume_Template from "./Creative Image Resume Template/Creative_Image_Resume_Template";
import Simple_Professional_Template from "./Simple Professional Template/Simple_Professional_Template";
import Colorfull_Resume_Template from "./Colorfull Resume Template/Colorfull_Resume_Template";
import Blue_Creative_Modern_Resume from "./Blue Creative Modern Resume/Blue_Creative_Modern_Resume";
import ATS_Friendly_Resume from "./ATS Friendly Resume/ATS_Friendly_Resume";
import Applicant_Tracking_Resume_Template from "./Applicant Tracking Resume Template/Applicant_Tracking_Resume_Template";
import Professional_ATS_Resume from "./Professional ATS Resume/Professional_ATS_Resume";
import Career_Changer_Resume from "./Career Changer Resume/Career_Changer_Resume";
import After_Border_Resume_Template from "./After_Border_Resume_Template/After_Border_Resume_Template";
import White_Background_Resume_Template from "./White Background Resume Template/White_Background_Resume_Template";
import Professional_Web_Developer_Resume from "./Professional Web Developer Resume/Professional_Web_Developer_Resume";
import Hundred_Percent_Professional_Template from "./Hundred Percent Professional Template/Hundred_Percent_Professional_Template";
import Brown_Minimalist_Creative_Template from "./Brown Minimalist Creative Template/Brown_Minimalist_Creative_Template";
import Heading_Border_Resume_Template from "./Heading Border Resume Template/Heading_Border_Resume_Template";
import Blue_Header_Resume_Template from "./Blue Header Resume Template/Blue_Header_Resume_Template";
import Blue_ATS_Proof_Template from "./Blue ATS Proof Template/Blue_ATS_Proof_Template";
import Big_image_Typography_Template from "./Big image Typography Template/Big_image_Typography_Template";

export const TemplateData = [
  // PROFESSIONAL WEB DEVELOPER RESUME TEMPLATE
  {
    id: "PROWEDERETE",
    templateName: "Professional Web Developer Resume Template",
    element: Professional_Web_Developer_Resume,
    headingTextFont: "Roboto Slab",
    bodyTextFont: "inter",
    headingTextColor: "#000",
    themeColor: "#d9d9d9",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "modern",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Data Analyst",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "PROWEDERETE:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Detail-oriented Data Analyst with [X] years of experience in interpreting complex data sets and providing actionable insights that drive business decisions and improve efficiency.</p>",
      },
      {
        sectionId: "PROWEDERETE:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact",
        list: [
          {
            listId: "PROWEDERETE:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "snehasharma@gmail.com",
            additionalLink: "",
          },
          {
            listId: "PROWEDERETE:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-9865896589",
            additionalLink: "",
          },
          {
            listId: "PROWEDERETE:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "PROWEDERETE:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "PROWEDERETE:PROJECTS:1",
            projectName: "Sales Data Analysis",
            startDate: "June, 2021",
            endDate: "August, 2022",
            aboutProject:
              "<p>Conducted a comprehensive analysis of sales data to identify trends, resulting in actionable recommendations that increased sales by 20%.</p>",
          },
          {
            listId: "PROWEDERETE:PROJECTS:2",
            projectName: "Customer Segmentation Analysis",
            startDate: "Sep, 2020",
            endDate: "sep, 2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments, enabling targeted marketing strategies that improved conversion rates.</p>",
          },
          {
            listId: "PROWEDERETE:PROJECTS:3",
            projectName: "Churn Prediction Model",
            startDate: "June, 2022",
            endDate: "July, 2023",
            aboutProject:
              "<p>Developed a predictive model using logistic regression to identify potential churn customers, allowing the marketing team to implement retention strategies that reduced churn by 15%.</p>",
          },

        ],
      },
      {
        sectionId: "PROWEDERETE:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "PROWEDERETE:SKILLS:1",
            skillName: "Data Visualization (Tableau, Power BI)",
          },
          {
            listId: "PROWEDERETE:SKILLS:2",
            skillName: "SQL",
          },
          {
            listId: "PROWEDERETE:SKILLS:3",
            skillName: "Python (Pandas, NumPy)",
          },
          {
            listId: "PROWEDERETE:SKILLS:4",
            skillName: "Excel (Advanced)",
          },
          {
            listId: "PROWEDERETE:SKILLS:5",
            skillName: "Statistical Analysis",
          },
        ],
      },
      {
        sectionId: "PROWEDERETE:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "PROWEDERETE:JOB-EXP:1",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Analyst",
            startDate: "April, 2019",
            endDate: "June, 2023",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]% and enhanced decision-making processes.</p>",
          },
          {
            listId: "PROWEDERETE:JOB-EXP:2",
            companyName: "Data Insights Co.",
            jobRole: "Junior Data Analyst",
            startDate: "Sep, 2018",
            endDate: "Dec, 2019",
            aboutJob:
              "<p>Assisted in data collection and preparation, and performed preliminary analysis to support senior analysts in generating reports for client projects.</p>",
          },
        ],
      },
      {
        sectionId: "PROWEDERETE:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "PROWEDERETE:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Master in Computer Application",
            startDate: "Aug, 2017",
            endDate: "Sep, 2020",
            aboutEducation:
              "<p>Covers machine learning, predictive analytics, and big data technologies, providing hands-on experience with data analysis tools.</p>",
          },
          {
            listId: "PROWEDERETE:EDUCATION:2",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "Jan, 2017",
            endDate: "Feb, 2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, data mining, statistical analysis, and data visualization techniques.</p>",
          },
        ],
      },
      {
        sectionId: "PROWEDERETE:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Language",
        list: [
          {
            listId: "PROWEDERETE:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100
          },
          {
            listId: "PROWEDERETE:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100
          },
        ]
      },
      {
        sectionId: "PROWEDERETE:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interest",
        list: [
          {
            listId: "PROWEDERETE:INTEREST:1",
            interest: "Gaming"
          },
          {
            listId: "PROWEDERETE:INTEREST:2",
            interest: "Movies"
          },
          {
            listId: "PROWEDERETE:INTEREST:3",
            interest: "Reading"
          },
          {
            listId: "PROWEDERETE:INTEREST:4",
            interest: "Travelling"
          },
        ]
      },
      {
        sectionId: "PROWEDERETE:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certification",
        list: [
          {
            listId: "PROWEDERETE:CERTIFICATION:1",
            certificateName: "Data Analytics Professional Certificate",
            instituteName: "Coursera",
            startDate: "Jan, 2023",
            endDate: "Mar, 2023",
            aboutCertificate:
              "<p>Completed a comprehensive program focusing on data analysis techniques, data visualization, and statistical analysis using Python and SQL.</p>"
          },
          {
            listId: "PROWEDERETE:CERTIFICATION:2",
            certificateName: "Google Data Analytics Professional Certificate",
            instituteName: "Google",
            startDate: "June, 2023",
            endDate: "Dec, 2023",
            aboutCertificate:
              "<p>Learned foundational data analytics skills, including data cleaning, analysis, and visualization, with practical projects using real-world data.</p>"
          }
        ]
      }
    ]

  },

  // HUNDRED PERCENT PROFESSIONAL TEMPLATE
  {
    id: "HUPERPRTE",
    templateName: "Hundred Percent Professional Template",
    element: Hundred_Percent_Professional_Template,
    headingTextFont: "Roboto Slab",
    bodyTextFont: "inter",
    headingTextColor: "#000",
    themeColor: "#DFD7D3",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "modern",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Business Analyst",
    subCategory: "businessAnalytics",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "HUPERPRTE:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Results-driven Business Development Executive with [X] years of experience in driving revenue growth, building client relationships, and developing strategic partnerships. Proven track record of identifying market opportunities and achieving sales targets.</p>",
      },
      {
        sectionId: "HUPERPRTE:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact",
        list: [
          {
            listId: "HUPERPRTE:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "snehasharma@gmail.com",
            additionalLink: "",
          },
          {
            listId: "HUPERPRTE:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "HUPERPRTE:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "HUPERPRTE:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "HUPERPRTE:PROJECTS:1",
            projectName: "Market Expansion Strategy",
            startDate: "Aug, 2021",
            endDate: "Sep, 2022",
            aboutProject:
              "<p>Developed and executed a comprehensive market expansion strategy that resulted in a 30% increase in client acquisition in untapped regions.</p>",
          },
          {
            listId: "HUPERPRTE:PROJECTS:2",
            projectName: "Client Relationship Management Program",
            startDate: "Jan, 2020",
            endDate: "Aug, 2021",
            aboutProject:
              "<p>Implemented a client relationship management program that enhanced client retention by 25% through personalized follow-ups and feedback collection.</p>",
          },
          {
            listId: "HUPERPRTE:PROJECTS:3",
            projectName: "Sales Process Optimization",
            startDate: "Sep, 2022",
            endDate: "June, 2023",
            aboutProject:
              "<p>Led a project to optimize the sales process, reducing the sales cycle time by 15% and increasing overall team productivity through training and streamlined procedures.</p>",
          }
        ],
      },
      {
        sectionId: "HUPERPRTE:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "HUPERPRTE:SKILLS:1",
            skillName: "Sales Strategy Development",
          },
          {
            listId: "HUPERPRTE:SKILLS:2",
            skillName: "Client Relationship Management",
          },
          {
            listId: "HUPERPRTE:SKILLS:3",
            skillName: "Market Research and Analysis",
          },
          {
            listId: "HUPERPRTE:SKILLS:4",
            skillName: "Negotiation and Persuasion",
          },
          {
            listId: "HUPERPRTE:SKILLS:5",
            skillName: "Communication and Presentation",
          },
        ],
      },
      {
        sectionId: "HUPERPRTE:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "HUPERPRTE:JOB-EXP:1",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Business Development Executive",
            startDate: "Oct, 2019",
            endDate: "Dec, 2023",
            aboutJob:
              "<p>Generated new business opportunities through networking and relationship building, resulting in a 40% increase in annual revenue.</p>",
          },
          {
            listId: "HUPERPRTE:JOB-EXP:2",
            companyName: "Innovate Corp.",
            jobRole: "Sales Executive",
            startDate: "Feb, 2018",
            endDate: "Aug, 2019",
            aboutJob:
              "<p>Assisted in developing sales strategies and conducting market research, contributing to a 15% growth in sales within the first year.</p>",
          },
        ],
      },
      {
        sectionId: "HUPERPRTE:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "HUPERPRTE:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Business Administration",
            startDate: "June, 2017",
            endDate: "July, 2020",
            aboutEducation:
              "<p>Relevant coursework included marketing principles, business strategy, consumer behavior, and sales management.</p>",
          },
          {
            listId: "HUPERPRTE:EDUCATION:2",
            collegeName: "Indian School of Business",
            course: "Executive Program in Business Management",
            startDate: "April, 2022",
            endDate: "July, 2023",
            aboutEducation:
              "<p>Focused on advanced business development strategies, leadership skills, and market analysis.</p>",
          },
        ],
      },
      {
        sectionId: "HUPERPRTE:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Language",
        list: [
          {
            listId: "HUPERPRTE:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100,
          },
          {
            listId: "HUPERPRTE:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100,
          },
        ],
      },
      {
        sectionId: "HUPERPRTE:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interest",
        list: [
          {
            listId: "HUPERPRTE:INTEREST:1",
            interest: "Networking",
          },
          {
            listId: "HUPERPRTE:INTEREST:2",
            interest: "Traveling",
          },
          {
            listId: "HUPERPRTE:INTEREST:3",
            interest: "Reading Business Literature",
          },
          {
            listId: "HUPERPRTE:INTEREST:4",
            interest: "Attending Industry Conferences",
          },
        ],
      },
      {
        sectionId: "HUPERPRTE:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certification",
        list: [
          {
            listId: "HUPERPRTE:CERTIFICATION:1",
            certificateName: "Certified Business Development Expert",
            instituteName: "International Business Management Institute",
            startDate: "March, 2023",
            endDate: "December, 2023",
            aboutCertificate:
              "<p>Gained comprehensive knowledge in business development strategies, client relationship management, and market analysis.</p>",
          },
          {
            listId: "HUPERPRTE:CERTIFICATION:2",
            certificateName: "Sales Management Certification",
            instituteName: "Coursera",
            startDate: "March, 2022",
            endDate: "July, 2022",
            aboutCertificate:
              "<p>Completed a professional certification focused on effective sales management techniques and strategies to enhance sales performance.</p>",
          },
        ],
      },
    ]

  },

  // BROWN MINIMALIST CREATIVE TEMPLATE
  {
    id: "BRMINCRTE",
    templateName: "Brown Minimalist Creative Template",
    element: Brown_Minimalist_Creative_Template,
    headingTextFont: "Roboto Slab",
    bodyTextFont: "inter",
    headingTextColor: "#000",
    themeColor: " #B29E84",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "creative",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Digital Marketing",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "BRMINCRTE:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Results-oriented Digital Marketing Specialist with [X] years of experience in developing and executing digital marketing strategies. Proven track record in SEO, PPC, content marketing, and social media management to drive online engagement and revenue growth.</p>",
      },
      {
        sectionId: "BRMINCRTE:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact",
        list: [
          {
            listId: "BRMINCRTE:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "snehasharma@gmail.com",
            additionalLink: "",
          },
          {
            listId: "BRMINCRTE:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "BRMINCRTE:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "BRMINCRTE:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "BRMINCRTE:PROJECTS:1",
            projectName: "SEO Optimization for E-commerce Site",
            startDate: "Jan, 2021",
            endDate: "Feb, 2022",
            aboutProject:
              "<p>Implemented an SEO strategy that increased organic traffic by 50% within six months, leading to a 25% boost in online sales.</p>",
          },
          {
            listId: "BRMINCRTE:PROJECTS:2",
            projectName: "Social Media Campaign for Product Launch",
            startDate: "Sep, 2022",
            endDate: "July, 2023",
            aboutProject:
              "<p>Developed and executed a social media campaign that reached over 200,000 users and generated a 15% increase in product awareness.</p>",
          },
        ],
      },
      {
        sectionId: "BRMINCRTE:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "BRMINCRTE:SKILLS:1",
            skillName: "Search Engine Optimization (SEO)",
          },
          {
            listId: "BRMINCRTE:SKILLS:2",
            skillName: "Pay-Per-Click Advertising (PPC)",
          },
          {
            listId: "BRMINCRTE:SKILLS:3",
            skillName: "Content Marketing",
          },
          {
            listId: "BRMINCRTE:SKILLS:4",
            skillName: "Social Media Management",
          },
          {
            listId: "BRMINCRTE:SKILLS:5",
            skillName: "Email Marketing",
          },
        ],
      },
      {
        sectionId: "BRMINCRTE:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "BRMINCRTE:JOB-EXP:1",
            companyName: "Digital Marketing Agency",
            jobRole: "Digital Marketing Specialist",
            startDate: "Aug, 2020",
            endDate: "Aug, 2023",
            aboutJob:
              "<p>Developed and managed digital marketing campaigns across various platforms, resulting in a 30% increase in client engagement and a 20% growth in lead generation.</p>",
          },
          {
            listId: "BRMINCRTE:JOB-EXP:2",
            companyName: "XYZ Corp.",
            jobRole: "Marketing Intern",
            startDate: "June, 2019",
            endDate: "July, 2020",
            aboutJob:
              "<p>Assisted in creating content for social media and email campaigns, helping to boost audience interaction by 25% during my tenure.</p>",
          },
        ],
      },
      {
        sectionId: "BRMINCRTE:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "BRMINCRTE:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Business Administration in Marketing",
            startDate: "Mar, 2017",
            endDate: "April, 2020",
            aboutEducation:
              "<p>Relevant coursework included digital marketing, consumer behavior, marketing research, and branding.</p>",
          },
          {
            listId: "BRMINCRTE:EDUCATION:2",
            collegeName: "Indian School of Business",
            course: "Certificate in Digital Marketing",
            startDate: "June, 2021",
            endDate: "June, 2021",
            aboutEducation:
              "<p>Focused on digital marketing strategies, analytics, and campaign management.</p>",
          },
        ],
      },
      {
        sectionId: "BRMINCRTE:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Language",
        list: [
          {
            listId: "BRMINCRTE:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100,
          },
          {
            listId: "BRMINCRTE:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100,
          },
        ],
      },
      {
        sectionId: "BRMINCRTE:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interest",
        list: [
          {
            listId: "BRMINCRTE:INTEREST:1",
            interest: "Digital Marketing Trends",
          },
          {
            listId: "BRMINCRTE:INTEREST:2",
            interest: "Content Creation",
          },
          {
            listId: "BRMINCRTE:INTEREST:3",
            interest: "Data Analytics",
          },
          {
            listId: "BRMINCRTE:INTEREST:4",
            interest: "Traveling",
          },
        ],
      },
      {
        sectionId: "BRMINCRTE:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certification",
        list: [
          {
            listId: "BRMINCRTE:CERTIFICATION:1",
            certificateName: "Google Analytics Certification",
            instituteName: "Google",
            startDate: "June, 2022",
            endDate: "Aug, 2022",
            aboutCertificate:
              "<p>Gained proficiency in using Google Analytics to measure and analyze web traffic and performance.</p>",
          },
          {
            listId: "BRMINCRTE:CERTIFICATION:2",
            certificateName: "Facebook Blueprint Certification",
            instituteName: "Facebook",
            startDate: "Sep, 2021",
            endDate: "Dec, 2021",
            aboutCertificate:
              "<p>Learned best practices for advertising on Facebook and Instagram, including ad creation and targeting strategies.</p>",
          },
        ],
      },
    ]

  },

  //HEADING BORDER RESUME TEMPLATE
  {
    id: "HEBORETEM",
    templateName: "Heading Border Resume Template",
    element: Heading_Border_Resume_Template,
    headingTextFont: "Roboto Slab",
    bodyTextFont: "Inter",
    headingTextColor: "#000",
    themeColor: "#f6ebcf",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "minimal",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Web developer",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    "AllSections": [
    {
      "sectionId": "HEBORETEM:SUMMARY",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Summary",
      "summary": "<p>Detail-oriented Web Developer with [X] years of experience in creating dynamic and responsive websites. Proficient in HTML, CSS, JavaScript, and frameworks like React and Angular. Passionate about building user-centric web applications and continuously improving skills through learning and collaboration.</p>"
    },
    {
      "sectionId": "HEBORETEM:CONTACT",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionVisible": true,
      "sectionName": "Contact",
      "list": [
        {
          "listId": "HEBORETEM:CONTACT:1",
          "iconName": "fa-solid fa-envelope",
          "contactName": "sneha.sharma@email.com",
          "additionalLink": ""
        },
        {
          "listId": "HEBORETEM:CONTACT:2",
          "iconName": "fa-solid fa-phone-flip",
          "contactName": "+91-XXXXXXXXXX",
          "additionalLink": ""
        },
        {
          "listId": "HEBORETEM:CONTACT:3",
          "iconName": "fa-solid fa-location-dot",
          "contactName": "123 Main Street, Maharashtra, India",
          "additionalLink": ""
        }
      ]
    },
    {
      "sectionId": "HEBORETEM:PROJECTS",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Projects",
      "list": [
        {
          "listId": "HEBORETEM:PROJECTS:1",
          "projectName": "E-commerce Website Development",
          "startDate": "Jan, 2022",
          "endDate": "Mar, 2023",
          "aboutProject": "<p>Developed a fully functional e-commerce website using React and Node.js, implementing features like product filtering, user authentication, and a shopping cart.</p>"
        },
        {
          "listId": "HEBORETEM:PROJECTS:2",
          "projectName": "Portfolio Website",
          "startDate": "March, 2021",
          "endDate": "June, 2022",
          "aboutProject": "<p>Designed and developed a personal portfolio website to showcase projects and skills, utilizing HTML, CSS, and JavaScript for responsive design.</p>"
        }
      ]
    },
    {
      "sectionId": "HEBORETEM:SKILLS",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Skills",
      "list": [
        {
          "listId": "HEBORETEM:SKILLS:1",
          "skillName": "HTML"
        },
        {
          "listId": "HEBORETEM:SKILLS:2",
          "skillName": "CSS"
        },
        {
          "listId": "HEBORETEM:SKILLS:3",
          "skillName": "JavaScript"
        },
        {
          "listId": "HEBORETEM:SKILLS:4",
          "skillName": "React"
        },
        {
          "listId": "HEBORETEM:SKILLS:5",
          "skillName": "Node.js"
        },
        {
          "listId": "HEBORETEM:SKILLS:6",
          "skillName": "Responsive Design"
        },
        {
          "listId": "HEBORETEM:SKILLS:7",
          "skillName": "Version Control (Git)"
        }
      ]
    },
    {
      "sectionId": "HEBORETEM:JOB-EXP",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Job Experience",
      "list": [
        {
          "listId": "HEBORETEM:JOB-EXP:1",
          "companyName": "Web Solutions Pvt. Ltd.",
          "jobRole": "Web Developer",
          "startDate": "Jan, 2021",
          "endDate": "Present",
          "aboutJob": "<p>Developing and maintaining dynamic websites and web applications, collaborating with designers to create user-friendly interfaces, and ensuring optimal performance across devices.</p>"
        },
        {
          "listId": "HEBORETEM:JOB-EXP:2",
          "companyName": "Freelancer",
          "jobRole": "Web Developer",
          "startDate": "June, 2020",
          "endDate": "May, 2021",
          "aboutJob": "<p>Worked with various clients to design and develop custom websites, focusing on meeting specific needs and ensuring timely project delivery.</p>"
        }
      ]
    },
    {
      "sectionId": "HEBORETEM:EDUCATION",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Education",
      "list": [
        {
          "listId": "HEBORETEM:EDUCATION:1",
          "collegeName": "Mumbai University",
          "course": "Bachelor of Technology in Computer Science",
          "startDate": "June, 2017",
          "endDate": "Sep, 2020",
          "aboutEducation": "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>"
        },
        {
          "listId": "HEBORETEM:EDUCATION:2",
          "collegeName": "Mumbai University",
          "course": "Master of Science in Information Technology",
          "startDate": "Aug, 2021",
          "endDate": "Oct, 2023",
          "aboutEducation": "<p>Focused on advanced web technologies, UX design, and project management, with hands-on experience in developing web applications.</p>"
        },
        {
          "listId": "HEBORETEM:EDUCATION:3",
          "collegeName": "Tech Academy",
          "course": "Diploma in Web Development",
          "startDate": "Jan, 2023",
          "endDate": "Jan, 2024",
          "aboutEducation": "<p>Studied modern web development practices, including responsive design, JavaScript frameworks, and back-end integration.</p>"
        }
      ]
    },
    {
      "sectionId": "HEBORETEM:LANGUAGE",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Languages",
      "list": [
        {
          "listId": "HEBORETEM:LANGUAGE:1",
          "languageName": "Hindi",
          "languageProfiency": 100
        },
        {
          "listId": "HEBORETEM:LANGUAGE:2",
          "languageName": "English",
          "languageProfiency": 100
        }
      ]
    },
    {
      "sectionId": "HEBORETEM:INTEREST",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Interests",
      "list": [
        {
          "listId": "HEBORETEM:INTEREST:1",
          "interest": "Coding and Programming Challenges"
        },
        {
          "listId": "HEBORETEM:INTEREST:2",
          "interest": "Web Design Trends"
        },
        {
          "listId": "HEBORETEM:INTEREST:3",
          "interest": "Open Source Contribution"
        },
        {
          "listId": "HEBORETEM:INTEREST:4",
          "interest": "Tech Meetups and Networking"
        },
        {
          "listId": "HEBORETEM:INTEREST:5",
          "interest": "Reading Tech Blogs and Tutorials"
        }
      ]
    },
    {
      "sectionId": "HEBORETEM:CERTIFICATION",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Certifications",
      "list": [
        {
          "listId": "HEBORETEM:CERTIFICATION",
          "certificateName": "Web Development Bootcamp",
          "instituteName": "Tech Academy",
          "startDate": "Jan, 2024",
          "endDate": "June, 2024",
          "aboutCertificate": "<p>Completed a comprehensive web development bootcamp focusing on full-stack development using HTML, CSS, JavaScript, and modern frameworks.</p>"
        }
      ]
    }
  ]
  },

  //BLUE HEADER RESUME TEMPLATE
  {
    id: "BLHERETEM",
    templateName: "Blue Header Resume Template",
    element: Blue_Header_Resume_Template,
    headingTextFont: "Roboto Slab",
    bodyTextFont: "Rubik",
    headingTextColor: "#000",
    themeColor: "#E4F2FD",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "minimal",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Web Developer",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    "AllSections": [
    {
      "sectionId": "BLHERETEM:SUMMARY",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Summary",
      "summary": "<p>Results-driven Web Developer with over [X] years of experience in creating dynamic and interactive web applications. Proficient in modern front-end technologies and frameworks including React, Vue.js, and Angular, along with back-end development using Node.js and Express. Committed to delivering high-quality code and an exceptional user experience.</p>"
    },
    {
      "sectionId": "BLHERETEM:CONTACT",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionVisible": true,
      "sectionName": "Contact",
      "list": [
        {
          "listId": "BLHERETEM:CONTACT:1",
          "iconName": "fa-solid fa-envelope",
          "contactName": "sneha.sharma@email.com",
          "additionalLink": ""
        },
        {
          "listId": "BLHERETEM:CONTACT:2",
          "iconName": "fa-solid fa-phone",
          "contactName": "+91-XXXXXXXXXX",
          "additionalLink": ""
        },
        {
          "listId": "BLHERETEM:CONTACT:3",
          "iconName": "fa-solid fa-location-dot",
          "contactName": "456 Elm Street, Maharashtra, India",
          "additionalLink": ""
        }
      ]
    },
    {
      "sectionId": "BLHERETEM:PROJECTS",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Projects",
      "list": [
        {
          "listId": "BLHERETEM:PROJECTS:1",
          "projectName": "Blog Management System",
          "startDate": "Jan, 2023",
          "endDate": "Mar, 2024",
          "aboutProject": "<p>Developed a comprehensive blog management system using Vue.js for the front end and Node.js for the back end, featuring user authentication, CRUD operations, and SEO optimization.</p>"
        },
        {
          "listId": "BLHERETEM:PROJECTS:2",
          "projectName": "Portfolio Website",
          "startDate": "Dec, 2022",
          "endDate": "Feb, 2023",
          "aboutProject": "<p>Created a responsive portfolio website using HTML, CSS, and Bootstrap to showcase my web development projects and skills, emphasizing mobile-first design principles.</p>"
        }
      ]
    },
    {
      "sectionId": "BLHERETEM:SKILLS",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Skills",
      "list": [
        {
          "listId": "BLHERETEM:SKILLS:1",
          "skillName": "HTML5"
        },
        {
          "listId": "BLHERETEM:SKILLS:2",
          "skillName": "CSS3"
        },
        {
          "listId": "BLHERETEM:SKILLS:3",
          "skillName": "JavaScript"
        },
        {
          "listId": "BLHERETEM:SKILLS:4",
          "skillName": "React"
        },
        {
          "listId": "BLHERETEM:SKILLS:5",
          "skillName": "Node.js"
        },
        {
          "listId": "BLHERETEM:SKILLS:6",
          "skillName": "RESTful APIs"
        },
        {
          "listId": "BLHERETEM:SKILLS:7",
          "skillName": "Git & GitHub"
        },
        {
          "listId": "BLHERETEM:SKILLS:8",
          "skillName": "Agile Methodologies"
        }
      ]
    },
    {
      "sectionId": "BLHERETEM:JOB-EXP",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Job Experience",
      "list": [
        {
          "listId": "BLHERETEM:JOB-EXP:1",
          "companyName": "Web Innovations Inc.",
          "jobRole": "Full Stack Developer",
          "startDate": " Jan, 2021",
          "endDate": "Present",
          "aboutJob": "<p>Designing and developing scalable web applications, implementing new features, and optimizing application performance. Collaborating with designers to improve usability and accessibility.</p>"
        },
        {
          "listId": "BLHERETEM:JOB-EXP:2",
          "companyName": "Creative Solutions Co.",
          "jobRole": "Junior Web Developer",
          "startDate": "July, 2020",
          "endDate": "Feb, 2021",
          "aboutJob": "<p>Assisted in the development of client websites, focusing on responsive design and user experience. Collaborated with the team on code reviews and debugging.</p>"
        }
      ]
    },
    {
      "sectionId": "BLHERETEM:EDUCATION",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Education",
      "list": [
        {
          "listId": "BLHERETEM:EDUCATION:1",
          "collegeName": "Mumbai University",
          "course": "Bachelor of Technology in Computer Science",
          "startDate": "Aug, 2017",
          "endDate": "Oct, 2020",
          "aboutEducation": "<p>Studied core subjects in computer science including web technologies, software engineering, and database systems. Completed projects in front-end and back-end development.</p>"
        },
        {
          "listId": "BLHERETEM:EDUCATION:2",
          "collegeName": "Abdul kalam Technical University ",
          "course": "Master of Business Adminstration",
          "startDate": "Mar, 2021",
          "endDate": " April, 2022",
          "aboutEducation": "<p>Gained hands-on experience in HTML, CSS, JavaScript, and frameworks like React and Node.js through project-based learning and collaborative coding.</p>"
        }
      ]
    },
    {
      "sectionId": "BLHERETEM:LANGUAGE",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Languages",
      "list": [
        {
          "listId": "BLHERETEM:LANGUAGE:1",
          "languageName": "Hindi",
          "languageProfiency": 100
        },
        {
          "listId": "BLHERETEM:LANGUAGE:2",
          "languageName": "English",
          "languageProfiency": 100
        }
      ]
    },
    {
      "sectionId": "BLHERETEM:INTEREST",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Interests",
      "list": [
        {
          "listId": "BLHERETEM:INTEREST:1",
          "interest": "Building Personal Projects"
        },
        {
          "listId": "BLHERETEM:INTEREST:2",
          "interest": "Exploring New Technologies"
        },
        {
          "listId": "BLHERETEM:INTEREST:3",
          "interest": "Participating in Hackathons"
        },
        {
          "listId": "BLHERETEM:INTEREST:4",
          "interest": "Web Accessibility Advocacy"
        }
      ]
    },
    {
      "sectionId": "BLHERETEM:CERTIFICATION",
      "isSection": true,
      "isSectionDetailsChanges": false,
      "sectionName": "Certifications",
      "list": [
        {
          "listId": "BLHERETEM:CERTIFICATION",
          "certificateName": "Certified JavaScript Developer",
          "instituteName": "Tech Academy",
          "startDate": "Jan, 2023",
          "endDate": "June, 2023",
          "aboutCertificate": "<p>Completed certification focused on JavaScript programming, covering both front-end and back-end development concepts and best practices.</p>"
        }
      ]
    }
  ]
  },

  //BLUE ATS PROOF TEMPLATE
  {
    id: "BLATSPRTE",
    templateName: "Blue ATS Proof Template",
    element: Blue_ATS_Proof_Template,
    headingTextFont: "Roboto Slab",
    bodyTextFont: "Rubik",
    headingTextColor: "#000",
    themeColor: "#E4F2FD",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "ats-friendly",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Software Developer",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "BLATSPRTE:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Results-driven Software Developer with [X] years of experience in designing, developing, and deploying scalable applications. Proficient in multiple programming languages and frameworks, with a strong focus on delivering high-quality software solutions.</p>",
      },
      {
        sectionId: "BLATSPRTE:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact",
        list: [
          {
            listId: "BLATSPRTE:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "snehasharma@gmail.com",
            additionalLink: "",
          },
          {
            listId: "BLATSPRTE:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "BLATSPRTE:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "BLATSPRTE:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "BLATSPRTE:PROJECTS:1",
            projectName: "E-Commerce Web Application",
            startDate: "June 2021",
            endDate: "August 2021",
            aboutProject:
              "<p>Developed a fully functional e-commerce web application using React and Node.js, enabling users to browse products, manage their cart, and complete purchases.</p>",
          },
          {
            listId: "BLATSPRTE:PROJECTS:2",
            projectName: "Social Media Dashboard",
            startDate: "September 2021",
            endDate: "November 2021",
            aboutProject:
              "<p>Created a social media dashboard using Angular and Firebase for real-time data synchronization, allowing users to track and manage multiple social media accounts.</p>",
          },
        ],
      },
      {
        sectionId: "BLATSPRTE:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "BLATSPRTE:SKILLS:1",
            skillName: "JavaScript",
          },
          {
            listId: "BLATSPRTE:SKILLS:2",
            skillName: "React",
          },
          {
            listId: "BLATSPRTE:SKILLS:3",
            skillName: "Node.js",
          },
          {
            listId: "BLATSPRTE:SKILLS:4",
            skillName: "SQL",
          },
          {
            listId: "BLATSPRTE:SKILLS:5",
            skillName: "RESTful APIs",
          },
          {
            listId: "BLATSPRTE:SKILLS:6",
            skillName: "Git",
          },
        ],
      },
      {
        sectionId: "BLATSPRTE:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "BLATSPRTE:JOB-EXP:1",
            companyName: "Innovative Tech Solutions",
            jobRole: "Software Developer",
            startDate: "March 2021",
            endDate: "Present",
            aboutJob:
              "<p>Developing and maintaining web applications using JavaScript frameworks, collaborating with cross-functional teams to enhance functionality and user experience.</p>",
          },
          {
            listId: "BLATSPRTE:JOB-EXP:2",
            companyName: "Code Crafters Inc.",
            jobRole: "Junior Software Developer",
            startDate: "January 2020",
            endDate: "February 2021",
            aboutJob:
              "<p>Assisted in the development of web-based applications, wrote reusable code, and conducted debugging and troubleshooting for various projects.</p>",
          },
        ],
      },
      {
        sectionId: "BLATSPRTE:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "BLATSPRTE:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "August 2017",
            endDate: "May 2020",
            aboutEducation:
              "<p>Completed coursework in software engineering, database systems, algorithms, and web development, gaining a solid foundation in programming principles.</p>",
          },
        ],
      },
      {
        sectionId: "BLATSPRTE:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Languages",
        list: [
          {
            listId: "BLATSPRTE:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100,
          },
          {
            listId: "BLATSPRTE:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100,
          },
        ],
      },
      {
        sectionId: "BLATSPRTE:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interests",
        list: [
          {
            listId: "BLATSPRTE:INTEREST:1",
            interest: "Contributing to Open Source Projects",
          },
          {
            listId: "BLATSPRTE:INTEREST:2",
            interest: "Exploring New Technologies",
          },
          {
            listId: "BLATSPRTE:INTEREST:3",
            interest: "Learning New Programming Languages and Frameworks",
          },
          {
            listId: "BLATSPRTE:INTEREST:4",
            interest: "Participating in Coding Challenges and Competitions",
          },
        ],
      },
      {
        sectionId: "BLATSPRTE:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certifications",
        list: [
          {
            listId: "BLATSPRTE:CERTIFICATION:1",
            certificateName: "Certified JavaScript Developer",
            instituteName: "Tech Academy",
            startDate: "January 2023",
            endDate: "June 2023",
            aboutCertificate: "<p>Completed certification focusing on JavaScript programming, including front-end and back-end development concepts and best practices.</p>",
          },
          {
            listId: "BLATSPRTE:CERTIFICATION:2",
            certificateName: "Full Stack Web Development",
            instituteName: "Coding Bootcamp",
            startDate: "September 2022",
            endDate: "December 2022",
            aboutCertificate: "<p>Gained proficiency in HTML, CSS, JavaScript, and server-side programming with Node.js and Express.</p>",
          },
        ],
      },
    ],
    
  },

  //WHITE BACKGROUND RESUME TEMPLATE
  {
    id: "WHBARETE",
    templateName: "White Background Resume Template",
    element: White_Background_Resume_Template,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Inter",
    headingTextColor: "#000",
    themeColor: "#B0B0B0",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "modern",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Content Writer",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "WHBARETE:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Creative and detail-oriented Content Writer with [X] years of experience in crafting engaging content for diverse audiences. Skilled in researching, editing, and producing high-quality articles, blogs, and marketing materials.</p>",
      },
      {
        sectionId: "WHBARETE:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact",
        list: [
          {
            listId: "WHBARETE:CONTACT:1",
            iconName: "fa-regular fa-envelope",
            contactName: "snehasharma@gmail.com",
            additionalLink: "",
          },
          {
            listId: "WHBARETE:CONTACT:2",
            iconName: "fa-regular fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "WHBARETE:CONTACT:3",
            iconName: "fa-regular fa-location-dot",
            contactName: "123 Main Street, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "WHBARETE:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "WHBARETE:PROJECTS:1",
            projectName: "Blog Series on Digital Marketing Trends",
            startDate: "September 2022",
            endDate: "February 2023",
            aboutProject:
              "<p>Researched and wrote a comprehensive blog series analyzing the latest digital marketing trends, resulting in a 30% increase in website traffic.</p>",
          },
          {
            listId: "WHBARETE:PROJECTS:2",
            projectName: "Content Strategy for Start-up",
            startDate: "June, 2022",
            endDate: "February 2023",
            aboutProject:
              "<p>Developed a content strategy for a tech start-up, creating engaging articles, newsletters, and social media posts that enhanced brand visibility and customer engagement.</p>",
          },
        ],
      },
      {
        sectionId: "WHBARETE:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "WHBARETE:SKILLS:1",
            skillName: "Content Writing",
          },
          {
            listId: "WHBARETE:SKILLS:2",
            skillName: "SEO Optimization",
          },
          {
            listId: "WHBARETE:SKILLS:3",
            skillName: "Editing and Proofreading",
          },
          {
            listId: "WHBARETE:SKILLS:4",
            skillName: "Research Skills",
          },
          {
            listId: "WHBARETE:SKILLS:5",
            skillName: "Social Media Management",
          },
        ],
      },
      {
        sectionId: "WHBARETE:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "WHBARETE:JOB-EXP:1",
            companyName: "Creative Content Agency",
            jobRole: "Content Writer",
            startDate: "January 2021",
            endDate: "Present",
            aboutJob:
              "<p>Developing engaging content for blogs, articles, and social media, while collaborating with marketing teams to enhance brand messaging and customer outreach.</p>",
          },
          {
            listId: "WHBARETE:JOB-EXP:2",
            companyName: "Freelance Writer",
            jobRole: "Freelance Content Writer",
            startDate: "June 2019",
            endDate: "December 2020",
            aboutJob:
              "<p>Produced high-quality written content for various clients, focusing on SEO best practices and audience engagement strategies.</p>",
          },
        ],
      },
      {
        sectionId: "WHBARETE:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "WHBARETE:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Arts in English Literature",
            startDate: "August 2017",
            endDate: "May 2020",
            aboutEducation:
              "<p>Studied various forms of literature and writing, enhancing skills in critical thinking, research, and analytical writing.</p>",
          },
          {
            listId: "WHBARETE:EDUCATION:2",
            collegeName: "University of Mumbai",
            course: "Diploma in Creative Writing",
            startDate: "July 2021",
            endDate: "December 2021",
            aboutEducation:
              "<p>Completed a diploma focused on various creative writing forms, including fiction, poetry, and scriptwriting, while learning editing and storytelling techniques.</p>",
          }
        ],
      },
      {
        sectionId: "WHBARETE:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Languages",
        list: [
          {
            listId: "WHBARETE:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100,
          },
          {
            listId: "WHBARETE:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100,
          },
        ],
      },
      {
        sectionId: "WHBARETE:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interests",
        list: [
          {
            listId: "WHBARETE:INTEREST:1",
            interest: "Writing Fiction and Poetry",
          },
        
  
          {
            listId: "BLHERETEM:INTEREST:5",
            interest: "Exploring Digital Storytelling Techniques",
          },
        ],
      },
      {
        sectionId: "WHBARETE:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certifications",
        list: [
          {
            listId: "WHBARETE:CERTIFICATION:1",
            certificateName: "Content Marketing Certification",
            instituteName: "HubSpot Academy",
            startDate: "March 2023",
            endDate: "April 2023",
            aboutCertificate: "<p>Completed a certification focused on content marketing strategies, SEO best practices, and audience engagement techniques.</p>",
          },
          {
            listId: "WHBARETE:CERTIFICATION:2",
            certificateName: "Copywriting Masterclass",
            instituteName: "Udemy",
            startDate: "January 2023",
            endDate: "February 2023",
            aboutCertificate: "<p>Gained insights into persuasive writing techniques and effective copy for various digital platforms.</p>",
          },
        ],
      }
    ],
    
  },

  // BIG IMAGE TYPOGRAPHY TEMPLATE
  {
    id: "BIIMTYTE",
    templateName: "Big Image Typography Template",
    element: Big_image_Typography_Template,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Inter",
    headingTextColor: "#000",
    themeColor: "#404040",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "creative",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Digital Marketing",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "BIIMTYTE:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Results-driven Digital Marketing Specialist with [X] years of experience in developing and executing data-driven marketing strategies to enhance brand visibility and drive customer engagement.</p>",
      },
      {
        sectionId: "BIIMTYTE:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact",
        list: [
          {
            listId: "BIIMTYTE:CONTACT:1",
            iconName: "fa-regular fa-envelope",
            contactName: "snehasharma@gmail.com",
            additionalLink: "",
          },
          {
            listId: "BIIMTYTE:CONTACT:2",
            iconName: "fa-regular fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "BIIMTYTE:CONTACT:3",
            iconName: "fa-regular fa-location-dot",
            contactName: "123 Main Street, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "BIIMTYTE:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "BIIMTYTE:PROJECTS:1",
            projectName: "SEO Optimization for E-commerce Website",
            startDate: "June 2022",
            endDate: "November 2022",
            aboutProject:
              "<p>Conducted comprehensive keyword research and implemented on-page and off-page SEO strategies that resulted in a 30% increase in organic traffic.</p>",
          },
        ],
      },
      {
        sectionId: "BIIMTYTE:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "BIIMTYTE:SKILLS:1",
            skillName: "Search Engine Optimization (SEO)",
          },
          {
            listId: "BIIMTYTE:SKILLS:2",
            skillName: "Content Marketing",
          },
          {
            listId: "BIIMTYTE:SKILLS:3",
            skillName: "Social Media Marketing",
          },
          {
            listId: "BIIMTYTE:SKILLS:4",
            skillName: "Google Analytics",
          },
          {
            listId: "BIIMTYTE:SKILLS:5",
            skillName: "Email Marketing",
          },
        ],
      },
      {
        sectionId: "BIIMTYTE:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "BIIMTYTE:JOB-EXP:1",
            companyName: "Digital Marketing Agency",
            jobRole: "Digital Marketing Specialist",
            startDate: "January 2021",
            endDate: "Present",
            aboutJob:
              "<p>Develop and implement digital marketing campaigns across various channels, resulting in a 25% increase in customer acquisition and brand awareness.</p>",
          },
        ],
      },
      {
        sectionId: "BIIMTYTE:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "BIIMTYTE:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Business Administration in Marketing",
            startDate: "August 2017",
            endDate: "May 2020",
            aboutEducation:
              "<p>Studied marketing principles, consumer behavior, and digital marketing strategies, gaining a strong foundation in marketing.</p>",
          },
        ],
      },
      {
        sectionId: "BIIMTYTE:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Languages",
        list: [
          {
            listId: "BIIMTYTE:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100,
          },
          {
            listId: "BIIMTYTE:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100,
          },
        ],
      },
      {
        sectionId: "BIIMTYTE:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interests",
        list: [
          {
            listId: "BIIMTYTE:INTEREST:1",
            interest: "Blogging about Digital Marketing Trends",
          },
          {
            listId: "BIIMTYTE:INTEREST:2",
            interest: "Analyzing Social Media Strategies",
          },
          {
            listId: "BIIMTYTE:INTEREST:3",
            interest: "Networking with Industry Professionals",
          },
          {
            listId: "BIIMTYTE:INTEREST:4",
            interest: "Participating in Digital Marketing Workshops",
          },
        ],
      },
      {
        sectionId: "BIIMTYTE:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certifications",
        list: [
          {
            listId: "BIIMTYTE:CERTIFICATION:1",
            certificateName: "Google Analytics Certification",
            instituteName: "Google",
            startDate: "March 2023",
            endDate: "April 2023",
            aboutCertificate:
              "<p>Completed certification covering Google Analytics for digital marketing, focusing on data analysis and reporting.</p>",
          },
          {
            listId: "BIIMTYTE:CERTIFICATION:2",
            certificateName: "Facebook Blueprint Certification",
            instituteName: "Facebook",
            startDate: "May 2023",
            endDate: "June 2023",
            aboutCertificate:
              "<p>Achieved certification in Facebook advertising, learning to create effective ad campaigns and measure performance.</p>",
          },
        ],
      },
    ]
    
  },

  //AFTER BORDER RESUME TEMPLATE
  {
    id: "AFBORETE",
    templateName: "After Border Resume Template",
    element: After_Border_Resume_Template,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Inter",
    headingTextColor: "#2D5B7A",
    themeColor: "#E5E5E5",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 12,
    isPersonaldetailschange: false,
    category: "ats-friendly",
    userName: "Sneha Sharma",
    profileImage: "",
    userJobRole: "Content Writer",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "AFBORETE:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Creative and detail-oriented Content Writer with [X] years of experience in producing engaging and informative content across various platforms, optimizing for SEO and audience engagement.</p>",
      },
      {
        sectionId: "AFBORETE:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact",
        list: [
          {
            listId: "AFBORETE:CONTACT:1",
            iconName: "fa-regular fa-envelope",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "AFBORETE:CONTACT:2",
            iconName: "fa-regular fa-phone-flip",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "AFBORETE:CONTACT:3",
            iconName: "fa-regular fa-location-dot",
            contactName: "123 Main Street, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "AFBORETE:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "AFBORETE:PROJECTS:1",
            projectName: "Blog Series on Digital Marketing Trends",
            startDate: "March 2023",
            endDate: "June 2023",
            aboutProject:
              "<p>Researched and wrote a series of blogs on the latest trends in digital marketing, resulting in a 40% increase in website traffic and reader engagement.</p>",
          },
        ],
      },
      {
        sectionId: "AFBORETE:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "AFBORETE:SKILLS:1",
            skillName: "Content Writing",
          },
          {
            listId: "AFBORETE:SKILLS:2",
            skillName: "SEO Optimization",
          },
          {
            listId: "AFBORETE:SKILLS:3",
            skillName: "Research and Analysis",
          },
          {
            listId: "AFBORETE:SKILLS:4",
            skillName: "Social Media Management",
          },
          {
            listId: "AFBORETE:SKILLS:5",
            skillName: "Copywriting",
          },
        ],
      },
      {
        sectionId: "AFBORETE:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "AFBORETE:JOB-EXP:1",
            companyName: "Content Creators Agency",
            jobRole: "Content Writer",
            startDate: "January 2021",
            endDate: "Present",
            aboutJob:
              "<p>Developed high-quality content for websites, blogs, and social media platforms, leading to a 30% increase in audience engagement and brand awareness.</p>",
          },
        ],
      },
      {
        sectionId: "AFBORETE:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "AFBORETE:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Arts in English Literature",
            startDate: "August 2017",
            endDate: "May 2020",
            aboutEducation:
              "<p>Studied literature, composition, and creative writing, gaining a strong foundation in effective communication and storytelling.</p>",
          },
        ],
      },
      {
        sectionId: "AFBORETE:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Languages",
        list: [
          {
            listId: "AFBORETE:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100,
          },
          {
            listId: "AFBORETE:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100,
          },
        ],
      },
      {
        sectionId: "AFBORETE:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interests",
        list: [
          {
            listId: "AFBORETE:INTEREST:1",
            interest: "Writing Short Stories and Poetry",
          },
          {
            listId: "AFBORETE:INTEREST:2",
            interest: "Exploring New Writing Styles",
          },
          {
            listId: "AFBORETE:INTEREST:3",
            interest: "Participating in Writing Workshops",
          },
          {
            listId: "AFBORETE:INTEREST:4",
            interest: "Reading Literature and Non-Fiction",
          },
        ],
      },
      {
        sectionId: "BLHERETEM:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certifications",
        list: [
          {
            listId: "AFBORETE:CERTIFICATION:1",
            certificateName: "Content Marketing Certification",
            instituteName: "HubSpot Academy",
            startDate: "February 2023",
            endDate: "March 2023",
            aboutCertificate:
              "<p>Completed a comprehensive course on content marketing strategies, focusing on storytelling and audience engagement.</p>",
          },
          {
            listId: "AFBORETE:CERTIFICATION:2",
            certificateName: "SEO Writing Certification",
            instituteName: "Udemy",
            startDate: "April 2023",
            endDate: "May 2023",
            aboutCertificate:
              "<p>Achieved certification focused on SEO writing techniques to optimize content for search engines while maintaining readability.</p>",
          },
        ],
      },
    ]    
  },

  //CAREER CHANGER RESUME
  {
    id: "CARCHARES",
    templateName: "Career Changer Resume",
    element: Career_Changer_Resume,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Inter",
    headingTextColor: "#000",
    themeColor: "#F2BD1E",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "ats-friendly",
    userName: "Sneha Sharma",
    profileImage: "",
    userJobRole: "Software Developer",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "CARCHARES:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Results-driven Software Developer with [X] years of experience in designing, developing, and maintaining software applications. Proficient in multiple programming languages and frameworks, with a strong focus on delivering high-quality code.</p>",
      },
      {
        sectionId: "CARCHARES:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact",
        list: [
          {
            listId: "CARCHARES:CONTACT:1",
            iconName: "fa-regular fa-at",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "CARCHARES:CONTACT:2",
            iconName: "fa-regular fa-phone-flip",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "CARCHARES:CONTACT:3",
            iconName: "fa-regular fa-location-dot",
            contactName: "123 Main Street, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "CARCHARES:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "CARCHARES:PROJECTS:1",
            projectName: "E-Commerce Website Development",
            startDate: "January 2023",
            endDate: "June 2023",
            aboutProject:
              "<p>Developed a full-stack e-commerce application using React and Node.js, implementing user authentication, product management, and payment integration, resulting in a user-friendly shopping experience.</p>",
          },
          {
            listId: "CARCHARES:PROJECTS:2",
            projectName: "Mobile App for Fitness Tracking",
            startDate: "July 2022",
            endDate: "December 2022",
            aboutProject:
              "<p>Designed and developed a mobile application using Flutter for fitness tracking, enabling users to log workouts and track progress, achieving over 1,000 downloads in the first month.</p>",
          },
        ],
      },
      {
        sectionId: "CARCHARES:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "CARCHARES:SKILLS:1",
            skillName: "Java",
          },
          {
            listId: "CARCHARES:SKILLS:2",
            skillName: "Python",
          },
          {
            listId: "CARCHARES:SKILLS:3",
            skillName: "JavaScript",
          },
          {
            listId: "CARCHARES:SKILLS:4",
            skillName: "React",
          },
          {
            listId: "CARCHARES:SKILLS:5",
            skillName: "Node.js",
          },
          {
            listId: "CARCHARES:SKILLS:6",
            skillName: "Spring Boot",
          },
        ],
      },
      {
        sectionId: "CARCHARES:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "CARCHARES:JOB-EXP:1",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Software Developer",
            startDate: "January 2021",
            endDate: "Present",
            aboutJob:
              "<p>Developed and maintained software applications using Java and Spring Boot, contributing to a 25% increase in application performance and ensuring timely delivery of projects.</p>",
          },
          {
            listId: "CARCHARES:JOB-EXP:2",
            companyName: "Innovative Software Co.",
            jobRole: "Junior Software Developer",
            startDate: "June 2019",
            endDate: "December 2020",
            aboutJob:
              "<p>Collaborated with a team to create responsive web applications using JavaScript and React, enhancing user experience and functionality based on client feedback.</p>",
          },
        ],
      },
      {
        sectionId: "CARCHARES:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "CARCHARES:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "August 2017",
            endDate: "May 2020",
            aboutEducation:
              "<p>Relevant coursework included software engineering, database management, algorithms, and web development, providing a strong foundation in computer science principles.</p>",
          },
        ],
      },
      {
        sectionId: "CARCHARES:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Languages",
        list: [
          {
            listId: "CARCHARES:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100,
          },
          {
            listId: "CARCHARES:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100,
          },
        ],
      },
      {
        sectionId: "CARCHARES:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interests",
        list: [
          {
            listId: "CARCHARES:INTEREST:1",
            interest: "Contributing to Open Source Projects",
          },
          {
            listId: "CARCHARES:INTEREST:2",
            interest: "Building Personal Software Applications",
          },
          {
            listId: "CARCHARES:INTEREST:3",
            interest: "Participating in Coding Competitions",
          },
          {
            listId: "CARCHARES:INTEREST:4",
            interest: "Exploring Emerging Technologies",
          },
        ],
      },
      {
        sectionId: "CARCHARES:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certifications",
        list: [
          {
            listId: "CARCHARES:CERTIFICATION:1",
            certificateName: "Certified Java Developer",
            instituteName: "Oracle Academy",
            startDate: "January 2023",
            endDate: "March 2023",
            aboutCertificate:
              "<p>Completed a comprehensive certification program focused on Java programming, covering core concepts and advanced techniques.</p>",
          },
          {
            listId: "CARCHARES:CERTIFICATION:2",
            certificateName: "Full Stack Web Development Certification",
            instituteName: "Coursera",
            startDate: "April 2023",
            endDate: "June 2023",
            aboutCertificate:
              "<p>Earned certification in full stack web development, emphasizing front-end and back-end technologies including JavaScript, Node.js, and React.</p>",
          },
        ],
      },
    ]
    
  },

  //PROFESSIONAL ATS RESUME
  {
    id: "PROATRE",
    templateName: "Professional ATS Resume",
    element: Professional_ATS_Resume,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Inter",
    headingTextColor: "#757500",
    themeColor: "#F2BD1E",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "modern",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Graphic Designer",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "PROATRE:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Creative and detail-oriented Graphic Designer with [X] years of experience in creating visually appealing designs for digital and print media. Proficient in Adobe Creative Suite, with a strong ability to collaborate with clients and deliver compelling visual solutions.</p>",
      },
      {
        sectionId: "PROATRE:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact",
        list: [
          {
            listId: "PROATRE:CONTACT:1",
            iconName: "fa-regular fa-envelope",
            contactName: "snehasharma@gmail.com",
            additionalLink: "",
          },
          {
            listId: "PROATRE:CONTACT:2",
            iconName: "fa-regular fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "PROATRE:CONTACT:3",
            iconName: "fa-regular fa-location-dot",
            contactName: "123 Main Street, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "PROATRE:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "PROATRE:PROJECTS:1",
            projectName: "Brand Identity Design for XYZ Company",
            startDate: "January 2023",
            endDate: "March 2023",
            aboutProject:
              "<p>Developed a comprehensive brand identity for XYZ Company, including logo design, color palette, and typography, resulting in a cohesive brand image and increased brand recognition.</p>",
          },
          {
            listId: "PROATRE:PROJECTS:2",
            projectName: "Social Media Campaign Graphics",
            startDate: "April 2023",
            endDate: "June 2023",
            aboutProject:
              "<p>Created visually engaging graphics for social media campaigns across various platforms, leading to a 30% increase in engagement and follower growth.</p>",
          },
        ],
      },
      {
        sectionId: "PROATRE:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "PROATRE:SKILLS:1",
            skillName: "Adobe Photoshop",
          },
          {
            listId: "PROATRE:SKILLS:2",
            skillName: "Adobe Illustrator",
          },
          {
            listId: "PROATRE:SKILLS:3",
            skillName: "Adobe InDesign",
          },
          {
            listId: "PROATRE:SKILLS:4",
            skillName: "UI/UX Design",
          },
        ],
      },
      {
        sectionId: "PROATRE:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "PROATRE:JOB-EXP:1",
            companyName: "Creative Studio Ltd.",
            jobRole: "Graphic Designer",
            startDate: "January 2022",
            endDate: "April 2022",
            aboutJob:
              "<p>Designed marketing materials, including brochures, flyers, and advertisements, enhancing brand visibility and attracting new customers.</p>",
          },
          {
            listId: "PROATRE:JOB-EXP:2",
            companyName: "Digital Media Agency",
            jobRole: "Junior Graphic Designer",
            startDate: "May 2018",
            endDate: "May 2019",
            aboutJob:
              "<p>Assisted senior designers in creating visual content for clients, contributing to successful campaigns and client satisfaction.</p>",
          },
        ],
      },
      {
        sectionId: "PROATRE:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "PROATRE:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Fine Arts in Graphic Design",
            startDate: " April 2014",
            endDate: "July 2018",
            aboutEducation:
              "<p>Relevant coursework included visual communication, typography, color theory, and digital design.</p>",
          },
          {
            listId: "PROATRE:EDUCATION:2",
            collegeName: "Mumbai University",
            course: "Master of Fine Arts in Graphic Design",
            startDate: "May 2018",
            endDate: " May 2020",
            aboutEducation:
              "<p>Relevant coursework included visual communication, typography, color theory, and digital design.</p>",
          },
        ],
      },
      {
        sectionId: "PROATRE:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Languages",
        list: [
          {
            listId: "PROATRE:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100,
          },
          {
            listId: "PROATRE:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100,
          },
        ],
      },
      {
        sectionId: "PROATRE:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interests",
        list: [
          {
            listId: "PROATRE:INTEREST:1",
            interest: "Digital Illustration",
          },
          {
            listId: "PROATRE:INTEREST:2",
            interest: "Photography",
          },
          {
            listId: "PROATRE:INTEREST:3",
            interest: "Attending Design Workshops",
          },
          {
            listId: "PROATRE:INTEREST:4",
            interest: "Exploring Typography",
          },
        ],
      },
      {
        sectionId: "PROATRE:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certifications",
        list: [
          {
            listId: "PROATRE:CERTIFICATION",
            certificateName: "Adobe Certified Expert",
            instituteName: "Adobe Academy",
            startDate: "July 2022",
            endDate: "December 2022",
            aboutCertificate:
              "<p>Completed certification focusing on advanced techniques in Adobe Photoshop and Illustrator, enhancing my design skills and workflow efficiency.</p>",
          },
          {
            listId: "PROATREC:ERTIFICATION:2",
            certificateName: "UI/UX Design Certification",
            instituteName: "Design Institute",
            startDate: "January 2023",
            endDate: "June 2023",
            aboutCertificate:
              "<p>Learned the principles of user-centered design, conducting user research, and creating wireframes and prototypes.</p>",
          },
        ],
      },
    ],
    
  },

  //APPLICANT TRACKING RESUME TEMPLATE
  {
    id: "APTRRETE",
    templateName: "Applicant Tracking Resume Template",
    element: Applicant_Tracking_Resume_Template,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Inter",
    headingTextColor: "#333",
    themeColor: "#175855",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "ats-friendly",
    userName: "Sneha Sharma",
    profileImage: "",
    userJobRole: "SEO Executive",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    
      AllSections: [
        {
          "sectionId": "APTRRETE:SUMMARY",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Summary",
          "summary": "<p>Results-driven SEO Executive with over [X] years of experience in enhancing website visibility and driving organic traffic through innovative SEO strategies and data-driven decision making.</p>"
        },
        {
          "sectionId": "APTRRETE:CONTACT",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionVisible": true,
          "sectionName": "Contact",
          "list": [
            {
              "listId": "APTRRETE:CONTACT:1",
              "iconName": "fa-regular fa-envelope",
              "contactName": "snehasharma@gmail.com",
              "additionalLink": ""
            },
            {
              "listId": "APTRRETE:CONTACT:2",
              "iconName": "fa-regular fa-phone",
              "contactName": "+91-XXXXXXXXXX",
              "additionalLink": ""
            },
            {
              "listId": "APTRRETE:CONTACT:3",
              "iconName": "fa-regular fa-location-dot",
              "contactName": "123 Main Street, Maharashtra, India",
              "additionalLink": ""
            }
          ]
        },
        {
          "sectionId": "APTRRETE:PROJECTS",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Projects",
          "list": [
            {
              "listId": "APTRRETE:PROJECTS:1",
              "projectName": "E-commerce SEO Optimization",
              "startDate": "January 2022",
              "endDate": "December 2022",
              "aboutProject": "<p>Implemented comprehensive SEO strategies that increased organic search traffic by over 50% for an e-commerce platform, leading to a significant boost in sales.</p>"
            }
          ]
        },
        {
          "sectionId": "APTRRETE:SKILLS",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Skills",
          "list": [
            {
              "listId": "APTRRETE:SKILLS:1",
              "skillName": "SEO Strategy Development"
            },
            {
              "listId": "APTRRETE:SKILLS:2",
              "skillName": "Keyword Research"
            },
            {
              "listId": "APTRRETE:SKILLS:3",
              "skillName": "Content Optimization"
            },
            {
              "listId": "APTRRETE:SKILLS:4",
              "skillName": "Google Analytics"
            },
            {
              "listId": "APTRRETE:SKILLS:5",
              "skillName": "On-page and Off-page SEO"
            }
          ]
        },
        {
          "sectionId": "APTRRETE:JOB-EXP",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Job Experience",
          "list": [
            {
              "listId": "APTRRETE:JOB-EXP:1",
              "companyName": "Digital Marketing Agency",
              "jobRole": "SEO Executive",
              "startDate": "March 2021",
              "endDate": "Present",
              "aboutJob": "<p>Conducted thorough keyword research and analysis to develop targeted content strategies, leading to an increase in search rankings for multiple clients.</p>"
            },
            {
              "listId": "APTRRETE:JOB-EXP:2",
              "companyName": "Web Solutions Co.",
              "jobRole": "SEO Specialist",
              "startDate": "January 2019",
              "endDate": "February 2021",
              "aboutJob": "<p>Optimized website content and structure, resulting in a 40% increase in organic traffic and improved site engagement metrics through data analysis and reporting.</p>"
            }
          ]
        },
        {
          "sectionId": "APTRRETE:EDUCATION",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Education",
          "list": [
            {
              "listId": "APTRRETE:EDUCATION:1",
              "collegeName": "Mumbai University",
              "course": "Bachelor of Technology in Computer Science",
              "startDate": "August 2016",
              "endDate": "May 2020",
              "aboutEducation": "<p>Specialized in digital marketing strategies and analytics, with coursework in web development, data structures, and marketing principles.</p>"
            }
          ]
        },
        {
          "sectionId": "APTRRETE:LANGUAGE",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Languages",
          "list": [
            {
              "listId": "APTRRETE:LANGUAGE:1",
              "languageName": "Hindi",
              "languageProfiency": 100
            },
            {
              "listId": "APTRRETE:LANGUAGE:2",
              "languageName": "English",
              "languageProfiency": 100
            }
          ]
        },
        {
          "sectionId": "APTRRETE:INTEREST",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Interests",
          "list": [
            {
              "listId": "APTRRETE:INTEREST:1",
              "interest": "Search Engine Trends"
            },
            {
              "listId": "APTRRETE:INTEREST:2",
              "interest": "Content Marketing"
            },
            {
              "listId": "APTRRETE:INTEREST:3",
              "interest": "Analyzing SEO Tools"
            },
            {
              "listId": "APTRRETE:INTEREST:4",
              "interest": "Digital Marketing Innovations"
            }
          ]
        },
        {
          "sectionId": "APTRRETE:CERTIFICATION",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Certifications",
          "list": [
            {
              "listId": "APTRRETE:CERTIFICATION:1",
              "certificateName": "Google Analytics Certification",
              "instituteName": "Google",
              "startDate": "January 2023",
              "endDate": "March 2023",
              "aboutCertificate": "<p>Gained comprehensive knowledge in Google Analytics for tracking and reporting website performance metrics.</p>"
            },
            {
              "listId": "APTRRETE:CERTIFICATION:2",
              "certificateName": "SEO Fundamentals Certification",
              "instituteName": "SEMrush Academy",
              "startDate": "February 2023",
              "endDate": "April 2023",
              "aboutCertificate": "<p>Completed in-depth training on SEO techniques and best practices to optimize website performance and visibility.</p>"
            }
          ]
        }
      ]
    
    
  },

  //ATS FRIENDLY RESUME
  {
    id: "ATFRME",
    templateName: "ATS Friendly Resume",
    element: ATS_Friendly_Resume,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Inter",
    headingTextColor: "#333",
    themeColor: "#3765e2",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "ats-friendly",
    userName: "Sneha Sharma",
    profileImage: "",
    userJobRole: "Software Developer",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    
      AllSections: [
        {
          "sectionId": "ATFRME:SUMMARY",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Summary",
          "summary": "<p>Results-driven Software Developer with 3 years of experience in designing, developing, and implementing applications and solutions using modern programming languages and frameworks.</p>"
        },
        {
          "sectionId": "ATFRME:CONTACT",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionVisible": true,
          "sectionName": "Contact",
          "list": [
            {
              "listId": "ATFRME:CONTACT:1",
              "iconName": "fa-solid fa-envelope",
              "contactName": "snehasharma@email.com",
              "additionalLink": ""
            },
            {
              "listId": "ATFRME:CONTACT:2",
              "iconName": "fa-solid fa-phone",
              "contactName": "+91-XXXXXXXXXX",
              "additionalLink": ""
            },
            {
              "listId": "ATFRME:CONTACT:3",
              "iconName": "fa-solid fa-location-dot",
              "contactName": "123 Main Street, Maharashtra, India",
              "additionalLink": ""
            }
          ]
        },
        {
          "sectionId": "ATFRME:PROJECTS",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Projects",
          "list": [
            {
              "listId": "ATFRME:PROJECTS:1",
              "projectName": "E-Commerce Web Application",
              "startDate": "January 2023",
              "endDate": "June 2023",
              "aboutProject": "<p>Developed a full-stack e-commerce web application using React for the front end and Node.js for the back end, enhancing user experience and streamlining the checkout process.</p>"
            },
            {
              "listId": "ATFRME:PROJECTS:2",
              "projectName": "Real-Time Chat Application",
              "startDate": "July 2022",
              "endDate": "December 2022",
              "aboutProject": "<p>Designed and implemented a real-time chat application using WebSocket for real-time communication, Node.js for server-side logic, and MongoDB for data storage. Improved user engagement and response time by over 50%.</p>"
            }
          ]
        },
        {
          "sectionId": "ATFRME:SKILLS",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Skills",
          "list": [
            {
              "listId": "ATFRME:SKILLS:1",
              "skillName": "Java"
            },
            {
              "listId": "ATFRME:SKILLS:2",
              "skillName": "Python"
            },
            {
              "listId": "ATFRME:SKILLS:3",
              "skillName": "JavaScript"
            },
            {
              "listId": "ATFRME:SKILLS:4",
              "skillName": "React"
            },
            {
              "listId": "ATFRME:SKILLS:5",
              "skillName": "Node.js"
            },
            {
              "listId": "ATFRME:SKILLS:6",
              "skillName": "SQL"
            },
            {
              "listId": "ATFRME:SKILLS:7",
              "skillName": "Git"
            }
          ]
        },
        {
          "sectionId": "ATFRME:JOB-EXP",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Job Experience",
          "list": [
            {
              "listId": "ATFRME:JOB-EXP:1",
              "companyName": "Innovative Tech Solutions",
              "jobRole": "Software Developer",
              "startDate": "July 2021",
              "endDate": "Present",
              "aboutJob": "<p>Collaborated with cross-functional teams to develop scalable software solutions, improving application performance by 30% and reducing load times significantly.</p>"
            },
            {
              "listId": "ATFRME:JOB-EXP:2",
              "companyName": "Code Craft Pvt. Ltd.",
              "jobRole": "Junior Software Developer",
              "startDate": "June 2020",
              "endDate": "June 2021",
              "aboutJob": "<p>Assisted in the development of web applications using JavaScript frameworks, contributing to successful project deliveries and enhancing user interfaces.</p>"
            }
          ]
        },
        {
          "sectionId": "ATFRME:EDUCATION",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Education",
          "list": [
            {
              "listId": "ATFRME:EDUCATION:1",
              "collegeName": "Mumbai University",
              "course": "Bachelor of Technology in Computer Science",
              "startDate": "August 2017",
              "endDate": "May 2020",
              "aboutEducation": "<p>Completed coursework in software development methodologies, database management, and algorithm design, with a strong focus on practical projects.</p>"
            },
            {
              "listId": "ATFRME:EDUCATION:2",
              "collegeName": "Pune Institute of Computer Technology",
              "course": "Master of Technology in Software Engineering",
              "startDate": "August 2020",
              "endDate": "May 2022",
              "aboutEducation": "<p>Focused on software development methodologies, agile practices, and advanced programming techniques. Completed a thesis on scalable web application architecture.</p>"
            },
            
          ]
        },
        {
          "sectionId": "ATFRME:LANGUAGE",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Languages",
          "list": [
            {
              "listId": "ATFRME:LANGUAGE:1",
              "languageName": "Hindi",
              "languageProfiency": 100
            },
            {
              "listId": "ATFRME:LANGUAGE:2",
              "languageName": "English",
              "languageProfiency": 100
            }
          ]
        },
        {
          "sectionId": "ATFRME:INTEREST",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Interests",
          "list": [
            {
              "listId": "ATFRME:INTEREST:1",
              "interest": "Developing Open Source Projects"
            },
            {
              "listId": "ATFRME:INTEREST:2",
              "interest": "Learning New Frameworks"
            },
            {
              "listId": "ATFRME:INTEREST:3",
              "interest": "Contributing to Tech Blogs"
            },
            {
              "listId": "ATFRME:INTEREST:4",
              "interest": "Engaging in Tech Meetups"
            }
          ]
        },
        {
          "sectionId": "ATFRME:CERTIFICATION",
          "isSection": true,
          "isSectionDetailsChanges": false,
          "sectionName": "Certifications",
          "list": [
            {
              "listId": "ATFRME:CERTIFICATION",
              "certificateName": "Certified Java Developer",
              "instituteName": "Tech Academy",
              "startDate": "January 2023",
              "endDate": "June 2023",
              "aboutCertificate": "<p>Achieved certification focused on advanced Java programming, covering topics such as concurrency, design patterns, and RESTful services.</p>"
            }
          ]
        }
      ]
    
    
  },

  //BLUE CREATIVE MODERN TEMPLATE
  {
    id: "BLCRMOTE",
    templateName: "Blue Creative Modern Template ",
    element: Blue_Creative_Modern_Resume,
    headingTextFont: "outfit",
    bodyTextFont: "Inter",
    headingTextColor: "#333",
    themeColor: "#03989f",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "creative",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Business Development Executive",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "BLCRMOTE:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Dynamic Business Development Executive with [X] years of experience in driving revenue growth and building strategic partnerships. Proven track record of identifying market opportunities and implementing effective sales strategies.</p>",
      },
      {
        sectionId: "BLCRMOTE:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact",
        list: [
          {
            listId: "BLCRMOTE:CONTACT:1",
            iconName: "fa-regular fa-envelope",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "BLCRMOTE:CONTACT:2",
            iconName: "fa-regular fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "BLCRMOTE:CONTACT:3",
            iconName: "fa-regular fa-location-dot",
            contactName: "123 Main Street, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "BLCRMOTE:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "BLCRMOTE:PROJECTS:1",
            projectName: "Market Penetration Strategy",
            startDate: "January 2022",
            endDate: "December 2022",
            aboutProject:
              "<p>Developed and executed a market penetration strategy that resulted in a 30% increase in sales over one year through targeted outreach and relationship building.</p>",
          },
          {
            listId: "BLCRMOTE:PROJECTS:2",
            projectName: "Customer Feedback Initiative",
            startDate: "March 2023",
            endDate: "August 2023",
            aboutProject:
              "<p>Implemented a customer feedback initiative that enhanced client satisfaction metrics by 40%, allowing the company to adjust its offerings based on client needs.</p>",
          },
        ],
      },
      {
        sectionId: "BLCRMOTE:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "BLCRMOTE:SKILLS:1",
            skillName: "Negotiation",
          },
          {
            listId: "BLCRMOTE:SKILLS:2",
            skillName: "Sales Strategy",
          },
          {
            listId: "BLCRMOTE:SKILLS:3",
            skillName: "Client Relationship Management",
          },
          {
            listId: "BLCRMOTE:SKILLS:4",
            skillName: "Market Research",
          },
        ],
      },
      {
        sectionId: "BLCRMOTE:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "BLCRMOTE:JOB-EXP:1",
            companyName: "Innovative Solutions Pvt. Ltd.",
            jobRole: "Business Development Executive",
            startDate: "March 2021",
            endDate: "Present",
            aboutJob:
              "<p>Developed new business opportunities through networking and strategic outreach, achieving a 25% growth in client base over two years.</p>",
          },
          {
            listId: "BLCRMOTE:JOB-EXP:2",
            companyName: "Creative Ventures Inc.",
            jobRole: "Sales Associate",
            startDate: "June 2019",
            endDate: "February 2021",
            aboutJob:
              "<p>Managed client relationships and contributed to sales initiatives that led to a 20% increase in quarterly revenue.</p>",
          },
        ],
      },
      {
        sectionId: "BLCRMOTE:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "BLCRMOTE:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Business Administration",
            startDate: "August 2016",
            endDate: "May 2019",
            aboutEducation:
              "<p>Relevant coursework included marketing management, consumer behavior, and business strategy, equipping me with essential business development skills.</p>",
          },
          {
            listId: "BLCRMOTE:EDUCATION:2",
            collegeName: "Indian Institute of Management",
            course: "Executive Program in Business Management",
            startDate: "January 2023",
            endDate: "December 2023",
            aboutEducation:
              "<p>This program enhanced my strategic decision-making skills and provided insights into advanced marketing techniques and leadership strategies.</p>",
          },
        ],
      },
      {
        sectionId: "BLCRMOTE:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Languages",
        list: [
          {
            listId: "BLCRMOTE:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100,
          },
          {
            listId: "BLCRMOTE:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100,
          },
        ],
      },
      {
        sectionId: "BLCRMOTE:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interests",
        list: [
          {
            listId: "BLCRMOTE:INTEREST:1",
            interest: "Networking Events",
          },
          {
            listId: "BLCRMOTE:INTEREST:2",
            interest: "Sales Strategy Development",
          },
          {
            listId: "BLCRMOTE:INTEREST:3",
            interest: "Industry Trends Analysis",
          },
          {
            listId: "BLCRMOTE:INTEREST:4",
            interest: "Entrepreneurship Initiatives",
          },
        ],
      },
      {
        sectionId: "BLCRMOTE:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certifications",
        list: [
          {
            listId: "BLCRMOTE:CERTIFICATION:1",
            certificateName: "Certified Sales Professional",
            instituteName: "Sales Academy",
            startDate: "January 2023",
            endDate: "June 2023",
            aboutCertificate: "<p>Completed a certification focused on advanced sales techniques, client management, and strategic negotiation skills.</p>",
          },
          {
            listId: "BLCRMOTE:CERTIFICATION:2",
            certificateName: "Digital Marketing Certification",
            instituteName: "Digital Academy",
            startDate: "July 2023",
            endDate: "October 2023",
            aboutCertificate: "<p>This certification covered digital marketing strategies, SEO, and social media marketing, enhancing my ability to promote business services effectively.</p>",
          },
        ],
      },
    ],
    
  },

  //COLORFULL RESUME TEMPLATE
  {
    id: "CORETE",
    templateName: "Colorfull Resume Template",
    element: Colorfull_Resume_Template,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Inter",
    headingTextColor: "#333",
    themeColor: "#608ABF",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "creative",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Graphic Designer",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "CORETE:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Creative Graphic Designer with [X] years of experience in creating visually compelling designs across digital and print media. Adept at translating client requirements into innovative design solutions.</p>",
      },
      {
        sectionId: "CORETE:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact",
        list: [
          {
            listId: "CORETE:CONTACT:1",
            iconName: "fa-regular fa-at",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "CORETE:CONTACT:2",
            iconName: "fa-regular fa-phone-flip",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "CORETE:CONTACT:3",
            iconName: "fa-regular fa-location-dot",
            contactName: "123 Main Street, Mumbai, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "CORETE:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "CORETE:PROJECTS:1",
            projectName: "Brand Identity Redesign",
            startDate: "March 2022",
            endDate: "August 2022",
            aboutProject:
              "<p>Led the redesign of a brand identity for a local startup, creating a cohesive visual style that increased brand recognition and customer engagement by 50%.</p>",
          },
          {
            listId: "CORETE:PROJECTS:2",
            projectName: "E-commerce Website Graphics",
            startDate: "September 2023",
            endDate: "November 2023",
            aboutProject:
              "<p>Developed visually appealing graphics and promotional materials for an e-commerce platform, enhancing user experience and contributing to a 30% increase in online sales.</p>",
          },
        ],
      },
      {
        sectionId: "CORETE:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "CORETE:SKILLS:1",
            skillName: "Adobe Photoshop",
          },
          {
            listId: "CORETE:SKILLS:2",
            skillName: "Adobe Illustrator",
          },
          {
            listId: "CORETE:SKILLS:3",
            skillName: "UI/UX Design",
          },
          {
            listId: "CORETE:SKILLS:4",
            skillName: "Web Design",
          },
        ],
      },
      {
        sectionId: "CORETE:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "CORETE:JOB-EXP:1",
            companyName: "Creative Designs Studio",
            jobRole: "Graphic Designer",
            startDate: "January 2021",
            endDate: "Present",
            aboutJob:
              "<p>Created visually striking graphics for various projects, collaborating closely with clients to ensure their vision was realized while adhering to brand guidelines.</p>",
          },
          {
            listId: "CORETE:JOB-EXP:2",
            companyName: "Artistry Agency",
            jobRole: "Junior Graphic Designer",
            startDate: "June 2019",
            endDate: "December 2020",
            aboutJob:
              "<p>Assisted in the development of marketing materials and digital content, honing skills in design software and gaining experience in project management.</p>",
          },
        ],
      },
      {
        sectionId: "CORETE:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "CORETE:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Fine Arts in Graphic Design",
            startDate: "August 2015",
            endDate: "May 2019",
            aboutEducation:
              "<p>Focused on design theory, typography, and digital media production, preparing me for a successful career in graphic design.</p>",
          },
          {
            listId: "CORETE:EDUCATION:2",
            collegeName: "National Institute of Design",
            course: "Diploma in Graphic Design",
            startDate: "June 2019",
            endDate: "May 2020",
            aboutEducation:
              "<p>Completed a diploma program focusing on design fundamentals, visual communication, and typography, which strengthened my foundational skills in graphic design.</p>",
          }
          
        ],
      },
      {
        sectionId: "CORETE:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Languages",
        list: [
          {
            listId: "CORETE:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100,
          },
          {
            listId: "CORETE:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100,
          },
        ],
      },
      {
        sectionId: "CORETE:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interests",
        list: [
          {
            listId: "CORETE:INTEREST:1",
            interest: "Digital Art Creation",
          },
          {
            listId: "CORETE:INTEREST:2",
            interest: "Photography",
          },
          {
            listId: "CORETE:INTEREST:3",
            interest: "Graphic Design Trends",
          },
          {
            listId: "CORETE:INTEREST:4",
            interest: "Volunteer Design Work",
          },
        ],
      },
      {
        sectionId: "CORETE:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certifications",
        list: [
          {
            listId: "CORETE:CERTIFICATION:1",
            certificateName: "Adobe Certified Expert",
            instituteName: "Adobe Academy",
            startDate: "January 2023",
            endDate: "June 2023",
            aboutCertificate: "<p>Achieved certification demonstrating advanced proficiency in Adobe Creative Suite, focusing on graphic design and digital media.</p>",
          },
          {
            listId: "CORETE:CERTIFICATION:2",
            certificateName: "UI/UX Design Certification",
            instituteName: "Design Institute",
            startDate: "July 2023",
            endDate: "October 2023",
            aboutCertificate: "<p>Completed a course in UI/UX design principles, enhancing my ability to create user-centered designs for digital products.</p>",
          },
        ],
      },
    ],
    
  },

  //SIMPLE PROFESSIONAL TEMPLATE
  {
    id: "SIPROTE",
    templateName: "Simple Professional Template",
    element: Simple_Professional_Template,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Inter",
    headingTextColor: "#333",
    themeColor: "#608ABF",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "modern",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "SEO Executive",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    
      AllSections: [
        {
          sectionId: "SIPROTE:SUMMARY",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Summary",
          summary: "<p>Results-driven SEO Executive with [X] years of experience in optimizing website content to improve search engine rankings and enhance user engagement.</p>"
        },
        {
          sectionId: "SIPROTE:CONTACT",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionVisible: true,
          sectionName: "Contact",
          list: [
            {
              listId: "SIPROTE:CONTACT:1",
              iconName: "fa-solid fa-envelope",
              contactName: "snehasharma@gmail.com",
              additionalLink: ""
            },
            {
              listId: "SIPROTE:CONTACT:2",
              iconName: "fa-solid fa-phone",
              contactName: "+91-XXXXXXXXXX",
              additionalLink: ""
            },
            {
              listId: "SIPROTE:CONTACT:3",
              iconName: "fa-solid fa-location-dot",
              contactName: "123 Main Street, Mumbai, Maharashtra, India",
              additionalLink: ""
            }
          ]
        },
        {
          sectionId: "SIPROTE:PROJECTS",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Projects",
          list: [
            {
              listId: "SIPROTE:PROJECTS:1",
              projectName: "SEO Strategy Development",
              startDate: "Jan 2021",
              endDate: "June 2021",
              aboutProject: "<p>Developed and executed comprehensive SEO strategies that improved organic search traffic by [X]% within six months.</p>"
            },
            {
              listI: "SIPROTE:PROJECTS:2",
              projectName: "Website Audit and Optimization",
              startDate: "July 2021",
              endDate: "Dec 2021",
              aboutProject: "<p>Conducted a thorough website audit, identifying technical SEO issues, and implemented solutions that enhanced site performance and increased search rankings.</p>"
            }
          ]
        },
        {
          sectionId: "SIPROTE:SKILLS",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Skills",
          list: [
            {
              listId: "SIPROTE:SKILLS:1",
              skillName: "SEO Optimization"
            },
            {
              listId: "SIPROTE:SKILLS:2",
            skillName: "Google Analytics"
            },
            {
              listId: "SIPROTE:SKILLS:3",
              skillName: "Content Marketing"
            },
            {
              listId: "SIPROTE:SKILLS:4",
              skillName: "Keyword Research"
            },
            {
              listId: "SIPROTE:SKILLS:5",
              skillName: "HTML & CSS"
            }
          ]
        },
        {
          sectionId: "SIPROTE:JOB-EXP",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Job Experience",
          list: [
            {
              listId: "SIPROTE:JOB-EXP:1",
              companyName: "Digital Marketing Agency",
              jobRole: "SEO Executive",
              startDate: "March 2021",
              endDate: "Present",
              aboutJob: "<p>Managed SEO campaigns for various clients, resulting in a consistent increase in organic search visibility and website traffic.</p>"
            },
            {
              listId: "SIPROTE:JOB-EXP:2",
              companyName: "Online Retailer",
              jobRole: "SEO Specialist",
              startDate: "Jan 2019",
              endDate: "Feb 2021",
              aboutJob: "<p>Conducted keyword research and implemented on-page optimization strategies, achieving a [X]% improvement in search engine rankings.</p>"
            }
          ]
        },
      
        {
          sectionId: "SIPROTE:EDUCATION",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Education",
          list: [
            {
              listId: "SIPROTE:EDUCATION:1",
              collegeName: "Mumbai University",
              course: "Bachelor of Arts in Mass Media",
              startDate: "Aug 2015",
              endDate: "June 2018",
              aboutEducation: "<p>Focused on digital marketing and media strategies, with coursework in content creation and SEO principles.</p>"
            },
            {
              listId: "SIPROTE:EDUCATION:2",
              collegeName: "Online Marketing Institute",
              course: "Diploma in Search Engine Optimization",
              startDate: "Sep 2018",
              endDate: "Dec 2018",
              aboutEducation: "<p>Completed a diploma program specializing in SEO techniques, analytics, and website optimization strategies.</p>"
            }
          ]
        },
        {
          sectionId: "SIPROTE:LANGUAGE",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Languages",
          list: [
            {
              listId: "SIPROTE:LANGUAGE:1",
              languageName: "Hindi",
              languageProfiency: 100
            },
            {
              listId: "SIPROTE:LANGUAGE:2",
              languageName: "English",
              languageProfiency: 100
            }
          ]
        },
        {
          sectionId: "SIPROTE:INTEREST",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Interests",
          list: [
            {
              listId :"SIPROTE:INTEREST:1",
              interest: "SEO Trends and Strategies"
            },
            {
              listId: "SIPROTE:INTEREST:2",
              interest: "Content Creation"
            },
            {
              listId: "SIPROTE:INTEREST:3",
              interest: "Digital Marketing Innovations"
            },
            {
              listId: "SIPROTE:INTEREST:4",
              interest: "Participating in Webinars"
            }
          ]
        },
        {
          sectionId: "BLHERETEM:CERTIFICATION",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Certifications",
          list: [
            {
              listId: "SIPROTE:CERTIFICATION:1",
              certificateName: "Google Analytics Certification",
              instituteName: "Google",
              startDate: "Feb 2023",
              endDate: "April 2023",
              aboutCertificate: "<p>Completed certification focused on Google Analytics, emphasizing data-driven decision-making for online marketing.</p>"
            },
            {
              listId: "SIPROTE:CERTIFICATION:2",
              certificateNam: "SEO Fundamentals Certification",
              instituteName: "SEMrush Academy",
              startDate: "May 2023",
              endDate: "July 2023",
              aboutCertificate: "<p>Earned certification in SEO fundamentals, covering essential practices, tools, and techniques to enhance online visibility.</p>"
            },
          ],
        },
      ],
    
    
  },

  //CREATIVE IMAGE TEMPLATE
  {
    id: "CRTIMGTEST",
    templateName: "Creative Image Template",
    element: Creative_Image_Resume_Template,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Inter",
    headingTextColor: "#333",
    themeColor: "#d18c5c",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "creative",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Graphic Designer",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
          sectionId: "CRTIMGTEST:SUMMARY",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Summary",
          summary: "<p>Creative Graphic Designer with [X] years of experience in creating compelling visual narratives and engaging designs that enhance brand identity.</p>",
      },
      {
          sectionId: "CRTIMGTEST:CONTACT",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionVisible: true,
          sectionName: "Contact",
          list: [
              {
                  listId: "CRTIMGTEST:CONTACT:1",
                  iconName: "fa-solid fa-envelope",
                  contactName: "designersneha@gmail.com",
                  additionalLink: "",
              },
              {
                  listId: "CRTIMGTEST:CONTACT:2",
                  iconName: "fa-solid fa-phone",
                  contactName: "+91-XXXXXXXXXX",
                  additionalLink: "",
              },
              {
                  listId: "CRTIMGTEST:CONTACT:3",
                  iconName: "fa-solid fa-location-dot",
                  contactName: "789 Design Avenue, Mumbai, Maharashtra, India",
                  additionalLink: "",
              },
          ],
      },
      {
          sectionId: "CRTIMGTEST:PROJECTS",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Projects",
          list: [
              {
                  listId: "CRTIMGTEST:PROJECTS:1",
                  projectName: "Brand Identity Design",
                  startDate: "Mar 2022",
                  endDate: "Aug 2022",
                  aboutProject: "<p>Developed a comprehensive brand identity for a startup, resulting in a cohesive visual language that enhanced customer recognition.</p>",
              },
              {
                  listId: "CRTIMGTEST:PROJECTS:2",
                  projectName: "E-commerce Website Redesign",
                  startDate: "Sep 2022",
                  endDate: "Dec 2022",
                  aboutProject: "<p>Led the redesign of an e-commerce website, improving user experience and increasing sales conversion rates by [X]%.</p>",
              },
          ],
      },
      {
          sectionId: "CRTIMGTEST:SKILLS",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Skills",
          list: [
              {
                  listId: "CRTIMGTEST:SKILLS:1",
                  skillName: "Adobe Creative Suite"
              },
              {
                  listId: "CRTIMGTEST:SKILLS:2",
                  skillName: "UI/UX Design"
              },
              {
                  listId: "CRTIMGTEST:SKILLS:3",
                  skillName: "Illustration"
              },
              {
                  listId: "CRTIMGTEST:SKILLS:4",
                  skillName: "Typography"
              },
              {
                  listId: "CRTIMGTEST:SKILLS:5",
                  skillName: "Web Design"
              }
          ],
      },
      {
          sectionId: "CRTIMGTEST:JOB-EXP",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Job Experience",
          list: [
              {
                  listId: "CRTIMGTEST:JOB-EXP:1",
                  companyName: "Creative Agency Pvt. Ltd.",
                  jobRole: "Graphic Designer",
                  startDate: "Jan 2021",
                  endDate: "Present",
                  aboutJob: "<p>Designed innovative graphics for digital and print media, collaborating with marketing teams to align visual strategies with brand goals.</p>",
              },
              {
                  listId: "CRTIMGTEST:JOB-EXP:2",
                  companyName: "Design Studio",
                  jobRole: "Junior Graphic Designer",
                  startDate: "Jun 2019",
                  endDate: "Dec 2020",
                  aboutJob: "<p>Assisted in creating branding materials and promotional content, contributing to successful campaigns that boosted client visibility.</p>",
              },
          ],
      },
      {
          sectionId: "CRTIMGTEST:EDUCATION",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Education",
          list: [
              {
                  listId: "CRTIMGTEST:EDUCATION:1",
                  collegeName: "Mumbai School of Design",
                  course: "Bachelor of Fine Arts in Graphic Design",
                  startDate: "Aug 2016",
                  endDate: "Jun 2019",
                  aboutEducation: "<p>Focused on visual communication, design theory, and digital media production, preparing for a career in graphic design.</p>",
              },
              {
                  listId: "CRTIMGTEST:EDUCATION:2",
                  collegeName: "Online Design Institute",
                  course: "Certificate in Visual Design",
                  startDate: "Jul 2019",
                  endDate: "Dec 2019",
                  aboutEducation: "<p>Completed coursework in advanced design techniques, branding, and user experience, enhancing practical skills in graphic design.</p>",
              },
          ],
      },
      {
          sectionId: "CRTIMGTEST:LANGUAGE",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Languages",
          list: [
              {
                  listId: "CRTIMGTEST:LANGUAGE:1",
                  languageName: "Hindi",
                  languageProfiency: 100
              },
              {
                  listId: "CRTIMGTEST:LANGUAGE:2",
                  languageName: "English",
                  languageProfiency: 100
              }
          ],
      },
      {
          sectionId: "CRTIMGTEST:INTEREST",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Interests",
          list: [
              {
                  listId: "CRTIMGTEST:INTEREST:1",
                  interest: "Exploring Typography"
              },
              {
                  listId: "CRTIMGTEST:INTEREST:2",
                  interest: "Digital Illustration"
              },
              {
                  listId: "CRTIMGTEST:INTEREST:3",
                  interest: "Attending Design Conferences"
              },
              {
                  listId: "CRTIMGTEST:INTEREST:4",
                  interest: "Photography"
              }
          ],
      },
      {
          sectionId: "CRTIMGTEST:CERTIFICATION",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Certifications",
          list: [
              {
                  listId: "CRTIMGTEST:CERTIFICATION:1",
                  certificateName: "Adobe Certified Expert",
                  instituteName: "Adobe",
                  startDate: "Feb 2023",
                  endDate: "May 2023",
                  aboutCertificate: "<p>Achieved certification demonstrating advanced proficiency in Adobe Creative Suite tools and design principles.</p>"
              },
          ],
      },
  ]
  
  },

  //PPVP RESUME TEMPLATE
  {
    id: "ppvp",
    templateName: "Ppvp_resume_temp",
    element: Ppvp_resume_temp,
    headingTextFont: "kanit",
    bodyTextFont: "inter",
    headingTextColor: "#fff",
    themeColor: "#63769B",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "creative",
    userName: "Yogesh Kumar",
    userJobRole: "Digital Marketing",
    profileImage: "https://wallpapercave.com/wp/wp13386395.jpg",
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
          sectionId: "ppvp:summary",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Summary",
          summary: "<p>Dynamic Digital Marketing Specialist with 5 years of experience in developing data-driven marketing strategies that enhance brand visibility and drive engagement.</p>",
      },
      {
          sectionId: "ppvp:contact",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Contact Me",
          list: [
              {
                  listId: "ppvp:contact:1",
                  iconName: "fa-solid fa-phone",
                  contactName: "9585485895",
                  additionalLink: "",
              },
              {
                  listId: "ppvp:contact:2",
                  iconName: "fa-solid fa-location",
                  contactName: "Greater Noida, India",
                  additionalLink: "",
              },
              {
                  listId: "ppvp:contact:3",
                  iconName: "fa-brands fa-github",
                  contactName: "hello@reallygreatsite.com",
                  additionalLink: "",
              },
          ],
      },
      {
          sectionId: "ppvp:project",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Projects",
          list: [
              {
                  listId: "ppvp:project:1",
                  projectName: "Social Media Campaign for Brand X",
                  startDate: "Mar 2021",
                  endDate: "Jun 2021",
                  aboutProject: "<p>Designed and executed a social media campaign that increased brand awareness by 30% and engagement by 50% within three months.</p>",
              },
          ],
      },
      {
          sectionId: "ppvp:skills",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Skills",
          list: [
              {
                  listId: "ppvp:skills:1",
                  skillName: "SEO Optimization"
              },
              {
                  listId: "ppvp:skills:2",
                  skillName: "Content Marketing"
              },
              {
                  listId: "ppvp:skills:3",
                  skillName: "Google Analytics"
              },
              {
                  listId: "ppvp:skills:4",
                  skillName: "Social Media Management"
              },
              {
                  listId: "ppvp:skills:5",
                  skillName: "Email Marketing"
              },
              {
                  listId: "ppvp:skills:6",
                  skillName: "PPC Advertising"
              },
          ],
      },
      {
          sectionId: "ppvp:exp",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Experience",
          list: [
              {
                  listId: "ppvp:exp:1",
                  companyName: "Digital Solutions Inc.",
                  jobRole: "Digital Marketing Specialist",
                  startDate: "Jun 2019",
                  endDate: "Present",
                  aboutJob: "<p>Developed and managed digital marketing strategies that improved online presence and generated leads, resulting in a 20% increase in sales.</p>",
              },
          ],
      },
      {
          sectionId: "ppvp:educ",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Education",
          list: [
              {
                  listId: "ppvp:educ:1",
                  collegeName: "MJPRU Bareilly, Uttar Pradesh",
                  course: "Bachelor of Business Administration (BBA)",
                  startDate: "Aug 2018",
                  endDate: "Oct 2021",
                  aboutEducation: "<p>Focused on marketing strategies, consumer behavior, and digital marketing techniques, laying a strong foundation for a career in digital marketing.</p>",
              },
          ],
      },
      {
          sectionId: "BLHERETEM:LANGUAGE",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Languages",
          list: [
              {
                  listId: "BLHERETEM:LANGUAGE:1",
                  languageName: "Hindi",
                  languageProfiency: 100
              },
              {
                  listId: "BLHERETEM:LANGUAGE:2",
                  languageName: "English",
                  languageProfiency: 100
              }
          ]
      },
      {
          sectionId: "BLHERETEM:INTEREST",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Interests",
          list: [
              {
                  listId: "BLHERETEM:INTEREST:1",
                  interest: "Content Creation"
              },
              {
                  listId: "BLHERETEM:INTEREST:2",
                  interest: "Data Analytics"
              },
              {
                  listId: "BLHERETEM:INTEREST:3",
                  interest: "Networking Events"
              },
              {
                  listId: "BLHERETEM:INTEREST:4",
                  interest: "Exploring SEO Trends"
              }
          ]
      },
      {
          sectionId: "BLHERETEM:CERTIFICATION",
          isSection: true,
          isSectionDetailsChanges: false,
          sectionName: "Certifications",
          list: [
              {
                  listId: "BLHERETEM:CERTIFICATION:1",
                  certificateName: "Google Ads Certification",
                  instituteName: "Google",
                  startDate: "Jan 2023",
                  endDate: "Apr 2023",
                  aboutCertificate: "<p>Achieved certification in Google Ads, demonstrating expertise in creating effective advertising campaigns across Google platforms.</p>"
              },
              {
                  listId: "BLHERETEM:CERTIFICATION:2",
                  certificateName: "Digital Marketing Certification",
                  instituteName: "HubSpot Academy",
                  startDate: "May 2023",
                  endDate: "Jul 2023",
                  aboutCertificate: "<p>Completed certification focusing on digital marketing strategies, including content marketing and social media optimization.</p>"
              },
          ],
      },
  ],
  
  },

  //BOX STYLE RESUME
  {
    id: "BOXSTLR",
    templateName: "Box Style Resume",
    element: Box_Style_Resume,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Inter",
    headingTextColor: "#333",
    themeColor: "#C4DAD2",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "modern",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Web Developer",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "BOXSTLR:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Creative and detail-oriented Web Developer with 3 years of experience in building responsive and user-friendly websites. Proficient in modern web technologies and passionate about enhancing user experiences.</p>",
      },
      {
        sectionId: "BOXSTLR:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: false,
        sectionName: "Contact",
        list: [
          {
            listId: "BOXSTLR:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "BOXSTLR:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "BOXSTLR:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Mumbai, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "BOXSTLR:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "BOXSTLR:PROJECTS:1",
            projectName: "Portfolio Website",
            startDate: "Jan 2023",
            endDate: "Mar 2023",
            aboutProject:
              "<p>Developed a personal portfolio website using HTML, CSS, and JavaScript to showcase projects and skills. Implemented responsive design for optimal viewing on various devices.</p>",
          },
          {
            listId: "BOXSTLR:PROJECTS:2",
            projectName: "E-commerce Web Application",
            startDate: "May 2022",
            endDate: "Dec 2022",
            aboutProject:
              "<p>Created a fully functional e-commerce web application using React and Node.js, integrating payment gateways and managing user authentication to enhance the shopping experience.</p>",
          },
          {
            listId: "BOXSTLR:PROJECTS:3",
            projectName: "Blog Platform",
            startDate: "Jun 2021",
            endDate: "Aug 2021",
            aboutProject:
              "<p>Designed and developed a blogging platform utilizing WordPress, enabling users to create, edit, and publish blog posts while maintaining a responsive layout.</p>",
          },
        ],
      },
      {
        sectionId: "BOXSTLR:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "BOXSTLR:SKILLS:1",
            skillName: "HTML5",
          },
          {
            listId: "BOXSTLR:SKILLS:2",
            skillName: "CSS3",
          },
          {
            listId: "BOXSTLR:SKILLS:3",
            skillName: "JavaScript",
          },
          {
            listId: "BOXSTLR:SKILLS:4",
            skillName: "React",
          },
          {
            listId: "BOXSTLR:SKILLS:5",
            skillName: "Node.js",
          },
        ],
      },
      {
        sectionId: "BOXSTLR:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "BOXSTLR:JOB-EXP:1",
            companyName: "Web Innovations Inc.",
            jobRole: "Web Developer",
            startDate: "Feb 2021",
            endDate: "Present",
            aboutJob:
              "<p>Designed and developed responsive websites and applications using modern frameworks, improving site performance by 30% through optimized code and best practices.</p>",
          },
          {
            listId: "BOXSTLR:JOB-EXP:2",
            companyName: "Digital Solutions Ltd.",
            jobRole: "Junior Web Developer",
            startDate: "Jul 2019",
            endDate: "Jan 2021",
            aboutJob:
              "<p>Assisted in the development of web applications and websites, collaborating with designers and stakeholders to ensure a seamless user experience and meeting project deadlines.</p>",
          },
        ],
      },
      {
        sectionId: "BOXSTLR:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "BOXSTLR:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "Aug 2016",
            endDate: "May 2020",
            aboutEducation:
              "<p>Completed coursework in web development, database management, and software engineering, gaining hands-on experience with various programming languages and frameworks.</p>",
          },
          {
            listId: "BOXSTLR:EDUCATION:2",
            collegeName: "Mumbai Institute of Technology",
            course: "Diploma in Web Development",
            startDate: "Sep 2020",
            endDate: "Jun 2021",
            aboutEducation:
              "<p>Focused on front-end and back-end technologies, including HTML, CSS, JavaScript, and PHP, with hands-on projects that enhanced practical skills in web development.</p>",
          },
        ],
      },
      {
        sectionId: "BOXSTLR:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Languages",
        list: [
          {
            listId: "BOXSTLR:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100
          },
          {
            listId: "BOXSTLR:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100
          }
        ]
      },
      {
        sectionId: "BOXSTLR:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interests",
        list: [
          {
            listId: "BOXSTLR:INTEREST:1",
            interest: "Developing Personal Websites"
          },
          {
            listId: "BOXSTLR:INTEREST:2",
            interest: "Learning New Frameworks"
          },
  
          {
            listId: "BLHERETEM:INTEREST:3",
            interest: "Advocating for Web Accessibility"
          }
        ]
      },
      {
        sectionId: "BOXSTLR:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certifications",
        list: [
          {
            listId: "BOXSTLR:CERTIFICATION:1",
            certificateName: "Certified Front-End Web Developer",
            instituteName: "Web Development Academy",
            startDate: "Jan 2023",
            endDate: "Jun 2023",
            aboutCertificate: "<p>Completed a comprehensive certification program focusing on front-end development, including HTML, CSS, JavaScript, and responsive design principles.</p>"
          },
          {
            listId: "BOXSTLR:CERTIFICATION:2",
            certificateName: "Full Stack Web Development Certification",
            instituteName: "Tech Training Institute",
            startDate: "Jul 2023",
            endDate: "Dec 2023",
            aboutCertificate: "<p>Completed an extensive program covering both front-end and back-end development, focusing on React, Node.js, Express, and MongoDB.</p>"
          },
        ],
      },
    ]
    
  },

  //UNIQUE STYLE RESUME
  {
    id: "UNIQUESR",
    templateName: "Unique Style Resume",
    element: Unique_Style_Resume,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Inter",
    headingTextColor: "#333",
    themeColor: "#DF61A6",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    category: "creative",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "UI/UX Designer Software",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "UNIQUESR:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Creative UI/UX Designer with 3 years of experience in crafting engaging user experiences through thoughtful design and research. Adept at transforming user needs into functional and visually appealing interfaces.</p>",
      },
      {
        sectionId: "UNIQUESR:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: false,
        sectionName: "Contact",
        list: [
          {
            listId: "UNIQUESR:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "UNIQUESR:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "UNIQUESR:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Mumbai, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "UNIQUESR:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "UNIQUESR:PROJECTS:1",
            projectName: "E-commerce Website",
            startDate: "Mar, 2022",
            endDate: "Aug, 2022",
            aboutProject:
              "<p>Led the redesign of an e-commerce platform, improving user flow and aesthetics, resulting in a 25% increase in conversion rates.</p>",
          },
          {
            listId: "UNIQUESR:PROJECTS:2",
            projectName: "Mobile App UI Design",
            startDate: "Sep, 2021",
            endDate: "Dec, 2021",
            aboutProject:
              "<p>Designed user interfaces for a mobile application focused on health tracking, incorporating user feedback and usability testing to enhance functionality.</p>",
          },
        ],
      },
      {
        sectionId: "UNIQUESR:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "UNIQUESR:SKILLS:1",
            skillName: "Adobe XD",
          },
          {
            listId: "UNIQUESR:SKILLS:2",
            skillName: "Figma",
          },
          {
            listId: "UNIQUESR:SKILLS:3",
            skillName: "Sketch",
          },
          {
            listId: "UNIQUESR:SKILLS:4",
            skillName: "User Research",
          },
          {
            listId: "UNIQUESR:SKILLS:5",
            skillName: "Prototyping",
          },
        ],
      },
      {
        sectionId: "UNIQUESR:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "UNIQUESR:JOB-EXP:1",
            companyName: "Creative Design Studio",
            jobRole: "UI/UX Designer",
            startDate: "Feb, 2021",
            endDate: "Present",
            aboutJob:
              "<p>Collaborated with product teams to design intuitive user interfaces and enhance user experiences, leading to a 30% reduction in user drop-off rates.</p>",
          },
          {
            listId: "UNIQUESR:JOB-EXP:2",
            companyName: "Innovative Solutions Ltd.",
            jobRole: "Junior UI/UX Designer",
            startDate: "Jun, 2019",
            endDate: "Jan, 2021",
            aboutJob:
              "<p>Assisted in designing user-friendly interfaces and conducted user testing sessions to gather feedback and improve product designs.</p>",
          },
        ],
      },
      {
        sectionId: "UNIQUESR:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "UNIQUESR:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Design in UI/UX",
            startDate: "Aug, 2016",
            endDate: "May, 2020",
            aboutEducation:
              "<p>Studied design principles, user experience strategies, and visual communication, completing projects that emphasized user-centered design.</p>",
          },
          {
            listId: "UNIQUESR:EDUCATION:2",
            collegeName: "Navi Mumbai Design Institute",
            course: "Diploma in Graphic Design",
            startDate: "Jun, 2020",
            endDate: "Dec, 2020",
            aboutEducation:
              "<p>Focused on graphic design techniques, software skills, and visual storytelling, enhancing my ability to create compelling design narratives.</p>",
          },
        ],
      },
      {
        sectionId: "UNIQUESR:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Languages",
        list: [
          {
            listId: "UNIQUESR:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100,
          },
          {
            listId: "UNIQUESR:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100,
          },
        ],
      },
      {
        sectionId: "UNIQUESR:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interests",
        list: [
          {
            listId: "UNIQUESR:INTEREST:1",
            interest: "User Experience Research",
          },
          {
            listId: "UNIQUESR:INTEREST:2",
            interest: "Designing Interactive Prototypes",
          },
          {
            listId: "UNIQUESR:INTEREST:3",
            interest: "Creating Design Systems",
          },
          {
            listId: "UNIQUESR:INTEREST:4",
            interest: "Mentoring Aspiring Designers",
          },
        ],
      },
      {
        sectionId: "UNIQUESR:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certifications",
        list: [
          {
            listId: "UNIQUESR:CERTIFICATION:1",
            certificateName: "Certified UI/UX Designer",
            instituteName: "Design Institute of Mumbai",
            startDate: "Jan, 2023",
            endDate: "Jun, 2023",
            aboutCertificate:
              "<p>Completed a certification program focusing on advanced UI/UX design techniques, user research methodologies, and interaction design principles.</p>",
          },
          {
            listId: "UNIQUESR:CERTIFICATION:2",
            certificateName: "Human-Computer Interaction Certification",
            instituteName: "Online Design Academy",
            startDate: "Jul, 2023",
            endDate: "Dec, 2023",
            aboutCertificate:
              "<p>Gained knowledge in human-computer interaction, usability testing, and designing for accessibility, applying concepts to real-world projects.</p>",
          },
        ],
      },
    ]
    
  },

  //PATTERN STYLE RESUME
  {
    id: "PATTRNRES",
    templateName: "Pattern Style Resume",
    element: Pattern_Style_Resume,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Inter",
    headingTextColor: "#333",
    themeColor: "#E08573",
    bodyTextColor: "#000",
    headingTextSize: 18,
    bodyTextSize: 12,
    isPersonaldetailschange: false,
    category: "modern",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Data Analyst",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "PATTRNRES:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights.</p>",
      },
      {
        sectionId: "PATTRNRES:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: false,
        sectionName: "Contact",
        list: [
          {
            listId: "PATTRNRES:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "PATTRNRES:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "PATTRNRES:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Mumbai, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "PATTRNRES:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "PATTRNRES:PROJECTS:1",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
          {
            listId: "PATTRNRES:PROJECTS:2",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
          {
            listId: "PATTRNRES:PROJECTS:3",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
        ],
      },
      {
        sectionId: "PATTRNRES:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "PATTRNRES:SKILLS:1",
            skillName: "Java",
          },
          {
            listId: "PATTRNRES:SKILLS:2",
            skillName: "Python",
          },
          {
            listId: "PATTRNRES:SKILLS:3",
            skillName: "JavaScript",
          },
          {
            listId: "PATTRNRES:SKILLS:4",
            skillName: "Spring Boot",
          },
        ],
      },
      {
        sectionId: "PATTRNRES:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "PATTRNRES:JOB-EXP:1",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Analyst",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
          {
            listId: "PATTRNRES:JOB-EXP:2",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Analyst",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
        ],
      },
      {
        sectionId: "PATTRNRES:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "PATTRNRES:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
          {
            listId: "PATTRNRES:EDUCATION:2",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
          {
            listId: "PATTRNRES:EDUCATION:3",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
        ],
      },
    ],
  },

  //YELLOW THEME TEMPLATE
  {
    id: "YELLOWTMP",
    templateName: "Yellow Theme Template",
    element: Yellow_Theme__Template,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Inter",
    headingTextColor: "#333",
    themeColor: "#FFCF00",
    bodyTextColor: "#000",
    headingTextSize: 18,
    bodyTextSize: 12,
    isPersonaldetailschange: false,
    category: "creative",
    userName: "Sneha Sharma",
    profileImage: "",
    userJobRole: "Data Analyst",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "YELLOWTMP:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights.</p>",
      },
      {
        sectionId: "YELLOWTMP:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: false,
        sectionName: "",
        list: [
          {
            listId: "YELLOWTMP:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "YELLOWTMP:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "YELLOWTMP:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Mumbai, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "YELLOWTMP:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "YELLOWTMP:PROJECTS:1",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
          {
            listId: "YELLOWTMP:PROJECTS:2",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
          {
            listId: "YELLOWTMP:PROJECTS:3",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
        ],
      },
      {
        sectionId: "YELLOWTMP:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "YELLOWTMP:SKILLS:1",
            skillName: "Java",
          },
          {
            listId: "YELLOWTMP:SKILLS:2",
            skillName: "Python",
          },
          {
            listId: "YELLOWTMP:SKILLS:3",
            skillName: "JavaScript",
          },
          {
            listId: "YELLOWTMP:SKILLS:4",
            skillName: "Spring Boot",
          },
        ],
      },
      {
        sectionId: "YELLOWTMP:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "YELLOWTMP:JOB-EXP:1",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Analyst",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
          {
            listId: "YELLOWTMP:JOB-EXP:2",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Analyst",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
          {
            listId: "YELLOWTMP:JOB-EXP:3",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Analyst",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
        ],
      },
      {
        sectionId: "YELLOWTMP:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "YELLOWTMP:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
          {
            listId: "YELLOWTMP:EDUCATION:2",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
          {
            listId: "YELLOWTMP:EDUCATION:3",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
        ],
      },
    ],
  },

  //MODERN CURRICULUM RESUME TEMPLATE
  {
    id: "MCRTEMP",
    templateName: "Modern Curriculum Resume Template",
    element: Modern_Curriculum_Resume_Templates,
    headingTextFont: "Chakra Petch",
    bodyTextFont: "Rajdhani",
    headingTextColor: "#333",
    themeColor: "#cca43b",
    bodyTextColor: "#000",
    headingTextSize: 18,
    bodyTextSize: 12,
    isPersonaldetailschange: false,
    category: "modern",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Data Analyst",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "MCRTEMP:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "Detail-oriented Software Developer with [X years] of experience in designing, developing, and implementing scalable applications. Proficient in multiple programming languages, including [list languages, e.g., Java, Python, JavaScript], with a strong understanding of software development life cycles and agile methodologies. Adept at collaborating with cross-functional teams to deliver innovative solutions that enhance user experience and drive business success. Committed to continuous learning and staying updated with emerging technologies.",
      },
      {
        sectionId: "MCRTEMP:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: false,
        sectionName: "",
        list: [
          {
            listId: "MCRTEMP:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "MCRTEMP:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "MCRTEMP:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Mumbai, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "MCRTEMP:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "MCRTEMP:PROJECTS:1",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
          {
            listId: "MCRTEMP:PROJECTS:2",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
          {
            listId: "MCRTEMP:PROJECTS:3",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
        ],
      },
      {
        sectionId: "MCRTEMP:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "MCRTEMP:SKILLS:1",
            skillName: "Java",
          },
          {
            listId: "MCRTEMP:SKILLS:2",
            skillName: "Python",
          },
          {
            listId: "MCRTEMP:SKILLS:3",
            skillName: "JavaScript",
          },
          {
            listId: "MCRTEMP:SKILLS:4",
            skillName: "Spring Boot",
          },
        ],
      },
      {
        sectionId: "MCRTEMP:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "MCRTEMP:JOB-EXP:1",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Analyst",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
          {
            listId: "MCRTEMP:JOB-EXP:2",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Analyst",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
          {
            listId: "MCRTEMP:JOB-EXP:3",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Analyst",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
        ],
      },
      {
        sectionId: "MCRTEMP:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "MCRTEMP:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
          {
            listId: "MCRTEMP:EDUCATION:2",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
          {
            listId: "MCRTEMP:EDUCATION:3",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
        ],
      },
    ],
  },

  //THREE SIDE BORDER RESUME
  {
    id: "THSIBORE",
    templateName: "Three Side Border Resume",
    element: Three_Side_Border_Resume,
    headingTextFont: "Space Grotesk",
    bodyTextFont: "Titillium Web",
    headingTextColor: "#000",
    themeColor: "#669bbc",
    bodyTextColor: "#000",
    headingTextSize: 18,
    bodyTextSize: 12,
    isPersonaldetailschange: false,
    category: "modern",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Data Analyst",
    subCategory: "teacher",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "THSIBORE:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "Detail-oriented Software Developer with [X years] of experience in designing, developing, and implementing scalable applications. Proficient in multiple programming languages, including [list languages, e.g., Java, Python, JavaScript], with a strong understanding of software development life cycles and agile methodologies. Adept at collaborating with cross-functional teams to deliver innovative solutions that enhance user experience and drive business success. Committed to continuous learning and staying updated with emerging technologies.",
      },
      {
        sectionId: "THSIBORE:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact Us",
        list: [
          {
            listId: "THSIBORE:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "THSIBORE:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "THSIBORE:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Mumbai, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "THSIBORE:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "THSIBORE:PROJECTS:1",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
          {
            listId: "THSIBORE:PROJECTS:2",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
          {
            listId: "THSIBORE:PROJECTS:3",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
        ],
      },
      {
        sectionId: "THSIBORE:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "THSIBORE:SKILLS:1",
            skillName: "Java",
          },
          {
            listId: "THSIBORE:SKILLS:2",
            skillName: "Python",
          },
          {
            listId: "THSIBORE:SKILLS:3",
            skillName: "JavaScript",
          },
          {
            listId: "THSIBORE:SKILLS:4",
            skillName: "Spring Boot",
          },
        ],
      },
      {
        sectionId: "THSIBORE:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "THSIBORE:JOB-EXP:1",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Analyst",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
          {
            listId: "THSIBORE:JOB-EXP:2",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Analyst",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
          {
            listId: "THSIBORE:JOB-EXP:3",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Analyst",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
        ],
      },
      {
        sectionId: "THSIBORE:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "THSIBORE:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
          {
            listId: "THSIBORE:EDUCATION:2",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
        ],
      },
    ],
  },

  //ENTRY LEVEL TECH PROFESSIONAL RESUME
  {
    id: "ELTPR",
    templateName: "Entry Level Tech Professional Resume",
    element: Entry_Level_Tech_Professional_Resume,
    headingTextFont: "Titillium Web",
    bodyTextFont: "Roboto Condensed",
    headingTextColor: "#000",
    themeColor: "#D2E4E2",
    bodyTextColor: "rgba(0,0,0,0.9)",
    headingTextSize: 18,
    bodyTextSize: 12,
    isPersonaldetailschange: false,
    category: "minimal",
    userName: "Sneha Sharma",
    profileImage: "",
    userJobRole: "Data Analyst",
    subCategory: "engineer",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "ELTPR:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "Detail-oriented Software Developer with [X years] of experience in designing, developing, and implementing scalable applications. Proficient in multiple programming languages, including [list languages, e.g., Java, Python, JavaScript], with a strong understanding of software development life cycles and agile methodologies. Adept at collaborating with cross-functional teams to deliver innovative solutions that enhance user experience and drive business success. Committed to continuous learning and staying updated with emerging technologies.",
      },
      {
        sectionId: "ELTPR:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: false,
        sectionName: "Contact",
        list: [
          {
            listId: "ELTPR:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "ELTPR:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "ELTPR:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Mumbai, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "ELTPR:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "ELTPR:PROJECTS:1",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
          {
            listId: "ELTPR:PROJECTS:2",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
        ],
      },
      {
        sectionId: "ELTPR:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "ELTPR:SKILLS:1",
            skillName: "Java",
          },
          {
            listId: "ELTPR:SKILLS:2",
            skillName: "Python",
          },
          {
            listId: "ELTPR:SKILLS:3",
            skillName: "JavaScript",
          },
          {
            listId: "ELTPR:SKILLS:4",
            skillName: "Spring Boot",
          },
        ],
      },
      {
        sectionId: "ELTPR:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "ELTPR:JOB-EXP:1",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Analyst",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
          {
            listId: "ELTPR:JOB-EXP:2",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Analyst",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
        ],
      },
      {
        sectionId: "ELTPR:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "ELTPR:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
        ],
      },
    ],
  },

  //SALES ACHIEVER RESUME TEMPLATE
  {
    id: "SALESACH",
    templateName: "SALES ACHIEVER RESUME",
    element: SalesAchieverResume,
    headingTextFont: "DM Serif Text",
    bodyTextFont: "Inter",
    headingTextColor: "#000",
    themeColor: "#B3CCF1",
    bodyTextColor: "#000000",
    headingTextSize: 18,
    bodyTextSize: 12,
    isPersonaldetailschange: false,
    category: "modern",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Sales Executive",
    subCategory: "sales",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "SALESACH:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "Results-oriented Sales Professional with [X] years of experience leveraging data analytics to drive sales strategies and enhance performance. Expertise in analyzing sales trends, forecasting demand, and utilizing insights to improve sales outcomes. ",
      },
      {
        sectionId: "SALESACH:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact",
        list: [
          {
            listId: "SALESACH:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "SALESACH:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "SALESACH:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Mumbai, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "SALESACH:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "SALESACH:PROJECTS:1",
            projectName: "Sales Performance Optimization",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "Analyzed sales performance data to identify inefficiencies and develop strategies to optimize sales processes.",
          },
          {
            listId: "SALESACH:PROJECTS:2",
            projectName: "Sales Performance Optimization",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "Analyzed sales performance data to identify inefficiencies and develop strategies to optimize sales processes.",
          },
        ],
      },
      {
        sectionId: "SALESACH:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "358574",
            skillName: "Python",
          },
          {
            listId: "358575",
            skillName: " Power BI",
          },
          {
            listId: "358576",
            skillName: "SQL",
          },
          {
            listId: "358577",
            skillName: "HubSpot",
          },
          {
            listId: "358578",
            skillName: "A/B testing",
          },
        ],
      },
      {
        sectionId: "SALESACH:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "SALESACH:JOB-EXP:1",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Sales Analys",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "Analyzed sales data to identify trends and opportunities, resulting in a [X]% increase in sales revenue over [time period].",
          },
          {
            listId: "SALESACH:JOB-EXP:2",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Sales Analys",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "Analyzed sales data to identify trends and opportunities, resulting in a [X]% increase in sales revenue over [time period].",
          },
        ],
      },
      {
        sectionId: "SALESACH:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "SALESACH:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
          {
            listId: "SALESACH:EDUCATION:2",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
        ],
      },
    ],
  },

  //NUEVA TEMPLATE
  {
    id: "NUEVAT",
    templateName: "Nueva Template",
    element: NuevaTemplate,
    headingTextFont: "Raleway",
    bodyTextFont: "Inter",
    headingTextColor: "#5A6160",
    themeColor: "#7FAFA8",
    bodyTextColor: "#000",
    headingTextSize: 18,
    bodyTextSize: 12,
    isPersonaldetailschange: false,
    category: "minimal",
    userName: "Sneha Sharma",
    profileImage: "",
    userJobRole: "Data Analyst",
    subCategory: "dataScientist",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "NUEVAT:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "Detail-oriented Data Scientist with [X] years of experience in interpreting complex data and providing actionable insights. Adept at using a variety of analytical tools and techniques to drive strategic business decisions and optimize operations.",
      },
      {
        sectionId: "NUEVAT:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: false,
        sectionName: "Contact",
        list: [
          {
            listId: "NUEVAT:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "NUEVAT:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "NUEVAT:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Mumbai, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "NUEVAT:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "NUEVAT:PROJECTS:1",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
          {
            listId: "NUEVAT:PROJECTS:2",
            projectName: "Customer Segmentation Analysis",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.</p>",
          },
        ],
      },
      {
        sectionId: "NUEVAT:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "358574",
            skillName: "Python",
          },
          {
            listId: "358575",
            skillName: " Power BI",
          },
          {
            listId: "358576",
            skillName: "SQL",
          },
          {
            listId: "358577",
            skillName: "Agile",
          },
          {
            listId: "358578",
            skillName: "Git and GitHub",
          },
        ],
      },
      {
        sectionId: "NUEVAT:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "NUEVAT:JOB-EXP:1",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Scientist",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
          {
            listId: "NUEVAT:JOB-EXP:2",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Data Scientist",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "<p>Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%.</p>",
          },
        ],
      },
      {
        sectionId: "NUEVAT:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "NUEVAT:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
          {
            listId: "NUEVAT:EDUCATION:2",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
        ],
      },
    ],
  },

  //BORDER CHAIN RESUME TEMPLATE
  {
    id: "BORDERCRT",
    templateName: "Border Chain Resume",
    element: Border_Chain_Resume,
    headingTextFont: "Poppins",
    bodyTextFont: "Mulish",
    headingTextColor: "#000",
    themeColor: "#7FAFA8",
    bodyTextColor: "rgba(0,0,0,0.9)",
    headingTextSize: 18,
    bodyTextSize: 12,
    isPersonaldetailschange: false,
    category: "modern",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Digital Marketing",
    subCategory: "marketing",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "BORDERCRT:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "Dynamic and accomplished professional racing driver with a passion for speed and precision.",
      },
      {
        sectionId: "BORDERCRT:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: false,
        sectionName: "Contact",
        list: [
          {
            listId: "BORDERCRT:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "BORDERCRT:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "BORDERCRT:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Mumbai, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "BORDERCRT:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "BORDERCRT:PROJECTS:1",
            projectName: "Online Shopping Portal",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "Developed a scalable e-commerce platform using Java Spring Boot and Angular, enabling seamless online shopping experiences for users.",
          },
          {
            listId: "BORDERCRT:PROJECTS:2",
            projectName: "Online Shopping Portal",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "Developed a scalable e-commerce platform using Java Spring Boot and Angular, enabling seamless online shopping experiences for users.",
          },
          {
            listId: "BORDERCRT:PROJECTS:3",
            projectName: "Online Shopping Portal",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "Developed a scalable e-commerce platform using Java Spring Boot and Angular, enabling seamless online shopping experiences for users.",
          },
        ],
      },
      {
        sectionId: "BORDERCRT:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "BORDERCRT:SKILLS:1",
            skillName: "Java",
          },
          {
            listId: "BORDERCRT:SKILLS:2",
            skillName: "Python",
          },
          {
            listId: "BORDERCRT:SKILLS:3",
            skillName: "JavaScript",
          },
          {
            listId: "BORDERCRT:SKILLS:4",
            skillName: "Spring Boot",
          },
          {
            listId: "BORDERCRT:SKILLS:5",
            skillName: "Angular",
          },
        ],
      },
      {
        sectionId: "BORDERCRT:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "BORDERCRT:JOB-EXP:1",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Software Developer",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "Developed and maintained scalable web applications using Java Spring Boot and Angular. Designed RESTful APIs to integrate backend services with front-end components. Implemented CI/CD pipelines using Jenkins and Docker for efficient deployment.",
          },
          {
            listId: "BORDERCRT:JOB-EXP:2",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Software Developer",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "Developed and maintained scalable web applications using Java Spring Boot and Angular. Designed RESTful APIs to integrate backend services with front-end components. Implemented CI/CD pipelines using Jenkins and Docker for efficient deployment.",
          },
        ],
      },
      {
        sectionId: "BORDERCRT:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "BORDERCRT:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
          {
            listId: "BORDERCRT:EDUCATION:2",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
          {
            listId: "BORDERCRT:EDUCATION:3",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "<p>Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development.</p>",
          },
        ],
      },
    ],
  },

  //HMATSTEMPLATE
  {
    id: "HMATST",
    templateName: "HMATS Resume Template",
    element: HMATSTamplate,
    headingTextFont: "Oswald",
    bodyTextFont: "Inter",
    headingTextColor: "#000",
    bodyTextColor: "#333",
    headingTextSize: 18,
    bodyTextSize: 12,
    isPersonaldetailschange: false,
    category: "minimal",
    userName: "Sneha Sharma",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Product Manager",
    subCategory: "productManager",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },

    //RESUME DETAILS
    resumeDetails: {
      ATS_Score: 60,
    },

    // SECTIONS
    AllSections: [
      {
        sectionId: "HMATST:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "Results-oriented Product Manager with [X] years of experience in driving product strategy and development through data-driven insights. Expertise in leveraging data analysis and market research to guide product decisions, optimize features.",
      },
      {
        sectionId: "HMATST:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: false,
        sectionName: "Contact",
        list: [
          {
            listId: "HMATST:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "HMATST:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "HMATST:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Mumbai, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "HMATST:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "HMATST:PROJECTS:1",
            projectName: "Online Shopping Portal",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "Developed a scalable e-commerce platform using Java Spring Boot and Angular, enabling seamless online shopping experiences for users.",
          },
        ],
      },
      {
        sectionId: "HMATST:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "358574",
            skillName: "Python",
          },
          {
            listId: "358575",
            skillName: " Power BI",
          },
          {
            listId: "358576",
            skillName: "SQL",
          },
          {
            listId: "358577",
            skillName: "Agile",
          },
          {
            listId: "358578",
            skillName: "Git and GitHub",
          },
        ],
      },
      {
        sectionId: "HMATST:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "HMATST:JOB-EXP:1",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Product Manager",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "Spearheaded the development and launch of [Product Name], utilizing data-driven insights to inform product features and improvements.",
          },
          {
            listId: "HMATST:JOB-EXP:2",
            companyName: "Tech Solutions Pvt. Ltd.",
            jobRole: "Product Manager",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "Spearheaded the development and launch of [Product Name], utilizing data-driven insights to inform product features and improvements.",
          },
        ],
      },
      {
        sectionId: "HMATST:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "HMATST:EDUCATION:1",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "May 2017",
            endDate: "May 2020",
            aboutEducation:
              "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development. Developed strong analytical and problem-solving skills through practical projects and internships, contributing to a solid foundation in software development.",
          },
          {
            listId: "HMATST:EDUCATION:2",
            collegeName: "Mumbai University",
            course: "Bachelor of Technology in Computer Science",
            startDate: "May 2017",
            endDate: "May 2020",
            aboutEducation:
              "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development. Developed strong analytical and problem-solving skills through practical projects and internships, contributing to a solid foundation in software development.",
          },
        ],
      },
    ],
  },

  //BLUE AND WHITE CLEAN PROFESSIONAL RESUME
  {
    id: "BAWCAPR",
    templateName: "ATS Friendly",
    element: Blue_and_White_Clean_and_Professional_Resume,
    userName: "Aria Sterling",
    headingTextFont: "Oswald",
    bodyTextFont: "Inter",
    headingTextColor: "#00366D",
    bodyTextColor: "#333",
    headingTextSize: 18,
    bodyTextSize: 12,
    isPersonaldetailschange: false,
    category: "minimal",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "UI/UX Designer",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    pages: 2,
    AllSections: [
      {
        sectionId: "BAWCAPR:ABOUT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "About Me",
        summary:
          "In the bustling city of Arcadia, a young inventor named Theo discovers an ancient artifact buried beneath the ruins of an old library. As he unlocks its secrets, Theo finds himself drawn into a world of magic and mystery, where he must navigate treacherous alliances and confront dark forces to save his home from impending doom.",
      },
      {
        sectionId: "BAWCAPR:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: false,
        sectionName: "Contact Me",
        list: [
          {
            listId: "BAWCAPR:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "sneha.sharma@email.com",
            additionalLink: "",
          },
          {
            listId: "BAWCAPR:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+91-XXXXXXXXXX",
            additionalLink: "",
          },
          {
            listId: "BAWCAPR:CONTACT:3",
            iconName: "fa-solid fa-location-dot",
            contactName: "123 Main Street, Mumbai, Maharashtra, India",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "BAWCAPR:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "BAWCAPR:PROJECTS:1",
            projectName: "NexusVerse",
            startDate: "10-12-2020",
            endDate: "12-12-2020",
            aboutProject:
              "NexusVerse is a collaborative virtual reality platform that brings people together from all corners of the globe to explore, create, and connect in a shared digital universe.",
          },
          {
            listId: "BAWCAPR:PROJECTS:2",
            projectName: "NexusVerse",
            startDate: "10-12-2020",
            endDate: "12-12-2020",
            aboutProject:
              "NexusVerse is a collaborative virtual reality platform that brings people together from all corners of the globe to explore, create, and connect in a shared digital universe.",
          },
        ],
      },
      {
        sectionId: "BAWCAPR:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "BAWCAPR:SKILLS:1",
            skillName: "Figma",
          },
          {
            listId: "BAWCAPR:SKILLS:2",
            skillName: "Adobe Photoshop",
          },
          {
            listId: "BAWCAPR:SKILLS:3",
            skillName: "Canva",
          },
          {
            listId: "BAWCAPR:SKILLS:4",
            skillName: "Coreldraw",
          },
        ],
      },
      {
        sectionId: "BAWCAPR:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "BAWCAPR:JOB-EXP:1",
            companyName: "Stellar Innovations",
            jobRole: "UI/UX Designer",
            startDate: "2021",
            endDate: "2024",
            aboutJob:
              "At Stellar Innovations, we're seeking a dynamic Marketing Analyst to join our team. In this role, you'll be responsible for conducting market research, analyzing consumer behavior, and identifying new opportunities to drive growth and enhance our brand presence. ",
          },
        ],
      },
      {
        sectionId: "BAWCAPR:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "BAWCAPR:EDUCATION:1",
            collegeName: "Horizon Institute of Technology (HIT)",
            course: "B.Tech",
            startDate: "2014",
            endDate: "2018",
            aboutEducation:
              "Pursuing a Bachelor of Technology (BTech) degree at Horizon Institute of Technology (HIT) is a transformative journey filled with academic excellence, hands-on learning, and personal growth. Our comprehensive curriculum blends theoretical knowledge with practical application, equipping students with the skills and expertise needed to excel in their chosen field. ",
          },
        ],
      },
    ],
  },

  //ELEGANT RESUME TEMPLATE
  {
    id: "ERT1",
    templateName: "Elegant Resume Template",
    element: Elegant_Resume_Template,
    headingTextFont: "Montserrat Alternates",
    bodyTextFont: "Montserrat",
    headingTextColor: "#000",
    bodyTextColor: "#333",
    headingTextSize: 18,
    bodyTextSize: 12,
    isPersonaldetailschange: false,
    category: "modern",
    userName: "Oliver Greene",
    profileImage: "",
    userJobRole: "Graphic Designer",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "ERT1:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "Passionate and innovative graphic designer with a keen eye for detail and a flair for creativity. Specialized in branding, logo design, and digital illustration. Committed to delivering visually stunning solutions that resonate with target audiences and elevate brand identities.",
      },
      {
        sectionId: "ERT1:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact Me",
        list: [
          {
            listId: "ERT1:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "oliver.greene@email.com",
          },
          {
            listId: "ERT1:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+1 (555) 123-4567",
          },
        ],
      },
      {
        sectionId: "ERT1:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "ERT1:PROJECTS:1",
            projectName: "Pixel Fusion",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "Pixel Fusion was a comprehensive branding project for a tech startup aimed at integrating cutting-edge technology with everyday life.",
          },
          {
            listId: "ERT1:PROJECTS:2",
            projectName: "Pixel Fusion",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "Pixel Fusion was a comprehensive branding project for a tech startup aimed at integrating cutting-edge technology with everyday life.",
          },
          {
            listId: "ERT1:PROJECTS:3",
            projectName: "Pixel Fusion",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "Pixel Fusion was a comprehensive branding project for a tech startup aimed at integrating cutting-edge technology with everyday life.",
          },
        ],
      },
      {
        sectionId: "ERT1:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "ERT1:SKILLS:1",
            skillName: "Adobe Creative",
          },
          {
            listId: "ERT1:SKILLS:2",
            skillName: "Digital Illustration",
          },
          {
            listId: "ERT1:SKILLS:3",
            skillName: "Print Design",
          },
        ],
      },
      {
        sectionId: "ERT1:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "ERT1:JOB-EXP:1",
            companyName: "Creative Minds Agency",
            jobRole: "Senior Graphic Designer",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "As a Senior Graphic Designer at Creative Minds Agency, I led a team of designers in conceptualizing and executing various design projects for a diverse range of clients. My responsibilities included overseeing the entire design process from initial ideation to final execution.",
          },
          {
            listId: "ERT1:JOB-EXP:2",
            companyName: "Creative Minds Agency",
            jobRole: "Senior Graphic Designer",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "As a Senior Graphic Designer at Creative Minds Agency, I led a team of designers in conceptualizing and executing various design projects for a diverse range of clients. My responsibilities included overseeing the entire design process from initial ideation to final execution.",
          },
          {
            listId: "ERT1:JOB-EXP:3",
            companyName: "Creative Minds Agency",
            jobRole: "Senior Graphic Designer",
            startDate: "2019",
            endDate: "2021",
            aboutJob:
              "As a Senior Graphic Designer at Creative Minds Agency, I led a team of designers in conceptualizing and executing various design projects for a diverse range of clients. My responsibilities included overseeing the entire design process from initial ideation to final execution.",
          },
        ],
      },
      {
        sectionId: "ERT1:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "ERT1:EDUCATION:1",
            collegeName: "Art Institute of New York City",
            course: "B.A. Graphics",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "Bachelor of Fine Arts in Graphic Design (Art Institute of New York City, New York) Obtained a comprehensive understanding of graphic design principles, including typography, color theory, and layout design.",
          },
          {
            listId: "ERT1:EDUCATION:2",
            collegeName: "Art Institute of New York City",
            course: "B.A. Graphics",
            startDate: "2017",
            endDate: "2020",
            aboutEducation:
              "Bachelor of Fine Arts in Graphic Design (Art Institute of New York City, New York) Obtained a comprehensive understanding of graphic design principles, including typography, color theory, and layout design.",
          },
        ],
      },
    ],
  },

  //BLUE MODERN TEMPLATE
  {
    id: "BLUEMT",
    templateName: "HMATSTamplate",
    element: BlueModernTemplate,
    headingTextFont: "Kanit",
    bodyTextFont: "Inter",
    headingTextColor: "#333",
    bodyTextColor: "#000",
    headingTextSize: 18,
    bodyTextSize: 12,
    isPersonaldetailschange: false,
    category: "modern",
    userName: "Ravi Patel",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Business Development Executive ",
    subCategory: "BDE",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "BLUEMT:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Results-oriented Business Development Executive with [X] years of experience in driving sales growth, building client relationships, and identifying new market opportunities. Proven track record in achieving targets and enhancing company reputation.</p>",
      },
      {
        sectionId: "BLUEMT:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: false,
        sectionName: "Contact Me",
        list: [
          {
            listId: "BLUEMT:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "ravipatel34@email.com",
            additionalLink: "",
          },
          {
            listId: "BLUEMT:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+1 (555) 123-4567",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "BLUEMT:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "BLUEMT:PROJECTS:1",
            projectName: "Market Expansion Initiative",
            startDate: "2022",
            endDate: "2023",
            aboutProject:
              "<p>Led a project to identify and penetrate new market segments, resulting in a 25% increase in overall sales within a year.</p>",
          },
          {
            listId: "BLUEMT:PROJECTS:2",
            projectName: "Client Relationship Management System",
            startDate: "2021",
            endDate: "2022",
            aboutProject:
              "<p>Implemented a CRM system to streamline communication with clients, improving client retention rates by 30%.</p>",
          },
        ],
      },
      {
        sectionId: "BLUEMT:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "358574",
            skillName: "Sales Strategy",
          },
          {
            listId: "358575",
            skillName: "Market Research",
          },
          {
            listId: "358576",
            skillName: "Negotiation",
          },
          {
            listId: "358577",
            skillName: "Client Relationship Management",
          },
          {
            listId: "358578",
            skillName: "Presentation Skills",
          },
        ],
      },
      {
        sectionId: "BLUEMT:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "BLUEMT:JOB-EXP:1",
            companyName: "ABC Corporation",
            jobRole: "Business Development Executive",
            startDate: "2019",
            endDate: "2024",
            aboutJob:
              "<p><li>Developed and executed strategies to drive new business, resulting in a [X]% increase in annual revenue.</li><li> Collaborated with marketing teams to create compelling sales materials.</li></p>",
          },
          {
            listId: "BLUEMT:JOB-EXP:2",
            companyName: "XYZ Solutions",
            jobRole: "Sales Associate",
            startDate: "2017",
            endDate: "2019",
            aboutJob:
              "<p><li>Managed a portfolio of clients, focusing on upselling and cross-selling products and services.</li><li> Achieving a [X]% increase in customer lifetime value.</li></p>",
          },
          {
            listId: "BLUEMT:JOB-EXP:3",
            companyName: "Startup Innovations",
            jobRole: "Business Development Intern",
            startDate: "2016",
            endDate: "2017",
            aboutJob:
              "<p><li>Assisted the business development team in conducting market research and analyzing sales data to identify potential growth areas</li></p>.",
          },
        ],
      },
      {
        sectionId: "BLUEMT:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "BLUEMT:EDUCATION:1",
            collegeName: "University of Business Studies",
            course: "Bachelor of Business Administration",
            startDate: "2012",
            endDate: "2016",
            aboutEducation:
              "<p>Graduated with a degree in Business Administration, focusing on Marketing and Sales Strategies. Participated in various business case competitions.</p>",
          },
          {
            listId: "BLUEMT:EDUCATION:2",
            collegeName: "University of Business Studies",
            course: "Bachelor of Business Administration",
            startDate: "2012",
            endDate: "2016",
            aboutEducation:
              "<p>Graduated with a degree in Business Administration, focusing on Marketing and Sales Strategies. Participated in various business case competitions.</p>",
          },
        ],
      },
      {
        sectionId: "BLUEMT:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Language",
        list: [
          {
            listId: "BLUEMT:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100
          },
          {
            listId: "BLUEMT:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100
          },
        ]
      },
      {
        sectionId: "BLUEMT:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interest",
        list: [
          {
            listId: "BLUEMT:INTEREST:1",
            interest: "Networking Events"
          },
          {
            listId: "BLUEMT:INTEREST:2",
            interest: "Reading Business Books"
          },
          {
            listId: "BLUEMT:INTEREST:3",
            interest: "Traveling"
          },
        ]
      },
      {
        sectionId: "BLUEMT:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certification",
        list: [
          {
            listId: "BLUEMT:CERTIFICATION:1",
            certificateName: "Certified Business Development Professional",
            instituteName: "Institute of Business Development",
            startDate: "2021",
            endDate: "2021",
            aboutCertificate: "<p>Completed a comprehensive program focusing on business development strategies, sales techniques, and client relationship management.</p>"
          },
          {
            listId: "BLUEMT:CERTIFICATION:2",
            certificateName: "Sales Management Certification",
            instituteName: "Sales Academy",
            startDate: "2020",
            endDate: "2020",
            aboutCertificate: "<p>Achieved certification in sales management, enhancing skills in leading sales teams and strategies for client acquisition.</p>"
          },
        ]
      },
    ],

  },

  //GRAY THEME TEMPLATE
  {
    id: "templateid1234",
    templateName: "Gray Theme Template",
    element: GrayThemeTemplate,
    userName: "Priya Sharma",
    headingTextFont: "Poppins",
    bodyTextFont: "Mulish",
    headingTextColor: "#333",
    themeColor: "#737373",
    bodyTextColor: "#000",
    headingTextSize: 18,
    bodyTextSize: 12,
    isPersonaldetailschange: false,
    category: "ats-friendly",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Web Developer",
    subCategory: "SoftwareDeveloper",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "sectionId321",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Profile",
        summary:
          "<p>Passionate and skilled Web Developer with over 4 years of experience in creating dynamic, user-friendly websites and applications. Proficient in both front-end and back-end technologies, with a strong focus on responsive design and performance optimization.</p>",
      },
      {
        sectionId: "sectionId321cont",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Contact Me",
        list: [
          {
            listId: "24",
            iconName: "fa-solid fa-phone",
            contactName: "(321) 654-0987",
            additionalLink: "",
          },
          {
            listId: "25",
            iconName: "fa-solid fa-location-dot",
            contactName: "789 Developer Lane, Code City, USA",
            additionalLink: "",
          },
          {
            listId: "26",
            iconName: "fa-solid fa-envelope",
            contactName: "john.doe@email.com",
            additionalLink: "",
          },
          {
            listId: "27",
            iconName: "fa-solid fa-link",
            contactName: "johndoedev.com",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "5657",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "6d4",
            projectName: "E-Commerce Website",
            startDate: "2022",
            endDate: "2023",
            aboutProject:
              "<p>Developed a responsive e-commerce website using React for the front end and Node.js for the back end. Implemented features like shopping cart, payment gateway integration, and user authentication using JWT.</p>",
          },
          {
            listId: "6d5",
            projectName: "Personal Portfolio",
            startDate: "2021",
            endDate: "2021",
            aboutProject:
              "<p>Created a personal portfolio website to showcase my skills and projects using HTML, CSS, and JavaScript. Focused on responsive design and user experience.</p>",
          },
          {
            listId: "6d6",
            projectName: "Blog Application",
            startDate: "2020",
            endDate: "2021",
            aboutProject:
              "<p>Built a full-featured blog application using Vue.js and Firebase, enabling users to create, read, update, and delete blog posts with real-time updates.</p>",
          },
        ],
      },
      {
        sectionId: "54545",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "358574",
            skillName: "HTML5",
          },
          {
            listId: "358575",
            skillName: "CSS3",
          },
          {
            listId: "358576",
            skillName: "JavaScript",
          },
          {
            listId: "358577",
            skillName: "React.js",
          },
          {
            listId: "358578",
            skillName: "Node.js",
          },
          {
            listId: "358579",
            skillName: "Express.js",
          },
          {
            listId: "358580",
            skillName: "MongoDB",
          },
          {
            listId: "358581",
            skillName: "Git and GitHub",
          },
          {
            listId: "358582",
            skillName: "Agile Methodologies",
          },
        ],
      },
      {
        sectionId: "573x",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "5tgfr",
            companyName: "Web Innovations Inc., Code Valley, CV",
            jobRole: "Web Developer",
            startDate: "2020",
            endDate: "2024",
            aboutJob:
              "<p>Developed high-quality web applications and collaborated with designers and product managers to implement user-centric features. Focused on performance and scalability.</p>",
          },
          {
            listId: "5tgft",
            companyName: "Tech Solutions Co., Webtown, WD",
            jobRole: "Junior Web Developer",
            startDate: "2018",
            endDate: "2020",
            aboutJob:
              "<p>Assisted in the development and maintenance of client websites, utilizing HTML, CSS, and JavaScript to create engaging user experiences.</p>",
          },
          {
            listId: "5tgfu",
            companyName: "Startup Tech Labs, Innovate City, IC",
            jobRole: "Web Development Intern",
            startDate: "2017",
            endDate: "2018",
            aboutJob:
              "<p>Participated in coding projects, focusing on front-end development. Gained experience in version control and Agile development practices.</p>",
          },
        ],
      },
      {
        sectionId: "ed46f",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "33dd34",
            collegeName: "Web Development Academy",
            course: "Full Stack Web Developer Bootcamp",
            startDate: "2016",
            endDate: "2017",
            aboutEducation:
              "<p>Completed an intensive bootcamp focusing on full stack development, covering both front-end and back-end technologies. Developed multiple projects that enhanced practical skills in web development.</p>",
          },
          {
            listId: "33dd35",
            collegeName: "Anytown University",
            course: "Bachelor of Science in Computer Science",
            startDate: "2013",
            endDate: "2016",
            aboutEducation:
              "<p>Relevant coursework included Web Development, Software Engineering, and Database Management Systems. Involved in student-led tech projects and hackathons.</p>",
          },
        ],
      },
      {
        sectionId: "sectionId321:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Language",
        list: [
          {
            listId: "sectionId321:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100
          },
          {
            listId: "sectionId321:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100
          },
        ]
      },
      {
        sectionId: "sectionId321:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interest",
        list: [
          {
            listId: "sectionId321:INTEREST:1",
            interest: "Web Development"
          },
          {
            listId: "sectionId321:INTEREST:2",
            interest: "Tech Blogging"
          },
          {
            listId: "PROWEDERETEsectionId321:INTEREST:3",
            interest: "Open Source Contributions"
          },
        ]
      },
      {
        sectionId: "sectionId321:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certification",
        list: [
          {
            listId: "sectionId321:CERTIFICATION:1",
            certificateName: "Certified Full Stack Web Developer",
            instituteName: "Web Development Academy",
            startDate: "2017",
            endDate: "2017",
            aboutCertificate: "<p>Received certification for completing a full stack web development program, demonstrating proficiency in both front-end and back-end development.</p>"
          },
          {
            listId: "sectionId321:CERTIFICATION:2",
            certificateName: "JavaScript Developer Certification",
            instituteName: "Tech Institute",
            startDate: "2018",
            endDate: "2018",
            aboutCertificate: "<p>Completed a certification course focused on advanced JavaScript concepts and frameworks.</p>"
          }
        ]
      }
    ]

  },

  //FTHEME TEMPLATE
  {
    id: "templateid12342",
    templateName: "F Theme Template",
    element: FThemeTemplate,
    userName: "Emily Smith",
    headingTextFont: "Poppins",
    bodyTextFont: "Mulish",
    headingTextColor: "#333",
    bodyTextColor: "#000",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "ats-friendly",
    profileImage: "",
    userJobRole: "Web Developer",
    subCategory: "softwareDeveloper",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "sectionId321",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Results-driven Web Developer with over 6 years of experience in creating responsive and user-friendly websites. Skilled in both front-end and back-end technologies, with a strong focus on optimizing user experience. Proven track record of delivering projects on time and collaborating effectively with teams to solve complex challenges and meet client objectives.</p>",
      },
      {
        sectionId: "sectionId321cont",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Contact Me",
        list: [
          {
            listId: "24",
            iconName: "fa-solid fa-phone",
            contactName: "(987) 654-3210",
            additionalLink: "",
          },
          {
            listId: "25",
            iconName: "fa-solid fa-location-dot",
            contactName: "456 Developer Lane, Code City",
            additionalLink: "",
          },
          {
            listId: "26",
            iconName: "fa-solid fa-envelope",
            contactName: "john.doe@example.com",
            additionalLink: "",
          },
          {
            listId: "27",
            iconName: "fa-solid fa-link",
            contactName: "johndoeportfolio.com",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "5657",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "6d3",
            projectName: "Online Learning Platform",
            startDate: "2022",
            endDate: "2023",
            aboutProject:
              "<p>Developed an online learning platform using Vue.js for the front end and Django for the back end. Implemented user authentication, course management features, and integrated payment gateways to enhance user experience. Utilized RESTful APIs for seamless data flow and deployed the application using AWS services.</p>",
          },
          {
            listId: "6d4",
            projectName: "Travel Booking Website",
            startDate: "2021",
            endDate: "2021",
            aboutProject:
              "<p>Led the development of a travel booking website using Angular and Firebase. Designed intuitive user interfaces, implemented real-time booking features, and optimized performance for mobile devices. Collaborated with designers to create a responsive layout and conducted user testing to refine the final product.</p>",
          },
        ],
      },
      {
        sectionId: "54545",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "358574",
            skillName: "JavaScript",
          },
          {
            listId: "358575",
            skillName: "CSS3",
          },
          {
            listId: "358576",
            skillName: "HTML5",
          },
          {
            listId: "358577",
            skillName: "Node.js",
          },
          {
            listId: "358578",
            skillName: "Ruby on Rails",
          },
          {
            listId: "358579",
            skillName: "PostgreSQL",
          },
          {
            listId: "358580",
            skillName: "Express.js",
          },
          {
            listId: "358581",
            skillName: "RESTful APIs",
          },
          {
            listId: "358582",
            skillName: "Git and GitHub",
          },
          {
            listId: "358583",
            skillName: "Agile Methodologies",
          },
        ],
      },
      {
        sectionId: "573x",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "5tgfr",
            companyName: "Innovative Tech Solutions, Code Town, CT",
            jobRole: "Lead Web Developer",
            startDate: "2020",
            endDate: "2024",
            aboutJob:
              "<p>Oversaw the development of multiple web applications, leading a team of developers to implement best practices in coding and design. Improved application performance by 25% through code optimization and database management. Collaborated with cross-functional teams to identify requirements and deliver solutions that met business goals.</p>",
          },
          {
            listId: "5tgft",
            companyName: "Dynamic Web Designs, Tech City, TC",
            jobRole: "Junior Web Developer",
            startDate: "2018",
            endDate: "2020",
            aboutJob:
              "<p>Assisted in the development and maintenance of client websites, focusing on responsive design and user interface enhancements. Worked closely with senior developers to troubleshoot issues and implement new features. Gained experience in version control and project management tools to streamline the development process.</p>",
          },
          {
            listId: "5tgfv",
            companyName: "Creative Web Studio, Build Town, BT",
            jobRole: "Web Development Intern",
            startDate: "2017",
            endDate: "2018",
            aboutJob:
              "<p>Contributed to various web projects as part of a collaborative team. Developed basic HTML/CSS layouts and assisted in front-end development tasks. Learned about Agile methodologies and participated in daily stand-ups and sprint planning.</p>",
          },
        ],
      },
      {
        sectionId: "ed46f",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "33dd33",
            collegeName: "Code Academy",
            course: "Full Stack Web Development Program",
            startDate: "2016",
            endDate: "2017",
            aboutEducation:
              "<p>Completed a comprehensive Full Stack Web Development Program at Code Academy, gaining expertise in both front-end and back-end technologies. Hands-on projects involved building full-fledged web applications and implementing user authentication, enhancing my coding skills and problem-solving abilities.</p>",
          },
          {
            listId: "33dd34",
            collegeName: "State University",
            course: "Bachelor of Science in Information Technology",
            startDate: "2012",
            endDate: "2016",
            aboutEducation:
              "<p>Relevant coursework included Web Development, Software Engineering, and Database Management. Participated in various tech clubs and coding competitions, further honing my programming skills.</p>",
          },
        ],

      },
      {
        sectionId: "PROWEDERETE:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Language",
        list: [
          {
            listId: "PROWEDERETE:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100
          },
          {
            listId: "PROWEDERETE:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100
          },
        ]
      },
      {
        sectionId: "PROWEDERETE:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interest",
        list: [
          {
            listId: "PROWEDERETE:INTEREST:1",
            interest: "Gaming"
          },
          {
            listId: "PROWEDERETE:INTEREST:2",
            interest: "Movies"
          },
        ]
      },
      {
        sectionId: "PROWEDERETE:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certification",
        list: [
          {
            listId: "PROWEDERETE:CERTIFICATION",
            certificateName: "",
            instituteName: "",
            startDate: "",
            endDate: "",
            aboutCertificate: ""
          }
        ]
      }
    ],
  },

  //BEIGE TEMPLATE
  {
    id: "ERT451",
    templateName: "Beige Resume Template",
    element: BeigeTemplate,
    headingTextFont: "Montserrat Alternates",
    bodyTextFont: "Montserrat",
    headingTextColor: "#000",
    bodyTextColor: "#333",
    themeColor: "#f36e45",
    headingTextSize: 14,
    bodyTextSize: 10,
    isPersonaldetailschange: false,
    category: "creative",
    userName: "Oliver Greene",
    profileImage:
      "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    userJobRole: "Graphic Designer",
    subCategory: "graphicDesigner",
    isQRCode: false,
    resumeStyle: {
      backgroundPattern: false,
    },
    resumeDetails: {
      ATS_Score: 90,
    },
    AllSections: [
      {
        sectionId: "ERT1:SUMMARY",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Summary",
        summary:
          "<p>Passionate and innovative graphic designer with a keen eye for detail and a flair for creativity. Specialized in branding, logo design, and digital illustration. Committed to delivering visually stunning solutions that resonate with target audiences and elevate brand identities.</p>",
      },
      {
        sectionId: "ERT1:CONTACT",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionVisible: true,
        sectionName: "Contact Me",
        list: [
          {
            listId: "ERT1:CONTACT:1",
            iconName: "fa-solid fa-envelope",
            contactName: "oliver.greene@email.com",
            additionalLink: "",
          },
          {
            listId: "ERT1:CONTACT:2",
            iconName: "fa-solid fa-phone",
            contactName: "+1 (555) 123-4567",
            additionalLink: "",
          },
        ],
      },
      {
        sectionId: "ERT1:PROJECTS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Projects",
        list: [
          {
            listId: "ERT1:PROJECTS:1",
            projectName: "Pixel Fusion",
            startDate: "March, 2020",
            endDate: "June, 2021",
            aboutProject:
              "<p>Pixel Fusion was a comprehensive branding project for a tech startup aimed at integrating cutting-edge technology with everyday life.</p>",
          },
          {
            listId: "ERT1:PROJECTS:2",
            projectName: "Visual Nexus",
            startDate: "May, 2022",
            endDate: "August, 2023",
            aboutProject:
              "<p>Visual Nexus was a rebranding project for a digital marketing agency, emphasizing innovative strategies and a fresh visual identity to enhance client engagement.</p>"
          }
        ],
      },
      {
        sectionId: "ERT1:SKILLS",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Skills",
        list: [
          {
            listId: "ERT1:SKILLS:1",
            skillName: "Adobe Creative",
          },
          {
            listId: "ERT1:SKILLS:2",
            skillName: "CorelDRAW",
          },
          {
            listId: "ERT1:SKILLS:3",
            skillName: "Photoshop",
          },
        ],
      },
      {
        sectionId: "ERT1:JOB-EXP",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Job Experience",
        list: [
          {
            listId: "ERT1:JOB-EXP:1",
            companyName: "Creative Minds Agency",
            jobRole: "Graphic Designer",
            startDate: "June, 2019",
            endDate: "June, 2021",
            aboutJob:
              "<p>As a Senior Graphic Designer at Creative Minds Agency, I led a team of designers in conceptualizing and executing various design projects for a diverse range of clients. My responsibilities included overseeing the entire design process from initial ideation to final execution.</p>",
          },
          {
            listId: "ERT1:JOB-EXP:2",
            companyName: "Digital IT Solutions",
            jobRole: "Senior Graphic Designer",
            startDate: "May, 2019",
            endDate: "July, 2021",
            aboutJob:
              "<p>As a Senior Graphic Designer at Creative Minds Agency, I led a talented team of designers in conceptualizing and executing a wide array of design projects for a diverse clientele. My role involved overseeing the entire design process, from the initial ideation stage to final execution, ensuring that each project met client expectations and adhered to our high-quality standards.</p>",
          },
        ],
      },
      {
        sectionId: "ERT1:EDUCATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Education",
        list: [
          {
            listId: "ERT1:EDUCATION:1",
            collegeName: "Art Institute of New York City",
            course: "B.A. Graphics",
            startDate: "March, 2017",
            endDate: "April, 2020",
            aboutEducation:
              "<p>Bachelor of Fine Arts in Graphic Design (Art Institute of New York City, New York) Obtained a comprehensive understanding of graphic design principles, including typography, color theory, and layout design.</p>",
          },
          {
            listId: "ERT1:EDUCATION:2",
            collegeName: "Rhode Island School of Design",
            course: "B.F.A. in Graphic Design",
            startDate: "March, 2016",
            endDate: "July, 2019",
            aboutEducation:
              "<p>Bachelor of Fine Arts in Graphic Design (Rhode Island School of Design, Providence) Developed expertise in visual communication, branding, and interactive design.</p>"
          },
          {
            listId: "ERT1:EDUCATION:3",
            collegeName: "California College of the Arts",
            course: "B.A. in Graphic Design",
            startDate: "June, 2015",
            endDate: "August, 2018",
            aboutEducation:
              "<p>Bachelor of Arts in Graphic Design (California College of the Arts, San Francisco) Gained a solid foundation in design theory, digital media, and project management.</p>"
          }
        ],
      },
      {
        sectionId: "ERT1:LANGUAGE",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Language",
        list: [
          {
            listId: "ERT1:LANGUAGE:1",
            languageName: "Hindi",
            languageProfiency: 100
          },
          {
            listId: "ERT1:LANGUAGE:2",
            languageName: "English",
            languageProfiency: 100
          },
        ]
      },
      {
        sectionId: "ERT1:INTEREST",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Interest",
        list: [
          {
            listId: "ERT1:INTEREST:1",
            interest: "Gaming"
          },
          {
            listId: "ERT1:INTEREST:2",
            interest: "Movies"
          },
        ]
      },
      {
        sectionId: "ERT1:CERTIFICATION",
        isSection: true,
        isSectionDetailsChanges: false,
        sectionName: "Certification",
        list: [
          {
            listId: "ERT1:CERTIFICATION",
            certificateName: "",
            instituteName: "",
            startDate: "",
            endDate: "",
            aboutCertificate: ""
          }
        ]
      }
    ],
  },
];

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
// import Box_Style_Resume from "./Box Style Resume/Box_Style_Resume";
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
// import Big_image_Typography_Template from "./Big Image Typography Template/Big_image_Typography_Template";
import White_Background_Resume_Template from "./White Background Resume Template/White_Background_Resume_Template";


export const TemplateData = [

    //WHITE BACKGRAUND RESUME TEMPLATE
    {
        id: "WHBARETE",
        templateName: "White Background Resume Template",
        element: White_Background_Resume_Template,
        headingTextFont: "Space Grotesk",
        bodyTextFont: "Inter",
        headingTextColor: "#000",
        themeColor: "#B0B0B0",
        bodyTextColor: "#000",
        headingTextSize: 22,
        bodyTextSize: 13,
        category: "modern",
        userName: "Sneha Sharma",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Data Analyst",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "WHBARETE:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights.Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights"
            },
            {
                sectionId: "WHBARETE:CONTACT",
                isSection: true,
                sectionVisible: true,
                sectionName: "Contact",
                list: [
                    {
                        listId: "WHBARETE:CONTACT:1",
                        iconName: "fa-regular fa-at",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "WHBARETE:CONTACT:2",
                        iconName: "fa-regular fa-phone-flip",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "WHBARETE:CONTACT:3",
                        iconName: "fa-regular fa-location-dot",
                        contactName: "123 Main Street, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "WHBARETE:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "WHBARETE:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly"
                    }
                ]
            },
            {
                sectionId: "WHBARETE:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "WHBARETE:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "WHBARETE:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "WHBARETE:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "WHBARETE:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "WHBARETE:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "WHBARETE:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "WHBARETE:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    }
                ]
            },
            {
                sectionId: "WHBARETE:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "WHBARETE:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "WHBARETE:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    }
                ]
            }
        ]
    },

    //BIG IMAGE TYPOGRAPHY TEMPLATE
    // {
    //     id: "BIIMTYTE",
    //     templateName: "Big Image Typography Template",
    //     element: Big_image_Typography_Template,
    //     headingTextFont: "Space Grotesk",
    //     bodyTextFont: "Inter",
    //     headingTextColor: "#000",
    //     themeColor: "#404040",
    //     bodyTextColor: "#000",
    //     headingTextSize: 22,
    //     bodyTextSize: 13,
    //     category: "modern",
    //     userName: "Sneha Sharma",
    //     profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    //     userJobRole: "Data Analyst",
    //     isQRCode: false,
    //     resumeStyle: {
    //         backgroundPattern: false
    //     },
    //     resumeDetails: {
    //         ATS_Score: 90
    //     },
    //     AllSections: [
    //         {
    //             sectionId: "BIIMTYTE:SUMMARY",
    //             isSection: true,
    //             sectionName: "Summary",
    //             summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights."
    //         },
    //         {
    //             sectionId: "BIIMTYTE:CONTACT",
    //             isSection: true,
    //             sectionVisible: true,
    //             sectionName: "Contact",
    //             list: [
    //                 {
    //                     listId: "BIIMTYTE:CONTACT:1",
    //                     iconName: "fa-regular fa-at",
    //                     contactName: "sneha.sharma@email.com"
    //                 },
    //                 {
    //                     listId: "BIIMTYTE:CONTACT:2",
    //                     iconName: "fa-regular fa-phone-flip",
    //                     contactName: "+91-XXXXXXXXXX"
    //                 },
    //                 {
    //                     listId: "BIIMTYTE:CONTACT:3",
    //                     iconName: "fa-regular fa-location-dot",
    //                     contactName: "123 Main Street, Maharashtra, India"
    //                 },
    //             ]
    //         },
    //         {
    //             sectionId: "BIIMTYTE:PROJECTS",
    //             isSection: true,
    //             sectionName: "Projects",
    //             list: [
    //                 {
    //                     listId: "BIIMTYTE:PROJECTS:1",
    //                     projectName: "Customer Segmentation Analysis",
    //                     startDate: "2020",
    //                     endDate: "2021",
    //                     aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly"
    //                 }
    //             ]
    //         },
    //         {
    //             sectionId: "BIIMTYTE:SKILLS",
    //             isSection: true,
    //             sectionName: "Skills",
    //             list: [
    //                 {
    //                     listId: "BIIMTYTE:SKILLS:1",
    //                     skillName: "Java"
    //                 },
    //                 {
    //                     listId: "BIIMTYTE:SKILLS:2",
    //                     skillName: "Python"
    //                 },
    //                 {
    //                     listId: "BIIMTYTE:SKILLS:3",
    //                     skillName: "JavaScript"
    //                 },
    //                 {
    //                     listId: "BIIMTYTE:SKILLS:4",
    //                     skillName: "Spring Boot"
    //                 }
    //             ]
    //         },
    //         {
    //             sectionId: "BIIMTYTE:JOB-EXP",
    //             isSection: true,
    //             sectionName: "Job Experience",
    //             list: [
    //                 {
    //                     listId: "BIIMTYTE:JOB-EXP:1",
    //                     companyName: "Tech Solutions Pvt. Ltd.",
    //                     jobRole: "Data Analyst",
    //                     startDate: "2019",
    //                     endDate: "2021",
    //                     aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
    //                 }
    //             ]
    //         },
    //         {
    //             sectionId: "BIIMTYTE:EDUCATION",
    //             isSection: true,
    //             sectionName: "Education",
    //             list: [
    //                 {
    //                     listId: "BIIMTYTE:EDUCATION:2",
    //                     collegeName: "Mumbai University",
    //                     course: "Bachelor of Technology in Computer Science",
    //                     startDate: "2017",
    //                     endDate: "2020",
    //                     aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
    //                 }
    //             ]
    //         }
    //     ]
    // },

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
        headingTextSize: 22,
        bodyTextSize: 13,
        category: "minimal",
        userName: "Sneha Sharma",
        profileImage: "",
        userJobRole: "Data Analyst",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "AFBORETE:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights."
            },
            {
                sectionId: "AFBORETE:CONTACT",
                isSection: true,
                sectionVisible: true,
                sectionName: "Contact",
                list: [
                    {
                        listId: "AFBORETE:CONTACT:1",
                        iconName: "fa-regular fa-at",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "AFBORETE:CONTACT:2",
                        iconName: "fa-regular fa-phone-flip",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "AFBORETE:CONTACT:3",
                        iconName: "fa-regular fa-location-dot",
                        contactName: "123 Main Street, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "AFBORETE:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "AFBORETE:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly"
                    }
                ]
            },
            {
                sectionId: "AFBORETE:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "AFBORETE:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "AFBORETE:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "AFBORETE:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "AFBORETE:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "AFBORETE:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "AFBORETE:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    }
                ]
            },
            {
                sectionId: "AFBORETE:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "AFBORETE:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "AFBORETE:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    }
                ]
            }
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
        headingTextSize: 22,
        bodyTextSize: 13,
        category: "ats-friendly",
        userName: "Sneha Sharma",
        profileImage: "",
        userJobRole: "Data Analyst",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "CARCHARES:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights."
            },
            {
                sectionId: "CARCHARES:CONTACT",
                isSection: true,
                sectionVisible: true,
                sectionName: "Contact",
                list: [
                    {
                        listId: "CARCHARES:CONTACT:1",
                        iconName: "fa-regular fa-at",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "CARCHARES:CONTACT:2",
                        iconName: "fa-regular fa-phone-flip",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "CARCHARES:CONTACT:3",
                        iconName: "fa-regular fa-location-dot",
                        contactName: "123 Main Street, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "CARCHARES:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "CARCHARES:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly"
                    },
                    {
                        listId: "CARCHARES:PROJECTS:2",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly"
                    }
                ]
            },
            {
                sectionId: "CARCHARES:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "CARCHARES:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "CARCHARES:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "CARCHARES:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "CARCHARES:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "CARCHARES:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "CARCHARES:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "CARCHARES:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    }
                ]
            },
            {
                sectionId: "CARCHARES:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "CARCHARES:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "CARCHARES:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    }
                ]
            }
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
        headingTextSize: 22,
        bodyTextSize: 13,
        category: "modern",
        userName: "Sneha Sharma",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Data Analyst",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "PROATRE:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights."
            },
            {
                sectionId: "PROATRE:CONTACT",
                isSection: true,
                sectionVisible: true,
                sectionName: "Contact",
                list: [
                    {
                        listId: "PROATRE:CONTACT:1",
                        iconName: "fa-regular fa-at",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "PROATRE:CONTACT:2",
                        iconName: "fa-regular fa-phone-flip",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "PROATRE:CONTACT:3",
                        iconName: "fa-regular fa-location-dot",
                        contactName: "123 Main Street, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "PROATRE:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "PROATRE:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly"
                    },
                    {
                        listId: "PROATRE:PROJECTS:2",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly.Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly"
                    }
                ]
            },
            {
                sectionId: "PROATRE:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "PROATRE:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "PROATRE:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "PROATRE:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "PROATRE:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "PROATRE:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "PROATRE:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "PROATRE:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    }
                ]
            },
            {
                sectionId: "PROATRE:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "PROATRE:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "PROATRE:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    }
                ]
            }
        ]

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
        headingTextSize: 22,
        bodyTextSize: 13,
        category: "ats-friendly",
        userName: "Sneha Sharma",
        profileImage: "",
        userJobRole: "Data Analyst",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "APTRRETE:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights."
            },
            {
                sectionId: "APTRRETE:CONTACT",
                isSection: true,
                sectionVisible: true,
                sectionName: "Contact",
                list: [
                    {
                        listId: "APTRRETE:CONTACT:1",
                        iconName: "fa-regular fa-at",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "APTRRETE:CONTACT:2",
                        iconName: "fa-regular fa-phone-flip",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "APTRRETE:CONTACT:3",
                        iconName: "fa-regular fa-location-dot",
                        contactName: "123 Main Street, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "APTRRETE:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "APTRRETE:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    }
                ]
            },
            {
                sectionId: "APTRRETE:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "APTRRETE:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "APTRRETE:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "APTRRETE:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "APTRRETE:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "APTRRETE:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "APTRRETE:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "APTRRETE:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    }
                ]
            },
            {
                sectionId: "APTRRETE:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "APTRRETE:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "APTRRETE:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
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
        headingTextSize: 22,
        bodyTextSize: 13,
        category: "ats-friendly",
        userName: "Sneha Sharma",
        profileImage: "",
        userJobRole: "Data Analyst",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "ATFRME:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights."
            },
            {
                sectionId: "ATFRME:CONTACT",
                isSection: true,
                sectionVisible: true,
                sectionName: "Contact",
                list: [
                    {
                        listId: "ATFRME:CONTACT:1",
                        iconName: "fa-regular fa-at",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "ATFRME:CONTACT:2",
                        iconName: "fa-regular fa-phone-flip",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "ATFRME:CONTACT:3",
                        iconName: "fa-regular fa-location-dot",
                        contactName: "123 Main Street, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "ATFRME:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "ATFRME:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    }
                ]
            },
            {
                sectionId: "ATFRME:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "ATFRME:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "ATFRME:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "ATFRME:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "ATFRME:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "ATFRME:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "ATFRME:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "ATFRME:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    }
                ]
            },
            {
                sectionId: "ATFRME:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "ATFRME:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "ATFRME:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
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
        headingTextFont: "Space Grotesk",
        bodyTextFont: "Inter",
        headingTextColor: "#333",
        themeColor: "#03989f",
        bodyTextColor: "#000",
        headingTextSize: 22,
        bodyTextSize: 13,
        category: "modern",
        userName: "Sneha Sharma",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Data Analyst",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "BLCRMOTE:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights."
            },
            {
                sectionId: "BLCRMOTE:CONTACT",
                isSection: true,
                sectionVisible: true,
                sectionName: "Contact",
                list: [
                    {
                        listId: "BLCRMOTE:CONTACT:1",
                        iconName: "fa-regular fa-at",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "BLCRMOTE:CONTACT:2",
                        iconName: "fa-regular fa-phone-flip",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "BLCRMOTE:CONTACT:3",
                        iconName: "fa-regular fa-location-dot",
                        contactName: "123 Main Street, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "BLCRMOTE:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "BLCRMOTE:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    }
                ]
            },
            {
                sectionId: "BLCRMOTE:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "BLCRMOTE:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "BLCRMOTE:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "BLCRMOTE:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "BLCRMOTE:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "BLCRMOTE:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "BLCRMOTE:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "BLCRMOTE:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    }
                ]
            },
            {
                sectionId: "BLCRMOTE:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "BLCRMOTE:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "BLCRMOTE:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    }
                ]
            }
        ]

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
        headingTextSize: 20,
        bodyTextSize: 12,
        category: "creative",
        userName: "Sneha Sharma",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Data Analyst",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "CORETE:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights."
            },
            {
                sectionId: "CORETE:CONTACT",
                isSection: true,
                sectionVisible: true,
                sectionName: "Contact",
                list: [
                    {
                        listId: "CORETE:CONTACT:1",
                        iconName: "fa-regular fa-at",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "CORETE:CONTACT:2",
                        iconName: "fa-regular fa-phone-flip",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "CORETE:CONTACT:3",
                        iconName: "fa-regular fa-location-dot",
                        contactName: "123 Main Street, Mumbai, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "CORETE:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "CORETE:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    }
                ]
            },
            {
                sectionId: "CORETE:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "CORETE:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "CORETE:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "CORETE:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "CORETE:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "CORETE:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "CORETE:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "CORETE:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    }
                ]
            },
            {
                sectionId: "CORETE:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "CORETE:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "CORETE:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    }
                ]
            }
        ]

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
        headingTextSize: 18,
        bodyTextSize: 12,
        category: "modern",
        userName: "Sneha Sharma",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Data Analyst",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "SIPROTE:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights."
            },
            {
                sectionId: "SIPROTE:CONTACT",
                isSection: true,
                sectionVisible: true,
                sectionName: "Contact",
                list: [
                    {
                        listId: "SIPROTE:CONTACT:1",
                        iconName: "fa-regular fa-at",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "SIPROTE:CONTACT:2",
                        iconName: "fa-regular fa-phone-flip",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "SIPROTE:CONTACT:3",
                        iconName: "fa-regular fa-location-dot",
                        contactName: "123 Main Street, Mumbai, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "SIPROTE:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "SIPROTE:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    }
                ]
            },
            {
                sectionId: "SIPROTE:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "SIPROTE:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "SIPROTE:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "SIPROTE:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "SIPROTE:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "SIPROTE:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "SIPROTE:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "SIPROTE:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    }
                ]
            },
            {
                sectionId: "SIPROTE:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "SIPROTE:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "SIPROTE:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    }
                ]
            }
        ]

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
        headingTextSize: 18,
        bodyTextSize: 12,
        category: "creative",
        userName: "Sneha Sharma",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Data Analyst",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "CRTIMGTEST:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights."
            },
            {
                sectionId: "CRTIMGTEST:CONTACT",
                isSection: true,
                sectionVisible: true,
                sectionName: "Contact",
                list: [
                    {
                        listId: "CRTIMGTEST:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "CRTIMGTEST:CONTACT:2",
                        iconName: "fa-solid fa-phone",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "CRTIMGTEST:CONTACT:3",
                        iconName: "fa-solid fa-location-dot",
                        contactName: "123 Main Street, Mumbai, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "CRTIMGTEST:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "CRTIMGTEST:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    }
                ]
            },
            {
                sectionId: "CRTIMGTEST:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "CRTIMGTEST:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "CRTIMGTEST:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "CRTIMGTEST:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "CRTIMGTEST:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "CRTIMGTEST:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "CRTIMGTEST:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "CRTIMGTEST:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    }
                ]
            },
            {
                sectionId: "CRTIMGTEST:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "CRTIMGTEST:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "CRTIMGTEST:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    }
                ]
            }
        ]

    },


    //PPVP RESUME TEMPLATE
    {
        id: "ppvp",
        templateName: "Ppvp_resume_temp",
        element: Ppvp_resume_temp,
        headingTextFont: "Inter",
        bodyTextFont: "kanit",
        headingTextColor: "#fff",
        themeColor: "#63769B",
        bodyTextColor: "#000",
        headingTextSize: 16,
        bodyTextSize: 12,
        category: "creative",
        userName: "Yogesh Kumar",
        userJobRole: "Front End Developer",
        profileImage: "https://wallpapercave.com/wp/wp13386395.jpg",
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "ppvp:summary",
                isSection: true,
                sectionName: "Summary",
                summary: "Experienced React Developer with 5 years of hands-on expertise in building robust web applications. Seeking to leverage advanced knowledge."
            },
            {
                sectionId: "ppvp:contact",
                isSection: true,
                sectionName: "Contact Me",
                list: [
                    {
                        listId: "ppvp:contact:1",
                        iconName: "fa-solid fa-phone",
                        contactName: "9585485895"
                    },
                    {
                        listId: "ppvp:contact:2",
                        iconName: "fa-solid fa-location",
                        contactName: "Greater Noida"
                    },
                    {
                        listId: "ppvp:contact:3",
                        iconName: "fa-brands fa-github",
                        contactName: "hello@reallygreatsite.com"
                    },
                ]
            },
            {
                sectionId: "ppvp:project",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "ppvp:project:1",
                        projectName: "Resume Builder",
                        startDate: "March 2021",
                        endDate: "June 2021",
                        aboutProject: "Led development of an advanced automation system, achieving a 15% increase in operational efficiency.Streamlined manufacturing processes, reducing production costs by 10%.Implemented preventive maintenance strategies"
                    },
                    {
                        listId: "ppvp:project:2",
                        projectName: "Resume Builder",
                        startDate: "March 2021",
                        endDate: "June 2021",
                        aboutProject: "Led development of an advanced automation system, achieving a 15% increase in operational efficiency.Streamlined manufacturing processes, reducing production costs by 10%.Implemented preventive maintenance strategies"
                    },

                ]
            },
            {
                sectionId: "ppvp:skills",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "ppvp:skills:1",
                        skillName: "Html"
                    },
                    {
                        listId: "ppvp:skills:2",
                        skillName: "Css"
                    },
                    {
                        listId: "ppvp:skills:3",
                        skillName: "React.js"
                    },
                    {
                        listId: "ppvp:skills:4",
                        skillName: "Angular.js"
                    },
                    {
                        listId: "ppvp:skills:5",
                        skillName: "MongoDB"
                    },
                    {
                        listId: "ppvp:skills:6",
                        skillName: "Javascript"
                    },
                ]
            },
            {
                sectionId: "ppvp:exp",
                isSection: true,
                sectionName: "Experience",
                list: [
                    {
                        listId: "ppvp:exp:1",
                        companyName: "Tech Solutions Inc.",
                        jobRole: "React Developer",
                        startDate: "June 2016 ",
                        endDate: " February 2019",
                        aboutJob: "Integrated third-party APIs and services to extend application functionality and improve user interactions."
                    },
                    {
                        listId: "ppvp:exp:2",
                        companyName: "Tech Solutions Inc.",
                        jobRole: "React Developer",
                        startDate: "June 2016 ",
                        endDate: " February 2019",
                        aboutJob: "Integrated third-party APIs and services to extend application functionality and improve user interactions."
                    },
                    {
                        listId: "ppvp:exp:3",
                        companyName: "Tech Solutions Inc.",
                        jobRole: "React Developer",
                        startDate: "June 2016 ",
                        endDate: " February 2019",
                        aboutJob: "Integrated third-party APIs and services to extend application functionality and improve user interactions."
                    },
                ]
            },
            {
                sectionId: "ppvp:educ",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "ppvp:educ:1",
                        collegeName: "MJPRU Bareilly,Uttar Pradesh",
                        course: "Bachelor Of Computer Application(BCA)",
                        startDate: "Aug 2018",
                        endDate: "Oct 2021",
                        aboutEducation: "BCA is a popular undergraduate degree course for students interested in computer applications and software development."
                    },
                    {
                        listId: "ppvp:educ:2",
                        collegeName: "MJPRU Bareilly,Uttar Pradesh",
                        course: "Bachelor Of Computer Application(BCA)",
                        startDate: "Aug 2018",
                        endDate: "Oct 2021",
                        aboutEducation: "BCA is a popular undergraduate degree course for students interested in computer applications and software development."
                    },
                    {
                        listId: "ppvp:educ:3",
                        collegeName: "MJPRU Bareilly,Uttar Pradesh",
                        course: "Bachelor Of Computer Application(BCA)",
                        startDate: "Aug 2018",
                        endDate: "Oct 2021",
                        aboutEducation: "BCA is a popular undergraduate degree course for students interested in computer applications and software development."
                    },
                ]
            }
        ]
    },

    //BOX STYLE RESUME
    // {
    //     id: "BOXSTLR",
    //     templateName: "Box Style Resume",
    //     element: Box_Style_Resume,
    //     headingTextFont: "Space Grotesk",
    //     bodyTextFont: "Inter",
    //     headingTextColor: "#333",
    //     themeColor: "#C4DAD2",
    //     bodyTextColor: "#000",
    //     headingTextSize: 18,
    //     bodyTextSize: 12,
    //     category: "modern",
    //     userName: "Sneha Sharma",
    //     profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
    //     userJobRole: "Data Analyst",
    //     isQRCode: false,
    //     resumeStyle: {
    //         backgroundPattern: false
    //     },
    //     resumeDetails: {
    //         ATS_Score: 90
    //     },
    //     AllSections: [
    //         {
    //             sectionId: "BOXSTLR:SUMMARY",
    //             isSection: true,
    //             sectionName: "Summary",
    //             summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights."
    //         },
    //         {
    //             sectionId: "BOXSTLR:CONTACT",
    //             isSection: true,
    //             sectionVisible: false,
    //             sectionName: "Contact",
    //             list: [
    //                 {
    //                     listId: "BOXSTLR:CONTACT:1",
    //                     iconName: "fa-solid fa-envelope",
    //                     contactName: "sneha.sharma@email.com"
    //                 },
    //                 {
    //                     listId: "BOXSTLR:CONTACT:2",
    //                     iconName: "fa-solid fa-phone",
    //                     contactName: "+91-XXXXXXXXXX"
    //                 },
    //                 {
    //                     listId: "BOXSTLR:CONTACT:3",
    //                     iconName: "fa-solid fa-location-dot",
    //                     contactName: "123 Main Street, Mumbai, Maharashtra, India"
    //                 },
    //             ]
    //         },
    //         {
    //             sectionId: "BOXSTLR:PROJECTS",
    //             isSection: true,
    //             sectionName: "Projects",
    //             list: [
    //                 {
    //                     listId: "BOXSTLR:PROJECTS:1",
    //                     projectName: "Customer Segmentation Analysis",
    //                     startDate: "2020",
    //                     endDate: "2021",
    //                     aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
    //                 },
    //                 {
    //                     listId: "BOXSTLR:PROJECTS:2",
    //                     projectName: "Customer Segmentation Analysis",
    //                     startDate: "2020",
    //                     endDate: "2021",
    //                     aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
    //                 },
    //                 {
    //                     listId: "BOXSTLR:PROJECTS:3",
    //                     projectName: "Customer Segmentation Analysis",
    //                     startDate: "2020",
    //                     endDate: "2021",
    //                     aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
    //                 }
    //             ]
    //         },
    //         {
    //             sectionId: "BOXSTLR:SKILLS",
    //             isSection: true,
    //             sectionName: "Skills",
    //             list: [
    //                 {
    //                     listId: "BOXSTLR:SKILLS:1",
    //                     skillName: "Java"
    //                 },
    //                 {
    //                     listId: "BOXSTLR:SKILLS:2",
    //                     skillName: "Python"
    //                 },
    //                 {
    //                     listId: "BOXSTLR:SKILLS:3",
    //                     skillName: "JavaScript"
    //                 },
    //                 {
    //                     listId: "BOXSTLR:SKILLS:4",
    //                     skillName: "Spring Boot"
    //                 }
    //             ]
    //         },
    //         {
    //             sectionId: "BOXSTLR:JOB-EXP",
    //             isSection: true,
    //             sectionName: "Job Experience",
    //             list: [
    //                 {
    //                     listId: "BOXSTLR:JOB-EXP:1",
    //                     companyName: "Tech Solutions Pvt. Ltd.",
    //                     jobRole: "Data Analyst",
    //                     startDate: "2019",
    //                     endDate: "2021",
    //                     aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
    //                 },
    //                 {
    //                     listId: "BOXSTLR:JOB-EXP:2",
    //                     companyName: "Tech Solutions Pvt. Ltd.",
    //                     jobRole: "Data Analyst",
    //                     startDate: "2019",
    //                     endDate: "2021",
    //                     aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
    //                 },

    //             ]
    //         },
    //         {
    //             sectionId: "BOXSTLR:EDUCATION",
    //             isSection: true,
    //             sectionName: "Education",
    //             list: [
    //                 {
    //                     listId: "BOXSTLR:EDUCATION:1",
    //                     collegeName: "Mumbai University",
    //                     course: "Bachelor of Technology in Computer Science",
    //                     startDate: "2017",
    //                     endDate: "2020",
    //                     aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
    //                 },
    //                 {
    //                     listId: "BOXSTLR:EDUCATION:2",
    //                     collegeName: "Mumbai University",
    //                     course: "Bachelor of Technology in Computer Science",
    //                     startDate: "2017",
    //                     endDate: "2020",
    //                     aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
    //                 },
    //                 {
    //                     listId: "BOXSTLR:EDUCATION:3",
    //                     collegeName: "Mumbai University",
    //                     course: "Bachelor of Technology in Computer Science",
    //                     startDate: "2017",
    //                     endDate: "2020",
    //                     aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
    //                 }
    //             ]
    //         }
    //     ]

    // },

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
        headingTextSize: 18,
        bodyTextSize: 12,
        category: "creative",
        userName: "Sneha Sharma",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Data Analyst",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "UNIQUESR:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights."
            },
            {
                sectionId: "UNIQUESR:CONTACT",
                isSection: true,
                sectionVisible: false,
                sectionName: "Contact",
                list: [
                    {
                        listId: "UNIQUESR:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "UNIQUESR:CONTACT:2",
                        iconName: "fa-solid fa-phone",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "UNIQUESR:CONTACT:3",
                        iconName: "fa-solid fa-location-dot",
                        contactName: "123 Main Street, Mumbai, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "UNIQUESR:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "UNIQUESR:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },
                    {
                        listId: "UNIQUESR:PROJECTS:2",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },

                ]
            },
            {
                sectionId: "UNIQUESR:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "UNIQUESR:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "UNIQUESR:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "UNIQUESR:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "UNIQUESR:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "UNIQUESR:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "UNIQUESR:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "UNIQUESR:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },

                ]
            },
            {
                sectionId: "UNIQUESR:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "UNIQUESR:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },

                ]
            }
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
        category: "modern",
        userName: "Sneha Sharma",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Data Analyst",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "PATTRNRES:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights."
            },
            {
                sectionId: "PATTRNRES:CONTACT",
                isSection: true,
                sectionVisible: false,
                sectionName: "Contact",
                list: [
                    {
                        listId: "PATTRNRES:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "PATTRNRES:CONTACT:2",
                        iconName: "fa-solid fa-phone",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "PATTRNRES:CONTACT:3",
                        iconName: "fa-solid fa-location-dot",
                        contactName: "123 Main Street, Mumbai, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "PATTRNRES:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "PATTRNRES:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },
                    {
                        listId: "PATTRNRES:PROJECTS:2",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },
                    {
                        listId: "PATTRNRES:PROJECTS:3",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    }
                ]
            },
            {
                sectionId: "PATTRNRES:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "PATTRNRES:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "PATTRNRES:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "PATTRNRES:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "PATTRNRES:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "PATTRNRES:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "PATTRNRES:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "PATTRNRES:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },

                ]
            },
            {
                sectionId: "PATTRNRES:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "PATTRNRES:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "PATTRNRES:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "PATTRNRES:EDUCATION:3",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    }
                ]
            }
        ]

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
        category: "creative",
        userName: "Sneha Sharma",
        profileImage: "",
        userJobRole: "Data Analyst",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "YELLOWTMP:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Data Analyst with [X] years of experience in interpreting complex data and providing actionable insights."
            },
            {
                sectionId: "YELLOWTMP:CONTACT",
                isSection: true,
                sectionVisible: false,
                sectionName: "",
                list: [
                    {
                        listId: "YELLOWTMP:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "YELLOWTMP:CONTACT:2",
                        iconName: "fa-solid fa-phone",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "YELLOWTMP:CONTACT:3",
                        iconName: "fa-solid fa-location-dot",
                        contactName: "123 Main Street, Mumbai, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "YELLOWTMP:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "YELLOWTMP:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },
                    {
                        listId: "YELLOWTMP:PROJECTS:2",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },
                    {
                        listId: "YELLOWTMP:PROJECTS:3",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    }
                ]
            },
            {
                sectionId: "YELLOWTMP:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "YELLOWTMP:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "YELLOWTMP:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "YELLOWTMP:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "YELLOWTMP:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "YELLOWTMP:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "YELLOWTMP:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "YELLOWTMP:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "YELLOWTMP:JOB-EXP:3",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    }
                ]
            },
            {
                sectionId: "YELLOWTMP:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "YELLOWTMP:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "YELLOWTMP:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "YELLOWTMP:EDUCATION:3",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    }
                ]
            }
        ]

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
        category: "modern",
        userName: "Sneha Sharma",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Data Analyst",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "MCRTEMP:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Software Developer with [X years] of experience in designing, developing, and implementing scalable applications. Proficient in multiple programming languages, including [list languages, e.g., Java, Python, JavaScript], with a strong understanding of software development life cycles and agile methodologies. Adept at collaborating with cross-functional teams to deliver innovative solutions that enhance user experience and drive business success. Committed to continuous learning and staying updated with emerging technologies."
            },
            {
                sectionId: "MCRTEMP:CONTACT",
                isSection: true,
                sectionVisible: false,
                sectionName: "",
                list: [
                    {
                        listId: "MCRTEMP:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "MCRTEMP:CONTACT:2",
                        iconName: "fa-solid fa-phone",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "MCRTEMP:CONTACT:3",
                        iconName: "fa-solid fa-location-dot",
                        contactName: "123 Main Street, Mumbai, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "MCRTEMP:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "MCRTEMP:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },
                    {
                        listId: "MCRTEMP:PROJECTS:2",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },
                    {
                        listId: "MCRTEMP:PROJECTS:3",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },

                ]
            },
            {
                sectionId: "MCRTEMP:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "MCRTEMP:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "MCRTEMP:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "MCRTEMP:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "MCRTEMP:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "MCRTEMP:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "MCRTEMP:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "MCRTEMP:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "MCRTEMP:JOB-EXP:3",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    }
                ]
            },
            {
                sectionId: "MCRTEMP:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "MCRTEMP:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "MCRTEMP:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "MCRTEMP:EDUCATION:3",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                ]
            }
        ]

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
        category: "modern",
        userName: "Sneha Sharma",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Data Analyst",
        subCategory: "teacher",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "THSIBORE:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Software Developer with [X years] of experience in designing, developing, and implementing scalable applications. Proficient in multiple programming languages, including [list languages, e.g., Java, Python, JavaScript], with a strong understanding of software development life cycles and agile methodologies. Adept at collaborating with cross-functional teams to deliver innovative solutions that enhance user experience and drive business success. Committed to continuous learning and staying updated with emerging technologies."
            },
            {
                sectionId: "THSIBORE:CONTACT",
                isSection: true,
                sectionVisible: true,
                sectionName: "Contact Us",
                list: [
                    {
                        listId: "THSIBORE:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "THSIBORE:CONTACT:2",
                        iconName: "fa-solid fa-phone",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "THSIBORE:CONTACT:3",
                        iconName: "fa-solid fa-location-dot",
                        contactName: "123 Main Street, Mumbai, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "THSIBORE:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "THSIBORE:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },
                    {
                        listId: "THSIBORE:PROJECTS:2",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },
                    {
                        listId: "THSIBORE:PROJECTS:3",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    }
                ]
            },
            {
                sectionId: "THSIBORE:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "THSIBORE:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "THSIBORE:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "THSIBORE:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "THSIBORE:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "THSIBORE:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "THSIBORE:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "THSIBORE:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "THSIBORE:JOB-EXP:3",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    }
                ]
            },
            {
                sectionId: "THSIBORE:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "THSIBORE:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "THSIBORE:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },

                ]
            }
        ]

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
        category: "minimal",
        userName: "Sneha Sharma",
        profileImage: "",
        userJobRole: "Data Analyst",
        subCategory: "engineer",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "ELTPR:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Software Developer with [X years] of experience in designing, developing, and implementing scalable applications. Proficient in multiple programming languages, including [list languages, e.g., Java, Python, JavaScript], with a strong understanding of software development life cycles and agile methodologies. Adept at collaborating with cross-functional teams to deliver innovative solutions that enhance user experience and drive business success. Committed to continuous learning and staying updated with emerging technologies."
            },
            {
                sectionId: "ELTPR:CONTACT",
                isSection: true,
                sectionVisible: false,
                sectionName: "Contact",
                list: [
                    {
                        listId: "ELTPR:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "ELTPR:CONTACT:2",
                        iconName: "fa-solid fa-phone",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "ELTPR:CONTACT:3",
                        iconName: "fa-solid fa-location-dot",
                        contactName: "123 Main Street, Mumbai, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "ELTPR:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "ELTPR:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },
                    {
                        listId: "ELTPR:PROJECTS:2",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },

                ]
            },
            {
                sectionId: "ELTPR:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "ELTPR:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "ELTPR:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "ELTPR:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "ELTPR:SKILLS:4",
                        skillName: "Spring Boot"
                    }
                ]
            },
            {
                sectionId: "ELTPR:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "ELTPR:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "ELTPR:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Analyst",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },

                ]
            },
            {
                sectionId: "ELTPR:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "ELTPR:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },

                ]
            }
        ]

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
        category: "modern",
        userName: "Sneha Sharma",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Sales Executive",
        subCategory: "sales",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "SALESACH:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Results-oriented Sales Professional with [X] years of experience leveraging data analytics to drive sales strategies and enhance performance. Expertise in analyzing sales trends, forecasting demand, and utilizing insights to improve sales outcomes. "
            },
            {
                sectionId: "SALESACH:CONTACT",
                isSection: true,
                sectionVisible: true,
                sectionName: "Contact",
                list: [
                    {
                        listId: "SALESACH:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "SALESACH:CONTACT:2",
                        iconName: "fa-solid fa-phone",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "SALESACH:CONTACT:3",
                        iconName: "fa-solid fa-location-dot",
                        contactName: "123 Main Street, Mumbai, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "SALESACH:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "SALESACH:PROJECTS:1",
                        projectName: "Sales Performance Optimization",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Analyzed sales performance data to identify inefficiencies and develop strategies to optimize sales processes."
                    },
                    {
                        listId: "SALESACH:PROJECTS:2",
                        projectName: "Sales Performance Optimization",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Analyzed sales performance data to identify inefficiencies and develop strategies to optimize sales processes."
                    },

                ]
            },
            {
                sectionId: "SALESACH:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "358574",
                        skillName: "Python"
                    },
                    {
                        listId: "358575",
                        skillName: " Power BI"
                    },
                    {
                        listId: "358576",
                        skillName: "SQL"
                    },
                    {
                        listId: "358577",
                        skillName: "HubSpot"
                    },
                    {
                        listId: "358578",
                        skillName: "A/B testing"
                    },
                ]
            },
            {
                sectionId: "SALESACH:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "SALESACH:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Sales Analys",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed sales data to identify trends and opportunities, resulting in a [X]% increase in sales revenue over [time period]."
                    },
                    {
                        listId: "SALESACH:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Sales Analys",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed sales data to identify trends and opportunities, resulting in a [X]% increase in sales revenue over [time period]."
                    },

                ]
            },
            {
                sectionId: "SALESACH:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "SALESACH:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "SALESACH:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },

                ]
            }
        ]

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
        category: "minimal",
        userName: "Sneha Sharma",
        profileImage: "",
        userJobRole: "Data Analyst",
        subCategory: "dataScientist",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "NUEVAT:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Data Scientist with [X] years of experience in interpreting complex data and providing actionable insights. Adept at using a variety of analytical tools and techniques to drive strategic business decisions and optimize operations."
            },
            {
                sectionId: "NUEVAT:CONTACT",
                isSection: true,
                sectionVisible: false,
                sectionName: "Contact",
                list: [
                    {
                        listId: "NUEVAT:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "NUEVAT:CONTACT:2",
                        iconName: "fa-solid fa-phone",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "NUEVAT:CONTACT:3",
                        iconName: "fa-solid fa-location-dot",
                        contactName: "123 Main Street, Mumbai, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "NUEVAT:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "NUEVAT:PROJECTS:1",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },
                    {
                        listId: "NUEVAT:PROJECTS:2",
                        projectName: "Customer Segmentation Analysis",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Performed clustering analysis on customer data to identify distinct customer segments and tailor marketing strategies accordingly."
                    },

                ]
            },
            {
                sectionId: "NUEVAT:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "358574",
                        skillName: "Python"
                    },
                    {
                        listId: "358575",
                        skillName: " Power BI"
                    },
                    {
                        listId: "358576",
                        skillName: "SQL"
                    },
                    {
                        listId: "358577",
                        skillName: "Agile"
                    },
                    {
                        listId: "358578",
                        skillName: "Git and GitHub"
                    },
                ]
            },
            {
                sectionId: "NUEVAT:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "NUEVAT:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Scientist",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },
                    {
                        listId: "NUEVAT:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Data Scientist",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed large datasets to uncover trends and patterns, leading to actionable recommendations that improved operational efficiency by [X]%."
                    },

                ]
            },
            {
                sectionId: "NUEVAT:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "NUEVAT:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "NUEVAT:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },

                ]
            }
        ]

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
        category: "modern",
        userName: "Sneha Sharma",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Digital Marketing",
        subCategory: "marketing",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "BORDERCRT:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Dynamic and accomplished professional racing driver with a passion for speed and precision."
            },
            {
                sectionId: "BORDERCRT:CONTACT",
                isSection: true,
                sectionVisible: false,
                sectionName: "Contact",
                list: [
                    {
                        listId: "BORDERCRT:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "BORDERCRT:CONTACT:2",
                        iconName: "fa-solid fa-phone",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "BORDERCRT:CONTACT:3",
                        iconName: "fa-solid fa-location-dot",
                        contactName: "123 Main Street, Mumbai, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "BORDERCRT:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "BORDERCRT:PROJECTS:1",
                        projectName: "Online Shopping Portal",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Developed a scalable e-commerce platform using Java Spring Boot and Angular, enabling seamless online shopping experiences for users."
                    },
                    {
                        listId: "BORDERCRT:PROJECTS:2",
                        projectName: "Online Shopping Portal",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Developed a scalable e-commerce platform using Java Spring Boot and Angular, enabling seamless online shopping experiences for users."
                    },
                    {
                        listId: "BORDERCRT:PROJECTS:3",
                        projectName: "Online Shopping Portal",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Developed a scalable e-commerce platform using Java Spring Boot and Angular, enabling seamless online shopping experiences for users."
                    },
                ]
            },
            {
                sectionId: "BORDERCRT:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "BORDERCRT:SKILLS:1",
                        skillName: "Java"
                    },
                    {
                        listId: "BORDERCRT:SKILLS:2",
                        skillName: "Python"
                    },
                    {
                        listId: "BORDERCRT:SKILLS:3",
                        skillName: "JavaScript"
                    },
                    {
                        listId: "BORDERCRT:SKILLS:4",
                        skillName: "Spring Boot"
                    },
                    {
                        listId: "BORDERCRT:SKILLS:5",
                        skillName: "Angular"
                    }
                ]
            },
            {
                sectionId: "BORDERCRT:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "BORDERCRT:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Software Developer",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Developed and maintained scalable web applications using Java Spring Boot and Angular. Designed RESTful APIs to integrate backend services with front-end components. Implemented CI/CD pipelines using Jenkins and Docker for efficient deployment."
                    },
                    {
                        listId: "BORDERCRT:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Software Developer",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Developed and maintained scalable web applications using Java Spring Boot and Angular. Designed RESTful APIs to integrate backend services with front-end components. Implemented CI/CD pipelines using Jenkins and Docker for efficient deployment."
                    },

                ]
            },
            {
                sectionId: "BORDERCRT:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "BORDERCRT:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "BORDERCRT:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                    {
                        listId: "BORDERCRT:EDUCATION:3",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development."
                    },
                ]
            }
        ]

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
        category: "minimal",
        userName: "Sneha Sharma",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Product Manager",
        subCategory: "productManager",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },

        //RESUME DETAILS
        resumeDetails: {
            ATS_Score: 60
        },

        // SECTIONS
        AllSections: [
            {
                sectionId: "HMATST:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Results-oriented Product Manager with [X] years of experience in driving product strategy and development through data-driven insights. Expertise in leveraging data analysis and market research to guide product decisions, optimize features."
            },
            {
                sectionId: "HMATST:CONTACT",
                isSection: true,
                sectionVisible: false,
                sectionName: "Contact",
                list: [
                    {
                        listId: "HMATST:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "sneha.sharma@email.com"
                    },
                    {
                        listId: "HMATST:CONTACT:2",
                        iconName: "fa-solid fa-phone",
                        contactName: "+91-XXXXXXXXXX"
                    },
                    {
                        listId: "HMATST:CONTACT:3",
                        iconName: "fa-solid fa-location-dot",
                        contactName: "123 Main Street, Mumbai, Maharashtra, India"
                    },
                ]
            },
            {
                sectionId: "HMATST:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "HMATST:PROJECTS:1",
                        projectName: "Online Shopping Portal",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Developed a scalable e-commerce platform using Java Spring Boot and Angular, enabling seamless online shopping experiences for users."
                    },


                ]
            },
            {
                sectionId: "HMATST:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "358574",
                        skillName: "Python"
                    },
                    {
                        listId: "358575",
                        skillName: " Power BI"
                    },
                    {
                        listId: "358576",
                        skillName: "SQL"
                    },
                    {
                        listId: "358577",
                        skillName: "Agile"
                    },
                    {
                        listId: "358578",
                        skillName: "Git and GitHub"
                    },
                ]
            },
            {
                sectionId: "HMATST:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "HMATST:JOB-EXP:1",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Product Manager",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Spearheaded the development and launch of [Product Name], utilizing data-driven insights to inform product features and improvements."
                    },
                    {
                        listId: "HMATST:JOB-EXP:2",
                        companyName: "Tech Solutions Pvt. Ltd.",
                        jobRole: "Product Manager",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Spearheaded the development and launch of [Product Name], utilizing data-driven insights to inform product features and improvements."
                    },

                ]
            },
            {
                sectionId: "HMATST:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "HMATST:EDUCATION:1",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "May 2017",
                        endDate: "May 2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development. Developed strong analytical and problem-solving skills through practical projects and internships, contributing to a solid foundation in software development."
                    },
                    {
                        listId: "HMATST:EDUCATION:2",
                        collegeName: "Mumbai University",
                        course: "Bachelor of Technology in Computer Science",
                        startDate: "May 2017",
                        endDate: "May 2020",
                        aboutEducation: "Relevant coursework included database management systems, software engineering principles, algorithms and data structures, and web development. Developed strong analytical and problem-solving skills through practical projects and internships, contributing to a solid foundation in software development."
                    },

                ]
            }
        ]

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
        category: "minimal",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "UI/UX Designer",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        pages: 2,
        AllSections: [
            {
                sectionId: "BAWCAPR:ABOUT",
                isSection: true,
                sectionName: "About Me",
                summary: "In the bustling city of Arcadia, a young inventor named Theo discovers an ancient artifact buried beneath the ruins of an old library. As he unlocks its secrets, Theo finds himself drawn into a world of magic and mystery, where he must navigate treacherous alliances and confront dark forces to save his home from impending doom."
            },
            {
                sectionId: "BAWCAPR:CONTACT",
                isSection: true,
                sectionVisible: false,
                sectionName: "Contact Me",
                list: [
                    {
                        listId: "BAWCAPR:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "ariasterling87@gmail.com"
                    }
                ]
            },
            {
                sectionId: "BAWCAPR:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "BAWCAPR:PROJECTS:1",
                        projectName: "NexusVerse",
                        startDate: "10-12-2020",
                        endDate: "12-12-2020",
                        aboutProject: "NexusVerse is a collaborative virtual reality platform that brings people together from all corners of the globe to explore, create, and connect in a shared digital universe."
                    },
                    {
                        listId: "BAWCAPR:PROJECTS:2",
                        projectName: "NexusVerse",
                        startDate: "10-12-2020",
                        endDate: "12-12-2020",
                        aboutProject: "NexusVerse is a collaborative virtual reality platform that brings people together from all corners of the globe to explore, create, and connect in a shared digital universe."
                    },

                ]
            },
            {
                sectionId: "BAWCAPR:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "BAWCAPR:SKILLS:1",
                        skillName: "Figma"
                    },
                    {
                        listId: "BAWCAPR:SKILLS:2",
                        skillName: "Adobe Photoshop"
                    },
                    {
                        listId: "BAWCAPR:SKILLS:3",
                        skillName: "Canva"
                    },
                    {
                        listId: "BAWCAPR:SKILLS:4",
                        skillName: "Coreldraw"
                    },
                ]
            },
            {
                sectionId: "BAWCAPR:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "BAWCAPR:JOB-EXP:1",
                        companyName: "Stellar Innovations",
                        jobRole: "UI/UX Designer",
                        startDate: "2021",
                        endDate: "2024",
                        aboutJob: "At Stellar Innovations, we're seeking a dynamic Marketing Analyst to join our team. In this role, you'll be responsible for conducting market research, analyzing consumer behavior, and identifying new opportunities to drive growth and enhance our brand presence. "
                    },


                ]
            },
            {
                sectionId: "BAWCAPR:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "BAWCAPR:EDUCATION:1",
                        collegeName: "Horizon Institute of Technology (HIT)",
                        course: "B.Tech",
                        startDate: "2014",
                        endDate: "2018",
                        aboutEducation: "Pursuing a Bachelor of Technology (BTech) degree at Horizon Institute of Technology (HIT) is a transformative journey filled with academic excellence, hands-on learning, and personal growth. Our comprehensive curriculum blends theoretical knowledge with practical application, equipping students with the skills and expertise needed to excel in their chosen field. "
                    },


                ]
            }
        ]

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
        category: "modern",
        userName: "Oliver Greene",
        profileImage: "",
        userJobRole: "Graphic Designer",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "ERT1:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Passionate and innovative graphic designer with a keen eye for detail and a flair for creativity. Specialized in branding, logo design, and digital illustration. Committed to delivering visually stunning solutions that resonate with target audiences and elevate brand identities."
            },
            {
                sectionId: "ERT1:CONTACT",
                isSection: true,
                sectionVisible: true,
                sectionName: "Contact Me",
                list: [
                    {
                        listId: "ERT1:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "oliver.greene@email.com"
                    },
                    {
                        listId: "ERT1:CONTACT:2",
                        iconName: "fa-solid fa-phone",
                        contactName: "+1 (555) 123-4567"
                    },
                ]
            },
            {
                sectionId: "ERT1:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "ERT1:PROJECTS:1",
                        projectName: "Pixel Fusion",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Pixel Fusion was a comprehensive branding project for a tech startup aimed at integrating cutting-edge technology with everyday life."
                    },
                    {
                        listId: "ERT1:PROJECTS:2",
                        projectName: "Pixel Fusion",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Pixel Fusion was a comprehensive branding project for a tech startup aimed at integrating cutting-edge technology with everyday life."
                    },
                    {
                        listId: "ERT1:PROJECTS:3",
                        projectName: "Pixel Fusion",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Pixel Fusion was a comprehensive branding project for a tech startup aimed at integrating cutting-edge technology with everyday life."
                    },
                ]
            },
            {
                sectionId: "ERT1:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "ERT1:SKILLS:1",
                        skillName: "Adobe Creative"
                    },
                    {
                        listId: "ERT1:SKILLS:2",
                        skillName: "Digital Illustration"
                    },
                    {
                        listId: "ERT1:SKILLS:3",
                        skillName: "Print Design"
                    },
                ]
            },
            {
                sectionId: "ERT1:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "ERT1:JOB-EXP:1",
                        companyName: "Creative Minds Agency",
                        jobRole: "Senior Graphic Designer",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "As a Senior Graphic Designer at Creative Minds Agency, I led a team of designers in conceptualizing and executing various design projects for a diverse range of clients. My responsibilities included overseeing the entire design process from initial ideation to final execution."
                    },
                    {
                        listId: "ERT1:JOB-EXP:2",
                        companyName: "Creative Minds Agency",
                        jobRole: "Senior Graphic Designer",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "As a Senior Graphic Designer at Creative Minds Agency, I led a team of designers in conceptualizing and executing various design projects for a diverse range of clients. My responsibilities included overseeing the entire design process from initial ideation to final execution."
                    },
                    {
                        listId: "ERT1:JOB-EXP:3",
                        companyName: "Creative Minds Agency",
                        jobRole: "Senior Graphic Designer",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "As a Senior Graphic Designer at Creative Minds Agency, I led a team of designers in conceptualizing and executing various design projects for a diverse range of clients. My responsibilities included overseeing the entire design process from initial ideation to final execution."
                    },
                ]
            },
            {
                sectionId: "ERT1:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "ERT1:EDUCATION:1",
                        collegeName: "Art Institute of New York City",
                        course: "B.A. Graphics",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Bachelor of Fine Arts in Graphic Design (Art Institute of New York City, New York) Obtained a comprehensive understanding of graphic design principles, including typography, color theory, and layout design."
                    },
                    {
                        listId: "ERT1:EDUCATION:2",
                        collegeName: "Art Institute of New York City",
                        course: "B.A. Graphics",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Bachelor of Fine Arts in Graphic Design (Art Institute of New York City, New York) Obtained a comprehensive understanding of graphic design principles, including typography, color theory, and layout design."
                    },

                ]
            }
        ]

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
        category: "modern",
        userName: "Ravi Patel",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Accountant",
        subCategory: "accounting",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "BLUEMT:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Detail-oriented Accountant with [X] years of experience specializing in data analysis and financial reporting."
            },
            {
                sectionId: "BLUEMT:CONTACT",
                isSection: true,
                sectionVisible: false,
                sectionName: "Contact Me",
                list: [
                    {
                        listId: "BLUEMT:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "ravipatel34@email.com"
                    },
                    {
                        listId: "BLUEMT:CONTACT:2",
                        iconName: "fa-solid fa-phone",
                        contactName: "+1 (555) 123-4567"
                    },
                ]
            },
            {
                sectionId: "BLUEMT:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "BLUEMT:PROJECTS:1",
                        projectName: "Financial Dashboard Development",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Designed and implemented a comprehensive financial dashboard to monitor key performance indicators and financial metrics."
                    },
                    {
                        listId: "BLUEMT:PROJECTS:2",
                        projectName: "Financial Dashboard Development",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Designed and implemented a comprehensive financial dashboard to monitor key performance indicators and financial metrics."
                    },

                ]
            },
            {
                sectionId: "BLUEMT:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "358574",
                        skillName: "Python"
                    },
                    {
                        listId: "358575",
                        skillName: " Power BI"
                    },
                    {
                        listId: "358576",
                        skillName: "SQL"
                    },
                    {
                        listId: "358577",
                        skillName: "GAAP"
                    },
                    {
                        listId: "358578",
                        skillName: "QuickBooks"
                    },
                ]
            },
            {
                sectionId: "BLUEMT:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "BLUEMT:JOB-EXP:1",
                        companyName: "Senior Accountant",
                        jobRole: "Accountant",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "Analyzed financial data and trends to prepare detailed reports and forecasts, resulting in a [X]% improvement in financial planning accuracy."
                    },
                    {
                        listId: "BLUEMT:JOB-EXP:2",
                        companyName: "Creative Minds Agency",
                        jobRole: "Senior Graphic Designer",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "As a Senior Graphic Designer at Creative Minds Agency, I led a team of designers in conceptualizing and executing various design projects for a diverse range of clients. My responsibilities included overseeing the entire design process from initial ideation to final execution."
                    },
                    {
                        listId: "BLUEMT:JOB-EXP:3",
                        companyName: "Creative Minds Agency",
                        jobRole: "Senior Graphic Designer",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "As a Senior Graphic Designer at Creative Minds Agency, I led a team of designers in conceptualizing and executing various design projects for a diverse range of clients. My responsibilities included overseeing the entire design process from initial ideation to final execution."
                    }
                ]
            },
            {
                sectionId: "BLUEMT:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "BLUEMT:EDUCATION:1",
                        collegeName: "Art Institute of New York City",
                        course: "B.A. Graphics",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Bachelor of Fine Arts in Graphic Design (Art Institute of New York City, New York) Obtained a comprehensive understanding."
                    },
                    {
                        listId: "BLUEMT:EDUCATION:2",
                        collegeName: "Art Institute of New York City",
                        course: "B.A. Graphics",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Bachelor of Fine Arts in Graphic Design (Art Institute of New York City, New York) Obtained a comprehensive understanding."
                    },

                ]
            }
        ]

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
        category: "modern",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Business Analytics",
        subCategory: "businessAnalytics",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "sectionId321",
                isSection: true,
                sectionName: "Profile",
                summary: "Results-driven Business Analyst with [X] years of experience in data analysis, strategic planning, and project management. Adept at leveraging data-driven insights to drive business decisions and improve operational efficienc."
            },
            {
                sectionId: "sectionId321cont",
                isSection: true,
                sectionName: "Contact Me",
                list: [
                    {
                        listId: "24",
                        iconName: "fa-solid fa-phone",
                        contactName: "(123) 456-7890",
                    },
                    {
                        listId: "25",
                        iconName: "fa-solid fa-location-dot",
                        contactName: "123 Anywhere St.,AnyTown,USA",
                    },
                    {
                        listId: "26",
                        iconName: "fa-solid fa-envelope",
                        contactName: "priya.sharma@email.com",
                    },
                    {
                        listId: "27",
                        iconName: "fa-solid fa-link",
                        contactName: "codewithpriya.com",
                    }
                ]
            },
            {
                sectionId: "5657",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "6d4",
                        projectName: "Sales Forecasting Model",
                        startDate: "2020",
                        endDate: "2020",
                        aboutProject: "Developed a predictive sales forecasting model using Python and machine learning algorithms."
                    },
                    {
                        listId: "6d5",
                        projectName: "Customer Churn Analysis Dashboard",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: " Created an interactive dashboard in Tableau to visualize customer churn rates and identify key factors contributing to customer attrition."
                    },
                    {
                        listId: "6d6",
                        projectName: "Customer Churn Analysis Dashboard",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: " Created an interactive dashboard in Tableau to visualize customer churn rates and identify key factors contributing to customer attrition."
                    }
                ]
            },
            {
                sectionId: "54545",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "358574",
                        skillName: "Python"
                    },
                    {
                        listId: "358575",
                        skillName: " Power BI"
                    },
                    {
                        listId: "358576",
                        skillName: "SQL"
                    },
                    {
                        listId: "358577",
                        skillName: "Agile"
                    },
                    {
                        listId: "358578",
                        skillName: "Git and GitHub"
                    },

                ]
            },
            {
                sectionId: "573x",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "5tgfr",
                        companyName: "Tech Solutions Inc., Devtown, DC",
                        jobRole: "Business Analyst",
                        startDate: "2019",
                        endDate: "2024",
                        aboutJob: "Analyzed complex data sets to identify trends and patterns, providing actionable insights to improve decision-making."
                    },
                    {
                        listId: "5tgft",
                        companyName: "Full Stack Developer",
                        jobRole: "Web Designs Co., Webcity, WD",
                        startDate: "2017",
                        endDate: "2019",
                        aboutJob: "Extracted and manipulated data using SQL to support business needs and create comprehensive reports."
                    },
                    {
                        listId: "5tgfu",
                        companyName: "Full Stack Developer",
                        jobRole: "Web Designs Co., Webcity, WD",
                        startDate: "2017",
                        endDate: "2019",
                        aboutJob: "Extracted and manipulated data using SQL to support business needs and create comprehensive reports."
                    }
                ]
            },
            {
                sectionId: "ed46f",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "33dd34",
                        collegeName: "Anytown University",
                        course: "Full Stack Developer Training Program",
                        startDate: "2017",
                        endDate: "2017",
                        aboutEducation: "I completed Full Stack Developer Training Program, mastering frontend and backend technologies. This equipped me to design scalable web applications, implement secure user authentication, and optimize performance. Hands-on projects enhanced my skills in version control, deployment, and troubleshooting, preparing me for a successful career in full stack development."
                    },
                    {
                        listId: "33dd35",
                        collegeName: "Anytown University",
                        course: "Bachelor of Science in Computer Science",
                        startDate: "2013",
                        endDate: "2017",
                        aboutEducation: "Relevant coursework included Advanced Web Development, Software Engineering Principles, and Database Systems."
                    },
                    {
                        listId: "33dd36",
                        collegeName: "Anytown University",
                        course: "Bachelor of Science in Computer Science",
                        startDate: "2013",
                        endDate: "2017",
                        aboutEducation: "Relevant coursework included Advanced Web Development, Software Engineering Principles, and Database Systems."
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
        headingTextSize: 18,
        bodyTextSize: 12,
        category: "ats-friendly",
        profileImage: "",
        userJobRole: "Web Developer",
        subCategory: "softwareEngineer",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "sectionId321",
                isSection: true,
                sectionName: "Summary",
                summary: "Innovative and detail-oriented Web Developer with 5 years of experience in designing and developing user-centric, dynamic websites and applications. Proficient in front-end and back-end technologies, with a strong foundation in computer science. Proven ability to deliver high-quality projects on time and within budget. Adept at collaborating with cross-functional teams to analyze needs and implement solutions that enhance user experience and achieve business objectives."
            },
            {
                sectionId: "sectionId321cont",
                isSection: true,
                sectionName: "Contact Me",
                list: [
                    {
                        listId: "24",
                        iconName: "fa-solid fa-phone",
                        contactName: "(123) 456-7890",
                    },
                    {
                        listId: "25",
                        iconName: "fa-solid fa-location-dot",
                        contactName: "123 Web Developer Street, Webland",
                    },
                    {
                        listId: "26",
                        iconName: "fa-solid fa-envelope",
                        contactName: "emily.smith@example.com",
                    },
                    {
                        listId: "27",
                        iconName: "fa-solid fa-link",
                        contactName: "emilysmithwebwork.com",
                    }
                ]
            },
            {
                sectionId: "5657",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "6d3",
                        projectName: "E-commerce Platform ",
                        startDate: "2021",
                        endDate: "2021",
                        aboutProject: "Developed a responsive e-commerce platform using React.js for the front end and Node.js with Express.js for the back end.Integrated payment gateways and implemented user authentication and authorization using JWT tokens.Optimized database queries to improve performance and handled deployment using Docker containers."
                    },
                    {
                        listId: "6d4",
                        projectName: "Social Media Dashboard",
                        startDate: "2020",
                        endDate: "2020",
                        aboutProject: "Led a team in building a real-time social media dashboard using AngularJS and MongoDB for data storage.Designed interactive data visualizations using D3.js and integrated APIs for social media data aggregation.Implemented user role management and developed RESTful APIs for seamless communication between front end and back end."
                    },

                ]
            },
            {
                sectionId: "54545",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "358574",
                        skillName: "HTML"
                    },
                    {
                        listId: "358575",
                        skillName: "CSS"
                    },
                    {
                        listId: "358576",
                        skillName: "React.js"
                    },
                    {
                        listId: "358577",
                        skillName: "PHP"
                    },
                    {
                        listId: "358578",
                        skillName: "Python"
                    },
                    {
                        listId: "358579",
                        skillName: "SQL"
                    }
                    ,
                    {
                        listId: "358580",
                        skillName: "Express.js"
                    }
                    ,
                    {
                        listId: "358581",
                        skillName: "MongoDB"
                    }
                    ,
                    {
                        listId: "358582",
                        skillName: "Git and GitHub"
                    }
                    ,
                    {
                        listId: "358583",
                        skillName: "JIRA"
                    }
                ]
            },
            {
                sectionId: "573x",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "5tgfr",
                        companyName: "Tech Solutions Inc., Webtown, WD",
                        jobRole: "Senior Web Developer",
                        startDate: "2019",
                        endDate: "2024",
                        aboutJob: "Spearheaded the migration of legacy systems to a modern tech stack, resulting in a 30% increase in site speed and improved user engagement metrics.Developed RESTful APIs to facilitate seamless integration between new and existing systems.Mentored junior developers in best practices for web development and conducted code reviews to ensure adherence to quality standards."
                    },
                    {
                        listId: "5tgft",
                        companyName: "Web Developer",
                        jobRole: "Web Designs Co., Webcity, WD",
                        startDate: "2018",
                        endDate: "2019",
                        aboutJob: "Designed and implemented custom WordPress themes and plugins for various clients, resulting in improved site performance and user experience.Collaborated with UI/UX designers to translate wireframes and mockups into responsive, interactive web pages.Conducted A/B testing and performance optimization to enhance site usability and conversion rates."
                    },
                    {
                        listId: "5tgfv",
                        companyName: "Web Developer",
                        jobRole: "Web Designs Co., Webcity, WD",
                        startDate: "2018",
                        endDate: "2019",
                        aboutJob: "Designed and implemented custom WordPress themes and plugins for various clients, resulting in improved site performance and user experience.Collaborated with UI/UX designers to translate wireframes and mockups into responsive, interactive web pages.Conducted A/B testing and performance optimization to enhance site usability and conversion rates."
                    }
                ]
            },
            {
                sectionId: "ed46f",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "33dd33",
                        collegeName: "TechSkill Academy",
                        course: "Web Developer Training Program",
                        startDate: "2017",
                        endDate: "2017",
                        aboutEducation: "I completed TechSkill Academy's Web Developer Training Program, mastering Frontend Technologies. This equipped me to build responsive websites, implement user authentication, and develop dynamic web applications. Hands-on projects honed my skills in version control, deployment, and troubleshooting, preparing me for a successful web development career."
                    },
                    {
                        listId: "33dd34",
                        collegeName: "Anytown University",
                        course: "Bachelor of Science in Computer Science",
                        startDate: "2013",
                        endDate: "2017",
                        aboutEducation: "Relevant coursework included Advanced Web Development, Software Engineering Principles, and Database Systems."
                    },
                    {
                        listId: "33dd35",
                        collegeName: "Anytown University",
                        course: "Bachelor of Science in Computer Science",
                        startDate: "2013",
                        endDate: "2017",
                        aboutEducation: "Relevant coursework included Advanced Web Development, Software Engineering Principles, and Database Systems."
                    },
                ]
            }
        ]

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
        headingTextSize: 18,
        bodyTextSize: 12,
        category: "creative",
        userName: "Oliver Greene",
        profileImage: "https://upbstechnology.com/wp-content/uploads/2024/08/Default-Image.jpg",
        userJobRole: "Graphic Designer",
        subCategory: "graphicDesigner",
        isQRCode: false,
        resumeStyle: {
            backgroundPattern: false
        },
        resumeDetails: {
            ATS_Score: 90
        },
        AllSections: [
            {
                sectionId: "ERT1:SUMMARY",
                isSection: true,
                sectionName: "Summary",
                summary: "Passionate and innovative graphic designer with a keen eye for detail and a flair for creativity. Specialized in branding, logo design, and digital illustration. Committed to delivering visually stunning solutions that resonate with target audiences and elevate brand identities."
            },
            {
                sectionId: "ERT1:CONTACT",
                isSection: true,
                sectionVisible: true,
                sectionName: "Contact Me",
                list: [
                    {
                        listId: "ERT1:CONTACT:1",
                        iconName: "fa-solid fa-envelope",
                        contactName: "oliver.greene@email.com"
                    },
                    {
                        listId: "ERT1:CONTACT:2",
                        iconName: "fa-solid fa-phone",
                        contactName: "+1 (555) 123-4567"
                    },
                ]
            },
            {
                sectionId: "ERT1:PROJECTS",
                isSection: true,
                sectionName: "Projects",
                list: [
                    {
                        listId: "ERT1:PROJECTS:1",
                        projectName: "Pixel Fusion",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Pixel Fusion was a comprehensive branding project for a tech startup aimed at integrating cutting-edge technology with everyday life."
                    },
                    {
                        listId: "ERT1:PROJECTS:2",
                        projectName: "Pixel Fusion",
                        startDate: "2020",
                        endDate: "2021",
                        aboutProject: "Pixel Fusion was a comprehensive branding project for a tech startup aimed at integrating cutting-edge technology with everyday life."
                    },

                ]
            },
            {
                sectionId: "ERT1:SKILLS",
                isSection: true,
                sectionName: "Skills",
                list: [
                    {
                        listId: "ERT1:SKILLS:1",
                        skillName: "Adobe Creative"
                    },
                    {
                        listId: "ERT1:SKILLS:2",
                        skillName: "Digital Illustration"
                    },
                    {
                        listId: "ERT1:SKILLS:3",
                        skillName: "Print Design"
                    },
                ]
            },
            {
                sectionId: "ERT1:JOB-EXP",
                isSection: true,
                sectionName: "Job Experience",
                list: [
                    {
                        listId: "ERT1:JOB-EXP:1",
                        companyName: "Creative Minds Agency",
                        jobRole: "Senior Graphic Designer",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "As a Senior Graphic Designer at Creative Minds Agency, I led a team of designers in conceptualizing and executing various design projects for a diverse range of clients. My responsibilities included overseeing the entire design process from initial ideation to final execution."
                    },
                    {
                        listId: "ERT1:JOB-EXP:2",
                        companyName: "Creative Minds Agency",
                        jobRole: "Senior Graphic Designer",
                        startDate: "2019",
                        endDate: "2021",
                        aboutJob: "As a Senior Graphic Designer at Creative Minds Agency, I led a team of designers in conceptualizing and executing various design projects for a diverse range of clients. My responsibilities included overseeing the entire design process from initial ideation to final execution."
                    },

                ]
            },
            {
                sectionId: "ERT1:EDUCATION",
                isSection: true,
                sectionName: "Education",
                list: [
                    {
                        listId: "ERT1:EDUCATION:1",
                        collegeName: "Art Institute of New York City",
                        course: "B.A. Graphics",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Bachelor of Fine Arts in Graphic Design (Art Institute of New York City, New York) Obtained a comprehensive understanding of graphic design principles, including typography, color theory, and layout design."
                    },
                    {
                        listId: "ERT1:EDUCATION:2",
                        collegeName: "Art Institute of New York City",
                        course: "B.A. Graphics",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Bachelor of Fine Arts in Graphic Design (Art Institute of New York City, New York) Obtained a comprehensive understanding of graphic design principles, including typography, color theory, and layout design."
                    },
                    {
                        listId: "ERT1:EDUCATION:3",
                        collegeName: "Art Institute of New York City",
                        course: "B.A. Graphics",
                        startDate: "2017",
                        endDate: "2020",
                        aboutEducation: "Bachelor of Fine Arts in Graphic Design (Art Institute of New York City, New York) Obtained a comprehensive understanding of graphic design principles, including typography, color theory, and layout design."
                    }
                ]
            }
        ]

    }
]
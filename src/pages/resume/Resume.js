import { Box, Button, Card, CardContent, CardHeader, Link, Typography } from "@mui/material";
import MainContainer from "../../components/layout/MainContainer";
import SkillChitGroup, { SkillOptions } from "../../components/skill_chit/SkillChit";
import { Link as RouterLink } from "react-router-dom";
import { FloatingToc } from "../../components/floating_toc/FloatingToc";

const cardSx = {
    my: 2,
};

// TODO: Have different visualizations of the resume + ability to switch between them
export default function Resume() {
    const monthYear = { year: 'numeric', month: 'long' };
    const yearOnly = { year: 'numeric' };

    const groupedEducationItems = resumeData.educationItems.reduce((acc, item) => {
        const courseType = item.courseType;
        if (!acc[courseType]) {
          acc[courseType] = [];
        }
        acc[courseType].push(item);
        return acc;
      }, {});

    return <MainContainer
        title="Resume"
        banner={<FloatingToc titles={["Work experience", "Education"]} />}
    >
        <Typography
            variant="body1"
            gutterBottom
        >
            Download my one-page resume <Link component={RouterLink} to="files/NoahWrightResume.pdf">as a PDF</Link> or
            <Link component={RouterLink} to="/files/NoahWrightResume.docx">as a Word document</Link>.
        </Typography>
        <Typography
            variant="h2"
            id="work"
        >
            Work experience
        </Typography>
        {resumeData.workItems.map(workItem => <>
            <Card
                elevation={4}
                sx={cardSx}
            >
                <CardHeader
                    title={workItem.company + " - " + workItem.title}
                    subheader={formattedDateRange(workItem.startDate, workItem.endDate, monthYear)}
                    avatar={<img
                        src={workItem.image} // TODO: Default icon
                        alt={workItem.company}
                        style={{ width: 50 }}
                    />}
                />
                <CardContent>
                    <Typography
                        variant="body2"
                    >
                        {workItem.summary}
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        <ul>
                            {workItem.accomplishments.map(accomplishment => <li>{accomplishment}</li>)}
                        </ul>
                    </Typography>
                    <div>
                        <SkillChitGroup skills={workItem.skills} />
                    </div>
                </CardContent>
            </Card>
        </>)}
        <Typography
            variant="h2"
            id="education"
        >
            Education
        </Typography>
        {Object.entries(groupedEducationItems).map(([group, items]) => <div>
            <h3>{group}</h3>
            {items.map(educationItem => <>
                <Card
                    elevation={4}
                    sx={cardSx}
                >
                    <CardHeader
                        title={educationItem.school}
                        subheader={educationItem.course + " - " + formattedDate(educationItem.gradDate, yearOnly)}
                        // subheader={new Date(educationItem.gradDate).year}
                        avatar={<img
                            src={educationItem.image} // TODO: Default icon
                            alt={educationItem.school}
                            style={{ width: 50 }}
                        />}
                        />
                    <CardContent>
                        {/* <div>{workItem.summary}</div> */}
                        <Typography
                            variant="body1"
                        >
                            <ul>
                                {educationItem.accomplishments.map(accomplishment => <li>{accomplishment}</li>)}
                            </ul>
                        </Typography>
                        <div>
                            <SkillChitGroup skills={educationItem.skills} />
                        </div>
                    </CardContent>
                </Card>
            </>)}
        </div>)}
    </MainContainer>;
}

function formattedDateRange(startDate, endDate, format) {
    startDate = new Date(startDate);
    endDate = endDate ? new Date(endDate) : null;
    
    // Add a day to the end date so it's inclusive
    startDate = new Date(startDate.setDate(startDate.getDate() + 1));
    endDate = endDate ? new Date(endDate.setDate(endDate.getDate() + 1)) : null;

    let startFormatted = startDate.toLocaleDateString('en-us', format);
    let endFormatted = endDate ? endDate.toLocaleDateString('en-us', format) : 'Present';

    return `${startFormatted} - ${endFormatted}`;
}

function formattedDate(date, format) {
    return date ? new Date(date).toLocaleDateString('en-us', format) : "";
}


// TODO: Eventually add publications, awards, anything else
class ResumeData {
    constructor({workItems, educationItems}) {
        this.workItems = workItems;
        this.educationItems = educationItems;
    }
}

const ResumeEducationTypes = {
    University: "University",
    Certificate: "Certificate",
    Training: "Training",
    Other: "Other",
};

class ResumeEducationItem {
    constructor({school, course, courseType, gradDate, image, accomplishments, skills}) {
        this.school = school;
        this.course = course;
        this.courseType = courseType;
        this.gradDate = gradDate;
        this.image = image;
        this.accomplishments = accomplishments;
        this.skills = skills;
    }
}

class ResumeWorkItem {
    constructor({title, company, startDate, endDate, accomplishments, image, summary, skills}) {
        this.title = title;
        this.company = company;
        this.startDate = startDate;
        this.endDate = endDate;
        this.accomplishments = accomplishments;
        this.image = image;
        this.summary = summary;
        this.skills = skills;
    }
}

const resumeData = new ResumeData({
    workItems: [
        new ResumeWorkItem({
            title: "Software Engineer",
            company: "Signify Health",
            startDate: "2023-03-01",
            endDate: null,
            accomplishments: [
                "Developed highly reliable k8s cron job. Optimized routes via GCP API, reducing drive time/distance 10%",
                "Led code quality initiatives. Packaged common code, improved test coverage, shortened release cycles",
                "Hosted biweekly org-wide learning sessions. Shared best practices, tools, and experiences across teams",
            ],
            image: "/images/logos/signify-health-logo.svg",
            // summary: "TODO: Summarize...",
            skills: [
                SkillOptions.CSharp,
                SkillOptions.SQL,
                SkillOptions.TypeScript,
                SkillOptions.Angular,
                SkillOptions.Azure,
                SkillOptions.WebApis,
            ]
        }),
        new ResumeWorkItem({
            title: "Software Engineer",
            company: "Google",
            startDate: "2022-03-01",
            endDate: "2023-02-01",
            accomplishments: [
                "Maintained TypeScript and closure template front ends, applying accessibility best practices.",
                "Implemented secure proxy for gRPC calls. Wrote Java code for backend microservices.",
                "Led documentation and code health effort. Improved onboarding/on-call docs and fixed flaky tests.",
            ],
            image: "/images/logos/google_g_logo.svg",
            // summary: "As part of the Payments Platform...",
            skills: [
                SkillOptions.Java,
                SkillOptions.SQL,
                SkillOptions.TypeScript,
                SkillOptions.Angular,
                SkillOptions.WebApis,
            ]
        }),
        new ResumeWorkItem({
            title: "Software Engineer",
            company: "Sovereign Sportsman Solutions",
            startDate: "2021-05-01",
            endDate: "2022-03-01",
            accomplishments: [
                "Built .NET MVC sites for state governments. Utilized Entity Framework, Kendo UI, Vue, MS SQL Server",
                "Led full-stack development for new feature. Gathered requirements, designed DB schema, wrote CRUD pages",
            ],
            image: "/images/logos/s3_logo.webp",
            // summary: "blah blah blah",
            skills: [
                SkillOptions.CSharp,
                SkillOptions.SQL,
                SkillOptions.JavaScript,
                SkillOptions.HTML,
                SkillOptions.Azure,
                SkillOptions.Vue,
                // SkillOptions.DotNetCore // TODO: Add this
            ]
        }),
        new ResumeWorkItem({
            title: "Noncommissioned Officer in Charge",
            company: "689th Network Operating Squadron",
            startDate: "2020-03-01",
            endDate: "2022-05-01",
            accomplishments: [
                "Taught Windows terminal, Python scripting, and public speaking fundamentals to unit’s cybersecurity Airmen.",
                "Trained unit on using Splunk to investigate threats. Created script to automate creation of queries.",
                "Mentored three direct reports. Wrote performance reviews, and reported issues to leadership.",
            ],
            image: "/images/logos/usaf_logo.svg",
            // summary: "blah blah blah",
            skills: [
                SkillOptions.Leadership,
                SkillOptions.Python,
                SkillOptions.Security,
                SkillOptions.PublicSpeaking,
            ]
        }),
        new ResumeWorkItem({
            title: "Software Engineer",
            company: "CGI, Inc.",
            startDate: "2020-03-01",
            endDate: "2021-05-01",
            accomplishments: [
                "Led effort to improve code health. Used SonarQube to identify and correct 250+ tech debt issues. Mentored junior engineers on best practices.",
                "Maintained internal .NET microservices. Demoed features, reviewed code for scrum team, and managed Jenkins build pipelines.",
                "Refactored legacy service to implement DI & automated testing. Increased code coverage from 0% to 70% in one sprint.",
            ],
            image: "/images/logos/cgi_logo.svg",
            // summary: "blah blah blah",
            skills: [
                SkillOptions.CSharp,
                SkillOptions.AspNet,
                SkillOptions.HTML,
                SkillOptions.JavaScript,
                SkillOptions.SQL,
                SkillOptions.WebApis,
                // TODO: List all skills
            ]
        }),
        new ResumeWorkItem({
            title: "Instructor",
            company: "Airman Leadership School",
            startDate: "2016-03-01",
            endDate: "2020-03-01",
            accomplishments: [
                "Wrote JavaScript/Visual Basic scripts to automate administrative duties. Increased class size 30% without adding staff.",
                "Integrated PayPal checkout, enabling 2K reservations worth over $52K. Drove paperless effort, eliminating 90% of printed material.",
                "Pioneered new curriculum and learning management system. Instructed hundreds of Airmen in military leadership.",
            ],
            image: "/images/logos/usaf_logo.svg",
            // summary: "blah blah blah",
            skills: [
                SkillOptions.Leadership,
                SkillOptions.PublicSpeaking,
                SkillOptions.JavaScript,
                SkillOptions.HTML,
                SkillOptions.VisualBasic,
                // TODO: List all skills
            ]
        }),
        new ResumeWorkItem({
            title: "Software Development Team Lead",
            company: "Headquarters, Air University",
            startDate: "2011-12-01",
            endDate: "2016-02-01",
            accomplishments: [
                "Wrote JavaScript/Visual Basic scripts to automate administrative duties. Increased class size 30% without adding staff.",
                "Integrated PayPal checkout, enabling 2K reservations worth over $52K. Drove paperless effort, eliminating 90% of printed material.",
                "Pioneered new curriculum and learning management system. Instructed hundreds of Airmen in military leadership.",
            ],
            image: "/images/logos/usaf_logo.svg",
            // summary: "blah blah blah",
            skills: [
                SkillOptions.CSharp,
                SkillOptions.SQL,
                SkillOptions.Leadership,
                SkillOptions.HTML,
                SkillOptions.CSS,
                SkillOptions.Security,
            ]
        }),
        new ResumeWorkItem({
            title: "Computer Programmer",
            company: "Art Clem Enterprises",
            startDate: "2008-07-01",
            endDate: "2011-05-01",
            accomplishments: [
                "Integrated with UPS/USPS API’s to automate carrier selection. Saved $30K per year in labor and shipping.",
                "Designed bespoke inventory tracking and item verification solution. Prevented item shortages and misshipments.",
                "Hand-built order tracking chron job. Sent automated emails to notify customers of package delivery.",
                "Wrote web scrapers to gather product and vendor information, guaranteeing accurate pricing and inventory.",
            ],
            image: "/images/logos/ace-head.gif",
            // summary: "blah blah blah",
            skills: [
                SkillOptions.CSharp,
                SkillOptions.SQL,
                SkillOptions.VisualBasic,
                SkillOptions.WebApis,
                SkillOptions.HTML,
                SkillOptions.CSS,
                SkillOptions.Php,
            ]
        }),
    ],
    educationItems: [
        new ResumeEducationItem({
            school: "Trident University International",
            course: "BS, Computer Science",
            courseType: ResumeEducationTypes.University,
            gradDate: "2019-01-01",
            image: "/images/logos/trident_at_aiu.png",
            accomplishments: [
                "Graduated summa cum laude, 3.97 GPA",
            ],
            skills: [
                SkillOptions.Python,
                SkillOptions.SQL,
                SkillOptions.Security,
                // TODO: What else?  Review course curriculum
            ],
        }),
        new ResumeEducationItem({
            school: "Community College of the Air Force",
            course: "AAS, Instructor of Technology and Military Science",
            courseType: ResumeEducationTypes.University,
            gradDate: "2017-01-01",
            // image: "logos/ccaf.png",
            image: "/images/logos/usaf_logo.svg",
            accomplishments: [],
            skills: [
                SkillOptions.Leadership,
                SkillOptions.PublicSpeaking,
            ],
        }),
        new ResumeEducationItem({
            school: "Community College of the Air Force",
            course: "AAS, Computer Science",
            courseType: ResumeEducationTypes.University,
            gradDate: "2015-01-01",
            // image: "logos/ccaf.png",
            image: "/images/logos/usaf_logo.svg",
            accomplishments: [],
            skills: [
                SkillOptions.CSharp,
                SkillOptions.SQL,
            ],
        }),
        // TODO: Add skills for these trainings
        new ResumeEducationItem({
            school: "United States Air Force",
            course: "Noncommissioned Officer Academy",
            courseType: ResumeEducationTypes.Training,
            gradDate: "2021-10-01",
            // image: "logos/ncoa.png",
            image: "/images/logos/usaf_logo.svg",
            accomplishments: [],
            skills: [],
        }),
        new ResumeEducationItem({
            school: "United States Air Force",
            course: "Senior Enlisted Joint Professional Military Education I",
            courseType: ResumeEducationTypes.Training,
            gradDate: "2021-09-01",
            image: "/images/logos/usaf_logo.svg",
            // image: "logos/sejpme.png",
            accomplishments: [],
            skills: [],
        }),
        new ResumeEducationItem({
            school: "United States Air Force",
            course: "Enlisted Professional Military Education Instructor Course",
            courseType: ResumeEducationTypes.Training,
            gradDate: "2016-03-01",
            // image: "logos/epmeic.png",
            image: "/images/logos/usaf_logo.svg",
            accomplishments: [
                "Graduated on the Dean’s List due to high academic performance",
                "Entered the course before reaching the rank of Staff Sergeant, something the staff had never seen before",
            ],
            skills: [],
        }),
        new ResumeEducationItem({
            school: "United States Air Force",
            course: "Airman Leadership School",
            courseType: ResumeEducationTypes.Training,
            gradDate: "2015-07-01",
            // image: "logos/als.png",
            image: "/images/logos/usaf_logo.svg",
            accomplishments: [],
            skills: [],
        }),
        new ResumeEducationItem({
            school: "United States Air Force",
            course: "Basic Military Training",
            courseType: ResumeEducationTypes.Training,
            gradDate: "2011-07-01",
            // image: "logos/als.png",
            image: "/images/logos/usaf_logo.svg",
            accomplishments: [],
            skills: [],
        }),
    ],
});



import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";

const projects = [
  {
    title: "Thanvi Realty | Realestate website",
    description:
      "A fully responsive real estate website built for Thanvi Realty, showcasing premium properties, services, and contact channels across Bangalore, Hyderabad, and Vizag.",
    technologies: ["React.js", "emailjs", "radix-ui", "tailwindcss", "Zod"],
    images: [
      "/projects/Thanvirealty/hero.png",
      "/projects/Thanvirealty/about.png",
      "/projects/Thanvirealty/img.png",
      "/projects/Thanvirealty/img1.png",
      "/projects/Thanvirealty/img2.png",
      "/projects/Thanvirealty/img3.png",
      "/projects/Thanvirealty/img4.png",
      "/projects/Thanvirealty/services.png",
      "/projects/Thanvirealty/services1.png",
    ],
    accomplishments: [
      "Developed a multi-page, mobile-friendly website for Thanvi Realty, a South India-based real estate firm under Thanvi Buildtech.",
      "Implemented sections for Premium Plots, Luxury Villas, Apartments, Investment Lands, and Exclusive Projects using modular layout design.",
      "Created structured service pages detailing plot development, land acquisition, construction, and investment guidance offerings.",
      "Added informative content blocks for amenities like gated communities, green zones, and fitness centers, with visual emphasis on lifestyle features.",
      "Built a dynamic contact section including lead forms and location details to facilitate direct engagement.",
      "Emphasized SEO-friendly structure, semantic markup, and easy navigation for high conversion and discoverability.",
      "Collaborated closely with the client to ensure branding, colors, and layout aligned with business goals and real estate trustworthiness.",
    ],
    demoLink: "https://www.thanvirealty.in/",
    hasLiveDemo: true,
    codeLink: "https://github.com/joel9591/Thanvirealty.in",
  },
  {
    title: "Loan Prediction",
    description: "Machine learning model to predict loan approval based on applicant data.",
    technologies: ["Python", "Numpy", "Pandas", "matplotlib", "seaborn", "scikit-learn"],
    images: ["/projects/loan-prediction/loan-prediction.png"],
    accomplishments: [
      "Developed and deployed a machine learning model using Logistic Regression to predict loan approval based on applicant details.",
      "Performed extensive data preprocessing, including handling missing values, encoding categorical variables, and normalizing data for improved model accuracy.",
      "Implemented exploratory data analysis (EDA) using Seaborn and Matplotlib, visualizing trends in gender, marital status, self-employment, and property area affecting loan approval.",
      "Achieved high model accuracy through effective feature selection and training-testing split, enhancing predictive performance on real-world loan application data.",
    ],
    demoLink: "#",
    hasLiveDemo: false,
    codeLink: "https://github.com/joel9591/loan-prediction",
  },
  {
    title: "Employee Management System",
    description: "A comprehensive employee management solution with role-based access control.",
    technologies: ["React.js", "Node.js", "MySQL", "Express", "OAuth", "JWT"],
    images: [
      "/projects/EmployeeMS/add_category.png",
      "/projects/EmployeeMS/admin_dashboard.png",
      "/projects/EmployeeMS/admin_login.png",
      "/projects/EmployeeMS/admin_profile.png",
      "/projects/EmployeeMS/category_list.png",
      "/projects/EmployeeMS/edit_admin_details.png",
      "/projects/EmployeeMS/edit_employee_details.png",
      "/projects/EmployeeMS/employee_list.png",
      "/projects/EmployeeMS/employee_login.png",
      "/projects/EmployeeMS/employee_profile.png",
      "/projects/EmployeeMS/landing_page.png",
      "/projects/EmployeeMS/signup_page.png",
    ],
    accomplishments: [
      "Full-Stack Development: Built a comprehensive Employee Management System using React for the frontend and Node.js, Express for the backend, ensuring seamless user experience and functionality.",
      "Database Integration: Utilized MySQL for robust data management, integrated with Railway database and mySQL Workbench, enabling efficient storage and retrieval of employee information.",
      "Role-Based Access & Real-Time Updates: Implemented role-based access control, allowing secure user authentication, and incorporated real-time updates for employee data management.",
    ],
    demoLink: "#",
    hasLiveDemo: false,
    codeLink: "https://github.com/joel9591/EMS-local-dev",
  },
];

export default function ProjectsSection() {
  const [imageIndices, setImageIndices] = useState(projects.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prev) =>
        prev.map((currentIndex, i) => {
          const totalImages = projects[i].images.length;
          return (currentIndex + 1) % totalImages;
        }),
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A showcase of my technical skills through real-world software engineering and data
            science projects.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Card key={i} className="overflow-hidden shadow-lg">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <img
                src={project.images[imageIndices[i]]}
                alt={`${project.title} screenshot`}
                className="h-auto w-full object-cover transition-opacity duration-500"
              />
              <CardContent>
                <div className="mb-4 mt-1 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  {project.accomplishments.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a href={project.codeLink}>
                      <Button variant="outline">
                        <GitHubLogoIcon className="mr-2" />
                        Code
                      </Button>
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <p>View the GitHub repository for this project.</p>
                  </HoverCardContent>
                </HoverCard>
                {/* <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button >
                      <GlobeIcon className="mr-2"/>
                      Live Demo
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <p>See the deployed project in action.</p>
                  </HoverCardContent>
                </HoverCard> */}
                {project.hasLiveDemo && (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button asChild>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <GlobeIcon className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p>See the deployed project in action</p>
                    </HoverCardContent>
                  </HoverCard>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

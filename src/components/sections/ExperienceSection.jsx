import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";

const experiences = [
  {
    company: "Syslog Technologies",
    position: "Associate Software Engineer",
    period: "March 2023 to Present",
    location: "Bengaluru, India",
    responsibilities: [
      "Developed full-stack features for CRM and e-commerce platforms using React.js, Node.js, and Express.",
      "Designed and implemented secure authentication with JWT and role-based access control.",
      "Built and integrated RESTful APIs to enable real-time data sync and dynamic workflows.",
      "Improved frontend performance using Redux Toolkit and optimized backend API response using Redis.",
      "Created mobile-first dashboards with Tailwind CSS, improving efficiency by 30%.",
      "Collaborated with backend teams using Postman for testing and API debugging."
    ]
  },
  {
    company: "Revoseven Technologies",
    position: "Intern",
    period: "March 2022 – April 2022",
    location: "Bengaluru, India",
    responsibilities: [
      "Developed an IoT-enabled vehicle tracking solution with a React-based frontend, delivering real-time data visualization.",
      "Integrated RFID technology with backend systems for secure payment and vehicle monitoring interfaces.",
      "Created intuitive and functional UIs tailored for real-time user interaction."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <>
    <Helmet>
        <title>Joel J | Full Stack Developer </title>
        <meta
          name="description"
          content="Joel J is a full stack software developer skilled in React.js, Node.js, JavaScript, Python, and modern web technologies. Explore his work and get in touch."
        />
        <meta
          content="Joel J, hey Joel, Joel portfolio, full stack developer, React developer, portfolio website, web developer Bangalore, joel j, Joel, Software Engineer"
        />
        <meta name="author" content="Joel J" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (for Facebook & LinkedIn) */}
        <meta property="og:title" content="Joel J | Full Stack Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore the work of Joel J — a skilled React and Node.js full stack developer."
        />
        <meta property="og:url" content="https://heyjoel.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://heyjoel.vercel.app/images/joel-j1.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Joel J | Full Stack Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Dynamic and results-driven full stack software developer. Explore my portfolio."
        />
        <meta name="twitter:image" content="https://heyjoel.vercel.app/images/joel-j1.jpg" />
      </Helmet>
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey showcases my growth as a Full Stack Developer
            through hands-on experience with various technologies and projects.
          </p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent md:before:mx-auto md:before:translate-x-0 lg:items-center">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative grid md:grid-cols-5 gap-8 md:gap-4 items-start md:items-center ${
        index % 2 === 0 ? "md:text-left" : "md:text-right md:flex-row-reverse"
      }`}
    >
      <div className="w-2.5 h-2.5 bg-primary rounded-full md:mx-auto md:mt-2 mb-4 relative z-10 md:mb-0"></div>

      <div className={`md:col-span-2 ${index % 2 === 0 ? "" : "md:order-last"}`}>
        <Badge variant="outline" className="font-normal text-xs inline-block mb-2">
          {experience.period}
        </Badge>
        <h3 className="font-bold">{experience.company}</h3>
        <p className="text-muted-foreground">{experience.position}</p>
        <p className="text-xs text-muted-foreground">{experience.location}</p>
      </div>

      <Card className={`md:col-span-2 ${index % 2 === 0 ? "" : "md:order-first"}`}>
        <CardContent className="p-4">
          <ul className={`list-disc text-sm space-y-2 ${index % 2 === 0 ? "pl-5" : "pr-5 text-right md:text-left md:pl-5"}`}>
            {experience.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-muted-foreground">{resp}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
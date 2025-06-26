import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileTextIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Helmet } from "react-helmet";

const certifications = [
  {
    title: "Software Engineering Job Simulation",
    issuer: "JPMORGAN CHASE & CO",
    date: "2024",
    credentialUrl:
      "https://drive.google.com/file/d/1ubjqerIx4iXkZ_JAY83mc9-1FjF956A8/view?usp=drive_link",
  },
  {
    title: "React and Redux Certification Test",
    issuer: "KG CODING",
    date: "2024",
    credentialUrl:
      "https://drive.google.com/file/d/1KETqyCSAg8zGaeatB1B4jgNGLcdotnPt/view?usp=drive_link",
  },
];

export default function CertificationsSection() {
  return (
    <>
      <Helmet>
        <title>Joel J | Full Stack Developer </title>
        <meta
          name="description"
          content="Joel J is a full stack software developer skilled in React.js, Node.js, JavaScript, Python, and modern web technologies. Explore his work and get in touch."
        />
        <meta
          name="keywords"
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
      <section className="bg-muted/50 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              <span className="text-primary">Certifications</span> & Achievements
            </h2>
            <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-primary" />
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Professional certifications that validate my technical skills and knowledge in various
              domains of software development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification, index) => (
              <CertificationCard key={index} certification={certification} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CertificationCard({ certification, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full overflow-hidden">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <Badge variant="outline" className="px-3 py-1">
              {certification.date}
            </Badge>
            {certification.credentialUrl && (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <GlobeIcon className="h-4 w-4" />
              </a>
            )}
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <FileTextIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-1 font-semibold">{certification.title}</h3>
              <p className="text-sm text-muted-foreground">{certification.issuer}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

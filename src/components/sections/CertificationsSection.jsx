import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileTextIcon, GlobeIcon } from "@radix-ui/react-icons";

const certifications = [
  {
    title: "Software Engineering Job Simulation",
    issuer: "JPMORGAN CHASE & CO",
    date: "2024",
    credentialUrl: "https://drive.google.com/file/d/1ubjqerIx4iXkZ_JAY83mc9-1FjF956A8/view?usp=drive_link"
  },
  {
    title: "React and Redux Certification Test",
    issuer: "KG CODING",
    date: "2024",
    credentialUrl: "https://drive.google.com/file/d/1KETqyCSAg8zGaeatB1B4jgNGLcdotnPt/view?usp=drive_link"
  }
];

export default function CertificationsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            <span className="text-primary">Certifications</span> & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my technical skills and knowledge
            in various domains of software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} index={index} />
          ))}
        </div>
      </div>
    </section>
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
      <Card className="overflow-hidden h-full">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
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
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <FileTextIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{certification.title}</h3>
              <p className="text-sm text-muted-foreground">{certification.issuer}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
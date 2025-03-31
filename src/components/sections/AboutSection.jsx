import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <Card className="h-full overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Dynamic and results-driven Full Stack Software Developer with 2 years of experience
                  in designing and developing high performance, scalable software solutions. Proficient
                  in React.js, JavaScript (ES6+), Python, Node.js, Express.js, MySQL, and MongoDB, with
                  expertise in building seamless front-end and back-end integrations.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Skilled in Agile development, modern JavaScript frameworks, and responsive design to
                  deliver intuitive user experiences. Adept at problem-solving, optimizing performance,
                  and implementing innovative solutions while following industry best practices and clean
                  coding standards.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A quick learner, detail-oriented, and highly adaptable to evolving project requirements.
                  Passionate about staying ahead of emerging technologies to drive efficiency, scalability,
                  and business success.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Personal Traits</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Problem Solver",
                    "Quick Learner",
                    "Detail-Oriented",
                    "Adaptable",
                    "Team Player",
                    "Self-Motivated",
                    "Creative Thinker",
                    "Quality-Focused"
                  ].map((trait) => (
                    <Badge key={trait} className="justify-center py-2 font-medium" variant="outline">
                      {trait}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4 mt-8">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Electronics and Communication Engineering</h4>
                    <p className="text-sm text-muted-foreground">Sai Vidya Institute of Technology</p>
                    <p className="text-xs text-muted-foreground">[2018–2022]</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
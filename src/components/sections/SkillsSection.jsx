import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Redux Toolkit",
    "Context API",
    "React Hooks",
    "TailwindCSS",
    "Bootstrap",
    "Flexbox",
    "Responsive Design",
    "Mobile-first Design",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Client-Server Integration",
  ],
  languages: ["JavaScript (ES6+)", "Python"],
  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Cursor AI",
    "Jest",
    "React Testing Library",
    "Postman API",
  ],
  database: ["MySQL", "MongoDB"]
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit includes a diverse range of technologies and frameworks
            that enable me to build comprehensive full-stack applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-4xl grid-cols-5">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="database">Database</TabsTrigger>
                <TabsTrigger value="languages">Programming Languages</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
              </TabsList>
            </div>

            <Card>
              <CardContent className="p-6">
                <TabsContent value="frontend" className="mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {skills.frontend.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="backend" className="mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {skills.backend.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="database" className="mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {skills.database.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="languages" className="mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {skills.languages.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tools" className="mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {skills.tools.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBadge({ name }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <Badge className="w-full justify-center py-3 text-sm" variant="secondary">
        {name}
      </Badge>
    </motion.div>
  );
}
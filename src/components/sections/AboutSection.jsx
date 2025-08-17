import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";

export default function AboutSection() {
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
          content="Joel J, hey Joel, Joel portfolio, full stack developer, React developer, portfolio website, web developer Bangalore, joel j, Joel, Software Engineer, joel react developer, top software developer"
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
      <section id="about" className="bg-muted/50 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-primary" />
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="col-span-2"
            >
              <Card className="h-full overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-2xl font-semibold">Professional Summary</h3>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Full-Stack Developer with 2.3+ years of experience designing and building
                    responsive, scalable web applications using JavaScript (ES6+), React.js,
                    Next.js, Node.js, and Express. Skilled in creating RESTful APIs, managing
                    databases (MongoDB, MySQL), and delivering end-to-end solutions with clean,
                    maintainable code. Strong background in front-end architecture, backend
                    development, and collaboration across cross functional teams to build
                    high-performance products.
                  </p>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Skilled in Agile development, modern JavaScript frameworks, and responsive
                    design to deliver intuitive user experiences. Adept at problem-solving,
                    optimizing performance, and implementing innovative solutions while following
                    industry best practices and clean coding standards.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    A quick learner, detail-oriented, and highly adaptable to evolving project
                    requirements. Passionate about staying ahead of emerging technologies to drive
                    efficiency, scalability, and business success.
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
                  <h3 className="mb-4 text-2xl font-semibold">Personal Traits</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Problem Solver",
                      "Quick Learner",
                      "Detail-Oriented",
                      "Adaptable",
                      "Team Player",
                      "Self-Motivated",
                      "Creative Thinker",
                      "Quality-Focused",
                    ].map((trait) => (
                      <Badge
                        key={trait}
                        className="justify-center py-2 font-medium"
                        variant="outline"
                      >
                        {trait}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="mb-4 mt-8 text-2xl font-semibold">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Electronics and Communication Engineering</h4>
                      <p className="text-sm text-muted-foreground">
                        Sai Vidya Institute of Technology
                      </p>
                      <p className="text-xs text-muted-foreground">[2018–2022]</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

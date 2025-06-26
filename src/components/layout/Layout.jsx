import { Helmet } from "react-helmet";
import Header from "./Header";

export default function Layout({ children }) {
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
    <div className="min-h-screen flex flex-col bg-background antialiased">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="py-6 md:py-8 border-t">
        <div className="container flex flex-col items-center justify-center space-y-2 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Full-stack-Developer-Portfolio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React, JavaScript, and TailwindCSS
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
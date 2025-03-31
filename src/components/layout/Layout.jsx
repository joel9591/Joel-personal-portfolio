import Header from "./Header";

export default function Layout({ children }) {
  return (
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
  );
}
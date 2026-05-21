export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-muted-foreground">© {currentYear} Henrique Antony</p>
          <div className="flex items-center gap-8">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/henriqueantony" },
              { label: "GitHub", href: "https://github.com/HenriqueAntony07" },
              { label: "Instagram", href: "https://instagram.com/henrique_webdesigner" },
              { label: "Email", href: "mailto:henriqueantonydev@gmail.com" },
            ].map(({ label, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">{label}</a>
            ))}
          </div>
        </div>
      </footer>
    );
  }
  
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Davraj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

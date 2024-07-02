const Footer = () => {
  return (
    <footer className="bg-background border-t py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} UFO Sightings. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-muted-foreground hover:text-foreground mx-2">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-muted-foreground hover:text-foreground mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
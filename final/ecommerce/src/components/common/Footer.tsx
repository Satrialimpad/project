// components/common/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-muted-foreground hover:text-primary">About</a></li>
                <li><a href="/careers" className="text-muted-foreground hover:text-primary">Careers</a></li>
                <li><a href="/press" className="text-muted-foreground hover:text-primary">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</a></li>
                <li><a href="/shipping" className="text-muted-foreground hover:text-primary">Shipping Info</a></li>
                <li><a href="/returns" className="text-muted-foreground hover:text-primary">Returns</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
                <li><a href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Facebook</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Your Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
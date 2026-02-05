 import { useState } from "react";
 import { Menu, X, ShoppingCart } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
 
   const navLinks = [
     { name: "หน้าแรก", href: "#home" },
     { name: "สินค้า", href: "#products" },
     { name: "เกี่ยวกับเรา", href: "#about" },
     { name: "ติดต่อ", href: "#contact" },
   ];
 
   return (
     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
       <div className="container mx-auto px-4">
         <div className="flex items-center justify-between h-16">
           {/* Logo */}
           <a href="#home" className="flex items-center gap-2">
             <span className="text-2xl font-bold text-gradient">🌭 ไส้กรอกอร่อย</span>
           </a>
 
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-8">
             {navLinks.map((link) => (
               <a
                 key={link.name}
                 href={link.href}
                 className="text-foreground/80 hover:text-primary transition-colors font-medium"
               >
                 {link.name}
               </a>
             ))}
           </div>
 
           {/* Cart & CTA */}
           <div className="hidden md:flex items-center gap-4">
             <Button variant="ghost" size="icon" className="relative">
               <ShoppingCart className="h-5 w-5" />
               <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                 0
               </span>
             </Button>
             <Button className="bg-gradient-warm hover:opacity-90 transition-opacity">
               สั่งซื้อเลย
             </Button>
           </div>
 
           {/* Mobile Menu Button */}
           <button
             className="md:hidden p-2"
             onClick={() => setIsOpen(!isOpen)}
           >
             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
           </button>
         </div>
 
         {/* Mobile Navigation */}
         {isOpen && (
           <div className="md:hidden py-4 border-t border-border animate-fade-up">
             {navLinks.map((link) => (
               <a
                 key={link.name}
                 href={link.href}
                 className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                 onClick={() => setIsOpen(false)}
               >
                 {link.name}
               </a>
             ))}
             <Button className="w-full mt-4 bg-gradient-warm hover:opacity-90 transition-opacity">
               สั่งซื้อเลย
             </Button>
           </div>
         )}
       </div>
     </nav>
   );
 };
 
 export default Navbar;
 import { Button } from "@/components/ui/button";
 import { ChevronDown } from "lucide-react";
 import heroImage from "@/assets/hero-sausage.jpg";
 
 const HeroSection = () => {
   return (
     <section
       id="home"
       className="relative min-h-screen flex items-center justify-center overflow-hidden"
     >
       {/* Background Image */}
       <div className="absolute inset-0">
         <img
           src={heroImage}
           alt="ไส้กรอกย่างหอมๆ"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
       </div>
 
       {/* Content */}
       <div className="relative container mx-auto px-4 pt-16">
         <div className="max-w-2xl animate-fade-up">
           <span className="inline-block px-4 py-2 bg-accent/90 text-accent-foreground rounded-full text-sm font-medium mb-6">
             🔥 สูตรลับความอร่อย
           </span>
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
             ไส้กรอกพรีเมียม
             <br />
             <span className="text-accent">รสชาติที่คุณต้องลอง</span>
           </h1>
           <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
             ผลิตจากเนื้อหมูคัดพิเศษ ไม่ใส่สารกันบูด สดใหม่ทุกวัน
             จัดส่งถึงบ้านทั่วประเทศ
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
             <Button
               size="lg"
               className="bg-gradient-warm hover:opacity-90 transition-all text-lg px-8 py-6 shadow-warm"
             >
               ดูสินค้าทั้งหมด
             </Button>
             <Button
               size="lg"
               variant="outline"
               className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-6"
             >
               โทรสั่งซื้อ
             </Button>
           </div>
         </div>
       </div>
 
       {/* Scroll Indicator */}
       <a
         href="#products"
         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float"
       >
         <ChevronDown className="h-8 w-8" />
       </a>
     </section>
   );
 };
 
 export default HeroSection;
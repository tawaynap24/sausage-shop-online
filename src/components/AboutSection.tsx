 import { Flame, Truck, Shield, Heart } from "lucide-react";
 
 const features = [
   {
     icon: Flame,
     title: "สดใหม่ทุกวัน",
     description: "ผลิตสดใหม่ทุกวัน ไม่ค้างสต็อก",
   },
   {
     icon: Shield,
     title: "ปลอดภัย 100%",
     description: "ไม่ใส่สารกันบูด ผ่านมาตรฐาน อย.",
   },
   {
     icon: Truck,
     title: "ส่งฟรีทั่วไทย",
     description: "สั่งขั้นต่ำ 500 บาท ส่งฟรีทั่วประเทศ",
   },
   {
     icon: Heart,
     title: "ทำด้วยใจ",
     description: "สูตรลับประจำครอบครัว สืบทอดกว่า 30 ปี",
   },
 ];
 
 const AboutSection = () => {
   return (
     <section id="about" className="py-20 bg-background">
       <div className="container mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Content */}
           <div className="animate-fade-up">
             <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
               ❤️ เกี่ยวกับเรา
             </span>
             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
               ความอร่อยที่ส่งต่อ
               <br />
               <span className="text-gradient">จากรุ่นสู่รุ่น</span>
             </h2>
             <p className="text-muted-foreground mb-8 leading-relaxed">
               เราเริ่มต้นจากร้านเล็กๆ ในตลาด ด้วยความรักในการทำไส้กรอก
               สูตรที่ส่งต่อจากคุณย่า ผสมผสานกับเทคนิคสมัยใหม่
               จนกลายเป็นไส้กรอกที่หลายคนหลงรัก
             </p>
 
             {/* Features Grid */}
             <div className="grid sm:grid-cols-2 gap-4">
               {features.map((feature, index) => (
                 <div
                   key={feature.title}
                   className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-card animate-fade-up"
                   style={{ animationDelay: `${index * 100}ms` }}
                 >
                   <div className="flex-shrink-0 w-10 h-10 bg-gradient-warm rounded-lg flex items-center justify-center">
                     <feature.icon className="h-5 w-5 text-primary-foreground" />
                   </div>
                   <div>
                     <h3 className="font-semibold text-card-foreground">
                       {feature.title}
                     </h3>
                     <p className="text-sm text-muted-foreground">
                       {feature.description}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
 
           {/* Stats */}
           <div className="grid grid-cols-2 gap-4">
             <div className="bg-gradient-warm p-6 rounded-2xl text-center text-primary-foreground animate-scale-in">
               <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
               <div className="text-primary-foreground/80">ปีประสบการณ์</div>
             </div>
             <div className="bg-card p-6 rounded-2xl text-center shadow-card animate-scale-in" style={{ animationDelay: "100ms" }}>
               <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">10K+</div>
               <div className="text-muted-foreground">ลูกค้าประจำ</div>
             </div>
             <div className="bg-card p-6 rounded-2xl text-center shadow-card animate-scale-in" style={{ animationDelay: "200ms" }}>
               <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">15</div>
               <div className="text-muted-foreground">รสชาติให้เลือก</div>
             </div>
             <div className="bg-accent p-6 rounded-2xl text-center animate-scale-in" style={{ animationDelay: "300ms" }}>
               <div className="text-4xl md:text-5xl font-bold text-accent-foreground mb-2">4.9</div>
               <div className="text-accent-foreground/80">คะแนนรีวิว</div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default AboutSection;
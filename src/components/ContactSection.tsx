 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { MapPin, Phone, Clock, Send } from "lucide-react";
 
 const contactInfo = [
   {
     icon: MapPin,
     title: "ที่อยู่",
     detail: "123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110",
   },
   {
     icon: Phone,
     title: "โทรศัพท์",
     detail: "02-123-4567, 081-234-5678",
   },
   {
     icon: Clock,
     title: "เวลาทำการ",
     detail: "จันทร์ - เสาร์ 08:00 - 18:00 น.",
   },
 ];
 
 const ContactSection = () => {
   return (
     <section id="contact" className="py-20 bg-gradient-cream">
       <div className="container mx-auto px-4">
         <div className="text-center mb-12 animate-fade-up">
           <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
             📞 ติดต่อเรา
           </span>
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
             พร้อมให้บริการ<span className="text-gradient">ทุกวัน</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             สนใจสั่งซื้อหรือมีคำถาม? ติดต่อเราได้เลย ยินดีให้บริการครับ
           </p>
         </div>
 
         <div className="grid lg:grid-cols-2 gap-12">
           {/* Contact Form */}
           <div className="bg-card p-8 rounded-2xl shadow-card animate-fade-up">
             <h3 className="text-xl font-semibold text-card-foreground mb-6">
               ส่งข้อความถึงเรา
             </h3>
             <form className="space-y-4">
               <div className="grid sm:grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium text-card-foreground mb-2">
                     ชื่อ
                   </label>
                   <Input placeholder="ชื่อของคุณ" className="bg-background" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-card-foreground mb-2">
                     เบอร์โทร
                   </label>
                   <Input placeholder="08X-XXX-XXXX" className="bg-background" />
                 </div>
               </div>
               <div>
                 <label className="block text-sm font-medium text-card-foreground mb-2">
                   อีเมล
                 </label>
                 <Input
                   type="email"
                   placeholder="email@example.com"
                   className="bg-background"
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-card-foreground mb-2">
                   ข้อความ
                 </label>
                 <Textarea
                   placeholder="รายละเอียดที่ต้องการสอบถาม..."
                   className="bg-background min-h-[120px]"
                 />
               </div>
               <Button className="w-full bg-gradient-warm hover:opacity-90 transition-opacity gap-2">
                 <Send className="h-4 w-4" />
                 ส่งข้อความ
               </Button>
             </form>
           </div>
 
           {/* Contact Info */}
           <div className="space-y-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
             {contactInfo.map((info) => (
               <div
                 key={info.title}
                 className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card"
               >
                 <div className="flex-shrink-0 w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center">
                   <info.icon className="h-6 w-6 text-primary-foreground" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-card-foreground mb-1">
                     {info.title}
                   </h4>
                   <p className="text-muted-foreground">{info.detail}</p>
                 </div>
               </div>
             ))}
 
             {/* Social Media */}
             <div className="p-6 bg-gradient-warm rounded-xl text-primary-foreground">
               <h4 className="font-semibold mb-3">ติดตามเราได้ที่</h4>
               <div className="flex gap-3">
                 <a
                   href="#"
                   className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                 >
                   <span className="text-lg">📘</span>
                 </a>
                 <a
                   href="#"
                   className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                 >
                   <span className="text-lg">📸</span>
                 </a>
                 <a
                   href="#"
                   className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                 >
                   <span className="text-lg">💬</span>
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default ContactSection;
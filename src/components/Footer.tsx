 const Footer = () => {
   return (
     <footer className="bg-foreground text-primary-foreground py-12">
       <div className="container mx-auto px-4">
         <div className="grid md:grid-cols-3 gap-8 mb-8">
           {/* Brand */}
           <div>
             <h3 className="text-2xl font-bold mb-4">🌭 ไส้กรอกอร่อย</h3>
             <p className="text-primary-foreground/70">
               ไส้กรอกพรีเมียม คุณภาพดี ราคาเป็นมิตร
               ส่งตรงถึงบ้านคุณทั่วประเทศ
             </p>
           </div>
 
           {/* Quick Links */}
           <div>
             <h4 className="font-semibold mb-4">ลิงก์ด่วน</h4>
             <ul className="space-y-2 text-primary-foreground/70">
               <li>
                 <a href="#home" className="hover:text-primary-foreground transition-colors">
                   หน้าแรก
                 </a>
               </li>
               <li>
                 <a href="#products" className="hover:text-primary-foreground transition-colors">
                   สินค้า
                 </a>
               </li>
               <li>
                 <a href="#about" className="hover:text-primary-foreground transition-colors">
                   เกี่ยวกับเรา
                 </a>
               </li>
               <li>
                 <a href="#contact" className="hover:text-primary-foreground transition-colors">
                   ติดต่อ
                 </a>
               </li>
             </ul>
           </div>
 
           {/* Contact */}
           <div>
             <h4 className="font-semibold mb-4">ติดต่อ</h4>
             <ul className="space-y-2 text-primary-foreground/70">
               <li>📍 123 ถนนสุขุมวิท กรุงเทพฯ</li>
               <li>📞 02-123-4567</li>
               <li>✉️ contact@saikrok.com</li>
             </ul>
           </div>
         </div>
 
         <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
           <p>© 2024 ไส้กรอกอร่อย สงวนลิขสิทธิ์</p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;
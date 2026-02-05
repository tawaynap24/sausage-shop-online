 import ProductCard from "./ProductCard";
 import sausageIsaan from "@/assets/sausage-isaan.jpg";
 import sausageGerman from "@/assets/sausage-german.jpg";
 import sausageChorizo from "@/assets/sausage-chorizo.jpg";
 import sausageCheese from "@/assets/sausage-cheese.jpg";
 
 const products = [
   {
     id: 1,
     name: "ไส้กรอกอีสาน",
     description: "สูตรต้นตำรับ รสเปรี้ยวหวาน หอมสมุนไพร เสิร์ฟพร้อมผักสด",
     price: 89,
     originalPrice: 120,
     image: sausageIsaan,
     rating: 5,
     isBestseller: true,
   },
   {
     id: 2,
     name: "ไส้กรอกเยอรมัน",
     description: "นำเข้าสูตรแท้จากเยอรมนี เนื้อแน่น รสชาติเข้มข้น",
     price: 149,
     image: sausageGerman,
     rating: 4,
     isNew: true,
   },
   {
     id: 3,
     name: "ไส้กรอกโชริโซ่",
     description: "สไตล์สเปน รสเผ็ดพริกปาปริก้า หอมกระเทียม",
     price: 169,
     image: sausageChorizo,
     rating: 5,
   },
   {
     id: 4,
     name: "ไส้กรอกชีส",
     description: "สอดไส้ชีสเยิ้มๆ ละลายในปาก อร่อยทุกคำ",
     price: 99,
     originalPrice: 129,
     image: sausageCheese,
     rating: 4,
     isBestseller: true,
   },
 ];
 
 const ProductsSection = () => {
   return (
     <section id="products" className="py-20 bg-gradient-cream">
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <div className="text-center mb-12 animate-fade-up">
           <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
             🌭 สินค้าของเรา
           </span>
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
             ไส้กรอก<span className="text-gradient">คุณภาพพรีเมียม</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             คัดสรรวัตถุดิบชั้นดี ผลิตด้วยความใส่ใจ รสชาติที่คุณจะหลงรัก
           </p>
         </div>
 
         {/* Products Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {products.map((product, index) => (
             <div
               key={product.id}
               className="animate-fade-up"
               style={{ animationDelay: `${index * 100}ms` }}
             >
               <ProductCard {...product} />
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default ProductsSection;
 import { Button } from "@/components/ui/button";
 import { ShoppingCart, Star } from "lucide-react";
 
 interface ProductCardProps {
   name: string;
   description: string;
   price: number;
   originalPrice?: number;
   image: string;
   rating: number;
   isNew?: boolean;
   isBestseller?: boolean;
 }
 
 const ProductCard = ({
   name,
   description,
   price,
   originalPrice,
   image,
   rating,
   isNew,
   isBestseller,
 }: ProductCardProps) => {
   return (
     <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
       {/* Image Container */}
       <div className="relative aspect-square overflow-hidden">
         <img
           src={image}
           alt={name}
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
         />
         {/* Badges */}
         <div className="absolute top-3 left-3 flex flex-col gap-2">
           {isNew && (
             <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
               ใหม่
             </span>
           )}
           {isBestseller && (
             <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
               ขายดี
             </span>
           )}
         </div>
         {/* Quick Add Button */}
         <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
           <Button
             size="icon"
             className="bg-gradient-warm hover:opacity-90 rounded-full shadow-warm"
           >
             <ShoppingCart className="h-4 w-4" />
           </Button>
         </div>
       </div>
 
       {/* Content */}
       <div className="p-4">
         {/* Rating */}
         <div className="flex items-center gap-1 mb-2">
           {Array.from({ length: 5 }).map((_, i) => (
             <Star
               key={i}
               className={`h-4 w-4 ${
                 i < rating
                   ? "fill-accent text-accent"
                   : "fill-muted text-muted"
               }`}
             />
           ))}
           <span className="text-sm text-muted-foreground ml-1">({rating}.0)</span>
         </div>
 
         <h3 className="font-semibold text-lg text-card-foreground mb-1">
           {name}
         </h3>
         <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
           {description}
         </p>
 
         {/* Price */}
         <div className="flex items-center gap-2">
           <span className="text-xl font-bold text-primary">
             ฿{price.toLocaleString()}
           </span>
           {originalPrice && (
             <span className="text-sm text-muted-foreground line-through">
               ฿{originalPrice.toLocaleString()}
             </span>
           )}
         </div>
       </div>
     </div>
   );
 };
 
 export default ProductCard;
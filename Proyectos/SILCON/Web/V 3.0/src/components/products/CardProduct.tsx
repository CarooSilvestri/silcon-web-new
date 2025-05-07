import { useEffect, useState } from "preact/hooks";
import type { ProductProps } from "../../models/product.model";
import ModalProduct from "./ModalProduct";

export default function CardProduct({prod}: ProductProps) {
  const [open, setOpen] = useState(false);
  
  useEffect(()=> {
    if (open) {
      document.body.classList.add("overflow-y-hidden")
    } else {
      document.body.classList.remove("overflow-y-hidden")
    }
  },[open])

  return (
    <>
      <div class="border-1">
        <img src={"src/assets/"+prod.name+ " - "+ prod.id+".jpg"}/> 
        <div class="p-5"> 
          <p><strong>{prod.name}</strong></p> 
          <p onClick={() => setOpen(!open)} 
            class="text-sm text-decoration-line: underline">
              Ver más
          </p>
        </div>
     </div>
       
      {open && (
        <ModalProduct infoProd={prod} setOpen={setOpen}/>
      )}
    </>
  );
}

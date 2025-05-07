import gsap from 'gsap';
import type { Product } from '../../models/product.model';
import { useEffect, useRef } from 'preact/hooks';

interface PropsModal {
  infoProd: Product
  setOpen: (state: boolean) => void
} 

export default function ModalProduct({infoProd, setOpen}: PropsModal) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(()=> {  
    const el = boxRef.current;
    if (!el) return;
    else el.classList.remove('invisible');
  
    const tl = gsap.timeline();
    tl.fromTo(
      el,
      { y: -1000,},
      {
        y: 0,
        duration: 1,
        ease: "expo.out",
      }
    );
    },[])

    const handleClose = () => {
      const el = boxRef.current;
      if (!el) return;
    
      const tl = gsap.timeline({
        onComplete: () => {
          setOpen(false);
        }
      });
    
      tl.to(el, {
        y: 1000,
        duration: 0.8,
        ease: "expo.in",
      });
    };

  return (
    <div ref={boxRef} class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 invisible">
      <div class=" grid grid-cols-2 bg-white relative h-full">
        <div>

        <img src={"src/assets/"+infoProd.name+ " - "+ infoProd.id+".jpg"} class="h-full"/>
        </div>
      
      <div class="p-6">
        <button
              class="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => handleClose()}
            >

            ✕
            </button>

            <h2 class="text-xl font-bold mb-4">{infoProd.name}</h2>
            <p class="text-gray-700">{infoProd.description}</p>
          </div></div>
      </div>
  );
}

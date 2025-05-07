import { h } from 'preact';
import { useRef } from 'preact/hooks';
import gsap from 'gsap';

interface Props {
  text: string;
  setFilter: (text: string) => void
}

export default function BtnProduct({ text, setFilter }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    gsap.to(overlayRef.current, {
      height: '100%',
      duration: 0.1,
      fontWeight: "bolder",
      ease: 'power4.out',
    });
  };

  const handleLeave = () => {
    gsap.to(overlayRef.current, {
      height: '0%',
      duration: 0.1,
      ease: 'power1.in',
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      class="relative overflow-hidden border-1 content-center p-3 bg-neutral-300 text-center cursor-pointer"
      onClick={() => setFilter(text)}
    >
      <div
        ref={overlayRef}
        class="absolute bottom-0 left-0 w-full bg-yellow-500 z-0"
        style={{ height: '0%', transition: 'height 0.3s' }}
      ></div>
      <p class="text-lg font-bold relative z-10">{text}</p>
    </div>
  );
}

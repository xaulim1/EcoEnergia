// @ts-nocheck
import type { FC } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const ImageCarousel: FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const slides = [
    {
      image: "/images/Solar.svg",
      caption: "Energia Solar - Painéis Fotovoltaicos"
    },
    {
      image: "/images/Eólica.svg",
      caption: "Energia Eólica - Turbinas em Campo"
    },
    {
      image: "/images/Hidrelétrica.svg",
      caption: "Energia Hidrelétrica - Barragem"
    },
    {
      image: "/images/Biomassa.svg",
      caption: "Energia da Biomassa - Bioenergia"
    },
    {
      image: "/images/Geotérmica.svg",
      caption: "Energia Geotérmica"
    },
    {
      image: "/images/Maremotriz.svg",
      caption: "Energia Maremotriz"
    },
    {
      image: "/images/biogás.svg",
      caption: "Energia de Biogás"
    },
    {
      image: "/images/hidrogênio verde.svg",
      caption: "Hidrogênio Verde"
    }
  ];

  return (
    <div ref={sliderRef} className="keen-slider h-[600px]">
      {slides.map((slide, index) => (
        <div key={index} className="keen-slider__slide relative">
          <img 
            src={slide.image}
            alt={slide.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
            <h2 className="text-2xl font-bold text-white">{slide.caption}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
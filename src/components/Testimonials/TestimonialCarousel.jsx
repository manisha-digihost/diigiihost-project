import { useState, useEffect, useRef } from "react"
import CarouselNavigation from "../Carousel/CarouselNavigation"
import Heading from "../Heading/Heading.Jsx"
import TestimonialCard from "./TestimonialCard"
import CarouselIndicators from "../Carousel/CarouselIndicator"
import Profile_1 from '../../assets/images/Profile_1.png'
import Profile_2 from '../../assets/images/Profile_2.png'

const testimonialData = [
  {
    id: 1,
    name: "Avinash KR",
    title: "Manager",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Profile_1,
  },
  {
    id: 2,
    name: "John Rowling",
    title: "Manager",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Profile_2,
  },
  {
    id: 3,
    name: "Sam Ipsum",
    title: "Director",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: Profile_1,
  },
]

const TestimonialCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(1)
  const carouselRef = useRef(null)
  const totalSlides = testimonialData.length

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1)
      } else {
        setSlidesToShow(1)
      }
    }

    handleResize() 
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setActiveSlide(index)
  }

  return (
    <div className="py-16 px-4 bg-[#0a0b2e] text-white relative testimonials-path">
      <div className="max-w-6xl mx-auto relative z-10">
        <Heading
          title="Testimonials"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          withCircle={true}
          className="text-white text-lg text-center md:w-2/3 w-full mx-auto"
        />

        <div className="relative mt-12">
          <CarouselNavigation onPrev={prevSlide} onNext={nextSlide} />

          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <CarouselIndicators total={totalSlides} active={activeSlide} onChange={goToSlide} />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCarousel

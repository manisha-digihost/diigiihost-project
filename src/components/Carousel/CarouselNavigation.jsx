import { ChevronLeft, ChevronRight } from "lucide-react"

const CarouselNavigation = ({ onPrev, onNext }) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute md:-left-14 top-1/2 hidden md:block -translate-y-1/2 -translate-x-1/2 z-10 bg-black !rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>

      <button
        onClick={onNext}
        className="absolute md:-right-14 hidden md:block top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-black !rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" size={24} />
      </button>
    </>
  )
}

export default CarouselNavigation

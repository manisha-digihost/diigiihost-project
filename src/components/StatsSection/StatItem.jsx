const StatItem = ({ number, suffix = "+", description, children }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-2 md:text-5xl text-4xl">{children}</div>
      <div className="text-white text-lg max-w-[180px]">{description}</div>
    </div>
  )
}

export default StatItem

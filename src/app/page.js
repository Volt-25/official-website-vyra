export default function Home() {
  return (
    <div className="relative w-full h-full">
      {/* Grid Background */}
      <div className="grid grid-cols-4 grid-rows-10 gap-0">
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            className={`border-r border-b border-[#9e9e9e] ${
              index % 4 === 3 ? 'border-r-0' : ''
            } ${index >= 36 ? 'border-b-0' : ''} aspect-square`}
          />
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-start -mt-10 top-[20vh]">
        <h1 
          className="text-[15rem] font-bold leading-none tracking-wider text-transparent"
          style={{
            WebkitTextStroke: '2px #1a1a1a',
            textStroke: '2px #1a1a1a'
          }}
        >
          VYRA
        </h1>
        <p className="text-2xl text-gray-800 mt-4 tracking-wide">
          Explore the race within you
        </p>
      </div>
    </div>
  );
}

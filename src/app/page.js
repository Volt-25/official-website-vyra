import Link from 'next/link';

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
          className="text-[25vw] font-bold leading-none tracking-wider text-transparent"
          style={{
            WebkitTextStroke: '2px #1a1a1a',
            textStroke: '2px #1a1a1a',
          }}
        >
          VYRA
        </h1>
        <p className="text-2xl text-gray-800 mt-4 tracking-wide">
          Explore the race within you
        </p>
      </div>

      {/* Buttons */}
      <div
        className="absolute inset-x-0 flex items-center justify-center space-x-4"
        style={{ top: '40vh', height: '30vh' }}
      >
        <Link href="/page1">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
            Page 1
          </button>
        </Link>
        <Link href="/page2">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
            Page 2
          </button>
        </Link>
        <Link href="/page3">
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600">
            Page 3
          </button>
        </Link>
      </div>

      {/* Videos */}
      <div className="absolute bottom-10 inset-x-0 flex flex-col items-center space-y-4">
        {/* Two square videos in a row */}
        <div className="flex justify-center space-x-4 w-full px-4">
          <video
            src="assets/start.mp4"
            autoPlay
            loop
            muted
            className="w-[50%] aspect-square object-cover rounded-lg shadow"
          />
          <video
            src="assets/start.mp4"
            autoPlay
            loop
            muted
            className="w-[50%] aspect-square object-cover rounded-lg shadow"
          />
        </div>
        {/* Landscape video below */}
        <video
          src="assets/aiAnalysis.mp4"
          autoPlay
          loop
          muted
          className="w-full aspect-video object-cover rounded-lg shadow px-4"
        />
      </div>
    </div>
  );
}
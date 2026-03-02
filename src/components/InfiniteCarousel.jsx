const items = ["client-audiophile", "client-databiz", "client-maker", "client-meet"];

export default function InfiniteCarousel() {
  return (
    <div className="relative flex overflow-hidden">
      {/* 1. Gradient Overlays for a polished look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white z-10"></div>

      {/* 2. The Animated Track */}
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First Loop */}
        <div className="flex shrink-0 items-center gap-12 px-6">
          {items.map((item, index) => (
            <img src={`./src/assets/${item}.svg`} key={index} alt={item} />
          ))}
        </div>

        {/* Second Loop (Exact Duplicate) */}
        <div className="flex shrink-0 items-center gap-12 px-6">
          {items.map((item, index) => (
            <img src={`./src/assets/${item}.svg`} key={index} alt={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
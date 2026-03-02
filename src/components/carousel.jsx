export default function Carousel({
  imageUrl,
  title,
  description,
  rate,
  rateDescription,
}) {
  return (
    <div className="bg-white rounded-[40px] border border-[#e2e7ee] p-[10px] max-w-[300px]">
      <div className="bg-gray-100 min-w-[200px] w-full min-h-[187px] aspect-video aspect-video rounded rounded-[32px] overflow-hidden">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <header className="text-[#0f1115] text-[18px] font-bold">
          {title}
        </header>
        <div className="text-[#697289] text-[14px] mt-1 mb-4">
          {description}
        </div>
        <div className="font-medium text-[14px]">
          <strong>{rate}</strong>{" "}
          <span className="text-[#697289]">{rateDescription}</span>
        </div>
      </div>
    </div>
  );
}

export default function Carousel({
  imageUrl,
  title,
  description,
  rate,
  rateDescription,
}) {
  return (
    <div className="bg-white rounded-[40px] border border-[#e2e7ee] p-[10px] max-w-[300px] md:max-w-none md:min-w-[450px] lg:min-w-[550px]">
      <div className="bg-gray-100 min-w-[200px] md:min-w-[430px] lg:min-w-[530px] w-full min-h-[187px] md:min-h-[287px] lg:min-h-[353px] aspect-video aspect-video rounded rounded-[32px] overflow-hidden">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <header className="text-[#0f1115] text-[18px] lg:text-[20px] font-bold">
          {title}
        </header>
        <div className="gap-4 flex flex-col md:flex-row justify-between mt-1 font-medium text-[14px]">
          <div className="text-[#697289]">{description}</div>
          <div>
            <strong>{rate}</strong>{" "}
            <span className="text-[#697289]">{rateDescription}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

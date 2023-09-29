export default function ({ total }: { total: number }) {
  return (
    <div className="rounded-2xl px-8 py-6 bg-[white] mb-8">
      <h1 className="mb-4 font-medium">Total Candidate Flow</h1>
      <h2 className="mb-4 font-medium">{total}</h2>
      <div className="flex gap-[2px] mb-8">
        <div className="basis-[52%]">
          <div className="w-full bg-[#D0F2CA] h-1 rounded-tl-lg rounded-bl-lg mb-1"></div>
          <h3 className="text-[10px] text-text-grey">Qualified 52%</h3>
        </div>
        <div className="basis-[48%]">
          <div className="w-full bg-[#FFE0E0] h-1 rounded-tr-lg rounded-br-lg mb-1"></div>
          <h3 className="text-[10px] text-text-grey">Disqualified 48%</h3>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-xs">
          <h1 className="font-medium mb-4">Stage</h1>
          <h2 className="mb-4">Applied</h2>
          <h2 className="mb-4">Recommended</h2>
          <h2 className="mb-4">Interview</h2>
          <h2 className="mb-4">Offer</h2>
          <h2 className="mb-4">Hired</h2>
        </div>
        <div className="flex gap-4 text-xs">
          <div className="w-fit text-right">
            <h1 className="font-medium mb-4">Qualified</h1>
            <h2 className="mb-4">3,122</h2>
            <h2 className="mb-4">2,164</h2>
            <h2 className="mb-4">443</h2>
            <h2 className="mb-4">183</h2>
            <h2 className="mb-4">118</h2>
          </div>
          <div className="w-fit text-right">
            <h1 className="font-medium mb-4">Disqualified</h1>
            <h2 className="mb-4">1,445</h2>
            <h2 className="mb-4">958</h2>
            <h2 className="mb-4">1,721</h2>
            <h2 className="mb-4">260</h2>
            <h2 className="mb-4">65</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

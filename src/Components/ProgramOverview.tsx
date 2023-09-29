import Chart from "./Chart";
import {
  CaretDown,
  CalendarIcon,
  LightningArrowDown,
  LightningArrowUp,
} from "../assets/svgs";
import TotalCandidateFlow from "./TotalCandidateFlow";
import { useParams } from "react-router-dom";

export default function () {
  const { companyName } = useParams();
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="font-semibold text-xl">
          Program Overview - {companyName}
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <h1 className="text-sm">London Intersnhip Program</h1>
            <CaretDown />
          </div>
          <div className="flex gap-3 items-center rounded-full p-4 py-1 bg-[#F0F3FB] text-xs">
            <CalendarIcon />
            <span>01 Jan 2023</span>
            <span>-</span>
            <span>31 July 2023</span>
            <CaretDown />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold mb-8">UX Internship</h1>
        <div className="flex gap-8 mb-8">
          {/* left */}
          <div className="basis-[55%]">
            {/* Top */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {/* Stat 1 */}
              <div className="rounded-2xl p-6 bg-[white] border border-border-color">
                <h1 className="mb-4 font-medium">Applied</h1>
                <h2 className="text-xl mb-4 font-medium">95</h2>
                <h3 className="text-xs mb-4">Previous Period</h3>
                <div className="flex gap-2 items-center">
                  <span className="text-xs">59</span>
                  <div className="flex gap-1 items-center rounded-full p-1 bg-[#F0F6FF]">
                    <LightningArrowUp />
                    <span className="text-[10px]">15%</span>
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="rounded-2xl p-6 bg-[white] border border-border-color">
                <h1 className="mb-4 font-medium">Offer</h1>
                <h2 className="text-xl mb-4 font-medium">33</h2>
                <h3 className="text-xs mb-4">Previous Period</h3>
                <div className="flex gap-2 items-center">
                  <span className="text-xs">71</span>
                  <div className="flex gap-1 items-center rounded-full p-1 bg-[#F0F6FF]">
                    <LightningArrowUp />
                    <span className="text-[10px]">15%</span>
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="rounded-2xl p-6 bg-[white] border border-border-color">
                <h1 className="mb-4 font-medium">Hired</h1>
                <h2 className="text-xl mb-4 font-medium">15</h2>
                <h3 className="text-xs mb-4">Previous Period</h3>
                <div className="flex gap-2 items-center">
                  <span className="text-xs">67</span>
                  <div className="flex gap-1 items-center rounded-full p-1 bg-[#FFF3F0]">
                    <LightningArrowDown />
                    <span className="text-[10px]">15%</span>
                  </div>
                </div>
              </div>
              {/* End of Stat 3 */}
            </div>

            {/* Bottom */}
            <div className="w-full bg-[white] rounded-2xl p-6 px-8 border border-border-color">
              <Chart
                dataSetsData={[
                  [260, 700, 600, 500, 470, 460, 610],
                  [250, 430, 390, 410, 540, 450, 500],
                ]}
              />
            </div>
          </div>

          {/* Right */}
          <div className="basis-[45%]">
            {/* Top */}
            <TotalCandidateFlow total={27} />
            {/* Bottom */}
            <div className="grid grid-cols-2 gap-8">
              <div className="rounded-2xl p-6 bg-[white] border border-border-color">
                <div className="flex justify-between">
                  <h1 className="mb-4 font-medium">Recommended</h1>
                  <h2 className="text-xl mb-4 font-medium">57</h2>
                </div>
                <h3 className="text-xs mb-4">Previous Period</h3>
                <p className="text-[#cdcdcd] text-xs">No available data</p>
              </div>
              <div className="rounded-2xl p-6 bg-[white] border border-border-color">
                <div className="flex justify-between">
                  <h1 className="mb-4 font-medium">Interview</h1>
                  <h2 className="text-xl mb-4 font-medium">39</h2>
                </div>
                <h3 className="text-xs mb-4">Previous Period</h3>
                <div className="flex gap-2 items-center">
                  <span className="text-xs">90</span>
                  <div className="flex gap-1 items-center rounded-full p-1 bg-[#F0F6FF]">
                    <LightningArrowUp />
                    <span className="text-[10px]">15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold mb-8">Art Internship</h1>
        <div className="flex gap-8 mb-8">
          {/* left */}
          <div className="basis-[55%]">
            {/* Top */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {/* Stat 1 */}
              <div className="rounded-2xl p-6 bg-[white] border border-border-color">
                <h1 className="mb-4 font-medium">Applied</h1>
                <h2 className="text-xl mb-4 font-medium">3,122</h2>
                <h3 className="text-xs mb-4">Previous Period</h3>
                <div className="flex gap-2 items-center">
                  <h4 className="text-[#cdcdcd] text-xs font-light">
                    No available data
                  </h4>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="rounded-2xl p-6 bg-[white] border border-border-color">
                <h1 className="mb-4 font-medium">Offer</h1>
                <h2 className="text-xl mb-4 font-medium">23</h2>
                <h3 className="text-xs mb-4">Previous Period</h3>
                <div className="flex gap-2 items-center">
                  <span className="text-xs">71</span>
                  <div className="flex gap-1 items-center rounded-full p-1 bg-[#F0F6FF]">
                    <LightningArrowUp />
                    <span className="text-[10px]">15%</span>
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="rounded-2xl p-6 bg-[white] border border-border-color">
                <h1 className="mb-4 font-medium">Hired</h1>
                <h2 className="text-xl mb-4 font-medium">118</h2>
                <h3 className="text-xs mb-4">Previous Period</h3>
                <div className="flex gap-2 items-center">
                  <span className="text-xs">167</span>
                  <div className="flex gap-1 items-center rounded-full p-1 bg-[#FFF3F0]">
                    <LightningArrowDown />
                    <span className="text-[10px]">15%</span>
                  </div>
                </div>
              </div>
              {/* End of Stat 3 */}
            </div>

            {/* Bottom */}
            <div className="w-full bg-[white] rounded-2xl p-6 px-8 border border-border-color">
              <Chart
                dataSetsData={[
                  [260, 700, 600, 500, 470, 460, 610],
                  [250, 430, 390, 410, 540, 450, 500],
                ]}
              />
            </div>
          </div>

          {/* Right */}
          <div className="basis-[45%]">
            {/* Top */}
            <TotalCandidateFlow total={4567} />
            {/* Bottom */}
            <div className="grid grid-cols-2 gap-8">
              <div className="rounded-2xl p-6 bg-[white] border border-border-color">
                <div className="flex justify-between">
                  <h1 className="mb-4 font-medium">Recommended</h1>
                  <h2 className="text-xl mb-4 font-medium">2164</h2>
                </div>
                <h3 className="text-xs mb-4">Previous Period</h3>
                <div className="flex gap-2 items-center">
                  <span className="text-xs">90</span>
                  <div className="flex gap-1 items-center rounded-full p-1 bg-[#F0F6FF]">
                    <LightningArrowUp />
                    <span className="text-[10px]">15%</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-6 bg-[white] border border-border-color">
                <div className="flex justify-between">
                  <h1 className="mb-4 font-medium">Interview</h1>
                  <h2 className="text-xl mb-4 font-medium">443</h2>
                </div>
                <h3 className="text-xs mb-4">Previous Period</h3>
                <div className="flex gap-2 items-center">
                  <span className="text-xs">90</span>
                  <div className="flex gap-1 items-center rounded-full p-1 bg-[#F0F6FF]">
                    <LightningArrowUp />
                    <span className="text-[10px]">15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

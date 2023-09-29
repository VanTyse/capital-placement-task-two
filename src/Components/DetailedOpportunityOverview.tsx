import SearchInput from "./Inputs/SearchInput";
import { useState, useContext, useEffect } from "react";
import SortInput from "./Inputs/SortInput";
import { ChartPieIcon, FileDownloadIcon } from "../assets/svgs";
import { Link } from "react-router-dom";
import { TableContext } from "../context/TableDataContext";
import { CompanyDetailsType, OpportunityType, SortStateType } from "../@types";
import {
  search,
  calculateTotal,
  calculateTotalRejected,
  sort,
} from "../utils/helpers";

export default function () {
  const [searchValue, setSearchValue] = useState("");
  const { table } = useContext(TableContext);
  const [sortedTable, setSortedTable] = useState(table);
  const [filteredTable, setFilteredTable] = useState(sortedTable);
  const [sortDetails, setSortDetails] = useState<SortStateType>({
    sortBy: null,
    isAscending: false,
  });

  useEffect(() => {
    setSortedTable([
      ...sort(sortDetails.sortBy, sortDetails.isAscending, table),
    ]);
  }, [sortDetails]);

  useEffect(() => {
    setFilteredTable(search(searchValue, sortedTable));
  }, [searchValue, sortedTable]);

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-medium mb-6">Detailed Opportunity Overview</h1>
        <div className="flex gap-8">
          <div className="basis-[55%]">
            <SearchInput
              value={searchValue}
              placeholder="Search by employer name"
              onCustomChange={(value) => setSearchValue(value)}
            />
          </div>

          <div className="basis-[45%] grid grid-cols-2 gap-8">
            <SortInput
              value={sortDetails}
              onChange={(value) => setSortDetails(value)}
            />
            <button className="flex justify-center items-center text-primary-blue bg-[white] capitalize border border-border-color rounded-xl py-2 px-4 ">
              Export all as csv
            </button>
          </div>
        </div>
      </div>
      {filteredTable.map((companyDetails) => (
        <CompanyDetails
          key={companyDetails.company_name}
          company_details={companyDetails}
        />
      ))}
    </div>
  );
}

const CompanyDetails = ({
  company_details,
}: {
  company_details: CompanyDetailsType;
}) => {
  return (
    <div className="bg-[white] rounded-2xl p-6 mb-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-medium text-sm">{company_details.company_name}</h1>
        <div className="flex gap-2">
          <Link to={`/program-overview/${company_details.company_name}`}>
            <div className="rounded-xl p-2 border border-border-color cursor-pointer hover:bg-bg-grey">
              <ChartPieIcon />
            </div>
          </Link>
          <div className="rounded-xl p-2 border border-border-color cursor-pointer">
            <FileDownloadIcon />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-8 mb-8">
        <div className="border border-border-color rounded-2xl px-8 py-4 bg-[white]">
          <h1 className="text-xs font-light mb-2 text-center">Applied</h1>
          <h2 className="font-medium text-center">
            {calculateTotal("applied", company_details)}
          </h2>
        </div>
        <div className="border border-border-color rounded-2xl px-8 py-4 bg-[white]">
          <h1 className="text-xs font-light mb-2 text-center">Recommended</h1>
          <h2 className="font-medium text-center">
            {calculateTotal("recommended", company_details)}
          </h2>
        </div>
        <div className="border border-border-color rounded-2xl px-8 py-4 bg-[white]">
          <h1 className="text-xs font-light mb-2 text-center">Interview</h1>
          <h2 className="font-medium text-center">
            {calculateTotal("interview", company_details)}
          </h2>
        </div>
        <div className="border border-border-color rounded-2xl px-8 py-4 bg-[white]">
          <h1 className="text-xs font-light mb-2 text-center">Offer</h1>
          <h2 className="font-medium text-center">
            {calculateTotal("offer", company_details)}
          </h2>
        </div>
        <div className="border border-border-color rounded-2xl px-8 py-4 bg-[white]">
          <h1 className="text-xs font-light mb-2 text-center">Hired</h1>
          <h2 className="font-medium text-center">
            {calculateTotal("hired", company_details)}
          </h2>
        </div>
        <div className="border border-border-color rounded-2xl px-8 py-4 bg-[white]">
          <h1 className="text-xs font-light mb-2 text-center">
            Total Rejected
          </h1>
          <h2 className="font-medium text-center">
            {calculateTotalRejected(company_details)}
          </h2>
        </div>
      </div>
      <div className="flex [&>div]:bg-[#FAFAFA] [&>div]:p-4 [&>div]:text-sm [&>div]:font-medium [&>div]:w-full">
        <div className="min-w-[214px]">Opportunity Name</div>
        <div>Status</div>
        <div>Applied</div>
        <div>Recommended</div>
        <div>Interview</div>
        <div>Offer</div>
        <div>Hired</div>
      </div>
      {/* Table Row Main */}
      {company_details.opportunities.map((opportunity_details) => (
        <OpportunityDetails opportunity_details={opportunity_details} />
      ))}
    </div>
  );
};

const OpportunityDetails = ({
  opportunity_details,
}: {
  opportunity_details: OpportunityType;
}) => {
  return (
    <div className="flex items-stretch">
      <div className="min-w-[214px] flex items-center pl-4">
        {opportunity_details.oppurtunity_name}
      </div>
      <div className="w-full">
        <div className="w-full flex [&>div]:w-full [&>div]:p-4 [&>div]:text-sm [&>div]:border-b [&>div]:border-border-color ">
          <div>
            <span className="rounded-full border border-[#CBE3BF] bg-[#F2FBE9] px-4 py-1 text-xs">
              Active
            </span>
          </div>
          <div>
            <span>{opportunity_details.status.active.applied}</span>
          </div>
          <div>
            <span>{opportunity_details.status.active.recommended}</span>
          </div>
          <div>
            <span>{opportunity_details.status.active.interview}</span>
          </div>
          <div>
            <span>{opportunity_details.status.active.offer}</span>
          </div>
          <div>
            <span>{opportunity_details.status.active.hired}</span>
          </div>
        </div>
        <div className="w-full flex [&>div]:w-full [&>div]:p-4 [&>div]:text-sm [&>div]:border-b [&>div]:border-border-color ">
          <div>
            <span className="rounded-full border border-[#FED8D4] bg-[#FFECEA] px-4 py-1 text-xs">
              Disqualified
            </span>
          </div>
          <div>
            <span>{opportunity_details.status.disqualified.applied}</span>
          </div>
          <div>
            <span>{opportunity_details.status.disqualified.recommended}</span>
          </div>
          <div>
            <span>{opportunity_details.status.disqualified.interview}</span>
          </div>
          <div>
            <span>{opportunity_details.status.disqualified.offer}</span>
          </div>
          <div>
            <span>{opportunity_details.status.disqualified.hired}</span>
          </div>
        </div>
        <div className="w-full flex [&>div]:w-full [&>div]:p-4 [&>div]:text-sm [&>div]:font-medium [&>div]:bg-[#F6FAFF] [&>div]:border-b [&>div]:border-border-color ">
          <div>
            <span>Sub - Total</span>
          </div>
          <div>
            <span>
              {opportunity_details.status.disqualified.applied +
                opportunity_details.status.active.applied}
            </span>
          </div>
          <div>
            <span>
              {opportunity_details.status.disqualified.recommended +
                opportunity_details.status.active.recommended}
            </span>
          </div>
          <div>
            <span>
              {opportunity_details.status.disqualified.interview +
                opportunity_details.status.active.interview}
            </span>
          </div>
          <div>
            <span>
              {opportunity_details.status.disqualified.offer +
                opportunity_details.status.active.offer}
            </span>
          </div>
          <div>
            <span>
              {opportunity_details.status.disqualified.hired +
                opportunity_details.status.active.hired}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

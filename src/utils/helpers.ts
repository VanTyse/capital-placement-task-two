import {
  ApplicationStateType,
  CompanyDetailsType,
  SortOptionsType,
  TableDataType,
} from "../@types";

export const calculateTotal = (
  type: ApplicationStateType,
  companyDetails: CompanyDetailsType
) => {
  return companyDetails.opportunities.reduce((acc, oppurtunityDetails) => {
    const activeValue = oppurtunityDetails.status.active[type];
    const disqualifiedValue = oppurtunityDetails.status.disqualified[type];
    return acc + activeValue + disqualifiedValue;
  }, 0);
};

export const calculateTotalRejected = (companyDetails: CompanyDetailsType) => {
  return companyDetails.opportunities.reduce((acc, oppurtunityDetails) => {
    const disqualifiedObj = oppurtunityDetails.status.disqualified;
    const values = Object.values(disqualifiedObj);

    return acc + values.reduce((acc, value) => acc + value, 0);
  }, 0);
};

export const sort = (
  sortBy: SortOptionsType,
  isAscending: boolean,
  table: TableDataType
) => {
  if (!sortBy) return table;
  if (sortBy === "rejected") {
    return table.sort((a, b) => {
      const aTotal = calculateTotalRejected(a);
      const bTotal = calculateTotalRejected(b);
      return isAscending ? aTotal - bTotal : bTotal - aTotal;
    });
  }
  return table.sort((a, b) => {
    const aTotal = calculateTotal(sortBy, a);
    const bTotal = calculateTotal(sortBy, b);
    return isAscending ? aTotal - bTotal : bTotal - aTotal;
  });
};

export const search = (query: string, table: TableDataType) => {
  return table.filter((company) => {
    if (company.company_name.toLowerCase().startsWith(query.toLowerCase()))
      return company;
    else return null;
  });
};

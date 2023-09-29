import React from "react";

export type navType = "1" | "2" | "3" | "4" | "5" | "6" | "7";

export type ModalPropsType = {
  children: React.ReactNode;
  show: boolean;
  onChange: (value: boolean) => void;
};

export type SidebarPropsTypes = {
  selectedNav: navType;
  changeNav: React.Dispatch<React.SetStateAction<navType>>;
};

export type NavItemPropsTypes = {
  selectedNav: navType;
  changeNav: React.Dispatch<React.SetStateAction<navType>>;
  name: navType;
  icon: React.ReactNode;
};

// export type TextInputPropsTypes = {
//   value: string;
//   onChange: (value: string) => void;
// };

export interface TextInputPropsTypes
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onCustomChange: (value: string) => void;
}

export type OpportunityType = {
  oppurtunity_name: string;
  status: {
    active: {
      applied: number;
      recommended: number;
      interview: number;
      offer: number;
      hired: number;
    };
    disqualified: {
      applied: number;
      recommended: number;
      interview: number;
      offer: number;
      hired: number;
    };
  };
};

export type CompanyDetailsType = {
  company_name: string;
  opportunities: OpportunityType[];
};

export type TableDataType = CompanyDetailsType[];

export type Action = {
  type: string;
  payload: any;
};

export type TableContextType = {
  table: TableDataType;
  dispatch?: React.Dispatch<Action>;
};

export type ApplicationStateType =
  | "applied"
  | "recommended"
  | "interview"
  | "offer"
  | "hired";

export type SortOptionsType = ApplicationStateType | "rejected" | null;

export type SortStateType = {
  sortBy: SortOptionsType;

  isAscending: boolean;
};

export type SortInputType = {
  value: SortStateType;
  onChange: (value: SortStateType) => void;
};

import { createContext, useReducer } from "react";
import { Action, TableContextType, TableDataType } from "../@types";

const INITIAL_STATE: TableDataType = [
  {
    company_name: "Google",
    opportunities: [
      {
        oppurtunity_name: "UX internship",
        status: {
          active: {
            applied: 20,
            recommended: 17,
            interview: 4,
            offer: 3,
            hired: 1,
          },
          disqualified: {
            applied: 7,
            recommended: 4,
            interview: 1,
            offer: 1,
            hired: 1,
          },
        },
      },
      {
        oppurtunity_name: "Art internship",
        status: {
          active: {
            applied: 44,
            recommended: 32,
            interview: 21,
            offer: 19,
            hired: 10,
          },
          disqualified: {
            applied: 24,
            recommended: 4,
            interview: 7,
            offer: 8,
            hired: 3,
          },
        },
      },
    ],
  },
  {
    company_name: "Microsoft",
    opportunities: [
      {
        oppurtunity_name: "UX internship",
        status: {
          active: {
            applied: 20,
            recommended: 107,
            interview: 4,
            offer: 3,
            hired: 1,
          },
          disqualified: {
            applied: 7,
            recommended: 4,
            interview: 1,
            offer: 1,
            hired: 1,
          },
        },
      },
      {
        oppurtunity_name: "Art internship",
        status: {
          active: {
            applied: 44,
            recommended: 32,
            interview: 21,
            offer: 19,
            hired: 10,
          },
          disqualified: {
            applied: 7,
            recommended: 4,
            interview: 1,
            offer: 1,
            hired: 1,
          },
        },
      },
    ],
  },
];

export const TableContext = createContext<TableContextType>({
  table: INITIAL_STATE,
});

const reducer = (state: TableDataType, action: Action) => {
  console.log(action);

  return state;
};

export const TableDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [table, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <TableContext.Provider value={{ table, dispatch }}>
      {children}
    </TableContext.Provider>
  );
};

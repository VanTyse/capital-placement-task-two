import { SortInputType, SortOptionsType } from "../../@types";
import { SortIcon } from "../../assets/svgs";
import { useState, useEffect } from "react";

export default function ({ value, onChange }: SortInputType) {
  const [_value, setValue] = useState(value);
  const [showOptions, setShowOptions] = useState(false);
  const handleOrderChange = (e: React.MouseEvent) => {
    e.stopPropagation();
    setValue((v) => ({
      ...v,
      isAscending: !v.isAscending,
    }));
  };

  const selectOption = (option: SortOptionsType) => {
    setValue((v) => ({
      ...v,
      sortBy: option,
    }));
  };

  useEffect(() => {
    onChange(_value);
  }, [_value]);

  const sortOptions: SortOptionsType[] = [
    "applied",
    "recommended",
    "interview",
    "offer",
    "hired",
    "rejected",
  ];
  return (
    <div className="relative w-full">
      <div
        className="border border-border-color rounded-xl bg-[white] py-2 px-4 w-full flex items-center cursor-pointer"
        onClick={() => setShowOptions((x) => !x)}
      >
        <p className="w-full border-r border-border-color capitalize">
          {_value.sortBy || "Sort by"}
        </p>
        <div
          onClick={handleOrderChange}
          className={`${
            _value.isAscending && "rotate-180"
          } transition-all px-3`}
        >
          <SortIcon />
        </div>
      </div>
      {showOptions && (
        <div className="absolute top-16 bg-[white] rounded-xl py-4 w-full shadow--sort-options-container border border-border-color">
          {sortOptions.map((option) => (
            <div
              onClick={() => {
                selectOption(option);
                setShowOptions(false);
              }}
              className={`px-4 py-2 capitalize cursor-pointer hover:bg-[#f4f4f7] ${
                option === _value.sortBy ? "!bg-primary-blue text-[white]" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

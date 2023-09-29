import { TextInputPropsTypes } from "../../@types";
import { MagnifyingGlass, WarningCircle } from "../../assets/svgs";
import { useState, useEffect } from "react";

export default function ({
  value,
  onCustomChange,
  ...props
}: TextInputPropsTypes) {
  const [_value, setValue] = useState(value);

  useEffect(() => {
    onCustomChange(_value);
  }, [_value]);

  return (
    <div className="border-border-color border rounded-xl flex items-center bg-[white] px-3 w-full focus-within:outline focus-within:outline-primary-yellow">
      <MagnifyingGlass />
      <input
        type="text"
        value={_value}
        onChange={(e) => setValue(e.target.value)}
        className="p-3 w-full bg-[white] text-sm font-normal text-[#9aa6ac] block focus:outline-none"
        placeholder={props.placeholder}
      />

      <WarningCircle />
    </div>
  );
}

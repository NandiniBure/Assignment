import React from "react";

const Number = (props) => {
  return (
    <span className=" h-8 w-8  p-2 items-center justify-center flex rounded-full border-slate-400 border">
      {props.Number}
    </span>
  );
};

export default Number;

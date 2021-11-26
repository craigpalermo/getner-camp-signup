import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { props as weekProps, Week, WeekProps } from "../Week";

const props = {
  weeks: PropTypes.arrayOf(PropTypes.shape({ ...weekProps })).isRequired,
};

export const SelectWeeks = ({ weeks }: InferProps<typeof props>) => {
  return (
    <div>
      {weeks.map((week) => (
        <Week {...(week as WeekProps)} />
      ))}
    </div>
  );
};

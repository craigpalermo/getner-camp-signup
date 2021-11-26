import React from "react";
import PropTypes, { InferProps } from "prop-types";

export const props = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  weekNumber: PropTypes.number.isRequired,
};

export type WeekProps = InferProps<typeof props>;

export const Week = ({ startDate, endDate, weekNumber }: WeekProps) => {
  return (
    <div>
      <div>Week {weekNumber}</div>
      <div>
        {startDate} to {endDate}
      </div>
    </div>
  );
};

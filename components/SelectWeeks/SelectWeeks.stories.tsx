import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SelectWeeks } from "./";

export default {
  title: "SelectWeeks",
  component: SelectWeeks,
} as ComponentMeta<typeof SelectWeeks>;

export const Pristine: ComponentStory<typeof SelectWeeks> = () => (
  <SelectWeeks
    weeks={[
      { startDate: "20220513", endDate: "20220517", weekNumber: 2 },
      { startDate: "202205120", endDate: "20220525", weekNumber: 3 },
    ]}
  />
);

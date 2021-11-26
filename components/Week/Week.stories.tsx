import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Week } from ".";

export default {
  title: "Week",
  component: Week,
} as ComponentMeta<typeof Week>;

export const Pristine: ComponentStory<typeof Week> = () => (
  <Week startDate={"20210513"} endDate={"20210517"} weekNumber={2} />
);

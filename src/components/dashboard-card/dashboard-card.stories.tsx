import { ComponentMeta, ComponentStory } from "@storybook/react";

import { DashBoardCard } from "./dashboard-card";

export default {
  title: "DashBoardCard",
  component: DashBoardCard,
  decorators: [],
} as ComponentMeta<typeof DashBoardCard>;

const Template: ComponentStory<typeof DashBoardCard> = (args) => (
  <DashBoardCard {...args} />
);

export const dashBoardCard = Template.bind({});

dashBoardCard.args = {
  title: "Play",
  displayType: "daily",
};

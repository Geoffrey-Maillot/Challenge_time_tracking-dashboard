import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { UserCard } from "./user-card";

export default {
  title: "UserCard",
  component: UserCard,
  decorators: [],
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => (
  <UserCard {...args} />
);

export const userCard = Template.bind({});

userCard.args = {
  firstName: "Jeremy",
  lastName: "Robson",
  displayType: "daily",
  setDisplayType: action("Change Display type"),
};

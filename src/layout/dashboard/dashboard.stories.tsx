import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import { DisplayType, UserCard } from "src/components/user-card/user-card";
import { Time } from "src/interface/time";

import { DashBoardCard } from "../../components/dashboard-card/dashboard-card";
import { Dashboard } from "./dashboard";

export default {
  title: "Dashboard",
  component: Dashboard,
  decorators: [],
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = (args) => (
  <Dashboard {...args} />
);

const Children = () => {
  const [data, setData] = useState<Array<Time>>([] as Array<Time>);
  const user = {
    firstName: "Jeremy",
    lastName: "Robson",
  };

  const displayType: DisplayType = "daily";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data.json");
      const data = (await response.json()) as unknown as Array<Time>;
      setData(data);
    };

    fetchData().catch((error) => console.log(error));
  }, []);

  return (
    <>
      <UserCard
        {...user}
        displayType={displayType}
        setDisplayType={action("Change display type")}
      />
      {data.length > 0 &&
        data.map((card) => (
          <DashBoardCard key={card.title} {...card} displayType={displayType} />
        ))}
    </>
  );
};

export const dashboard = Template.bind({});
dashboard.args = {
  children: <Children />,
};

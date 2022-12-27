import { DashBoardCard, DisplayType, UserCard } from "@Components";
import { Dashboard } from "@Layout";
import { useEffect, useState } from "react";

import { Time } from "../interface/time";
import styles from "./app.module.scss";

const { app } = styles;

export function App() {
  const [displayType, setDisplayType] = useState<DisplayType>("daily");
  const [data, setData] = useState<Array<Time>>([] as Array<Time>);

  const user = {
    firstName: "Jeremy",
    lastName: "Robson",
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = (await response.json()) as unknown as Array<Time>;
      setData(data);
    };

    fetchData().catch((error) => console.log(error));
  }, []);

  return (
    <div className={`${app}`}>
      <Dashboard>
        <>
          <UserCard
            {...user}
            displayType={displayType}
            setDisplayType={setDisplayType}
          />
          {data.length > 0 &&
            data.map((card) => (
              <DashBoardCard
                key={card.title}
                {...card}
                displayType={displayType}
              />
            ))}
        </>
      </Dashboard>
    </div>
  );
}

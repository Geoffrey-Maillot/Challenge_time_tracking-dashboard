import { DisplayType } from "@Components";
import { Time } from "src/interface/time";

import styles from "./dashboard-card.module.scss";

const { wrapper, card, header, button, content, hour, last } = styles;

interface DashBoardCardProps extends Time {
  displayType: DisplayType;
}

export function DashBoardCard({
  title,
  displayType,
  timeframes,
}: DashBoardCardProps) {
  const titleCss = title.toLowerCase().replace(" ", "-");

  return (
    <div className={`${wrapper} ${styles[titleCss]}`}>
      <div className={`${card}`}>
        <header className={`${header}`}>
          <p>{title}</p>
          <button className={`${button}`}>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </header>
        <div className={content}>
          <span
            className={`${hour}`}
          >{`${timeframes[displayType]?.current}hrs`}</span>
          <span
            className={last}
          >{`Last week - ${timeframes[displayType]?.previous}hrs`}</span>
        </div>
      </div>
    </div>
  );
}

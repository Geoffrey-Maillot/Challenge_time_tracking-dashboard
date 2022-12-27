import styles from "./user-card.module.scss";

const { userCard, user, userImage, name, buttonsGroup } = styles;

export type DisplayType = "weekly" | "monthly" | "daily";

interface UserCardProps {
  firstName: string;
  lastName: string;
  displayType: DisplayType;
  setDisplayType: React.Dispatch<React.SetStateAction<DisplayType>>;
}

export function UserCard({
  firstName,
  lastName,
  displayType,
  setDisplayType,
}: UserCardProps) {
  const onChangeDisplayType = (e: React.MouseEvent) => {
    const value =
      e.currentTarget.innerHTML?.toLowerCase() as unknown as DisplayType;

    setDisplayType(value);
  };

  return (
    <div className={`${userCard}`}>
      <div className={`${user}`}>
        <div className={`${userImage}`}>
          <img
            src={require(`src/assets/img/image-jeremy.png`)}
            alt={`${firstName} ${lastName}`}
          />
        </div>
        <div className="flex flex-column items-start gap-2">
          <span className="text-pale text-sm">Report for</span>
          <span className={`${name}`}>
            <span>{firstName} </span> <span>{lastName}</span>
          </span>
        </div>
      </div>
      <div className={`${buttonsGroup}`}>
        <button
          className={`${displayType === "daily" ? "text-white" : "text-pale"}`}
          onClick={onChangeDisplayType}
        >
          Daily
        </button>
        <button
          className={`${displayType === "weekly" ? "text-white" : "text-pale"}`}
          onClick={onChangeDisplayType}
        >
          Weekly
        </button>
        <button
          className={`${
            displayType === "monthly" ? "text-white" : "text-pale"
          }`}
          onClick={onChangeDisplayType}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}

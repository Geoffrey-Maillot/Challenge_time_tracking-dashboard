import styles from "./dashboard.module.scss";

const { dashboard } = styles;

interface Props {
  children: JSX.Element;
}

export function Dashboard({ children }: Props) {
  return <div className={`${dashboard}`}>{children}</div>;
}

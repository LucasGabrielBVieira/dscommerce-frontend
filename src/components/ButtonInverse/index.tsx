import "./styles.css";

type Props = {
  name: string;
};

function ButtonInverse({ name }: Props) {
  return <div className="dsc-btn dsc-btn-white">{name}</div>;
}

export default ButtonInverse;

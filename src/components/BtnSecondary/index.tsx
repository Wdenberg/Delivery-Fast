
// Importação do Css
import style from "./style.module.css"

type Props = {
  title: string;
}
export const BtnSecondary = (btnS: Props) => {
  return (

    <button>{btnS.title}</button>
  );
}

// Importação do CSS
import style from "./style.module.css"

type Props = {
  title: String;
}
export const btnMain = (btnConfig: Props) => {
  return (

    <button className={style.btnmain}>{btnConfig.title}</button>
  );
} 
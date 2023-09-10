
import { useState } from 'react';

// Importação do CSS
import style from "./style.module.css"

type Props = {
  mainColor: string;
  onSearch: (SearchValue: string) => void;

}

export const SearchInput = ({ mainColor, onSearch }: Props) => {

  const [focused, setFocused] = useState(false);
  const [SearchValue, setSarchValue] = useState('');
  const handlekeyup = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      onSearch(SearchValue)
        ;
    }
  }


  return (
    <div className={style.container} style={{ borderColor: focused ? mainColor : '#FFFF' }}>
      <div className={style.button} onClick={() => onSearch(SearchValue)}>

      </div>
      <input placeholder='Digite o nome do Produto!'
        type="text"
        className={style.input} onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)} onKeyUp={handlekeyup} value={SearchValue} onChange={(e) => setSarchValue(e.target.value)}>

      </input>
    </div>
  );
}
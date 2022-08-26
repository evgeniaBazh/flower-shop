import classes from "../Header.module.scss"
import search from '../../../assets/search.svg'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { pathNames } from "../../../App";

function Search() {
    const navigate = useNavigate();
    const [onSearchBtn, setOnSearchBtn] = useState(false);
    const [value, setValue] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
      };
    
      const handleKeypress = e => {
          //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            e.preventDefault();
            navigate(`${pathNames.search}?value=${e.target.value}`)
        }
      };

    return ( 
        <div>
            <button onClick={() => setOnSearchBtn((item) => !item)} className={classes.action}>
                <img className={classes.img} src={search} alt="Поиск по сайту" />
            </button>
            <div onKeyUp={handleKeypress}>
                <input  onChange={handleChange} value={value}  style={{ display: onSearchBtn ? "block" : "none" }} className={classes.inputSearch} placeholder='Поиск...' type="text" />
            </div>
        </div>
     );
}

export default Search;
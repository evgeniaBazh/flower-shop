import classes from "../../products/Category.module.scss"

function SortByProduct({value, defaultValue, sortValue, onChange}) {
    return ( 
        <select value={value} className={classes.select} onChange={event => onChange(event.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {sortValue.map(value => (
                <option key={value.key} value={value.key}>{value.title}</option>
                ))}
        </select>
     );
}

export default SortByProduct;
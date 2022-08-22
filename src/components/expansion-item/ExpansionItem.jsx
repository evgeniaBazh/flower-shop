import classes from "../expansion-item/ExpansionItem.module.scss"
import plus from "../../assets/plus.svg";
import { useState, useRef } from "react";

function ExpansionItem({title, content}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);
    let fullHeight = 0;
    if (contentRef.current) {
        const height = contentRef.current.offsetHeight;
        const styles = getComputedStyle(contentRef.current);
        const margins = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)
        fullHeight = height + margins;
    }
    return ( 
        <div className={classes.container}>
            <div className={classes.title}>
                <p className={classes.title__text}>{title}</p>
                <button className={classes.title__btn} onClick={() => {setIsExpanded(!isExpanded)}}>
                    <img className={classes.title__img} style={{ transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)" }} src={plus} alt="Кнопка раскрытия текста" />
                </button>
            </div>
            <div style={{ height: isExpanded ? fullHeight + 'px' : 0 }} className={classes.content}>
                <p ref={contentRef}>{content}</p>
            </div>
        </div>
     );
}

export default ExpansionItem;
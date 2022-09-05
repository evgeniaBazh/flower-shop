import { useRef, useState } from 'react';
import classes from '../message/Message.module.scss'

function Message({feedback}) {
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
        <div style={{ height: isExpanded ? fullHeight + 'px' : '154px'}} className={classes.feedback} >
            <div ref={contentRef}>
                <p>{feedback.name}</p>
                <p className={classes.message}>{feedback.message}</p>
                <button className={classes.expand} onClick={() => {setIsExpanded(!isExpanded)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>
                </button>
            </div>
        </div>
     );
}

export default Message;
import { useRef, useState } from 'react';

function Message({feedback}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);
    let fullHeight = 0;
    const minHeight = 154;
    if (contentRef.current) {
        const height = contentRef.current.offsetHeight;
        const styles = getComputedStyle(contentRef.current);
        const margins = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)
        const paddings = 32;
        fullHeight = height + margins + paddings;
        if (fullHeight < minHeight) {
            fullHeight = minHeight;
        }
    }
    const isFullFeedbackVisible = fullHeight !== minHeight;

    return ( 
        <div style={{ height: isExpanded ? fullHeight + 'px' : `${minHeight}px`}} className="shadow-lg transition-[height] overflow-hidden p-4 rounded-md bg-white min-h-max relative" >
            <div className='mb-4' ref={contentRef}>
                <p className='text-slate-400 mb-2'>{feedback.userName}:</p>
                <p className=''>{feedback.message}</p>
                {(!isExpanded && isFullFeedbackVisible) && <div className='absolute h-full left-0 bottom-0 w-full bg-gradient-to-t from-white'></div>}
                {isFullFeedbackVisible && <button className={(isExpanded ? 'rotate-180 ' : '') + 'absolute bottom-0 left-1/2 translate-x-[-50%]'} onClick={() => {setIsExpanded(!isExpanded)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>}
            </div>
        </div>
     );
}

export default Message;
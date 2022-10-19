export default function Input({children, onChange, value, type, name, textarea}) {
    return (<>
        <p className="mt-4 mb-2">{children}</p>
        {textarea
            ? <textarea className="p-4 mb-4 text-slate-900 resize-none rounded-md border-2 border-white focus:border-sky-400" onChange={onChange} name={name} cols="40" rows="6" value={value}/>
            : <input  className="p-4 text-slate-900 rounded-md border-2 border-white focus:border-sky-400" onChange={onChange} type={type} name={name} value={value}/>
        }
    </>)
}
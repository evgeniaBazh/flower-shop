export default function Btn({onClick, type, children}) {
    return <button onClick={onClick} className="py-2 px-4 rounded-md bg-blue-600 border border-blue-600 text-white font-medium self-center hover:bg-white hover:text-blue-600 transition-colors" type={type} >{children}</button>
}
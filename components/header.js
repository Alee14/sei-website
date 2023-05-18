import Link from 'next/link'

export default function Header() {
    return (
        <>
        <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        <div className="bg-green-800 py-3 px-2 text-white font-semibold text-right"><a href="https://aircs.racing/"><i className="fa fa-arrow-left mr-2"></i> aircs.racing</a></div>
        <div className="flex items-center justify-between flex-wrap p-6 bg-slate-950">
           <div className="flex items-center flex-shrink-0 text-white mr-6">
            <p className="font-semibold text-xl tracking-tight">SEI.GOV</p>
            </div>
            <div className="flex items-center w-auto">
            <div className="text-sm flex-grow">
                {[
                    ['fas fa-home', 'Home', '/'],
                    ['fas fa-person', 'Life in SEI', '/life'],
                    ['fas fa-door-open', 'Cabinet', '/cabinet'],
                    ['fas fa-note-sticky', 'Reports', '/reports'],
                ].map(([icon, title, url]) => (
                   // eslint-disable-next-line react/jsx-key
                   <Link href={url} className="transition duration-150 ease-out hover:ease-in inline-block mt-0 text-base text-slate-300 hover:text-white mr-4 hover:bg-green-800 rounded-lg p-2">
                    <div>
                    <span className="mr-1">
                        <i className={icon}></i>
                    </span> 
                    {title}
                    </div>
                    </Link>
                ))}
            </div>
        </div>
 </div>
 </header>
        </>
  )
}
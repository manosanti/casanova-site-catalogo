import Img from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="py-4">
        <div className="max-w-7xl flex justify-between mx-auto">
            <div className="flex items-center">
                <Link href={`/`}><Img src={`https://media.crystallize.com/frntr/22/11/17/5/lofofrntr.svg`} alt='logo' width={100} height={100} /></Link>
                <input type="text" placeholder="Names, SKUs, categories" className="text-sm h-8 w-64 mx-10 pl-3 rounded-2xl border border-slate-200" />
                <ul className="flex">
                    <li className="pr-2"><Link href={`/`}>Shop</Link></li>
                    <li className="pr-2"><Link href={`/`}>Stories</Link></li>
                    <li className="pr-2"><Link href={`/`}>Promotions</Link></li>
                    <li className="pr-2"><Link href={`/`}>Room</Link></li>
                </ul>
            </div>
            <div>dasd</div>
        </div>
    </div>
  )
}

export default Header
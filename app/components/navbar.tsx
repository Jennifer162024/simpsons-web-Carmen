import Link from "next/link"


export default function Navbar() {

    return (

        <div className="w-screen h-16 font-black text-amber-300  font- text-xs sm:text-base  lg:text-xl">

            <ul className="list-none w-full h-full flex justify-center items-center gap-8 ">
                <li>
                    <Link href={ "/" }>Home</Link>
                </li>
                <li>
                    <Link href={ "/characters" }>Character</Link>
                </li>
                <li>
                    Episodes
                </li>
            </ul>
        </div>
    )
}
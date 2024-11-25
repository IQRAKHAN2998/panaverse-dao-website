import Image from "next/image"
import Link from "next/link"
import Wrapper from "@/components/shared/wrapper"
const Header = () => {
    return (
        <header className=" sticky top-0 z-10 bg-white"> 
            <Wrapper>
                <div className="flex justify-between py-2  items-center">
                    <div>
                        {/* logo */}
                        <Image src="/download.png" alt="panaverse logo" width={100} height={100}></Image>
                    </div>
                    <ul className="flex space-x-8 font-semibold">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/courses "}>Courses</Link></li>
                    </ul>
                </div>
            </Wrapper>
        </header>

    )

}

export default Header
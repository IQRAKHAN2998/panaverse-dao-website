import Wrapper from "@/components/shared/wrapper"
import Image from "next/image"
import Button from "../shared/button"

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex flex-col md:flex-row  items-center ">
                    {/* left side */}
                    <div className="flex-1">
                        <h4 className="text-teal-800 font-semibold text-medium mt-4">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
                        </h4>
                        <h1 className={"text-2xl sm:text-6xl  font-bold text-gray-900"}>Certified Web 3.0 and Metaverse Developer</h1>
                        <p className="mt-4 text-xl text-slate-700">
                            A One and Quarter Years Panaverse DAO Earn
                             as you Learn Program Getting Ready for the 
                             Next Generation of the Internet</p>
                        <p className="mt-4 text-xl text-slate-600">
                             Consolidating Web 3.0, Metaverse,
                              Artificial Intelligence (AI), Cloud,
                               Edge, Ambient Computing/IoT, Network 
                               Automation, and Bioinformatics
                                Technologies
                        </p>
                      <div className="mt-5">
                      <Button text="Learn now"/>
                      </div>
                    </div>
                    {/* right side */}
                    <div className="flex-1">
                        <Image src="/hero-poster.webp" alt="hero-poster" width={500} height={500}></Image>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Hero
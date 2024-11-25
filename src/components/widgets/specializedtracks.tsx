"use client";
import Wrapper from "@/components/shared/wrapper"
import Quarterbox from "../shared/quarterbox"
import { programsdata } from "./programdata"
import Image from "next/image"
import { useState } from "react"



const SpecializedTracks = () => {
    const [selecteditem , setselecteditem] = useState("wmd")
    const selecteditemdata = programsdata.find((item)=>item.slug === selecteditem)
    console.log(selecteditemdata)
    return (
        <section>
            <Wrapper>
                {/* Header */}
                <div>
                    <h2 className="font-bold text-lg">Specialized Tracks:</h2>
                    <p className="mt-3 text-slate-600 max-w-screen-sm">After completing the first
                        three quarters the participants will select one or more
                        specializations consisting of two courses each.</p>
                </div>
                <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
                    {/* content left */}
                    <div className="shadow-xl sticky top-32 self-start border basis-8/12 border-slate-300 rounded py-8 px-8">
                        <h4 className="text-primary  text-lg font-medium">Specialized program</h4>
                            <h3 className="text-2xl font-bold">{selecteditemdata?.header}</h3>
                        <p className="text-lg text-slate-600 mt-2">{selecteditemdata?.descripion}</p>
                        <button className="text-teal-700 text-xl mt-4 underline">learn more</button>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
                           {
                            selecteditemdata?.quarter.map((item)=>( 
                            <Quarterbox key="number"
                                description={item.description}
                                header={item.header}
                                number={item.number}
                                haveborder={false} />))
                           }
                           
                        </div>
                    </div>
                    {/* content right */}
                    <div className="px-4 space-y-3  py-6 bg-slate-200 basis-4/12 flex-1">
                        {
                            programsdata.map((item) => (
                                <div onClick={()=>setselecteditem(item.slug)} key="id" className="flex gap-x-4 items-center cursor-pointer">
                                    <div className="flex-shrink-0 ">
                                        {/* <div className="w-20 h-16 rounded bg-red-200"></div> */}
                                    <Image src={item.image} alt={item.header} width={50} height={50} className="h-20  w-20 rounded-md object-cover"/>
                                    </div>
                                    <div>
                                        <h4 className="text-primary font-medium">Specialized program</h4>
                                        <h3 className="text-md font-semibold">{item.header}</h3>
                                    </div>
                                </div>
                         ))
                        }

                       


                    </div>

                    {/* underline */}

                </div>
            </Wrapper>
            
        </section>
    )
}

export default SpecializedTracks
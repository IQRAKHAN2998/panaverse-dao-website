import Wrapper from "@/components/shared/wrapper"
import Button from "@/components/shared/button"
import Quarterbox from "../shared/quarterbox"


// variable
const CoreTracksData = [
    {
        header: "Quarter 1",
        description: "CS-101: Object-Oriented Programming using TypeScript",
        number: 1

    },
    {
        header: "Quarter 2",
        description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 2

    },
    {
        header: "Quarter 3",
        description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
        number: 3

    }]
const CoreTracks = () => {
    const head = "Core Courses \n (Common in All Specializations):"
    return (
        <section className="mt-16 lg:mt-28">
            <Wrapper>
                {/* content */}
                <div className="max-w-screen-sm">
                    <h4 className="text-teal-800 font-semibold text-medium mt-4">Program of Studies</h4>
                    <h2 className="text-4xl font-bold whitespace-pre-line">{head} </h2>
                    <p className="mt-4 text-xl text-slate-600">Every participant of the program will start by completing the following three core courses.</p>
                    <div className="mt-4">
                        <Button text="Learn more" />
                    </div>
                </div>

                {/* Boxes */}
                <div className="my-20 flex  gap-x-4 max-w-screen-xl flex-col md:flex-row  items-stretch mx-auto">

                    {
                        CoreTracksData.map((item, i) =>
                        (

                            <Quarterbox
                                key={item.number}
                                description={item.description}
                                header={item.header}
                                number={i + 1} />



                        )
                        )
                    }

                </div>

            </Wrapper>
        </section>
    )
}

export default CoreTracks
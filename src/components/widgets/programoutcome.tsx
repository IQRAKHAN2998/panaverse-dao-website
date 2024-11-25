import React from 'react'
import Wrapper from '../shared/wrapper'
import Image from 'next/image'

const outcomepoints = ["Product Ownership", "Freelancing", "Global Marketting by Panaverse Dao", "Boosting Economy."]

const ProgramOutCome = () => {
    return (
        <section className='mt-16 md:mt-28'>
            <Wrapper>
                <div className='flex gap-x-8 items-center flex-col-reverse sm:flex-row'>
                    {/* left image */}
                    <div className='flex-1'>
                        <Image src="/outcome-poster.png" alt="program out-come" width={400} height={400}></Image>

                    </div>
                    {/* right content */}
                    <div className='flex-1'>
                        <h2 className='font-bold text-5xl'>The Outcome for Participants of the Program</h2>
                        <p className='mt-4 text-slate-600 text-lg'>As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistans software exports.</p>

                        <div className='mt-6 grid grid-cols-2 gap-x-2 gap-y-4'>
                            {outcomepoints.map((item, i) => (
                                <div key={i}>
                                    <h3 className='font-medium text-lg'>{item}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </Wrapper>
        </section>
    )
}
export default ProgramOutCome

import CoreTracks from "@/components/widgets/coreTracks"
import Hero from "@/components/widgets/hero"
import ProgramOutCome from "@/components/widgets/programoutcome"
import SpecializedTracks from "@/components/widgets/specializedtracks"


const Home= () => {
  return (
<main>
  {/* hero-section */}
  <Hero/>
  {/* coretracks */}
  <CoreTracks/>

  {/* SpecializedTracks */}
  <SpecializedTracks/>
  {/* outcome section */}
  <ProgramOutCome/>

</main>
  )
}

export default Home
import { useState } from "react"

import bman1 from "../public/blackman2.jpg"

function Magazine(props){
  const [pic,setPic]=useState("")

  return(
    <div className="h-[100%] " style={{
      backgroundImage: `url(${props.image.src})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:" 100%",

    }}> 
    </div>
    )

}





function Projects() {
  return (
    <div className="h-screen w-full" style={{fontFamily: "'Borel', cursive",}}>


<div className=" h-[100%] w-full grid grid-cols-3 gap-4 overflow-y-auto">

<Magazine image={bman1}/>
<Magazine image={bman1}/>
<Magazine image={bman1}/>
<Magazine image={bman1}/>
<Magazine image={bman1}/>
<Magazine image={bman1}/>
<Magazine image={bman1}/>
<Magazine image={bman1}/>


</div>


    </div>
  )
}

export default Projects

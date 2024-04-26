import React  from "react"
import codeImg from '../assets/code.jpg'
import { CheckCircle2 } from "lucide-react"

function Workflow(){

    const checklistItems = [
        {
          title: "Code merge made easy",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
          title: "Review code without worry",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
          title: "AI Assistance to reduce time",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
          title: "Share work in minutes",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
      ];

    return(
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Accelerate your {" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent
            bg-clip-text">coding Workflow</span>
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="p-2 w-full lg:w-1/2"></div>
                <img src={codeImg} alt="" />

            </div>
            <div className="pt-12 w-full lg:-1/2">
                {checklistItems.map((checklistItems,index)=>(
                  <>
                  <div className="flex mb-12">
                      <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2
                      justify-center items-center rounded-full">
                         <CheckCircle2/>
                      </div>
                      <div className="">
                        <h5 className="mt-1 text-xl ">{checklistItems.title}</h5>
                        <p className="text-md text-neutral-500">{checklistItems.description}</p>

                      </div>
                  </div>
                  </>
                ))}

            </div>

        </div>
    )
}
export default Workflow
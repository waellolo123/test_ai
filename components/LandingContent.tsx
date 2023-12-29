"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Fred",
    avatar: "A",
    title: "Data Analysist",
    description: "Good tool, the generations are fluid"
  },
  {
    name: "John",
    avatar: "B",
    title: "Engineer ML",
    description: "Not bad thank you"
  },
  {
    name: "Sam",
    avatar: "C",
    title: "Web developer",
    description: "We still waiting for the images correction but very good"
  },
  {
    name: "Julie",
    avatar: "D",
    title: "Graphic Designer",
    description: "Very usefull for design and Analysist thanks"
  }
]

const LandingContent = () => {
  return (
    <div className="px-10 pb-20 flex flex-col items-center justify-center">
     <h2 className="text-center text-4xl text-slate-700 font-extrabold mb-10">Testimonials</h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {testimonials.map((item)=>(
        <Card key={item.description} className="bg-[#192339] border-none text-white">
         <CardHeader>
          <CardTitle className="flex items-center gap-x-2">
            <div className="">
              <p className="text-lg">{item.name}</p>
              <p className="text-zinc-400 text-sm">{item.title}</p>
            </div>
          </CardTitle>
          <CardContent className="pt-4 px-0">{item.description}</CardContent>
         </CardHeader>
        </Card>
      ))}
     </div>
    </div>
  )
}

export default LandingContent
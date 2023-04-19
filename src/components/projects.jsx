import game from "../assets/projects/game.jpg";
import crowntunes from "../assets/projects/crowntunes.jpg";
import crownclothing from "../assets/projects/crownclothing.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import quote from "../assets/projects/quotes.jpg";
import spotify from "../assets/projects/spotify.jpg";

const Projects = () => {
  const projects=[
    {
      id:1,
      src:portfolio,
    },
    {
      id:2,
      src:crownclothing,
    },
    {
      id:3,
      src:crowntunes,
    },
    {
      id:4,
      src:quote,
    },
    {
      id:5,
      src:spotify,
    },
    {
      id:6,
      src:game,
      style:"hidden sm:shadow-md shadow-gray-600 rounded-lg",
    },
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">
            Check out some of my work right here
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({src,id,style})=>(
            <div key={id} className={`shadow-md shadow-gray-600 rounded-lg + ${style}`}>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 "
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Projects;
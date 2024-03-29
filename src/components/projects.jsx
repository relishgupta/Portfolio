import game from "../assets/projects/game.jpg";
import crowntunes from "../assets/projects/crowntunes.jpg";
import crownclothing from "../assets/projects/crownclothing.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import ngo from "../assets/projects/ngo.jpg";
import lms from "../assets/projects/lms.jpg";

const Projects = () => {
  const projects=[
    {
      id:1,
      src:portfolio,
      title:'Portfolio',
      url:'https://relishgupta-portfolio.netlify.app/',
      code:'https://github.com/relishgupta/Portfolio',
    },
    {
      id:2,
      src:crownclothing,
      title:'Ecommerce website',
      url:'https://crown-clothing-relishgupta.netlify.app/',
      code:'https://github.com/relishgupta/Ecommerce-website',
    },
    {
      id:3,
      src:crowntunes,
      title:'Music Website UI',
      url:'https://crowntunes-relishgupta.netlify.app/',
      code:'https://github.com/relishgupta/music-website',
    },
    {
      id:4,
      src:ngo,
      title:'NGO Website',
      url:'https://anmolculturalclub.netlify.app/',
      code:'https://github.com/relishgupta/NGO',
    },
    {
      id:5,
      src:lms,
      title:'Google clone',
      url:'https://explorehub-searchengine.netlify.app/',
      code:'https://github.com/relishgupta/Search-application',
    },
    {
      id:6,
      src:game,
      style:"mob:hidden",
      title:'Action game',
      url:'https://cozy-panda-215139.netlify.app/',
      code:'https://github.com/relishgupta/ActionGame',
    },
  ];

  const Deploy=(({url})=>{
      window.open(url,'_blank');
  })

  const Repo=(({code})=>{
    window.open(code,'_blank');
})

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 md:mx-auto flex flex-col justify-center w-full h-full">
        <div className="mob:pb-8 sm:mb-[8px] sm:mt-[14px]">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">
            Check out some of my work right here
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 sm:mb-[50px]">
          {projects.map(({src,id,style,title,url,code})=>(
            <div key={id} className={`shadow-md shadow-gray-600 rounded-lg + ${style}`}>
                 <span><p className="text-base">{title}</p></span>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 "
                />
                <div className="flex items-center justify-center">
                  <button onClick={()=>{Deploy({url})}} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button onClick={()=>{Repo({code})}} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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
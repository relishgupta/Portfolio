import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import sass from '../assets/sass.png';
import tw from '../assets/tw.png';
import react from '../assets/react.png';
import git from '../assets/git.png';
import github from '../assets/github.png';

const Skills = () => {
  const techs=[
    {
      id:1,
      src:html,
      title:'HTML',
      style: "shadow-orange-500",
    },
    {
      id:2,
      src:css,
      title:'CSS',
      style: "shadow-blue-500",
    },
    {
      id:3,
      src:js,
      title:'JAVASCRIPT',
      style: "shadow-yellow-500",
    },
    {
      id:4,
      src:sass,
      title:'SASS',
      style: "shadow-sky-500",
    },
    {
      id:5,
      src:tw,
      title:'TAILWIND CSS',
      style: "shadow-green-500",
    },
    {
      id:6,
      src:react,
      title:'REACT',
      style: "shadow-pink-500",
    },
    {
      id:7,
      src:git,
      title:'GIT',
      style: "shadow-red-500",
    },
    {
      id:8,
      src:github,
      title:'GITHUB',
      style: "shadow-yellow-500",
    },
  ];
  

  return (
    <div name="skills"
    className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className='mob:pt-[282px]'>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({src,id,style,title})=>(
            <div key={id} className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg " + style}>
              <img src={src} alt='' className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;

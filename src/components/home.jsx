import mypic from '../assets/rel.png';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center mt-[200px] md:mt-5'>
          <h2 className='text-3xl sm:text-7xl font-bold text-white'>I'm a Frontend Developer</h2>
          <p className='text-gray-500 py-2 max-w-xl'>
            As a frontend developer, I specialize in building responsive and user-friendly websites using the latest technologies such as HTML, CSS, and JavaScript. I am proficient in various frameworks such as React and Tailwind and have experience with version control systems such as Git. Looking for an internship opportunity to further develop my skills and contribute to exciting projects in the field of web development.
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Projects
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight  className='ml-1'/>
              </span>
            </button>
          </div>
        </div>

        <div className='mob:mr-[-8.5rem]'>
          <img src={mypic} alt="my profile" className='rounded-full mx-auto h-60 md:h-auto mb-24 mob:mt-[-4.25rem] sm:mb-32 md:mb-0 w-40 md:w-[300px]' />
        </div>
      </div>
    </div>
  )
}
export default Home;
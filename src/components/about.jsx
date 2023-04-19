const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-1">
            About
          </p>
        </div>
        <p className="text-lg sm:text-xl mt-[-1rem]">
        Hello, my name is Relish Gupta, and I am a B.Tech student at Shri Mata Vaishno Devi University. I am passionate about Frontend Development and eager to gain practical experience in the industry through an internship.
        <br/>
        Skills and Expertise: HTML, CSS, JAVASCRIPT, SASS, REACT, TAILWIND CSS, GIT, GITHUB.
        </p>
        <br />
        <p className="text-xl">
        My goal for this internship is to gain valuable hands-on experience in frontend development and to develop my skills in <i>Javascript</i> and <i>React</i>. I am eager to learn from experienced professionals in the industry and contribute my knowledge and skills to the team.
        </p>
      </div>
    </div>
  )
}

export default About;

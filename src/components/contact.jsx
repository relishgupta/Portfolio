import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const links=[
    {
      id:1,
      child:(
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href:"https://www.linkedin.com/in/relish-gupta-165692234/",
      style:"rounded-tr-md bg-blue-500",
    },
    {
      id:2,
      child:(
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href:"https://github.com/relishgupta",
      style:"bg-gray-500"
    },
    {
      id:3,
      child:(
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href:"mailto:guptarelish333Gmail.com",
      style:"bg-red-500"
    },
  ];

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 pt-4 mob:pt-1 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-[-4.25rem] mob:pt-[330px]">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="mob:hidden sm:py-6">Submit the form below to get in touch with me</p>
          <p className="py-6 sm:hidden">Connect with me</p>
        </div>

        <div className="hidden sm:flex justify-center items-center mb-[-76px]">
          <form
            action="https://getform.io/f/cc72a437-e99e-4735-adb2-74f9a4ba4aaf"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
        <div className="flex flex-col top-[35%] sm:hidden">
          <ul className="mob:mt-[-61px] mob:ml-[50px]">
            {links.map(({id,child,href,style,download})=>(
              <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[100px] mt-2 rounded-md " + style}>
                <a href={href} className="flex justify-between items-center w-full text-white" target="_blank" rel="noreferrer">
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
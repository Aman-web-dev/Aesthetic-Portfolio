import Man from '../public/man2.jpg'

function About() {
  return (
    <div className="p-10 lg:h-screen h-auto lg:w-[80vw] m-auto">


      <div className="  m-auto p-4 h-auto lg:h-[70%] w-[90% ] bg-black bg-opacity-50 text-white rounded-xl"
        style={{
          backgroundImage: `url(${Man.src}),
    linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(96,97,100,1) 100%)`,
          backgroundBlendMode: 'normal, screen',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: "100%",
          boxShadow: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(205,28,172,1) 100%)",
          width: "100%",
          height: "100%",
        }}
      >


        <div className='lg:w-[50vw] top-4 flex align-center p-4 m-auto flex-col lg:m-4 '>
          <h1 className='text-4xl align-center m-auto  font-fantasy font-bold mb-2' style={{ fontFamily: "'Borel', cursive" }}>About</h1>
          <p className="text-xl font-serif" style={{ fontFamily: "'Lumanosimo', cursive" }}>
            As a proud black model standing tall at 6 feet, I am dedicated to breaking barriers, embracing diversity, and redefining beauty standards in the fashion and modeling industry. Throughout my journey, I have had the privilege of collaborating with numerous professional brands, using my unique background and charisma to add a distinctive touch to every project.
            My passion for modeling stems from the desire to inspire others, especially individuals from underrepresented communities, to feel empowered and confident in their own skin. By showcasing the beauty of diversity, I aim to challenge conventional norms and create a more inclusive world within the fashion and advertising realm.





          </p>


        </div>




      </div>




    </div>
  );
}

export default About;
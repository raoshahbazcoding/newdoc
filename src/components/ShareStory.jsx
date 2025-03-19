
import storyImg from '../assets/story/story.jpeg'
import video from '../assets/story/VIDEO.png'

export default function ShareStory() {
  return (
    <section className="w-full relative ">
     
        <div className="md:col-span-9 relative">
          <div className="absolute inset-0 bg-[#1d5c5c]/80 z-10"></div>
          <div
            className="w-full h-[500px] bg-cover bg-center"
            style={{ backgroundImage: `url(${storyImg})` }}
          ></div>

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
            <div className="bg-white rounded-full p-4 mb-8 cursor-pointer hover:bg-gray-100 transition-colors">
              <img src={video} alt="VIDEO" className='h-20' />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
              Your Teeth, Your Turn - Act Now and Rewrite Your Story!
            </h2>
            <p className="text-lg mb-8 max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.
            </p>
            <a
              href="#"
              className="border border-white text-white px-20 py-4 inline-block uppercase hover:bg-white hover:text-[#1d5c5c] transition-colors"
            >
              SHARE YOUR STORY
            </a>
          </div>
        </div>
    </section>
  )
}


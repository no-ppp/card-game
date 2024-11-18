import exampleImage from './assets/images/card1.png'
import {FaCheck} from 'react-icons/fa'

function App() {
  return (
      <div className='h-screen bg-main-theme'>
          <div className='pt-10 text-center'>
              <h1 className="text-4xl font-frijole">
                  MEMORY CARD
              </h1>
              <h1 className="text-4xl font-frijole">
                  GAME !
              </h1>
          </div>
          <div className='pt-10 flex justify-center'>
              <div
                  className="bg-second-theme sm:p-6 sm:pb-4 border-yellow-800 border rounded-xl grid grid-cols-4 sm:gap-4 gap-0 md:w-[80vw] 2xl:w-[55vw] h-auto items-center justify-center shadow-2xl">
                  <div className='col-span-2'>
                      <form className='flex items-center justify-center space-x-2'>
                      <input className='h-8 w-32 bg-third-theme rounded-sm shadow-inner transition-all hover:scale-105 font-frijole text-center placeholder-black' type='text' placeholder='player'/>
                          <FaCheck size={20}/>
                      </form>
                  </div>

                  <div className='col-span-2 text-center'>
                      <p className='font-frijole'> score:</p>
                      <p className='font-frijole'> 321</p>
                  </div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 shadow-lg cursor-pointer hover:shadow-2xl transition duration-300 hover:scale-105"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>

                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div
                      className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 cursor-pointer hover:bg-gray-300 transition duration-300"
                      style={{
                          backgroundImage: `url(${exampleImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                      }}
                  ></div>
                  <div className="flex justify-center items-center col-span-4 font-frijole">
                      <p className='text-2xl'>time:</p>
                        <p className='text-4xl'>&nbsp;32</p>
                  </div>
              </div>
          </div>


      </div>
  )
      ;
}

export default App;

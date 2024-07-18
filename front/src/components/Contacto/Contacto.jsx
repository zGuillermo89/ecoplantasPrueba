import React from 'react'


const Contacto = () => {
    return (
      <div>
          <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl my-32 md:mx-32 mx-10 bg-white before:absolute before:right-0 before:w-[30%] border-bg-zinc-100	 border-l-2 before:bg-zinc-600	before:h-full max-md:before:hidden">
              <div>
                  <h2 className="text-zinc-700 text-4xl font-extrabold">Ponte en Contacto</h2>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">¿Tienes alguna  consulta específica o estás interesado en explorar nuevas oportunidades? 
                    Nuestro equipo de expertos está listo para atenderte y brindarte toda la información que necesites.
                    </p>
  
                  <form>
                      <div className="space-y-4 mt-8">
                          <input type="text" placeholder="Nombre Completo"
                              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none" />
                          <input type="text" placeholder="Dirección"
                              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none" />
                          <div className="grid grid-cols-2 gap-6">
                              <input type="text" placeholder="Ciudad"
                                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none" />
  
                              <input type="text" placeholder="Código Postal"
                                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none" />
                          </div>
                          <input type="number" placeholder="Teléfono"
                              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none" />
  
                          <input type="email" placeholder="Correo Electrónico"
                              className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none" />
  
                          <textarea placeholder="Mensaje"
                              className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"></textarea>
                      </div>
  
                      <button type="button"
                          className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-zinc-400 hover:bg-blue-700 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2"
                              viewBox="0 0 548.244 548.244">
                              <path fillRule="evenodd"
                                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                  clipRule="evenodd" data-original="#000000" />
                          </svg>
                          Enviar Mensaje
                      </button>
                  </form>
  
                  <ul className="mt-4 flex flex-wrap justify-center gap-6">
                      <li className="flex items-center text-zinc-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor'
                              viewBox="0 0 479.058 479.058">
                              <path
                                  d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                  data-original="#000000" />
                          </svg>
                          <a href="#" onClick={(e) => e.preventDefault()} className="text-sm ml-4">
                              <strong>info@ecoplanetas.com</strong>
                          </a>
                      </li>
                      <li className="flex items-center text-zinc-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor'
                              viewBox="0 0 482.6 482.6">
                              <path
                                  d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.8 0-24.9 5.3-34.8 15.3-10.2 10.2-19.7 21.4-28.6 33.3-4.9 6.5-9.5 13.3-13.9 20-16.6 26.1-27.6 55.3-30.9 85.4-3.7 34.5 3.7 68.3 12.2 96.7 11.8 37.4 28.6 73.7 50.1 107.2zm-61.4-198.2c2.9-27.2 12.6-53.5 27.9-75.9 4.2-6.6 8.5-13.1 13-19.3 8.4-11.2 17.1-22.7 26.3-31.9 3.1-3.1 6.3-6.3 9.5-9.5 3.6-3.6 8-5.5 12.8-5.5 4.8 0 9.2 1.9 12.8 5.5 6.4 6.4 12.8 12.9 19.3 19.7 3.4 3.5 6.8 6.9 10.2 10.4 2.8 2.8 5.6 5.6 8.4 8.4 4.1 4.1 6.3 9.3 6.3 15.1 0 5.8-2.3 11-6.4 15.1-3 3-6 6-9 9-2.8 2.8-5.6 5.7-8.4 8.5-10.2 10.3-20.6 20.7-32.1 29.9-6.2 4.9-6.9 13.7-2 19.8 7.8 10 15.8 20.3 24.2 30.8 30.4 38.4 62.5 68.4 97.8 90.4 3.7 2.4 7.7 4.5 11.6 6.5 5.9 2.9 11.8 5.8 17.8 8.4 6.7 3 14.9 1.7 19.9-3.3l48.1-48.1c3-3 6.1-4.4 9.4-4.4 3.2 0 6.2 1.4 9.2 4.4l60.1 60.1c11.5 11.5 11.5 22.8.1 34.3-4.4 4.6-9 9.2-13.7 13.8-6.9 6.5-13.5 12.8-19.3 20-10.8 12.8-22.6 17.6-38.9 16.5-34.1-2.3-64.5-15.8-87.8-27.4-62.8-29.7-117.3-73.2-163.4-128.6-20.5-24.5-35.8-51.1-46.3-80.8-7.5-21-17.1-52.1-14.2-84.6z"
                                  data-original="#000000" />
                          </svg>
                          <a href="#" onClick={(e) => e.preventDefault()} className="text-sm ml-4">
                              <strong>+52 554 674 5534</strong>
                          </a>
                      </li>
                  </ul>
              </div>

                {/* MAPA */}
              <div className="z-10 relative h-full max-md:min-h-[350px]">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52624.91105823585!2d-58.78806789710694!3d-34.47607973784244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc988e12661a07%3A0xa51def392da2533!2sTortuguitas%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1721339528294!5m2!1ses-419!2sar"
                      className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                      frameBorder="0" allowFullScreen>
                  </iframe>
              </div>
          </div>
      </div>
    );
  };
  

export default Contacto

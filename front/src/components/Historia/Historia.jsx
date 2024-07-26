import React from 'react';
import Card from '../Card/Card';
import image from '../Utils/imges/historia/historiaLoader'
const shadowOn = true;

const Historia = () => {
  return (
    <div  className="lg:w-[90%] w-[90%] mx-auto lg:mx-auto">
      <div className="mt-[8rem] mx-[1rem] space-x-1 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  justify-items-center  text-center">
        <div className="w-[60%]  col-span-1 place-content-center ">
          <Card image={image.team} shadowOn={shadowOn} />
        </div>
        <div className='content-center col-span-1'>
          <h1 className='mb-[1rem] text-5xl font-semibold '>¿Quiénes Somos?</h1>
          <h4 className='font-bold'>
            Fundada en 2011, Eco Plantas es una empresa dedicada al alquiler de flores y plantas para eventos y espacios corporativos. Nuestro objetivo es transformar cualquier entorno en un oasis de verde, aportando frescura y elegancia a cada ocasión.<br/><br/>
            A lo largo de los años, hemos trabajado con una amplia variedad de clientes, desde bodas y eventos corporativos hasta decoraciones para oficinas. Nuestra pasión por las plantas y el diseño floral nos ha llevado a crear espacios únicos y memorables para cada uno de nuestros clientes.
          </h4>
        </div>
      </div>

      <h1 className="w-[70%] sm:w-[60%] lg:w-[40%] p-1 mx-auto mt-28 border-t-2 border-x-2 rounded-t-full text-2xl md:text-3xl lg:text-3xl font-semibold text-center">
        Conoce Nuestra Trayectoria
      </h1>

      <div className="grid grid-cols-2 text-center border-t-2 ">
        
        <div className="col-span-1 border-r-4 p-10 flex flex-col  relative">
          <h1 className='content-center p-5 border-b-2 mb-9 w-[30%] sm:w-[36%] xl:w-[40%] absolute right-0	' ></h1>
          <h1 className='content-center text-3xl p-5'>2011</h1>
           <div className='hidden sm:block '>
           <Card image={image.img1} shadowOn={shadowOn}/>
           </div>
          <h3 className='content-center'>
            En 2011, Eco Plantas comenzó su viaje con una pequeña colección de macetas y plantas. Nuestros primeros eventos incluyeron bodas y eventos locales, donde rápidamente ganamos una reputación por nuestra atención al detalle y pasión por las plantas.
          </h3>
        </div>

        <div className="col-span-1 p-10 pt-[100%] flex flex-col relative">
          <h1 className='content-center p-5 border-b-2 mb-9  absolute -left-1 w-[35%] sm:w-[40%]	' ></h1>
          <h1 className='content-center text-3xl p-5'>2013</h1>
          <div className='hidden sm:block'>
            <Card image={image.img2} shadowOn={shadowOn} />
          </div>
          <h3 className='content-center'>
            En 2013, ampliamos nuestra oferta de servicios para incluir decoraciones para oficinas y eventos corporativos. Nuestro equipo de diseñadores florales se unió a la empresa, trayendo consigo nuevas ideas y una mayor variedad de productos.
          </h3>
        </div>

        <div className="col-span-1 border-r-4 p-10 flex flex-col relative">
          <h1 className='content-center p-5 border-b-2 mb-9 w-[30%] sm:w-[36%] xl:w-[40%] absolute right-0	' ></h1>
          <h1 className='content-center text-3xl p-5'>2014</h1>
          <div className='hidden sm:block'>
            <Card image={image.img3} shadowOn={shadowOn} />
          </div>
          <h3 className='content-center'>
            Durante 2014, lanzamos una nueva línea de plantas exóticas y macetas personalizadas. Nuestro compromiso con la sostenibilidad también se fortaleció, comenzando a ofrecer opciones de reciclaje y compostaje para nuestras decoraciones.
          </h3>
        </div>

        <div className="col-span-1 p-10 pt-[100%] flex flex-col relative">
          <h1 className='content-center p-5 border-b-2 mb-9  absolute -left-1 w-[35%] sm:w-[40%]	' ></h1>
          <h1 className='content-center text-3xl p-5'>2015</h1>
          <div className='hidden sm:block'>
            <Card image={image.img4} shadowOn={shadowOn} />
          </div>
          <h3 className='pb-16 content-center'>
            En 2015, celebramos nuestro quinto aniversario con una gran fiesta y una exposición de nuestras decoraciones más destacadas. La empresa continuó creciendo, estableciendo alianzas con proveedores internacionales y expandiendo nuestra presencia en eventos de gran escala.
          </h3>
        </div>
      </div>
      <h1 className="col-span-1 w-fit mx-auto mb-[5rem] text-transparent bg-gray-300 border-2 rounded-full text-sm text-center">
        oo
      </h1>
    </div>
  );
}

export default Historia;
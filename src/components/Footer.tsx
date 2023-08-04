export default function Footer() {
  return (
    <div className='w-full mt-32 py-8 px-12 bg-[url("/footer.png")]'>
      <div>
        <div className=" ml-10 mt-24">
          <h2 className="text-lg">
            We are coding the world of tomorrow
          </h2>
        </div>
        <div className="ml-10 my-6 max-w-3xl">
          <p>
            DaCodes es una de las mejores empresas de desarrollo de software en
            México y LATAM. Lo que nos separa de los demás es el nivel de
            involucramiento que tenemos en nuestros proyectos y la pasión que
            tenemos por desarrollar productos digitales de calidad mundial.
            Somos un equipo de 220+ dacoders especializados en la planeación,
            diseño, desarrollo, implementación e innovación continua de
            productos digitales disruptivos.
          </p>
        </div>
        <div className="flex items-center ml-10">
            <img src="loguito.png" className="w-28" alt="logo" />
            <img src="loguito2.png" className="w-28" alt="logo" />
            <img src="efy.png" className="w-28" alt="logo" />
            <img src="aws.png" className="w-24" alt="logo" />
        </div>
      </div>
    </div>
  );
}

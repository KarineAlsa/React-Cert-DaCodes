export default function Footer() {
  return (
    <div className='bg-[url("/footer.png")] h-[700px] mt-32 py-10 px-12 bg-cover'>
      <div>
        <div className="mx-12 mt-24">
          <h2 className="text-xl">
            We are coding the world of tomorrow
          </h2>
        </div>
        <div className="mx-12 mt-6 lg:mt-16">
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
        <div className="flex items-center justify-start space-x-6 mx-12 mt-24">
          <div>
            <img src="loguito.png" className="w-28" alt="logo" />
          </div>
          <div>
            <img src="loguito2.png" className="w-28" alt="logo" />
          </div>
          <div>
            <img src="efy.png" className="w-28" alt="logo" />
          </div>
          <div>
            <img src="aws.png" className="w-24" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

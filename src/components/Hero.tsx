const Hero = () => {
  return (
    <section id='hero'>
      <div className='flex flex-col-reverse md:flex-row container px-6 items-center mx-auto mt-10 space-y-0  md:space-y-0'>
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
            Bring everyone together to build better products.
          </h1>
          <p className='darkGrayishBlue text-center md:text-left max-w-sm '>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals view.
          </p>
          <a className=' self-center  md:self-start text-white md:block bg-brightRed p-3 items-center px-6 pt-2 rounded-full hover:bg-brightRedLight transition-all'>
            Get Started
          </a>
        </div>
        <div className='md:w-1/2'>
          <img
            className='w-full'
            src='illustration-intro.svg '
            alt='hero svg'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
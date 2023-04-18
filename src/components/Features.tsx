interface FeatureProps {
  title: string;
  text: string;
  number: number;
}

const Feature = ({ title, text, number }: FeatureProps) => {
  return (
    <div className='grid grid-cols-10 gap-2'>
      <div className='col-span-10 flex justify-start space-x-2 bg-brightRedSupLight md:bg-white rounded-full rounded-r-none w-screen md:w-full'>
        <h4 className='bg-brightRed rounded-full font-bold text-white px-4 py-1'>
          {number}
        </h4>
        <h4 className='font-bold justify-center max-w-md py-1'>{title}</h4>
      </div>

      <p className='text-gray-500 col-start-1 md:col-start-2 col-end-11 col-span-10 darkGrayishBlue text-left '>
        {text}
      </p>
    </div>
  );
};

const dataList = [
  {
    number: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ad accusamus, excepturi similique quia magni!',
    title: 'What is different about manage.',
  },
  {
    number: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ad accusamus, excepturi similique quia magni!',
    title: 'What is different about manage.',
  },
  {
    number: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ad accusamus, excepturi similique quia magni!',
    title: 'What is different about manage.',
  },
];

const Features = () => {
  return (
    <section id='features'>
      <div className='section-double flex-col md:flex-row'>
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-3xl font-bold text-center md:text-4xl md:text-left'>
            What is different about manage.
          </h1>
          <p className='darkGrayishBlue text-center md:text-left max-w-md '>
            Manage provides all the functionality your teams need, without
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className='flex flex-col mb-32 space-y-6 md:w-1/2 md:justify-center'>
          {dataList.map((data, index) => {
            return <Feature key={index} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

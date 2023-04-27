import { useEffect, useState } from 'react';

interface CommentProps {
  avatar: string;
  name: string;
  text: string;
}

const Comment = ({
  comment,
  show,
}: {
  comment: CommentProps;
  show: boolean;
}) => {
  return (
    <div
      className={`bg-veryPaleRed rounded-md max-w-md min-[450px]:flex-none flex flex-col items-center pb-12 scale-0 
      ${!show ? ' hidden scale-0 ' : 'scale-100'} 
      before:h-12 before:w-full before:bg-white`}
    >
      <img
        src={comment.avatar}
        alt={comment.avatar}
        className='-mt-12 h-24 w-24 mb-3'
      />
      <h2 className='text-3xl font-semibold text-darkBlue'>{comment.name}</h2>
      <p className='px-6'>{comment.text}</p>
    </div>
  );
};

export default function Comments() {
  const [show, setShow] = useState(0);

  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const changeSize = (_e: UIEvent) => {
      setSize(window.innerWidth);
    };

    window.addEventListener('resize', changeSize);

    return () => window.removeEventListener('resize', changeSize);
  }, []);

  const smallScreen = size <= 768;

  const comments = [
    {
      avatar: '/avatar-ali.png',
      name: 'Ali Bravo',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet illo doloremque est fugiat aliquam in ex architecto deleniti iusto sit, non delectus autem ipsum quod quo sapiente totam doloribus.',
    },
    {
      avatar: '/avatar-anisha.png',
      name: 'jhon doe',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet illo doloremque est fugiat aliquam in ex architecto deleniti iusto sit, non delectus autem ipsum quod quo sapiente totam doloribus.',
    },
    {
      avatar: '/avatar-richard.png',
      name: 'Kamil ahmet',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet illo doloremque est fugiat aliquam in ex architecto deleniti iusto sit, non delectus autem ipsum quod quo sapiente totam doloribus.',
    },
    {
      avatar: '/avatar-shanai.png',
      name: 'salem',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet illo doloremque est fugiat aliquam in ex architecto deleniti iusto sit, non delectus autem ipsum quod quo sapiente totam doloribus.',
    },
  ];

  return (
    <section id='comments'>
      <div className='flex flex-col container justify-around items-center mx-auto my-12 space-y-4'>
        <h2 className='text-4xl text-veryDarkBlue font-bold mb-20'>
          What they&apos;ve said
        </h2>
        <div className='flex flex-row items-center justify-evenly overflow-x-scroll no-scrollbar md:space-x-6'>
          {comments.map((comment, index) => {
            return (
              <Comment
                key={comment.name}
                comment={comment}
                show={smallScreen ? show === index : true}
              />
            );
          })}
        </div>
        <div className='flex flex-row justify-center items-center space-x-2 px-6 '>
          {comments.map((_comment, index) => {
            return (
              <div
                key={index}
                className={`h-4 w-4 rounded-full ring-1 transition ${
                  show === index ? 'bg-brightRedLight' : 'bg-white'
                } ${!smallScreen && 'hidden'}`}
                onClick={() => setShow(index)}
              ></div>
            );
          })}
        </div>
        <a className='text-white md:block bg-brightRed p-3 px-6 pt-2 rounded-full  hover:bg-brightRedLight transition-all'>
          Get Started
        </a>
      </div>
    </section>
  );
}

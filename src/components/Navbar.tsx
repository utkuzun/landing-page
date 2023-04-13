interface MenuItemProps {
  text: string;
}

const MenuItem = ({ text }: MenuItemProps): JSX.Element => {
  return (
    <a href='#' className='hover:text-darkGrayishBlue text-md'>
      {text}
    </a>
  );
};

function Navbar() {
  const menuList = ['Pricing', 'Products', 'About Us', 'Carreers', 'Community'];

  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between '>
        <div className='p-2'>
          <img src='logo.svg' alt='logo' />
        </div>
        <div className='space-x-6 hidden md:flex'>
          {menuList.map((item) => {
            return <MenuItem key={item} text={item} />;
          })}
        </div>
        <a className='text-white hidden md:block bg-brightRed p-3 px-6 pt-2 rounded-full self-baseline hover:bg-brightRedLight transition-all'>
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

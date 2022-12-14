const logoImg = '/assets/img/logo.png';

const Header = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className='flex items-center pt-5'>
                <img src={logoImg} className='w-5 h-5 mr-2' alt="logo" />
                <h1 className='font-bold text-lg text-grey-900 uppercase'>Everstory</h1>
            </div>
        </div>
    )
}

export default Header;
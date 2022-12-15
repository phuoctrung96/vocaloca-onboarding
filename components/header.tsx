import Image from "next/image";
import Link from "next/link";
const logoImg = '/assets/img/logo.png';

const Header = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className='flex items-center pt-5'>
                <Link href='/'>
                    <Image src={logoImg} className='mr-2' alt="logo" width={20} height={20} />
                </Link>
                <h1 className='font-bold text-lg text-grey-900 uppercase'>Everstory</h1>

            </div>
        </div>
    )
}

export default Header;
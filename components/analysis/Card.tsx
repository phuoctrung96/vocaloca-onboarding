import Image from "next/image";
const eye = "/assets/img/svg/eye.svg";
const clock = "/assets/img/svg/clock.svg";

const Card = ({ data }: any) => {
    return (
        <div className="w-100 md:pb-5 pb:3">
            <Image src={data.img} width={10} height={10} className="w-full" sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%" alt="content" />
            <div className="flex items-center justify-between py-2 mt-2 border-b-2 border-grey-50">
                <div className="flex">
                    <div className="flex mr-6">
                        <Image src={eye} width={20} height={20} className="w-5 h-5 mr-2" alt="eye" />
                        <p className="text-gray-800 text-sm">{data.view}</p>
                    </div>
                    <div className="flex">
                        <Image src={clock} width={20} height={20} className="w-5 h-5 mr-2" alt="clock" />
                        <p className="text-gray-800 text-sm">{data.time}</p>
                    </div>
                </div>
                <div>
                    <span className="language medium">EN</span>
                </div>
            </div>
            <p className="text-base text-grey-900 font-bold my-3">{data.title}</p>
            <div className="mb-4">
                {
                    data.topic.map(({ name, type }: { name: string, type: string }, i: number) => (
                        <span className={`label-${type} small mr-4`} key={i}>{name}</span>
                    ))
                }
            </div>
            <div className="flex flex-wrap">
                {
                    data.items.map((name: any, j: number) => (
                        <span className="relate  my-[3px]" key={j}>{`#${name}`}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default Card;
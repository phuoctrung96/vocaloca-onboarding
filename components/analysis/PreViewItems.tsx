import Image from 'next/image';

const user1 = '/assets/img/user/user1.png';
const check = '/assets/img/svg/check.svg';
const eye = '/assets/img/svg/eye.svg';
const clock = '/assets/img/svg/clock.svg';
const img1 = '/assets/img/contents/img1.png';
const img2 = '/assets/img/contents/img2.png';
const img3 = '/assets/img/contents/img3.png';
const img4 = '/assets/img/contents/img4.png';
const img5 = '/assets/img/contents/img5.png';
const img6 = '/assets/img/contents/img6.png';

const PreViewItems = () => {
  const data = [
    {
      img: img1,
      view: '22.6k',
      time: '00:12:22',
      title:
        'Quenching the soul with Mt. Fuji at Fujikawaguchiko, Yamanashi, Japan',
      topic: [
        {
          name: 'nature',
          type: 'success'
        },
        {
          name: 'other',
          type: 'info'
        }
      ],
      items: [
        'view',
        'japan',
        'nature',
        'beauty',
        'case',
        'mountains',
        'lakes',
        'fuji',
        'soul'
      ]
    },
    {
      img: img2,
      view: '22.6k',
      time: '00:12:22',
      title:
        'Boating in the scintillating Emerald Lake of British Columbia, Canada',
      topic: [
        {
          name: 'nature',
          type: 'success'
        },
        {
          name: 'other',
          type: 'info'
        }
      ],
      items: [
        'view',
        'boating',
        'nature',
        'beauty',
        'lake',
        'emerald',
        'canda',
        'britishcolumbia'
      ]
    },
    {
      img: img3,
      view: '22.6k',
      time: '00:12:22',
      title:
        "Trekking the enchanting hill stations of God's Own Country, Kerala, India",
      topic: [
        {
          name: 'nature',
          type: 'success'
        },
        {
          name: 'other',
          type: 'info'
        }
      ],
      items: [
        'view',
        'kerala',
        'nature',
        'beauty',
        'india',
        'godsowncountry',
        'hillstations',
        'trekking'
      ]
    },
    {
      img: img4,
      view: '22.6k',
      time: '00:12:22',
      title: 'Night in igloo, viewing Aurora Borealis in Sodankylä, Finland ',
      topic: [
        {
          name: 'nature',
          type: 'success'
        },
        {
          name: 'other',
          type: 'info'
        }
      ],
      items: [
        'view',
        'igloo',
        'nature',
        'beauty',
        'aurora',
        'borealis',
        'finland',
        'night'
      ]
    },
    {
      img: img5,
      view: '22.6k',
      time: '00:12:22',
      title:
        'Ice fishing in the frozen lakes of  Sachseln, Obwalden, Switzerland  ',
      topic: [
        {
          name: 'nature',
          type: 'success'
        },
        {
          name: 'other',
          type: 'info'
        }
      ],
      items: [
        'switzerland',
        'icefishing',
        'lakes',
        'nature',
        'frozen',
        'view',
        'fun',
        'thrill'
      ]
    },
    {
      img: img6,
      view: '22.6k',
      time: '00:12:22',
      title:
        'Hiking the tidal causeways of Mont Saint-Michel, Normandy, France',
      topic: [
        {
          name: 'nature',
          type: 'success'
        },
        {
          name: 'other',
          type: 'info'
        }
      ],
      items: [
        'view ',
        'hiking',
        'nature',
        'tides',
        'stmichel',
        'normandy',
        'france',
        'adventure'
      ]
    }
  ];
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center md:pb-7 pb-4 border-b-2 border-grey-50">
        <Image
          src={user1}
          alt="user"
          height={56}
          width={56}
          className="h-14 w-14 rounded-full mr-4"
        />
        <div>
          <div className="flex items-center">
            <h3 className="text-grey-900 text-lg font-bold">Nature Freaks</h3>
            <Image
              src={check}
              alt="check"
              height={24}
              width={24}
              className="h-6 w-6 ml-1"
            />
          </div>
          <p className="text-gray-800 text-sm">1,613,552 subscribers</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-row-3 gap-5 md:py-6 py-4">
        {data.map((item, idx) => (
          <div className="w-100 md:pb-5 pb:3" key={idx}>
            <Image
              src={item.img}
              width={10}
              height={10}
              className="w-full"
              sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%"
              alt="content"
            />
            <div className="flex items-center justify-between py-2 mt-2 border-b-2 border-grey-50">
              <div className="flex">
                <div className="flex mr-6">
                  <Image
                    src={eye}
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-2"
                    alt="eye"
                  />
                  <p className="text-gray-800 text-sm">{item.view}</p>
                </div>
                <div className="flex">
                  <Image
                    src={clock}
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-2"
                    alt="clock"
                  />
                  <p className="text-gray-800 text-sm">{item.time}</p>
                </div>
              </div>
              <div>
                <span className="language medium">EN</span>
              </div>
            </div>
            <p className="text-base text-grey-900 font-bold my-3">
              {item.title}
            </p>
            <div className="mb-4">
              {item.topic.map(({ name, type }, i) => (
                <span className={`label-${type} small mr-4`} key={i}>
                  {name}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap">
              {item.items.map((name, j) => (
                <span className="relate  my-[3px]" key={j}>{`#${name}`}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <span className="cursor-pointer md:text-md text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gradient-end to-gradient-via">
          Show more
        </span>
      </div>
    </div>
  );
};

export default PreViewItems;

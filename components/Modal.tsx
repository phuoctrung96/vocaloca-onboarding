import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const close = '/assets/img/svg/close.svg';

const Modal = ({ open, onClose, children }: any) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return (
      <>
        {open ? (
          <>
            <div className="fixed -ml-10 -mt-10 inset-10 bg-[#00000052] overflow-y-auto h-full w-full" />
            <div className="fixed max-[768px]:bottom-0 md:top-[50%] left-[50%] -translate-x-2/4 md:-translate-y-2/4 mx-auto md:p-8 p-4 md:pb-8 pb-7 md:w-[578px] w-full shadow-lg md:rounded-lg rounded-tl-[24px] rounded-tr-[24px] rounded-bl-0 rounded-br-0 bg-white modal">
              <span
                onClick={() => onClose()}
                className="md:w-6 w-8 md:h-6 h-8 absolute md:-top-[18px] top-[8px] md:-right-[18px] right-[8px] cursor-pointer"
              >
                <Image
                  src={close}
                  alt="close"
                  width={24}
                  height={24}
                  className="md:w-6 w-8 md:h-6 h-8"
                />
              </span>
              {children}
            </div>
          </>
        ) : null}
      </>
    );
  } else {
    return null;
  }
};

export default Modal;

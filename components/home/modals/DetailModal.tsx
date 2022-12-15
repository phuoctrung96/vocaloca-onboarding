import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import Modal from '../../Modal';

const step1Fill = '/assets/img/svg/step1-fill.svg';

type Values = {
  name: string,
  email: string,
  url: string,
  check: boolean
}

const DetailModal = ({ openModal, setOpenModal }: any) => {
  const [values, setValues] = useState<Values>({
    name: '',
    email: '',
    url: '',
    check: false
  });

  const handle = (key: string, value: string | boolean) => {
    setValues({ ...values, [key]: value });
  }

  const nextSetp = () => {
    if (values.name && values.email && values.url) {
      setOpenModal(2)
    } else {
      handle('check', true)
    }
  }

  return (
    <Modal open={openModal} onClose={() => setOpenModal(0)}>
      <div className="mt-3 text-center">
        <div className="mx-auto mb-6 flex items-center justify-center">
          <div className="p-4 rounded-full bg-white">
            <Image
              src={step1Fill}
              alt="step"
              className="w-8 h-8"
              width={32}
              height={32}
            />
          </div>
        </div>
        <h3 className="text-xl text-grey-900 font-bold">
          Please provide your details
        </h3>
        <div className="mt-2 px-7 py-3">
          <p className="text-base text-gray-800">
            Add your name, email id and youtube channel URL to analyze your
            channel.
          </p>
        </div>
        <div>
          <div className='my-2 '>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={(event: ChangeEvent<HTMLInputElement>) => handle('name', event.target.value)}
              className={`border-[1px] ${values.check && !values.name ? 'border-red-500' : 'border-grey-50'} rounded-md w-full px-4 py-3 text-base`}
            />
            {
              values.check && !values.name &&
              <p className='text-base text-red-500 text-start mt-1 pl-2'>Name is required</p>
            }
          </div>
          <div className='my-2 '>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={(event: ChangeEvent<HTMLInputElement>) => handle('email', event.target.value)}
              className={`border-[1px] ${values.check && !values.email ? 'border-red-500' : 'border-grey-50'} rounded-md w-full px-4 py-3 text-base`}
            />
            {
              values.check && !values.email &&
              <p className='text-base text-red-500 text-start mt-1 pl-2'>Email is required</p>
            }
          </div>
          <div className='my-2 '>
            <input
              type="text"
              placeholder="YouTube channel URL"
              name="url"
              value={values.url}
              onChange={(event: ChangeEvent<HTMLInputElement>) => handle('url', event.target.value)}
              className={`border-[1px] ${values.check && !values.url ? 'border-red-500' : 'border-grey-50'} rounded-md w-full px-4 py-3 text-base`}
            />
            {
              values.check && !values.url &&
              <p className='text-base text-red-500 text-start mt-1 pl-2'>YouTube channel URL is required</p>
            }
          </div>
        </div>
        <div className="items-center pt-4">
          <button
            onClick={() => nextSetp()}
            className="px-4 py-3 text-white text-base rounded-md w-full"
          >
            Analyze
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DetailModal;

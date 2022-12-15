import { useState } from 'react';
import Image from 'next/image';
import Modal from '../../Modal';

const aiFill = '/assets/img/svg/ai-fill.svg';

const TermsOfServiceModal = ({ openModal, setOpenModal }: any) => {
  return (
    <Modal open={openModal} onClose={() => setOpenModal(0)}>
      <div className="mt-3 text-center">
        <div className="mx-auto mb-6 flex items-center justify-center">
          <div className="p-4 rounded-full bg-white">
            <Image
              src={aiFill}
              alt="step"
              className="w-8 h-8"
              width={32}
              height={32}
            />
          </div>
        </div>
        <h3 className="text-xl text-grey-900 font-bold">
          Analyzing your channel.
        </h3>
        <p className="text-base text-gray-800 my-2">
          We are analyzing your channel, we will email you when the aalysis is
          done
        </p>
      </div>
    </Modal>
  );
};

export default TermsOfServiceModal;

import React from 'react';
import { Transition } from '@headlessui/react';
import {
  Toaster as RHTToaster,
  ToastIcon,
  resolveValue,
} from 'react-hot-toast';

// TODO: Improve toast look and feel to match with tailwind ui style
const Toaster = () => {
  return (
    <RHTToaster
      position="bottom-right"
      toastOptions={{
        // increase success toast duration from 2s (default) to 3s.
        success: {
          duration: 3000,
        },
      }}
    >
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className="flex transform rounded bg-white p-4 shadow-lg"
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <ToastIcon toast={t} />
          <p className="px-4">{resolveValue(t.message, t)}</p>
        </Transition>
      )}
    </RHTToaster>
  );
};

export default Toaster;

import { Dialog, Transition } from "@headlessui/react";
export default function Card({
  isOpen,
  closeModal,
  Fragment,
  resolution,
  name,
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center  bg-black bg-opacity-10 transform backdrop-filter backdrop-blur-md">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block bg-pink-600 w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl">
              <div className="w-full h-64 bg-pink-600 cursor-pointer p-8 mx-auto flex flex-col justify-between rounded-md">
                <p className="font-mono pt-5 text-white">{resolution}</p>
                <div className="flex space-x-2">
                  <img
                    className="rounded-full h-8 w-8"
                    alt="profile"
                    src="https://images.unsplash.com/photo-1638043883373-bb3f45f23033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  />
                  <p className="font-mono text-xl text-white">{name}</p>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

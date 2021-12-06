import { Dialog, Transition } from "@headlessui/react";
export default function Card({
  isOpen,
  closeModal,
  Fragment,
  color,
  resolution,
  name,
  profile_url,
  profession,
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center bg-black bg-opacity-50 transform backdrop-filter backdrop-blur-md">
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
            <div
              className={`inline-block ${color} w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl`}
            >
              <div
                className={`w-full h-64  cursor-pointer p-4 mx-auto flex flex-col justify-between rounded-md`}
              >
                <p className="font-mono pt-5 text-xl text-white xs:text-lg">
                  {resolution}
                </p>

                <div className="flex space-x-2 items-center">
                  <img
                    className="rounded-full h-6 w-6"
                    alt="profile"
                    src={profile_url}
                  />
                  <p className="font-mono text-lg text-white xs:text-lg xs:pl-3">
                    {name} - <span className="text-gray-300">{profession}</span>
                  </p>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

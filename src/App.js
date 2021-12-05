import { useEffect, useState, Fragment } from "react";
import Modals from "./components/Modals";
import data from "./resolution/resolution.json";

function App() {
  const [resolution, setResolution] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    setResolution(data);
  }, [setResolution]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(index) {
    setDetail(resolution[index]);
    setIsOpen(true);
  }

  return (
    <div>
      <div className=" w-8/12 mx-auto">
        <div className="w-full h-screen space-y-2 flex flex-col justify-evenly">
          <div className="flex justify-between">
            <h1 className="font-bold font-mono text-xl">
              <span className="bg-pink-600 text-white p-1">Wall</span> of
              Resolution
            </h1>
          </div>

          <div className="w-full">
            <h1 className="font-mono font-bold text-6xl pt-10">
              2 Tahun dari sekarang harus bisa kerja di perusahaan besar.
            </h1>
          </div>

          <div className="flex flex-col pt-10">
            <div className="flex flex-col">
              <div className="flex space-x-3">
                <img
                  className="h-10 w-10 rounded-full"
                  alt="profile"
                  src="https://images.unsplash.com/photo-1638043883373-bb3f45f23033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                />
                <h1 className="text-4xl font-bold font-mono">
                  Fiqry choerudin
                </h1>
              </div>
              <div className="flex flex-col space-y-3 pt-5">
                <p className="font-mono">Frontend Enginer</p>
                <p className="font-mono font-bold w-8/12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  eaque distinctio quod eveniet ad quasi? Ad quasi beatae fugit
                  quis corrupti numquam rem in fuga?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10 w-full">
          <h1 className="font-bold font-mono text-3xl text-left mt-5">
            # All Resolution
          </h1>
          <div className="grid grid-cols-3 gap-4">
            {resolution.map((items, index) => {
              return (
                <div>
                  <div
                    key={index}
                    onClick={() => {
                      openModal(index);
                    }}
                    className="w-full h-64 bg-pink-600 cursor-pointer p-8 mx-auto flex flex-col justify-between rounded-md"
                  >
                    <p className="font-mono pt-5 text-white">
                      {items.resolution}
                    </p>
                    <div className="flex space-x-2">
                      <img
                        className="rounded-full h-5 w-5"
                        alt="profile"
                        src="https://images.unsplash.com/photo-1638043883373-bb3f45f23033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      />
                      <p className="font-mono text-white">{items.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Modals
            isOpen={isOpen}
            closeModal={closeModal}
            Fragment={Fragment}
            resolution={detail.resolution}
            name={detail.name}
          />
        </div>
      </div>
      <footer className="text-center py-10 font-mono">
        <p>copyright Fiqry choerudin</p>
      </footer>
    </div>
  );
}

export default App;

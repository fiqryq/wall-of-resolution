import { useEffect, useState, Fragment } from "react";
import { gradients } from "./style/gradient";
import Typewrite from "./components/Typewrite";
import Modals from "./components/Modals";
import Footer from "./components/Footer";
import data from "./resolution/resolution.json";

function App() {
  const [resolution, setResolution] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState([]);
  const [color, setColor] = useState([]);

  useEffect(() => {
    setResolution(data);
  }, [setResolution]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(index, color) {
    setDetail(resolution[index]);
    setColor(color);
    setIsOpen(true);
  }

  const getColors = (index) => {
    if (index <= gradients.length) {
      return gradients[index];
    } else {
      return gradients[index - (gradients.length + 1)];
    }
  };

  return (
    <div>
      <div className="lg:w-10/12 md:w-10/12 sm:w-9/12 xs:w-11/12 mx-auto">
        <div className="w-full h-screen space-y-10 flex flex-col justify-center">
          {/* Tittle */}
          <div className="flex justify-between">
            <h1 className="font-bold font-mono text-xl">
              <span className="bg-pink-600 text-white p-1">Wall</span> of
              Resolution
            </h1>
          </div>
          {
            <Typewrite
              resolution={data[data.length - 1]}
              autoStart={true}
              loop={true}
            />
          }
        </div>

        <div className="space-y-10 w-full">
          <h1 className="font-bold font-mono text-3xl text-left mt-5">
            # All Resolution
          </h1>
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {resolution.map((items, index) => {
              const style = `w-full h-64 ${getColors(
                index
              )} cursor-pointer p-8 mx-auto flex flex-col justify-between rounded-md`;
              return (
                <div key={index}>
                  <div
                    onClick={() => {
                      openModal(index, getColors(index));
                    }}
                    className={style}
                  >
                    <p className="font-mono pt-5 text-white">
                      {items.resolution}
                    </p>
                    <div className="flex space-x-2">
                      <img
                        className="rounded-full h-5 w-5"
                        alt="profile"
                        src={items.profile_url}
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
            color={color}
            closeModal={closeModal}
            Fragment={Fragment}
            resolution={detail.resolution}
            name={detail.name}
            profile_url={detail.profile_url}
            profession={detail.profession}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

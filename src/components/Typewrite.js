import Typewriter from "typewriter-effect";
export default function Typewrite({ resolution, autoStart, loop }) {
  return (
    <div>
      <div className="w-full">
        <h1 className="font-mono font-bold lg:text-6xl md:text-5xl sm:text-3xl">
          <Typewriter
            options={{
              autoStart: { autoStart },
              loop: { loop },
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(200)
                .typeString(
                  `${resolution.resolution} - <span style="color: #db2777;">${resolution.name}</span>`
                )
                .pauseFor(300)
                .deleteAll()
                .start();
            }}
          />
        </h1>
      </div>
    </div>
  );
}

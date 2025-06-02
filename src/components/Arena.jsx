import 'boxicons/css/boxicons.min.css';

const Arena = () => {
  return (
    // container
    <div className="md:min-h-[90%] p-0 lg:p-8 md:mt-0 mt-60">
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest mb-28"
          style={{
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(167, 139, 255, 0.5)",
          }}
        >
          Arena
        </h1>
      </div>

      {/* main container with grid layout */}
      <div className="lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* left column (takes 1/3 of the space on desktop) */}
        <div className="md:col-span-1 space-y-4 md:space-y-6">
          {/* card1  - top left */}
          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105 ">
            {/* card background with gradient */}
            <div className="absolute h-full w-full">
              <img src="/public/images/bento-card1.png" alt="bento-card1" />

              <button className='absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap'>
                < i class='bx  bx-store-alt-2'  ></i> NFT STORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arena;

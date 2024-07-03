const Banner = () => {
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex">
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/c6rrzLY/My-pic.png"
            className="w-[700px] rounded-lg h-[700px]"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Md. Mazba Uddin Shawon</h1>
          <p className="py-6 text-right">Frontend Developer</p>
          <p className="py-6 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            maxime error tempora eum consequuntur aliquam unde sunt molestias
            itaque. Est adipisci debitis assumenda facere quo. Autem veniam
            temporibus iusto delectus.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

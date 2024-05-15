import team1 from "../assets/images/team/hardy.png";

//
const Team = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas
          ut nemo atque in doloribus nostrum minus eveniet velit! Doloribus
          ipsum ducimus nesciunt veniam in aut totam odit fuga itaque possimus.
          Corporis, sed rerum quos nostrum repudiandae, dicta commodi quisquam
          sunt minima optio, cumque in! Fuga atque at cumque nesciunt.
        </h1>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas
          ut nemo atque in doloribus nostrum minus eveniet velit! Doloribus
          ipsum ducimus nesciunt veniam in aut totam odit fuga itaque possimus.
          Corporis, sed rerum quos nostrum repudiandae, dicta commodi quisquam
          sunt minima optio, cumque in! Fuga atque at cumque nesciunt.
        </h1>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas
          ut nemo atque in doloribus nostrum minus eveniet velit! Doloribus
          ipsum ducimus nesciunt veniam in aut totam odit fuga itaque possimus.
          Corporis, sed rerum quos nostrum repudiandae, dicta commodi quisquam
          sunt minima optio, cumque in! Fuga atque at cumque nesciunt.
        </h1>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas
          ut nemo atque in doloribus nostrum minus eveniet velit! Doloribus
          ipsum ducimus nesciunt veniam in aut totam odit fuga itaque possimus.
          Corporis, sed rerum quos nostrum repudiandae, dicta commodi quisquam
          sunt minima optio, cumque in! Fuga atque at cumque nesciunt.
        </h1>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;

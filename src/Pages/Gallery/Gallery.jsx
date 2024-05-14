import bannerImg1 from "../../assets/images/carousel1.jpg";

const Gallery = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage: `url(${bannerImg1})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-xl font-bold">Home | Gallery</h1>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

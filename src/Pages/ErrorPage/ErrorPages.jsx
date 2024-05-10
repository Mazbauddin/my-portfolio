import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div
          className="max-w-md text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2
            className="mb-8 font-extrabold text-9xl dark:text-gray-400"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we could not find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But do not worry, you can find plenty of other things on our
            homepage.
          </p>
          <Link to={"/"}>
            <button
              rel="noopener noreferrer"
              href="#"
              className="btn_wave btn1 rounded-md"
            >
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;

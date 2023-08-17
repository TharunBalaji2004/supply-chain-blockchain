import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const redirect_to_roles = () => {
    navigate("/roles");
  };
  const redirect_to_addmed = () => {
    navigate("/addmed");
  };
  const redirect_to_supply = () => {
    navigate("/supply");
  };
  const redirect_to_track = () => {
    navigate("/track");
  };
  return (
    <>
      <section className="py-10 bg-[#000]">
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1 place-items-center pb-5">
            <h2 className="text-5xl text-white">ProjectX Supply Chain Flow</h2>
          </div>
          <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center items-center">
              <div className="plan">
                <div className="inner">
                  <span className="pricing">
                    <span className="font-[poppins] text-gray-500">Step 1</span>
                  </span>
                  <p className="title pt-3 font-[poppins]">
                    Owner Registration
                  </p>
                  <p className="info text-red-500 font-[poppins] font-bold">
                    This is a one time step. Skip to step 2 if already done
                  </p>
                  <ul className="features p-0">
                    <li>
                      <span className="icon">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            fill="currentColor"
                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                      </span>
                      <span>Raw material suppliers</span>
                    </li>
                    <li>
                      <span className="icon">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            fill="currentColor"
                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                      </span>
                      <span>Manufacturers</span>
                    </li>
                    <li>
                      <span className="icon">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            fill="currentColor"
                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                      </span>
                      <span>Distributors & Retailers</span>
                    </li>
                  </ul>
                  <div className="button" onClick={redirect_to_roles}>
                    Register
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="plan">
                <div className="inner">
                  <span className="pricing">
                    <span className="font-[poppins] text-gray-500">Step 2</span>
                  </span>
                  <p className="title pt-3 font-[poppins]">Products Registration</p>
                  <p className="info text-red-500 font-[poppins] font-bold">
                    Add new product or goods to initiate the supply chain
                  </p>
                  <ul className="features p-0">
                    <li>
                      <span className="icon">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            fill="currentColor"
                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                      </span>
                      <span>Product Name</span>
                    </li>
                    <li>
                      <span className="icon">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            fill="currentColor"
                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                      </span>
                      <span>Product Description</span>
                    </li>
                    <li>
                      <span className="icon">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            fill="currentColor"
                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                      </span>
                      <span>Product Requirements</span>
                    </li>
                  </ul>
                  <div className="button" onClick={redirect_to_addmed}>
                    Add Product
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="plan">
                <div className="inner">
                  <span className="pricing">
                    <span className="font-[poppins] text-gray-500">Step 3</span>
                  </span>
                  <p className="title pt-3 font-[poppins]">
                    Control Supply Chain
                  </p>
                  <p className="info text-red-500 font-[poppins] font-bold">
                    Update information on supply chain by producers
                  </p>
                  <ul className="features p-0">
                    <li>
                      <span className="icon">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            fill="currentColor"
                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                      </span>
                      <span>Raw material suppliers</span>
                    </li>
                    <li>
                      <span className="icon">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            fill="currentColor"
                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                      </span>
                      <span>Manufacturers</span>
                    </li>
                    <li>
                      <span className="icon">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            fill="currentColor"
                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                      </span>
                      <span>Distributors & Retailers</span>
                    </li>
                  </ul>
                  <div className="button" onClick={redirect_to_supply}>
                    Control Supply Chain
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="plan">
                <div className="inner">
                  <span className="pricing">
                    <span className="font-[poppins] text-gray-500">Step 4</span>
                  </span>
                  <p className="title pt-3 font-[poppins]">
                    Track the Product
                  </p>
                  <p className="info text-red-500 font-[poppins] font-bold">
                    Platform for consumers to trace product journey 
                  </p>
                  <ul className="features p-0">
                    <li>
                      <span className="icon">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            fill="currentColor"
                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                      </span>
                      <span>Product ID</span>
                    </li>
                    <li>
                      <span className="icon">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            fill="currentColor"
                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                      </span>
                      <span>QR Code Scanner</span>
                    </li>
                    <li>
                      <span className="icon">
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            fill="currentColor"
                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                        </svg>
                      </span>
                      <span>Trace product journey</span>
                    </li>
                  </ul>
                  <div className="button" onClick={redirect_to_track}>
                    Track Product
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

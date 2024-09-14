import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section className="bg-gray-900 lg:pb-[7.92%] lg:pt-[60px] ">
      <div className="container mx-auto">
             <Link to='/Home'> <div className="float-right text-white text-decorate mt-[-3%]"> 🏠 Home</div> </Link> 
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[25px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary text-white">
                Our Team
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark text-white sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-base text-body-color dark:text-dark-6 text-white">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Anshuman Dhami"
            profession="Web Developer"
            imageSrc="public\images\Ansh.jpg"
          />
          <TeamCard
            name="Beauty Kumari"
            profession="Web Developer"
            imageSrc="public\images\Beauty.jpg"
          />
          <TeamCard
            name="Chandan Kumar Singh"
            profession="Web Developer"
            imageSrc="public\images\Profile.JPG"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;

// eslint-disable-next-line react/prop-types
const TeamCard = ({ imageSrc, name, profession }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 xl:w-1/4 ">
        <div className="mx-auto w-full max-w-[370px]">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={imageSrc}
              alt=""
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute bottom-5 left-0 w-full text-center">
              <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-2 dark:bg-dark-2">
                <h3 className="text-base font-semibold text-dark ">
                  {name}
                </h3>
                <p className="text-xs text-body-color dark:text-dark-6">
                  {profession}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

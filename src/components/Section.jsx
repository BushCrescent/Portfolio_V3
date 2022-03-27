import WeatherAppImg from "../images/5Day_Weather.png";
const Section = () => {
  return (
    <div>
      <div class="container section">
        <div class="row align-items-center h-100 text-center text-lg-left">
          <div class="col-lg-6 p-lg-0">
            <img class="ProjectImg" src={WeatherAppImg}></img>
          </div>
          <div class="col-lg-5 mx-auto py-3 SectionTextContainer">
            <h3 class="h3 SectionProjectHeader">
              5 Day Weather <span class="badge badge-primary badge-sm"></span>
            </h3>
            <p class="showcase__description SectionProjectHeader">
              Weather app that shows weather.
            </p>
            <a
              href="https://bushcrescent.github.io/5_Day_Weather/"
              class="btn btn-outline-primary"
              target="_blank"
            >
              Visit site
            </a>
          </div>
        </div>
      </div>

      <div class="container section">
        <div class="row align-items-center h-100 text-center text-lg-left">
          <div class="col-lg-6 p-lg-0">
            <img class="ProjectImg" src={WeatherAppImg}></img>
          </div>
          <div class="col-lg-5 mx-auto py-3 SectionTextContainer">
            <h3 class="h3 SectionProjectHeader">
             Movie Searcher <span class="badge badge-primary badge-sm"></span>
            </h3>
            <p class="showcase__description SectionProjectHeader">
              App that shows any movie info.
            </p>
            <a
              href="https://bushcrescent.github.io/Movie_Searcher/"
              class="btn btn-outline-primary"
              target="_blank"
            >
              Visit site
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Section;

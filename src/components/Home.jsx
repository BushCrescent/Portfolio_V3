const Home = () => {
  return (
    <>
      <section>
        <div className="my-name-is animated animatedFadeInUp fadeInUp">Hello</div>
        <div className="big-heading animated animatedFadeInUp fadeInUp">My name is John Park</div>
        <div className="big-heading2 animated animatedFadeInUp fadeInUp">I make web applications</div>
        <div className="I-am-a animated animatedFadeInUp fadeInUp">See my work below</div>
      </section>
      <section id="about" className="animated animatedFadeInUp fadeInUp">
      <article>
            <a href = "https://bushcrescent.github.io/5_Day_Weather/">
                <h1 className="links">5 Day Weather</h1>
            </a>
            <img src="/images/5Day_Weather.png"></img>
        </article>
        <article>
            <a href = "https://bushcrescent.github.io/Movie_Searcher/">
                <h1 className="links">Movie Searcher</h1>
            </a>
        </article>
      </section>
    </>
  );
};
export default Home;

const Home = () => {
  return (
    <>
      <section>
        <div className="my-name-is animated animatedFadeInUp fadeInUp">
          Hello
        </div>
        <div className="big-heading animated animatedFadeInUp fadeInUp">
          My name is John Park
        </div>
        <div className="big-heading2 animated animatedFadeInUp fadeInUp">
          I make web applications
        </div>
        <div className="I-am-a animated animatedFadeInUp fadeInUp">
          See my work below
        </div>
      </section>
      <section id="about" className="animated animatedFadeInUp fadeInUp">
        <article>
          <a
            target="_blank"
            href="https://bushcrescent.github.io/5_Day_Weather/"
          >
            <center>
              <h1 className="links underline">5 Day Weather</h1>
            </center>
          </a>
        </article>
        <article>
          <a
            target="_blank"
            href="https://bushcrescent.github.io/Movie_Searcher/"
          >
            <center>
              <h1 className="links underline">Movie Searcher</h1>
            </center>
          </a>
        </article>
        <article>
          <a
            target="_blank"
            href="https://bushcrescent.github.io/Babylon_Practice/"
          >
            <center>
              <h1 className="links underline">My Room in Babylon JS</h1>
            </center>
          </a>
        </article>
        <article>
          <a href="">
            <center>
              <h1 className="links underline">Speech Buddy</h1>
            </center>
          </a>
        </article>
        <article>
          <a target="_blank" href="https://bushcrescent.github.io/tic-tac-toe/">
            <center>
              <h1 className="links underline">Tic Tac Toe</h1>
            </center>
          </a>
        </article>
        <article>
          <a target="_blank" href="https://sushisushirestaurant.com/">
            <center>
              <h1 className="links underline">Sushi Sushi</h1>
            </center>
          </a>
        </article>
      </section>
    </>
  );
};
export default Home;

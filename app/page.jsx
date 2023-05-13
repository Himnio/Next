import Feed from "@components/Feed";


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Descover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI- poweded promed</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source ai prompting tool for morden world
      </p>
      <Feed/>
    </section>
  );
};

export default Home;

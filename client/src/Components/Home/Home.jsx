import './HomeStyle.css';

const Home = () => {
    const divStyle = {
        height: 500,
      };
    return (
<section>
  <div className="bg-img bg-cover" style={{backgroundImage: "url('stock-market-image.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    <div className="container" style={{height: 500}}>
      <div className="row" style={{marginTop: '6%'}}>
        <div className="col-lg-6" style={{color: `hsl(218, 81%, 95%)`, marginTop: '15%'}}>
          <h1>Welcome to Stox</h1>
          <br />
          <p>
            A one-stop solution for navigating the diverse world of stock markets and investment options.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="display-3">
    
  </div>
</section>
    );
}
export default Home;

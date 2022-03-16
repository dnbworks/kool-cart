import Form from "./Form";

const ProductDetails = ({ id, img, title, price }) => {

    return (
    <div className="row justify-content-center">
        <div className="col-12 col-md-5 col-lg-5">
          <figure>
            <img src={img} alt="" />
          </figure>
        </div>
        <div className="col-12 col-md-5 col-lg-5">
            <div className="product-detail">
              <h3>{title}</h3>
              <span>${price}</span>
              <div className="descriptions__details--tab">
                <div className="tabs d-flex">
                  <span className="active">Description</span>
                  <span>Details</span>
                </div>
                <div className="tab__content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis rem saepe? Modi, quia voluptatibus corporis a odio aperiam voluptatem porro! Cupiditate praesentium sunt, aut rerum voluptatum velit pariatur quasi!</p>
                  <span className="more" >Read more</span>  
                </div>
              </div>
              <Form id={id} />
            </div>
          </div>
      </div>
    );
};

export default ProductDetails;
import "./CompaniesGeneral.css";
import HomeCartData from "../HomeCartData";

const CompaniesGeneral = () => {
  return (
    <div className="Companies_General">
      <h1 className="Companies_General_h1">Bizim Xidmətlərimiz</h1>
      <div className="Companies_General_container">
        {HomeCartData.map((item, idx) => {
          return (
            <div className="Companies_General_card" key={idx}>
              <div className="Companies_General_card-head">
                <div className="Companies_General_card-head_image">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>

              <div className="Companies_General_card-bottom">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompaniesGeneral;
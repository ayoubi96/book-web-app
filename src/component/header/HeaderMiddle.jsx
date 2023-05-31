
const HeaderMiddle =() => {
    return (
    <div className="header-middle">
             <div className="header-middle-logo">
                <b>Book</b>
                <i className="bi bi-book"></i>
                <b>book</b>
              </div>
            <div className="header-middle-search-box">
               <input className="header-middle-search-input" type="search" placeholder="search in book store..."/>
                   <i class="bi bi-search"></i>
            </div>
            <div className="header-middle-cart-wrapper">
                  <i className="bi bi-cart2">
                  </i>
            </div>
     </div>
    );
}
export default HeaderMiddle;
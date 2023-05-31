
const HeaderTop=({setToggle, toggle}) => {
    return (
        <div className="header-top">
            <div onClick={()=> setToggle(prev => !prev)} className="header-top-menu">
               { toggle ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i> }
            </div>
            <div className="header-top-phone">
               <i className="bi bi-telephone-fill"></i>
                  +123-456-789
               </div>
               <div className="header-top-text">
                   welcome to online book store
               </div>
               <div className="header-top-link">
                  <i className="bi bi-person-fill"></i>
                  Login
               </div>
         </div>


     );
}

export default HeaderTop;
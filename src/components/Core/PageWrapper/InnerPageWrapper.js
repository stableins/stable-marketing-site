import React from "react";
import GlobalHeaderContext, { headerDefault } from "../../context/GlobalHeaderContext";
 const PageWrapper= ({ children, headerConfig = null})=> {

  const sitectx = React.useContext(GlobalHeaderContext);
  
  React.useEffect(() => {
      sitectx.changeHeader({ ...headerDefault, ...headerConfig });
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <>
      {/* <Nav /> */}
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default PageWrapper;
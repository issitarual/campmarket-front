import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import UserContext from "./Context/UserContext";
import CartContext from "./Context/CartContext";
import { useState } from "react";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";
import Password from "./Pages/Password";

function App() {
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  return (
    <UserContext.Provider
      value={{
        user: user || JSON.parse(localStorage.getItem("user")),
        setUser,
      }}
    >
      <CartContext.Provider
        value={{
          cart: cart || JSON.parse(localStorage.getItem("cart")),
          setCart,
        }}
      >
        <BrowserRouter>
          <GlobalStyles />
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/Login" exact component={Login} />
            <Route path="/SignUp" exact component={SignUp} />
            <Route path="/category/:categoryName" exact component={Category} />
            <Route path="/product/:productId" exact component={Product} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/change_password" exact component={Password} />
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

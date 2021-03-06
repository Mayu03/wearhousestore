import { BrowserRouter as Router, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/cartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UsersListScreen from "./screens/UsersListScreen";
import ProductListScreen from "./screens/ProductListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderLisrScreen from "./screens/OrderLisrScreen";

const App = () => {
  return (
    <Router>
      {/* in router we want to wrap everything Route is wrap in Router  */}
      <Header />
      <Flex
        as="main"
        direction="column"
        mt="72px"
        minH="xl"
        py="6"
        px="6"
        bgColor="gray.200"
      >
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />

        <Route path="/admin/user/:id/edit" component={UserEditScreen} />

        {/* jsx return of HomeScreen */}
        {/* path to route if we have / in path then show HomeScreen */}
        <Route path="/admin/userlist" component={UsersListScreen} />
        {/* jsx return of ProductScreen */}
        {/* path route if we have /product and variable means id then show productscreen */}
        <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        <Route path="/admin/productlist" component={ProductListScreen} />
        <Route path="/admin/orderlist" component={OrderLisrScreen} />
        <Route path="/" exact component={HomeScreen} />
      </Flex>
      <Footer />
    </Router>
  );
};

export default App;

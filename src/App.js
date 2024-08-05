import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';
import Home from './components/pages/home/home';
import Contact from './components/pages/contact/contact';
import About from './components/pages/about/about';
import Registration from './components/pages/auth/rgistration/registration';
import Login from './components/pages/auth/login/login';
import Forgotpassword from './components/pages/auth/forgotpassword/forgotpassword';
import Confirmpassword from './components/pages/auth/confirmpassword/confirmpassword';
import Shop from './components/pages/shop/shop';
import Product from './components/pages/product/product';
import Checkout from './components/pages/checkout/checkout';
import Invoice from './components/pages/invoice/invoice';
import Confirmeder from './components/pages/confirmeder/confirmeder';
import Ordertrack from './components/pages/ordertrack/ordertrack';
import Ordertrackinfo from './components/pages/ordertrack/ordertrackinfo';
import Clientsposts from './components/pages/clientsposts/clientsposts';
import Fabricinfo from './components/pages/fabricinfo/fabricinfo';
import Confirmpayment from './components/pages/confirmpayment/confirmpayment';
import Termscondition from './components/pages/termsnadconditions/termscondition';
import Privacypolicy from './components/pages/privacypolicy/privacypolicy';
import Returnpolicy from './components/pages/returnpolicy/returnpolicy';
import Shippingpolicy from './components/pages/shippingpolicy/shippingpolicy';
import Pagenotfound from './components/pages/notfound/pagenotfound';
import Useradmin from './components/useradmin/useradmin';
// import Account from './components/customer/Account';
// import Orders from './components/customer/Orders';
// import OrderDetail from './components/customer/OrderDetail';
// import Wishlist from './components/customer/Wishlist';
// import Notifications from './components/customer/Notifications';
// import Settings from './components/customer/Settings';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotpassword" element={<Forgotpassword />} />
          <Route path="confirmpassword" element={<Confirmpassword />} />
          <Route path="check-out" element={<Checkout />} />
          <Route path="invoices" element={<Invoice />} />
          <Route path="order-confirmation" element={<Confirmeder />} />
          <Route path="track-order" element={<Ordertrack />} />
          <Route path="track-order-info" element={<Ordertrackinfo />} />
          <Route path="client-posts" element={<Clientsposts />} />
          <Route path="fabric-info" element={<Fabricinfo />} />
          <Route path="confirm-your-payment" element={<Confirmpayment />} />
          <Route path="terms-&-conditions" element={<Termscondition />} />
          <Route path="privacy-policy" element={<Privacypolicy />} />
          <Route path="return-policy" element={<Returnpolicy />} />
          <Route path="shppping-policy" element={<Shippingpolicy />} />
          <Route path="user-profile" element={<Useradmin />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<Pagenotfound />} />

          {/* custmer routes are here */}

          {/* <Route path="/customer/account/" element={<Account />} />
          <Route path="/customer/orders/" element={<Orders />} />
          <Route path="/customer/order/detail/:order_oid/" element={<OrderDetail />} />
          <Route path="/customer/wishlist/" element={<Wishlist />} />
          <Route path="/customer/notifications/" element={<Notifications />} />
          <Route path="/customer/settings/" element={<Settings />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;


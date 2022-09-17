import React from "react";
import { Provider } from "react-redux";
import Products from "./Components/products/Products";
import Carts from "./Components/Carts/Carts";
import Header from "./Components/Header/Header";
import  store  from "./redux/store";

function App() {

  


  return (
    <Provider store={store}> 
    <div className="bg-gray-50 h-full md:h-screen">
      <div className="grid place-items-center">
       <Header />
      </div>
      <div className="grid grid-cols-12 gap-6">
        <Products />
        <Carts  />  
      </div>
    </div>
    </Provider>
  );
}

export default App;

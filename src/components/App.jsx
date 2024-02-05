import CallForm from "./CallForm/CallForm";
import Form2 from "./Form2/Form2";
import Form3 from "./Form3/Form3";
import Pricelist from "./Pricelist/Pricelist";
import Checkbox from "./Checkbox/Checkbox";
import Price from "./Price/Price";
import {IMAGES} from "../data/images.js";
import CubeSwiper from "./CubeSwiper/CubeSwiper";
import EglamedForm from "./EglamedForm/EglamedForm";

export const App = () => {

  return (
    <>
      <Checkbox/> 
      <CallForm/>
      <Form2/> 
      <Form3/>
      <Pricelist/>
      <Price/>

      <CubeSwiper images={IMAGES}/>
      <EglamedForm/>
    </>
  );
};

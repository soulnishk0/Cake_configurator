import { createContext, useContext, useState } from "react";
import {useTexture} from "@react-three/drei";
import * as THREE from "three";

const cakeColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const cushionColors = [
  // {
  //   color: "#683434",
  //   name: "brown",
  // },
  // {
  //   color: "#1a5e1a",
  //   name: "green",
  // },
  // {
  //   color: "#659994",
  //   name: "blue",
  // },
  // {
  //   color: "#896599",
  //   name: "mauve",
  // },
  // {
  //   color: "#ffa500",
  //   name: "orange",
  // },
  // {
  //   color: "#59555b",
  //   name: "grey",
  // },
  // {
  //   color: "#222222",
  //   name: "black",
  // },
  {
    color: "#ececec",
    name: "white",
  },
];

const materials = [
  'abstract',
  'surface',
  'wood',
  'bark_pine',
  'candy',
  'stylized_fur',
  'lava'
]

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState(materials[0]);
  const [form, setForm] = useState(1);
  const [cakeColor, setCakeColor] = useState(cakeColors[0]);
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        material,
        materials,
        setMaterial,
        form,
        setForm,
        cakeColors,
        cakeColor,
        setCakeColor,
        cushionColors,
        cushionColor,
        setCushionColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};

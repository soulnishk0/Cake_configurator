import {createContext, useContext, useState} from "react";

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

const creamColors = [
  // {
  //   color: "#683434",
  //   name: "brown",
  // },
  // {
  //   color: "#1a5e1a",
  //   name: "green",
  // },
  {
    color: "#659994",
    name: "blue",
  },
  // {
  //   color: "#896599",
  //   name: "mauve",
  // },
  {
    color: "#ff6a00",
    name: "orange",
  },
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
  const [candle, setCandle] = useState(false);
  const [chocolate, setChocolate] = useState(false);
  const [balls, setBalls] = useState(false);
  const [nuts, setNuts] = useState(false);
  const [cakeColor, setCakeColor] = useState(cakeColors[0]);
  const [creamColor, setCreamColor] = useState(creamColors[0]);

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
        creamColors,
        creamColor,
        setCreamColor,
        setCandle,
        candle,
        setBalls,
        balls,
        setChocolate,
        chocolate,
        setNuts,
        nuts

      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  return useContext(CustomizationContext);
};

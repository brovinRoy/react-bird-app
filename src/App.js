import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import RefreshIcon from '@mui/icons-material/Refresh';


function App() {
  const [name, setName] = useState("Parrot");
  const [color, setColor] = useState("Green");
  const [icon, setIcon] = useState("🦜");
  const [image, setImage] = useState(Parrotimg());

  function Handle() {
    const Data = [
      { names: "Parrot", colors: "Green", icons: "🦜", images: Parrotimg() },
      { names: "Duck", colors: "White", icons: "🦆", images: Duckimg() },
      { names: "Eagle", colors: "Brown", icons: "🦅", images: Eagleimg() },
      { names: "Dove", colors: "White", icons: "🕊", images: Doveimg() },
    ];
    const ind = Math.floor(Math.random() * 4);
    const { names, colors, icons, images } = Data[ind];

    setName(names);
    setColor(colors);
    setIcon(icons);
    setImage(images);
  }

  return (
    <main>
      <h1 className="App">
        I am a {name} and my color is {color} and my emoji is
        {icon}
      </h1>

      <div className="birdimage">{image}</div>
      <Button variant="contained" size="medium" color="primary" onClick={Handle} startIcon={<RefreshIcon />}>
        Click to change bird
      </Button>
    </main>
  );
}

function Parrotimg() {
  return (
    <img
      src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFycm90fGVufDB8fDB8fHww"
      alt="Parrotimg"
    ></img>
  );
}
function Duckimg() {
  return (
    <img
      src="https://images.unsplash.com/photo-1563409236302-8442b5e644df?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVja3xlbnwwfHwwfHx8MA%3D%3D"
      alt="Duckimg"
    ></img>
  );
}
function Eagleimg() {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaStVgXiQicPypwDYktV3vmIBCqqlMdisCwQ&usqp=CAU"
      alt="Eagleimg"
    ></img>
  );
}
function Doveimg() {
  return (
    <img
      src="https://static8.depositphotos.com/1361307/902/i/450/depositphotos_9025497-stock-photo-white-dove-flying.jpg"
      alt="Doveimg"
    ></img>
  );
}

export default App;

import { useState } from "react";
import Menu from "./MenuApi";
import RestrauCard from "./RestrauCard";
import Navbar from "./Navbar";


const uniqueList =[
  ...new Set(
    Menu.map((curElem) =>{
      return curElem.category;
    })
  ),"All",
]

const App =() =>{

  const [menuData, setMenuData] = useState(Menu);
  const [menuList,setMenuList]= useState(uniqueList);
  
  const filterItem = (category)=>{
    if(category==="All"){
      setMenuData(Menu);
      return;
    }
    const updateList = Menu.filter((curElem)=>{
      return curElem.category === category;
    });

    setMenuData(updateList);

  };
  return(
    <>
    <Navbar filterItem= {filterItem} menuList ={menuList} />
    <RestrauCard menuData={menuData}/>
    </>
  )
}

export default App;

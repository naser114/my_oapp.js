import React from 'react';
import MyButton from './component/mybutton';
import Image from './landscapes-volume-4k-timelapse.jpg';





function App() {
  
let Profil = {

    photo :Image,
  
    name:{firstName:"nasreddine", lastName:"nasri"},
  
    profileLink:"https://github.com/",

    fbprofileLink:"https://www.facebook.com/"

    
  
   }


  return (
    <div>
      
     <center> <img style={{width:250, height:300}} src={Profil.photo} alt=""/></center>
     <center><h4>{Profil.name.firstName}</h4>
      <h4>{Profil.name.lastName}</h4></center>
    <center><MyButton
      onSimpleClick ={()=>{window.open(Profil.profileLink)}}>
        MyGit</MyButton></center>
        <center> <MyButton
      onSimpleClick ={()=>{window.open(Profil.fbprofileLink)}}>
        MyFacebook</MyButton></center>
        

    </div>
    
  );
}

export default App;

import React,{useEffect} from "react";
import logOut from "../functions/logOut";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../Firebase/config";
import Swal from "sweetalert2";
const UserAccount = ({ setAccount, user }) => {
  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(FirebaseAuth, (usuarioFirebase)=>{
      if(!usuarioFirebase){
        navigate('/')
      }
    })
  },[])


  const handleCerrar = () => {
    Swal.fire({
      title: "Quieres cerrar sesion?",
      text: "Opus Lumina te desea un buen dia!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5cb85c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sesion cerrada",
          text: "Que la pases genial hoy.",
          icon: "success"
        });
        setAccount(false);
        logOut();
      }
    });
    
  };
  return (
    <div className="absolute min-h-44 min-w-52 lg:bg-[#1B1A55] lg:right-12 lg:top-16 rounded-md overflow-hidden shadow-lg">
      <div className="my-2">
        <div className="flex gap-4 items-center mx-2">
          <img
          className="h-10 w-10 rounded-full"
            src={`${
              user.photoURL
                ? user.photoURL
                : "https://i.pinimg.com/564x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg"
            }`}
            alt=""
          />
          <div className="font-light text-[16px]">
            <p>
              {user.displayName
                ? user.displayName?.substring(0,12)
                : `Hola Usuario`}
            </p>
            <p>{user.email}</p>
          </div>
        </div>
        <ul className="font-light mt-2 ">
          <li className="hover:bg-blue-800 mx-0 py-2 px-2 cursor-pointer">Hacerte premium</li>
          <li className="hover:bg-blue-800 mx-0 py-2 px-2 cursor-pointer">Cuenta</li>
          <li className="hover:bg-blue-800 mx-0 py-2 px-2 cursor-pointer" onClick={handleCerrar}>Cerrar sesion</li>
        </ul>
      </div>
    </div>
  );
};

export default UserAccount;

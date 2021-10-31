import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import intializeAuthentication from "../Component/firebase/firebase.init";


intializeAuthentication();

            const useFirebase=()=>{
            const [user,setUser]=useState({});
            const[isLoading,setIsLoading]=useState(true);
            const auth=getAuth();
            const signInUsingGoogle=()=>{
            setIsLoading(true);
            const googleProvider=new GoogleAuthProvider();
            signInWithPopup(auth,googleProvider)
            .then(result=>{
            setUser(result.user)
            
            
             })
                 .finally(()=>setIsLoading(false));
         }

                   useEffect(()=>{
                     const unsubscribed=onAuthStateChanged(auth,user=>{
                      if(user){
                     setUser(user);
                    }
                    else{
                     setUser({})
                     }
                     setIsLoading(false);
                     });
                     return()=>unsubscribed;
                     },[auth])
                     const logOut=()=>{
                     setIsLoading(true);
                     signOut(auth)
                     .then(()=>{ })
                     .finally(()=>setIsLoading(false));
                 }
                      return {
                    
                     user,
                     isLoading,
                    signInUsingGoogle,
                    logOut
                    }

                   }



export default useFirebase;


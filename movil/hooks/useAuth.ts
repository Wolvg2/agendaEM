import { useState } from "react";
import { auth,db } from "@/firebase/config";
import {collection, doc, setDoc, getDoc} from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// Registro de usuarios 
export const registerUser = async(email: string, password:string,name: string, role:string) => {
    
    try{
        
        if (password.length < 12 || 
            !/[A-Z]/.test(password) ||
            !/[0-9]/.test(password) ||
            !/[!@#$%^&*/.-_]/.test(password)
        ){
            alert("Contraseña debe tener al menos 12 caracteres, una mayúscula, un número y un caracter !@#$%^&*/.-_ ");
            return null;
        }

        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const user =userCredential.user;

        const usuarios = doc(db,"users", user.uid );
        await setDoc(usuarios, {
            email,
            name,
            role
        });

        console.log("Usuario registrado exitosamente");
        return userCredential;
    } catch(error) {
        console.log("Error al registrar usuario", error);
        alert("Error al registrar usuario ");
        return null;
    }
}

export const loginUser = async(email:string, password:string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email,password);
    const user = userCredential.user;

    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.data();

    return {user, role:userData?.role};
}
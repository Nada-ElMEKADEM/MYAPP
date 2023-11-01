import { Infoperso } from "../components/Infoperso";
import { Contact } from "../components/Contact";
import { Infodiv } from "../components/Infodiv";
import { ExpPro } from "../components/ExpPro";

export const Myform =() =>{
    return(
        <div className="flex h-screen items-center justify-center p-10 bg-gradient-to-r from-blue-400 to-purple-600">
        
            <form className="max-w-2xl w-full bg-white p-6 rounded-lg">
             <Infoperso/>
             <Contact/>
             <Infodiv/>
             <ExpPro/>



            </form>





        </div>


    );




}
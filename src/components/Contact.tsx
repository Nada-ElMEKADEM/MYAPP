export const Contact=() =>{
    return(  
        <div>
       <h2 className="text-[#9b59b6] font-extrabold text-2xl">Contact</h2>

       <div className="flex flex-wrap justify-between" >
                <label className="block font-serif" >Email</label>
                <input  className="border p-2 h-12 w-full rounded-lg "type="text" id="email" name="email" placeholder="Saisir votre email" required/>
               
     
   
   
         <label className="block font-serif">Adresse</label>
         <input className="border p-2 h-12 w-full rounded-lg" type="text"id="adresse" name="adresse"placeholder="Saisir votre adresse" required/>
         
    
         <span className="block font-serif">Télèphone</span>
         <input className="border p-2 h-12 w-full rounded-lg"  type="text" id="telephone" name="telephone"placeholder="Saisir votre numèro de telephone" required/>
     </div>
    

 </div>

    );
}
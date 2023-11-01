export const Infoperso = () =>{
    return (
       
       <div >
         <h2 className="text-[#9b59b6] font-extrabold text-2xl">Informations personnelles</h2>

                <div className="flex flex-wrap justify-between" >
                <label className="block font-serif" >Nom</label>
                <input  className="border p-2 h-12 w-full rounded-lg "type="text" id="nom" name="nom" placeholder="Saisir votre nom" required/>
               
        
    
                <label className="block font-serif" >Prénom</label>
                <input  className="border p-2 h-12 w-full rounded-lg " type="text" id="prenom" name="prenom" placeholder="Saisir votre prénom" required />
            
    

            
                <label className="block font-serif">Date de naissance</label>
                <input className="border p-2 h-12 w-full rounded-lg "type="date" id="date" name="date" required />
        
                <label className="block font-serif">Age</label>
                < input className="border p-2 h-12 w-full rounded-lg "  id="Age" name="age" type="number" placeholder="xx" required />
                <label className="block font-serif">Sexe</label>
                <input type="radio" id="check-male" name="gender" />
                        <label>Homme</label>
    
                        <input type="radio" id="check-female" name="gender"/>
                        <label >Femme</label>
                
                </div>
        </div>

    );
}
    
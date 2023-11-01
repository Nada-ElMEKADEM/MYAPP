export const Infodiv=() =>{
    return(
        <div> <h2 className="text-[#9b59b6] font-extrabold text-2xl">Diplôme</h2>
                <div >
                    <select className="border p-2 h-12 w-full rounded-lg ">
                        <option>DUT</option>
                        <option>Master</option>
                        <option >License</option>
                        <option>Doctorat</option>
                    </select>
                </div>
    
         
                <h2 className="text-[#9b59b6] font-extrabold text-2xl">Langues</h2>
                <input  className="mr-8"type="checkbox" id="check-langue" name="langue"/>
                <label  >Français</label>
             
            
                    <input className="mr-8"type="checkbox" id="check-langue" name="langue" />
                    <label >Anglais</label>
                    
                   <input className="mr-8" type="checkbox" id="check-langue" name="langue" />
                     <label  >Espagnol</label>
                    
                    
                            <input className="mr-8" type="checkbox" id="check-langue" name="langue" />
                            <label >Autre</label>
                        
                          

                <h2 className="text-[#9b59b6] font-extrabold text-2xl">Langages de progrmmation</h2>
              
                <input className="mr-8" type="checkbox" id="check-langage" name="langage" />
                <label >HTML</label>
               
              
                    <input className="mr-8"  type="checkbox" id="check-langage" name="langage" />
                    <label >CSS</label>
                  
            
             
                     <input className="mr-8" type="checkbox" id="check-langage" name="langage" />
                     <label  >C</label>
                  
                        <input className="mr-8" type="checkbox" id="check-langage" name="langage" />
                        <label  >Java</label>

            </div>
            











    









    );





}
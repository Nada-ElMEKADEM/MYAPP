
export const Header = () =>{
    return(
        
        <div className="bg-blue-200 w-full max-w-screen-xl mx-auto p-10 shadow-lg grid grid-cols-1 sm:grid-cols-2 ">
            <img  className="rounded-full w-[20] h-[20] ml-20  "alt='img.jpg' src="data:image/jpeg;base64,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" ></img>
            <div className="grid justify-items-center ">

             <h3  className=" text-5xl font-serif font-black  mt-8 mr-auto ">Imane Nada</h3>
             <p className ="text-xl mt-2 mr-auto font-serif">Elève ingénieur en informatique et digitalisation</p>
             
    

                
                <ul className=" flex justify-between ">
                <a href="mailto:votreadresse@mail.com">
  <img
    src="https://www.svgrepo.com/show/14478/email.svg"
    alt="Icône e-mail"
    className="inline-block w-6 h-6 text-red-500"
  />
</a>

                    <li className="mx-10 text-l font-serif ml-auto" >imanenada@gmail.com
                    </li>
                    <a>
                    <img
    src=" https://www.svgrepo.com/show/294650/location.svg"
    alt="Icône de localisation"
    className="inline-block w-6 h-6 text-blue-500"
  />
</a>

                   

                    <li   className="mx-10 text-l font-serif ml-auto " >Rabat-Maroc</li>
                    <a href="tel:+1234567890">
  <img
    src="https://www.svgrepo.com/show/533285/phone.svg" 
    alt="Icône de téléphone"
    className="inline-block w-6 h-6 text-blue-500"
  />
</a>

                    <li className="mx-10 text-l font-serif" >0628702791</li>
            
            </ul>
            </div>
            </div>
            
        
        
    
        
        





    );


}
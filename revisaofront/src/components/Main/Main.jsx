import React from 'react';
import style from './Main.module.css';
import Band from "../Band/Band";

const bandas = [
{
    nome:'Banda 01',
     imagem:'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
     descricao:'banda Hard Rock' ,
    

},

{
    nome:'Banda 02',
     imagem:'https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg',
     descricao:'banda Hard Rock' ,
    

},

{
    nome:'Banda 03',
     imagem: 'https://m.media-amazon.com/images/I/91WaJU5cCXL._AC_UF1000,1000_QL80_.jpg',
     descricao:'banda Hard Rock' ,
    

},

{
     nome:'Banda 04',
     imagem:'https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg',
     descricao:'banda Hard Rock' ,
    

}

];



function Main() {
  return (
   <main className={style.main}> {
      bandas.map((banda, index)=> (
        <section>
            <Band key = {index} {...banda}/>
        </section>
      ))
    }   
       
   



   </main>
  )
}
  export default Main;
 

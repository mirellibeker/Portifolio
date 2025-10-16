import TextoDescricao from "../components/TextoDescricao"
import TextoDestacado from "../components/TextoDestacado";
import TextoPrincipal from "../components/TextoPrincipal";
import "./Principal.css";
export default function Principal(){

    return(
        <section>
        <div class="batata">
           <TextoDestacado texto={"Olá meu nome é"}/>
           <TextoPrincipal
            texto={"Mirelli Gonçalves"}
            />
           <TextoDescricao texto={"Sou aluna do Ensino Médio Técnico da Escola Social Marista Cascavel, e esse é o projeto de portifólio que vamos desenvolver."}/>
          
         <button>CONTATO</button>
        </div>
    </section>
    )
}
import Reviews from "./subComponents/Reviews";
import p1 from "/images/p1.png";
import p2 from "/images/p2.png";
import p3 from "/images/p3.png";
import p4 from "/images/p4.png";
import p5 from "/images/p5.png";

import stars from "/images/stars.png";

const Body2 = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center w-full ">
        <span className="text-3xl md:text-4xl text-center font-extrabold text-[#00bd0e]">
          COSA DICONO DI NOI
        </span>
        <div className="h-[6px] w-[85px] mt-2 bg-[#00bd0e]"></div>
      </div>
      <div>
        <Reviews
          profile={p1}
          name="Carlo (da Google, Roma)"
          review="Local Guide·192 reviews·182 photos"
          months="3 months ago"
          rating={stars}
          desc="Esperienza positiva. Consiglieró questa banca"
        />
        <Reviews
          profile={p2}
          name="Mirta Saccon (da Google, Venezia)"
          review="1 review"
          months="1 month ago"
          rating={stars}
          desc="Buongiorno, un ringraziamento particolare alla Dottoressa Galvan per la sua professionalità, 
gentilezza, puntualità.... Dote purtroppo rara in questi tempi.Grazie"
        />
        <Reviews
          profile={p3}
          name="Alessia Caputo (da Google, Milano)"
          review="3 reviews·1 photo"
          months="5 months ago"
          rating={stars}
          desc="Ottima esperienza, la consiglio! Sia per richiedere un prestito che per polizza moto. Sono 
stata seguita da Valeria per entrambe le pratiche ed è stata fantastica. Super gentile e 
soprattutto disponibile.Mi sono trovata davvero bene
"
        />
        <Reviews
          profile={p4}
          name="Enzo G (da Google, Napoli)"
          review="2 reviews"
          months="1 month ago"
          rating={stars}
          desc="Personale molto disponibile e professionale in aiuto al cliente"
        />
        <Reviews
          profile={p5}
          name="Rosalia Ferrigno (da Google, Palermo)"
          review="1 review"
          months="1 month ago"
          rating={stars}
          desc="Personale accogliente e molto professionale. Veloci, pratici e sempre disponibili a chiarire 
ogni dubbio e a risolvere ogni problema. La Signora Liliana è stata davvero eccellente e 
sempre pronta a chiarire ogni mia perplessità con tanta pazienza e dedizione. Direttore 
professionale,gentile e molto attento alla clientela . Consiglio a tutti questa banca e 
complimenti per il super Team Ibl di Viale croce rossa a Palermo.
"
        />
      </div>
      <div className="flex items-center justify-center mb-8">
        <span className="bg-[#00bd0e] text-3xl text-center text-white w-3/4 lg:w-auto lg:px-32 py-4 rounded-xl font-bold">RICHIEDI ORA</span>
      </div>
    </div>
  );
};

export default Body2;

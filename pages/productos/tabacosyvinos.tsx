import type { NextPage } from "next";

const tobaccoandvine: NextPage = () => {
  return (
    <div className="main_container">
      <div className="sub_container">
        <div className="logo">
          <img src="/Logo.png" className="img_logo"></img>
        </div>
        <div className="title">
          <h1>TABACO Y VINOS</h1>
          <img src="/Linea.png" className="img_line"></img>
          <h2>PUROS DE MARCA PROPIA</h2>
        </div>
        <div className="introduction">
          <div className="photo_one">
            <img
              src="/Introductiontobacco.png"
              className="image_introduction"
            />
          </div>
          <div className="paragraph_introduction">
            <p>
              La famosa casa guatemalteca, Tabacos y Vinos lanza su propia marca
              de puros para consumo de sus clientes y visitantes.
            </p>
            <p>
              Con tabacos originados de Honduras y Nicaragua, resultan los puros
              Tabacos y Vinos, con dos versiones de selección que complacerán a
              quien deguste el resultado de estas mezclas especiales para la
              marca.
            </p>
          </div>
        </div>
        <div className="text">
          <div className="text_center">
            <div className="subtitle">
              <h1>EDICIÓN LIGA CUBANA</h1>
              <img src="/Cigarrette.png" className="img_cigarrette"></img>
            </div>
            <div className="paragraph_boddy">
              <p>
                Este puro y su liga destaca la Tradición que viene de la Cuba de
                mediados del siglo XVII, contiene hoja cultivada por auténticos
                cubiches en el Valle de Jamastrán en Honduras.
              </p>
              <p>
                Un pedacito de Cuba, una liga de relleno especial en la que
                descubrirás fragancias dulces con tonalidades de cedro y aromas
                del campo de Pinar del Rio . Su capa de quemado parejo y dotado
                de hermosura da ese toque de elegancia que indiscutiblemente es
                característico por la capa Habano de añejo en casa de curado.{" "}
              </p>
              <p>
                Un elemento a resaltar es su fragancia pura y redonda que se
                apetece de fumadores que gustan de puros de denominación cubana.
              </p>
            </div>
            <div className="logos_cubana">
              <img src="/FortalezaBaja.png" className="img_cubana"></img>
            </div>
          </div>
          <div className="separator"></div>
          <div className="text_center">
            <div className="subtitle">
              <h2>EDICIÓN BW</h2>
              <img src="/Cigarrette.png" className="img_cigarrette"></img>
            </div>
            <div className="paragraph_boddy">
              <p>
                En un homenaje y culto a la tradición del Tabaco, que involucra
                a cientos de personas que están detrás de la elaboración
                artesanal de puros, nace la edición BW
              </p>
              <p>
                Esta es una mezcla creada a partir de hojas de tabaco de
                Honduras y Nicaragua que provocan sensaciones fogosos sabor a
                fruta tropical agradable provocando una frescura en el gusto. Su
                fragancia es elegante, la cual se conjuga de manera balanceada
                con su sabor y suavidad.
              </p>
              <p>
                El componente silvestre esta marcado en su fragancia que emana
                del Trópico de Centro América.
              </p>
            </div>
            <div className="logos_cubana">
              <img src="/FortalezaMedia.png" className="img_cubana"></img>
            </div>
          </div>
        </div>
        <div className="information">
          <div className="information_header">
            <img src="/Information.png" className="img_header"></img>
          </div>
          <div className="information_boddy">
            <h1>WWW.HABANOSESPECIALIZADOS.COM</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tobaccoandvine;

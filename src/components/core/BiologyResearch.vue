<template>
  <div class='flex-wrapper'>
    <div class='column column-2'>
      <div class='card'>
        <h4 class='card-header'>Background</h4>
        <div class='card-body'>
          <p>
            Something unique about me is that I began my professional life as a genetics researcher. I obtained my
            Masters in Molecular Genetics in 2014 at Kansas State University. During my freetime at graduate school
            I taught myself the Python coding language using local library books and internet resources. My goal was
            to write a couple of scripts to automate some data analysis tasks that were proving to be time consuming
            in the lab. It was from this humble beginning that I developed a passion for programming and led to my
            career change after completing my Masters. I am still fascinated by the continually evolving field of
            science today and think it is an extremely important subject for the populous to be educated in, but my
            ultimate career goals lie in software development.
          </p>
        </div>
      </div>

      <div class='card'>
        <h4 class='card-header'>Publications</h4>
        <div class='card-body'>
          <ul class='list-unstyled'>
            <li>
              <i class="fas fa-pencil-alt"></i>
              <a href='https://academic.oup.com/jxb/article/66/1/189/2893415' target='_blank'>
                Functional diversification of two UGT80 enzymes required for steryl glucoside synthesis
                in Arabidopsis
              </a>
            </li>
            <li>
              <i class="fas fa-pencil-alt"></i>
              <a href='http://krex.k-state.edu/dspace/handle/2097/16985' target='_blank'>
                Steryl glucosides: a genetic approach to determine their role in cellulose synthesis and lipid
                metabolism in Arabidopsis
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class='column column-2'>
      <div class='card'>
        <h4 class='card-header'>Research Abstract</h4>
        <div class='card-body'>
          <p>
            Steryl glucosides are a common conjugate of sterols found in the plasma membranes of most plants
            and fungi. The cellular functions of steryl glucosides remain largely unknown, but they have
            been implicated to facilitate stress response in plants, and more controversially, to serve as
            primers for the synthesis of cellulose. The glycosylation of the C3 hydroxyl group of the sterol
            nucleus is catalyzed by UDP-glucose:steryl glucosyltransferase (UGT80) enzymes. Two genes encoding
            UGT80A2 and UGT80B1 are responsible for most steryl glucoside production in Arabidopsis, while
            UGT80C1 presents a putative third enzyme. Available microarray data for UGT80C1 reveals upregulated
            mRNA expression in response to heat and salt stress, as well as in water-imbibed seeds. In Arabidopsis,
            seed imbibition signals the epidermal seed coat cells to secrete an encapsulating mucilage that
            consists primarily of hydrated polysaccharides. Cellulose has also been identified in the inner
            layer of the mucilage, providing a convenient model to study cellulose synthesis due to its negligible
            effect on seed germination and the availability of pectin and cellulose staining dyes. Preliminary
            data shows that imbibed ugt80A2,B1 and ugt80B1,C1 double transgenic insertion knockout seeds exhibit
            abnormal aggregation, while a triple mutant shows an additive effect with extreme seed aggregation.
            Treatment with Na2CO3 disrupts this phenotype, but reveals irregular polysaccharide and/or
            cellulose patterning and deposition of the mucilage. Analysis of the triple mutant also shows an
            additive effect with respect to this novel phenotype. The preliminary results may be indicative of
            disrupted cellulose synthesis and a relationship between steryl glucosides and CELLULOSE
            SYNTHASE 5 (CESA5), which contributes to cellulose accumulation in seeds. Confocal laser scanning
            microscopy with cellulose binding fluorescent dyes, calcofluor white and pontamine scarlet,
            confirm abnormal cellulose patterning in the triple mutant compared to wild type seed mucilage.
            However, further study is needed to decipher whether the depletion of steryl glucosides influences
            the cellulose content in Arabidopsis seed mucilage and/or another carbohydrate component such as
            pectin or callose.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .flex-wrapper {
    display: flex;
    .column {
      padding: 0px 10px;
    }

    .card {
      margin: 10px;
    }

    .column-2 {
      flex: 2;
    }
    .about-me-card {
      img {
        float: left;
        padding-right: 10px;
      }
    }
  }
</style>

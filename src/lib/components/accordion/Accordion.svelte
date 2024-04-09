<script>
  import AccordionItem from "./AccordionItem.svelte";

  let items = [
    {
      title: "Ometi oli ta pisut nagu pettunud",
      text: "Tema oli lootnud, et sigu tuleb ehk ajama Juss, võib–olla peremees isegi, ja meestega võiks ajada mehejuttu. Aga nüüd ei tulnud tüdrukki, vaid perenaine ise, laps süles. Mis temale ikka öelda, ega tema ometi midagi vastama hakka, millest võiks pikem asjalik jutt ja sõnadega kemplemine tekkida.",
    },
    {
      title: "Aga Andres jäi peale",
      text: "seda üsna tõsiseks ja sõnakehvaks. Pearu lõhutud aia asemele uue tegemisest ei võinud enam juttugi olla. Kui loomad enne sõnnikuvedu kesale lasti vaheajal kasvanud rohtu sööma, istus karjane rukki ääres aiaaugul. Muud polnud tal midagi teha, kui aga teisepere rukki ääres istuda. Oleks tahtnud rukkipilligi teha, aga ei tohtinud, peremees oli selle kõvasti ära keelanud.",
    },
    {
      title: "Muidugi, iseenesest see muutus",
      text: "ei sündinud, vaid aina tööst ja tegemisest. Loomadele alla pandi mitte ainult iga võimalik põhukõrs, vaid lepiku alt veeti hulk puru juurde. Kevadel, kui soo alles kandis, mättad aga juba paljad ja sulad olid, käidi sealt sammalt kiskumas. Heinamaalt veeti koju lauta mineval suvel raiutud ja virna aetud mättad. Osa neist oli külmunud, aga karjaaias päikese paistel ja kevadise tuule käes sulasid ja kuivasid nad ning siis kõlbasid ka nemad loomadele aluspõhuks.",
    },
  ];
</script>

<dl class="space-y-4 divide-y divide-black">
  {#each items as item}
    <AccordionItem data={item} />
  {/each}
</dl>

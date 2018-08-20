title: "Navzdory velkým kauzám: Trestní justice zrychluje, poškození se práva domohou dříve"
perex: "David Rath či Lukáš Nečesaný. Oba případy často slouží jako příklady selhání tuzemské justice. Přitom od 90. let trestní řízení znatelně zrychlila a ubývá i vleklých případů."
published: "20. srpna 2018"
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/profimedia-021913445_180725-114354_haf.jpg?itok=kGvSKO2j
coverimg_note: "Trestní soudce Kamil Kydalka, foto Profimedia"
styles: []
# snadné načítání csv: d3csv v libraries, d3.csv("soubor.csv").then(function(data){} ) v kódu
libraries: [highcharts, "https://cdnjs.cloudflare.com/ajax/libs/highcharts/6.1.1/highcharts-more.js", ] #jquery, d3, d3v5, d3csv, highcharts, datatables
options: [] #wide, noheader (, nopic)
---
<left>
	<p>
	<b>KAREL HYNEK MÁCHA</b>
	</p><p>
	Karel Hynek Mácha (16. listopadu 1810 Praha-Malá Strana[1] – 6. listopadu 1836 Litoměřice[2]) byl český básník a prozaik, představitel českého romantismu a zakladatel moderní české poezie. Proslavil se jak svým životem, tak dílem, jemuž dominuje Máj (1836).
	</p>
</left>

Čím dříve trestný čin skončí pravomocným rozsudkem, tím dříve se obětem dostane zadostiučinění a také často odškodnění. Proto je délka řízení bedlivě sledovaná a často i kritizovaná, naposledy se nad vleklým soudem s Davidem Rathem [pozastavil i šéf Nejvyššího kontrolního úřadu](https://www.irozhlas.cz/zpravy-domov/miloslav-kala-nejvyssi-kontrolni-urad-nku-david-rath-andrej-babis_1808130600_ogo).

Rychlé vyřešení věci závisí na dvou hlavních faktorech: jak rychle policie pachatele _odstíhá_ a za jak dlouho justice pravomocně rozhodne.

Dle statistických listů trestních, které pro server iROZHLAS.cz zpracoval [Jakub Drápal z Katedry trestního práva PrF UK](https://www.prf.cuni.cz/detail-cloveka/1010944/1404044682/), od roku 2000 klesl přibližně na polovinu průměrný čas, který uplynul od spáchání trestného činu do chvíle, než policie pachatele začala stíhat. Navíc od roku 2002 výrazně ubylo případů, které se nestandardně vlekly.

<wide>
<div class="chart" id="agg_odspachanidostihani"></div>
</wide>

Obdobně, i když pomaleji pak poklesl průměrný čas, který justice potřebovala k vydání pravomocného rozsudku.

<wide>
<div class="chart" id="agg_delkaodspachanidopm"></div>
</wide>

Na rychlost vyřízení případu má vliv i to, zda soudce použije [trestní příkaz](https://cs.wikipedia.org/wiki/Trestn%C3%AD_p%C5%99%C3%ADkaz) a obviněný výsledek soudu přijme (pokud ne, odehraje se standardní líčení). Trestním příkazem je možné trestat jen jasně dokázané přečiny a nelze jím někoho poslat do vězení. Používá se tak k trestání [fotbalových chuligánů](https://www.ceskatelevize.cz/sport/fotbal/nizsi-souteze/351746-za-vytrznosti-v-opave-padaly-tresty-podminka-pokuta-i-prospesne-prace/?mobileRedirect=off) či [pouličních rváčů](https://www.seznamzpravy.cz/clanek/trest-za-peprovy-sprej-do-obliceje-bezdomovcu-na-sjezdu-cssd-je-definitivni-kotrba-slibil-ze-zaplati-47045).

Podle [výroční statistické zprávy ministerstva spravedlnosti](https://portal.justice.cz/Justice2/MS/ms.aspx?j=33&o=23&k=7039&d=360282) pak trestním příkazem skončí i 80 % všech případů řízení pod vlivem alkoholu.

Statistiky ukazují, že věci vyřešené trestním příkazem jsou opravdu výrazně rychlejší.

<wide>
<div class="chart" id="aggTP_delkaodspachanidopm"></div>
</wide>

I když celkově trestání v Česku zrychluje, jsou přečiny a zločiny, kde se situace v posledních letech mírně zhoršila. Jde například o zanedbání povinné výživy. Práce policie by tu měla být svižná svižná, pachatel je vždy bezpečně známý, od roku 2005 ale vzrostla jak průměrná, tak i maximální doba potřebná k vydání pravomocného rozsudku.

<wide>
<div class="chart" id="agg196_delkaodspachanidopm"></div>
</wide>

Od roku 2012 také roste doba potřebná k odsouzení pachatelů znásilnění.

<wide>
<div class="chart" id="aggbezTP185_delkaodspachanidopm"></div>
</wide>

_Vybrané trestné činy můžete prozkoumat v následující aplikaci._

<wide>
<div id="all">
	<select id="all_sel"></select>
	<div class="all_chart"></div>
</div>
</wide>
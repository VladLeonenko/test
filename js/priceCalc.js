var btn = document.querySelector('#btn'),
    landing = document.querySelector('#landing'),
    corporate = document.querySelector('#corporate'),
    ishop = document.querySelector('#ishop'),
    out = document.querySelector('#out'),
    tilda = document.querySelector('#Tilda'),
    wordPress = document.querySelector('#WordPress'),
    CleanCode = document.querySelector('#CleanCode'),
    StandartDesign = document.querySelector('#StandartDesign'),
    OptimalDesign = document.querySelector('#OptimalDesign'),
    PrimeDesign = document.querySelector('#PrimeDesign'),
    StandartSeo = document.querySelector('#StandartSeo'),
    OptimalSeo = document.querySelector('#OptimalSeo'),
    PrimeSeo = document.querySelector('#PrimeSeo'),
    StandartBackend = document.querySelector('#StandartBackend'),
    OptimalBackend = document.querySelector('#OptimalBackend'),
    PrimeBackend = document.querySelector('#PrimeBackend')


btn.onclick = function(){
    if (landing.checked){
        landing.value = 5000;}
    else
    {
        landing.value = 0;
    }
    if (corporate.checked){
        corporate.value = 10000; }
    else
    {
        corporate.value = 0;
    }
    if (ishop.checked){
        ishop.value = 30000; }
    else
    {
        ishop.value = 0;
    }


    if (tilda.checked){
        tilda.value = 10000; }
    else
    {
        tilda.value = 0;
    }
    if (wordPress.checked){
        wordPress.value = 40000; }
    else
    {
        wordPress.value = 0;
    }
    if (CleanCode.checked){
        CleanCode.value = 60000;
    }
    else
    {
        CleanCode.value = 0;
    }


    if (StandartDesign.checked){
        StandartDesign.value = 5000; }
    else
    {
        StandartDesign.value = 0;
    }
    if (OptimalDesign.checked){
        OptimalDesign.value = 10000; }
    else
    {
        OptimalDesign.value = 0;
    }
    if (PrimeDesign.checked){
        PrimeDesign.value = 15000; }
    else
    {
        PrimeDesign.value = 0;
    }




    if (StandartSeo.checked){
        StandartSeo.value = 10000; }
    else
    {
        StandartSeo.value = 0;
    }
    if (OptimalSeo.checked){
        OptimalSeo.value = 40000; }
    else
    {
        OptimalSeo.value = 0;
    }
    if (PrimeSeo.checked){
        PrimeSeo.value = 100000; }
    else
    {
        PrimeSeo.value = 0;
    }




    if (StandartBackend.checked){
        StandartBackend.value = 25000; }
    else
    {
        StandartBackend.value = 0;
    }
    if (OptimalBackend.checked){
        OptimalBackend.value = 50000; }
    else
    {
        OptimalBackend.value = 0;
    }
    if (PrimeBackend.checked){
        PrimeBackend.value = 100000; }
    else
    {
        PrimeBackend.value = 0;
    }



    var sum = (Number(landing.value) || Number(corporate.value) || Number(ishop.value)) +
        (Number(tilda.value) || Number(wordPress.value) || Number(CleanCode.value)) +
        (Number(StandartDesign.value) || Number(OptimalDesign.value) || Number(PrimeDesign.value)) +
        (Number(StandartSeo.value) || Number(OptimalSeo.value) || Number(PrimeSeo.value)) +
        (Number(StandartBackend.value) || Number(OptimalBackend.value) || Number(PrimeBackend.value))

    out["innerHTML"] = sum;

}
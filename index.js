//CRIANDO ELEMENTOS PRINCIPAIS DA TABELA











function tabela3(nome){

    //elementos principais
    const tabela1 = document.createElement("table");
    const head = document.createElement("thead");
    const tabela4 = document.createElement("tbody");

    //criando thead

    const nome = prompt("Qual é o seu nome?");
    



    //criando elementos tbody

    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    const th5 = document.createElement("th");
    th1.innerHTML("B");
    th2.innerHTML("I");
    th3.innerHTML("N");
    th4.innerHTML("G");
    th5.innerHTML("O");

    for(let i=0; i < 5; i++)
    {
        const tr = document.createElement("tr");
        for(let c = 0; c < 5; c++)
        {
            const td = document.createElement("td");
            td.innerHTML("XX");
            tr.appendChild(td);
        }
    }
}
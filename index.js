//CRIANDO ELEMENTOS PRINCIPAIS DA TABELA












function tabela(){
    for(let i=0; i < 5; i++)
    {
        const tr = document.createElement("tr");
        for(let c = 0; c < 5; c++)
        {
            const td = document.createElement("td");
            td.innerHTML(XX);
            tr.appendChild(td);
        }
    }
}
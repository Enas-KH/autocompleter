
const input = document.getElementById('input');
const list = document.getElementById('list');

function getResults(searchInput) {
    if(searchInput===''){
        list.innerHTML=''
        return ;
    }
    fetch(`http://localhost:4000/search?q=${searchInput}`)
        .then((response) => {
            console.log(response.status);
            if (response.status === 404) throw new Error('nothing');
            return response.json();
        })
        .then((data) => data = render(data))
        .catch((error) => { list.innerHTML = ""; });
}



function select(element) {
    let selectUSerData = element.textContent;
    search.value = selectUSerData;
}
const render = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => { return match = `<li>${match.name}(${match.code})</li>` }
        ).join('');
        list.innerHTML = html;
        allListElements = document.querySelectorAll('li');
        for (let i = 0; i < allListElements.length; i++) {
            allListElements[i].setAttribute("onclick", "select(this)")
        }
    }
}
input.addEventListener('input', () => getResults(input.value))

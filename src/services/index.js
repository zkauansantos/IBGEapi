const urlPattern = 'https://servicodados.ibge.gov.br/api/v1/localidades';

async function getStatesForUF() {
    const response = await fetch(`${urlPattern}/estados`);
    return await response.json()
}

async function getCountysForUF(state) {
    const response = await fetch(`${urlPattern}/estados/${state}/municipios`)
    return await response.json();
}


export { getStatesForUF, getCountysForUF}
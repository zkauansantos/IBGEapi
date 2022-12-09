const urlPattern = 'https://servicodados.ibge.gov.br/api/v1/localidades';

export async function getStatesForUF() {
    const response = await fetch(`${urlPattern}/estados`);
    return await response.json()
}

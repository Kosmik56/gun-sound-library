import axios from "axios";

function WikiFetch(param){
    const wikiEndpoint = 'https://fr.wikipedia.org/w/api.php'
    const wikiParams = '?action=query' 
    + '&props=extracts' 
    + '&exsentences=2'
    + '&exlimit=1'
    + '&titles=' + param
    + '&explaintext=1'
    + '&format=json'
    + '&formatversion=2'
    + '&origin=*'

    const wikiLink = wikiEndpoint + wikiParams

    var wikiConfig = {
        timeout: 6500
    }

    async function getJsonResonse(url, config) {
        const response = await axios.get(url, config)
        return response.data
    }
    return getJsonResonse(wikiLink, wikiConfig).then(result =>{
        return result
    }).catch(error => {
        console.log('ERROR CODE' +error)
        return null
    })
}

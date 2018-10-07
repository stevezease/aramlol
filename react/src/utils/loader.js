import axios from 'axios';
export const DATA_DRAGON_BASE = 'https://ddragon.leagueoflegends.com';

export default function loader(callback) {
    const data = {};
    axios
        .get(`${DATA_DRAGON_BASE}/api/versions.json`)
        .then(versionResponse => {
            const versions = versionResponse.data;
            data.versions = versions;
            data.currentVersion = versions[0];
            return axios.get(
                `${DATA_DRAGON_BASE}/cdn/${
                    data.currentVersion
                }/data/en_US/champion.json`
            );
        })
        .then(championResponse => {
            data.champion = championResponse.data;
            return axios.get(
                `${DATA_DRAGON_BASE}/cdn/${
                    data.currentVersion
                }/data/en_US/item.json`
            );
        })
        .then(itemResponse => {
            data.item = itemResponse.data;
            return axios.get(
                `${DATA_DRAGON_BASE}/cdn/${
                    data.currentVersion
                }/data/en_US/summoner.json`
            );
        })
        .then(summonerResponse => {
            data.summoner = summonerResponse.data;
            return axios.get(
                `${DATA_DRAGON_BASE}/cdn/${
                    data.currentVersion
                }/data/en_US/runesReforged.json`
            );
        })
        .then(runeResponse => {
            data.runes = runeResponse.data;
            data.runesLookUp = reorder(data.runes);
            data.dataDragonBase = DATA_DRAGON_BASE;
            console.log('loading finished');
            callback(data);
        })
        .catch(error => console.log(error.response));
}

function reorder(data) {
    let runesLookUp = {};
    for (let style in data) {
        for (let slot in data[style].slots) {
            let slotInfo = data[style].slots[slot];
            for (let rune in slotInfo.runes) {
                let runeInfo = JSON.parse(JSON.stringify(slotInfo.runes[rune]));
                runeInfo.style = data[style].id;
                runesLookUp[runeInfo.id] = runeInfo;
            }
        }
    }
    return runesLookUp;
}

export function getChampionSplashURL(championName) {
    return `${DATA_DRAGON_BASE}/cdn/img/champion/splash/${championName}_0.jpg`;
}

export function getChampionProfileURL(championName, version) {
    return `${DATA_DRAGON_BASE}/cdn/${version}/img/champion/${championName}.png`;
}

export function getSummonerSpellImageURL(spellName, version) {
    return `${DATA_DRAGON_BASE}/cdn/${version}/img/spell/${spellName}`;
}

export function getItemImageURL(itemId, version) {
    return `${DATA_DRAGON_BASE}/cdn/${version}/img/item/${itemId}.png`;
}

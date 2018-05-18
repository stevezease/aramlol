import axios from 'axios';

export default function loader(callback) {
    axios
        .get(`https://ddragon.leagueoflegends.com/api/versions.json`)
        .then(versionResponse => {
            const versions = versionResponse.data;
            console.log(versions);
            const currentVersion = versions[0];
            axios
                .get(
                    `http://ddragon.leagueoflegends.com/cdn/${currentVersion}/data/en_US/champion.json`
                )
                .then(championResponse => {
                    const championJSON = championResponse.data;
                    console.log(championJSON.data);
                    callback();
                });
        });
}

export function getChampionSplashURL(championName) {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`;
}

export function getChampionProfileURL(championName, version) {
    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`;
}

export function getSummonerSpellImageURL(spellName, version) {
    return `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spellName}`;
}

export function getItemImageURL(itemId, version) {
    return `http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${itemId}.png`;
}

export function getRuneImageURL(icon) {
    return `https://ddragon.leagueoflegends.com/cdn/img/${icon}`;
}

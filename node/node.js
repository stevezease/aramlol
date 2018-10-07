const express = require('express');
const axios = require('axios');
const app = express();
const key = 'RGAPI-6806a5bb-b4b8-4d1b-8419-ae4256342480';
const region = 'na1';

app.get('/user', (req, res) => {
    const name = req.query.name;
    let respbody = '';
    axios
        .get(
            `https://${region}.api.riotgames.com/lol/summoner/v3/summoners/by-name/${name}?api_key=${key}`
        )
        .then(response => {
            const summonerId = response.data.id;
            axios
                .get(
                    `https://${region}.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/${summonerId}?api_key=${key}`
                )
                .then(response => {
                    res.send(response.data);
                })
                .catch(error => {
                    res.sendStatus(404);
                    console.log(error);
                });
        })
        .catch(error => {
            res.sendStatus(404);
            console.log(error);
        });
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));

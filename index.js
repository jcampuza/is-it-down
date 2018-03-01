#!/usr/bin/env node
'use strict';

const fetch = require('node-fetch');
const meow = require('meow');

meow(`
    Usage
    $ is-it-down <url>
`);

const logSuccess = (url) => {
    console.log(`${url} is up! 😃`);
}

const logFailure = (url) => {
    console.log(`${url} is down! 😢`);
}

const main = async (url) => {
    if (!url) {
        console.log('must provide a url to check, 😲');
        return;
    }
    url = (url.startsWith('http')) ? url : `http://${url}`;
    try {
        const { status } = await fetch(url, { method: 'HEAD' })
        if (status === 200) logSuccess(url);
        else logFailure(url);
    } catch (err) {
        logFailure(url);
    }
}

const url = process.argv[2];
main(url);

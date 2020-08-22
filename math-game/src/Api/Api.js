const protocol = window.location.protocol;
const URLmaster = window.location.host;


// const API = {

//     'GET_POST_PLAYER': 'http://localhost:3030/mathtrix/hall',
//     'GET_POINTS': 'http://localhost:3030/mathtrix/hall/position/',

// }

const API = {

    'GET_POST_PLAYER': `${protocol}//${URLmaster}/mathtrix/hall`,
    'GET_POINTS': `${protocol}//${URLmaster}/mathtrix/hall/position/`,

}


export default API;
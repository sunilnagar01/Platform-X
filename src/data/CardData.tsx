const DATA = [
    {
        key: 1,
        imgUrl: 'https://imgs.search.brave.com/TuexHsGABEkWbx5YNCILbeyceoSoTr2FXNsgo6HcmHY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvYWktZ2VuZXJh/dGVkLXNjaS1maS1j/aXR5LUN5YmVyY2l0/eS1zdHlsZS1ieS1K/b3ZpYW5Tb2NpZXR5/LmpwZw',
        postType: 'Tweet',
        title: 'How can technology accelerate corporate sustainability initiatives',
        time: '8 min',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maxime ipsam nam eaque magni minus quos explicabo est esse, aut dolores id ratione. Nulla deserunt deleniti debitis ad maiores magni cumque reiciendis natus doloribus recusandae?',
        finish: 0
    },
    {
        key: 2,
        imgUrl: 'https://imgs.search.brave.com/Z7S9WQNYRS3AX9z4STFlEOde4WQ4e0YPFbBQjQXsseI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9nYW1l/aXNoYXJkLmdnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA3/L21mcmFja19yZWFs/aXN0aWNfcGhvdG9f/b2ZfcGNfZ2FtaW5n/X2Rlc2tfMmMzZjQ2/ODQtYmE2My00ZDEz/LTgxMDMtY2NlOGIz/YWY3MThjLmpwZWc',
        postType: 'Stories',
        title: 'une Updates For Amazon Prime Gaming: Full List Of Amazing Free Games',
        time: '9 min',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maxime ipsam nam eaque magni minus quos explicabo est esse, aut dolores id ratione. Nulla deserunt deleniti debitis ad maiores magni cumque reiciendis natus doloribus recusandae?',
        finish: 0
    },
    {
        key: 3,
        imgUrl: 'https://imgs.search.brave.com/ye906_PFlnKtKQkP0Mp1Y48bXvWCbpoAFHZea-nFANs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/Ym9sbHlpbnNpZGUu/Y29tL2FydGljbGVz/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9zaXRl/cy80LzIwMjIvMTIv/QC04MzEtNjk2eDM2/OS5qcGc',
        postType: 'Article',
        title: 'Corsair HS65 Surround Review: Comfort And Quality At A Budget',
        time: '4 min',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maxime ipsam nam eaque magni minus quos explicabo est esse, aut dolores id ratione. Nulla deserunt deleniti debitis ad maiores magni cumque reiciendis natus doloribus recusandae?',
        finish: 0
    },
    {
        key: 4,
        imgUrl: 'https://imgs.search.brave.com/nPluBC8DR4O83X0rnGtzBKEZDzavlAiPHaNGkSSKvdw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTE3Nzk3/My84MzA4L2kvNjAw/L2RlcG9zaXRwaG90/b3NfODMwODAzMDgt/c3RvY2stcGhvdG8t/Y29tcHV0ZXItcGVy/aXBoZXJhbHMtYW5k/LWxhcHRvcC1hY2Nl/c3Nvcmllcy5qcGc',
        postType: 'Video',
        title: 'Logitech G502 X Plus Review: A Very Close Second',
        time: '6 min',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maxime ipsam nam eaque magni minus quos explicabo est esse, aut dolores id ratione. Nulla deserunt deleniti debitis ad maiores magni cumque reiciendis natus doloribus recusandae?',
        finish: 0
    },
    {
        key: 5,
        imgUrl: 'https://imgs.search.brave.com/svXOpvi8r2DtSIu4ul7kBUdgmLN-R5AOQaLxLhdU3qo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ha20t/aW1nLWEtaW4udG9z/c2h1Yi5jb20vaW5k/aWF0b2RheS9pbWFn/ZXMvc3RvcnkvMjAy/MjEyL2JnbWktc2l4/dGVlbl9uaW5lLmpw/ZWc_VmVyc2lvbklk/PXpzTGx0Y2x5WTZ1/cWVvV2FfVzdmN2dW/d2VyTVlmNU1aJnNp/emU9NjkwOjM4OA',
        postType: 'Infographic',
        title: 'BGMI In-Game Names: Cool Gamer Tags Suggested By ChatGPT And Google Bard',
        time: '8 min',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maxime ipsam nam eaque magni minus quos explicabo est esse, aut dolores id ratione. Nulla deserunt deleniti debitis ad maiores magni cumque reiciendis natus doloribus recusandae?',
        finish: 0
    },
    {
        key: 6,
        imgUrl: 'https://imgs.search.brave.com/dvs-jPzxWJ2TLAr88YO5noUB7dJizFXGJEDNEeDSs28/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U2LzU0/LzQ0L2U2NTQ0NGM5/YzIyODU0OGMzMzFh/Y2VlNTE2YTMwNzFi/LmpwZw',
        postType: 'Soundboard',
        title: "Marvel's Spider-Man 2: PS5 Exclusive Release Date And...",
        time: '8 min',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maxime ipsam nam eaque magni minus quos explicabo est esse, aut dolores id ratione. Nulla deserunt deleniti debitis ad maiores magni cumque reiciendis natus doloribus recusandae?',
        finish: 0
    },
]

export default DATA;
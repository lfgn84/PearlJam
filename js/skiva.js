function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('output');
const url = 'json/albums.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(albums) {
        console.log(albums.albums);
        console.log("Visa första i json-objektet: " + albums.albums[0].albumTitle);
        let output = albums.albums;
        return output.map(function(albums) {
            // for(let i = 1; i < 14; i++){
            //     let li=createNode('li');
            //     li.innerHTML=""+albums.albums[i];
            //     append(ul,li);
            // }
             let li1 = createNode('li');
             li1.innerHTML = ""+ albums.albumTrack1;
            let li2 = createNode('li');
            li2.innerHTML = ""+ albums.albumTrack2;
            let li3 = createNode('li');
            li3.innerHTML = ""+ albums.albumTrack3;
            let li4 = createNode('li');
            li4.innerHTML = ""+ albums.albumTrack4;
            let li5 = createNode('li');
            li5.innerHTML = ""+ albums.albumTrack5;
            let li6 = createNode('li');
            li6.innerHTML = ""+ albums.albumTrack6;
            let li7 = createNode('li');
            li7.innerHTML = ""+ albums.albumTrack7;
            let li8 = createNode('li');
            li8.innerHTML = ""+ albums.albumTrack8;
            let li9 = createNode('li');
            li9.innerHTML = ""+ albums.albumTrack9;
            let li10 = createNode('li');
            li10.innerHTML = ""+ albums.albumTrack10;
            let li11 = createNode('li');
            li11.innerHTML = ""+ albums.albumTrack11;
            let li12 = createNode('li');
            li12.innerHTML = ""+ albums.albumTrack12;
            let li13 = createNode('li');
            li13.innerHTML = ""+ albums.albumTrack13;
            append(ul,li1);
            append(ul,li2);
            append(ul,li3);
            append(ul,li4);
            append(ul,li5);
            append(ul,li6);
            append(ul,li7);
            append(ul,li8);
            append(ul,li9);
            append(ul,li10);
            append(ul,li11);
            append(ul,li12);
            append(ul,li13);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
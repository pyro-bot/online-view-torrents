// var parseTorrent = require('bencode-js');
import '../html/index.html';
import '../manifest.json';
import '../16x16.png';
import parseTorrent from 'parse-torrent'
import WebTorrent from 'webtorrent'
import {get} from 'request'
let client=new WebTorrent();
get({
    url:'http://torrent9.ru/_ld/16/1601_Need_for_Speed-.torrent',
    encoding:null,
    gzip:true
},(err,res,data)=>{
    let torrent=parseTorrent(data);
    console.log(torrent);
    client.add(torrent,(torrent)=>{
        torrent.files.forEach(function(element) {
            console.log(element);
        }, this);
    })
});
// $.post({
//     url:'http://torrent9.ru/_ld/16/1601_Need_for_Speed-.torrent',
//     success:function (data) {
//     // console.log(data);
//     client.add(data,(file)=>console.log(file));
//     // var torrent=parseTorrent(String(data));
//     // console.log(torrent);
// }})
// // var client = new WebTorrent();
// var infoHash = '4fb9f174ce95708a3f429702942a5a82f82db855';
// GM_xmlhttpRequest({
//     method: "POST",
//     url: "https://[domain1]/exmaple.php",
//     // data: formData,            
//     onload: function(response) {        

//         var torrent=parseTorrent.decode(response.responseText,'utf-8');
//         console.log('TEST');
//         console.log(torrent);
//         console.log(torrent.infoHash);

//         function msg(text){
//             console.log(text);
//         }

//         msg('Index.js');
//     }
// });

// client.add(torrent, function (torrent) {
//   // Got torrent metadata!
//   console.log('Client is downloading:', torrent.infoHash)
//   torrent.files.forEach(function (file) {
//     // Display the file by appending it to the DOM. Supports video, audio, images, and
//     // more. Specify a container element (CSS selector or reference to DOM node).
//     // file.appendTo('body');
//         console.log(file.name);
//     })
// })
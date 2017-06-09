var parseTorrent = require('bencode-js');
var $ = require('jquery');
$.post({
    url:'http://torrent9.ru/_ld/16/1601_Need_for_Speed-.torrent',
    success:function (data) {
    // console.log(data);
    var torrent=parseTorrent.decode(data,'utf-8');
    console.log(torrent);
}})
// var client = new WebTorrent();
var infoHash = '4fb9f174ce95708a3f429702942a5a82f82db855';
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
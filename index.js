var parseTorrent = require('parse-torrent');
var fs = require('fs');
var WebTorrent = require('webtorrent');
var client = new WebTorrent();
var infoHash = '4fb9f174ce95708a3f429702942a5a82f82db855';
var torrent=parseTorrent(fs.readFileSync('C:/Users/123/Desktop/project/one.torrent'));

console.log(torrent);
console.log(torrent.infoHash);

function msg(text){
    console.log(text);
}
msg('Index.js');

client.add(torrent, function (torrent) {
  // Got torrent metadata!
  console.log('Client is downloading:', torrent.infoHash)
  torrent.files.forEach(function (file) {
    // Display the file by appending it to the DOM. Supports video, audio, images, and
    // more. Specify a container element (CSS selector or reference to DOM node).
    // file.appendTo('body');
        console.log(file.name);
    })
})

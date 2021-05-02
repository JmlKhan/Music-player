import { v4 as uuidv4 } from 'uuid';
function chillhop() {
    return [
    { 
       name: "Roses n Flames",
       cover: "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
       artist: "CYGN",
       id: uuidv4(),
       Active: true,
       color: ["#3A2953", "#0D102F"],
       audio: 'https://mp3.chillhop.com/serve.php/?mp3=14984'
     },
     {
       name: "Zodiac",
       cover: "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
       artist: "CYGN",
       id: uuidv4(),
       active: false,
       color: ["#3A2953", "#0D102F"],
       audio: "https://mp3.chillhop.com/serve.php/?mp3=14997"
     },
     {
       name: "dado nado",
       cover: "https://i.ytimg.com/vi/rip8Q_yVClI/maxresdefault.jpg",
       artist: "Dado",
       id: uuidv4(),
       active: false,
       color: "none",
       audio: "http://muz.uz/uploads/mservice/45e71e1b2f13aa820a86eb275e6c6e62.mp3",
     }
     ];
}

export default chillhop;
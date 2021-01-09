var imported = document.createElement('script');
imported.src = 'https://raw.githubusercontent.com/MichelAsmar/FaceApiModules/main/face-api.js';
//imported.defer = true;
document.head.appendChild(imported);

imported = document.createElement('script');
imported.src = 'https://raw.githubusercontent.com/MichelAsmar/FaceApiModules/main/faceLogic.js';
imported.defer = true;
document.head.appendChild(imported);

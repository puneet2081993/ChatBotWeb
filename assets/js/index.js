let socket = io.connect('https://a8ec60998b01.ngrok.io/');

socket.on(`connect`,() => {
        console.log(`Connected to server`) 
    
});
socket.on(`disconnect`,() => {    
        console.log(`diconnected from server`) 
});

return socket;
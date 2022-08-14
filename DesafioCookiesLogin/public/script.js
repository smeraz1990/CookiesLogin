fetch("/api/productos-test").then(async(data) => {
    const response = await data.json();
    //console.log("session"+response)
    
        socket.emit('client:product', response)
});
 

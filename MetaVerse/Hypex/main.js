function transactioncon(obj) {
    console.log(obj);
}

window.admin_panel = ()=>{
    window.open(`https://hypexadmin.b-cdn.net/?ccid=${window.config1.contract}`, '_blank').focus()
}

window.circle_buy = async (nft, amount, signature, url) =>{
    window.open(`https://hypexbuy.b-cdn.net/?nftid=${nft}&contract=${window.config1.contract}`, '_blank').focus()
}

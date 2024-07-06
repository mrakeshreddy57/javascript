// Create a variable to hold your NFTs
let nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, date, description) {
    const nft = {
        name,         // Shorthand for name: name
        artist,       // Shorthand for artist: artist
        date,         // Shorthand for date: date
        description   // Shorthand for description: description
    };
    nfts.push(nft);
    console.log("Minted NFT:");
    console.log("Name: " + nft.name);
    console.log("Artist: " + nft.artist);
    console.log("Date: " + nft.date);
    console.log("Description: " + nft.description);
    console.log("---------------------------");
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    console.log("Listing all NFTs:");
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: " + nfts[i].name);
        console.log("Artist: " + nfts[i].artist);
        console.log("Date: " + nfts[i].date);
        console.log("Description: " + nfts[i].description);
        console.log("---------------------------");
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line
mintNFT("Sunset Bliss", "Alice", "2023-01-01", "A beautiful sunset over the mountains.");
mintNFT("Ocean Waves", "Bob", "2023-02-14", "Waves crashing onto the shore.");
mintNFT("City Lights", "Charlie", "2023-03-30", "The city skyline at night.");

listNFTs();
console.log("Total Supply: " + getTotalSupply());

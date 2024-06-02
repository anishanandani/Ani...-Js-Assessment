/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
// Create an array to hold the NFTs


const nfts = [];

// Function to mint a new NFT with given metadata and add it to the array
function mintNFT(name, department, uid, batch) {
    const nft = {
        name: name,
        department: department,
        uid: uid,
        batch: batch
    };
    nfts.push(nft);
    console.log(`Minted NFT: ${name}`);
}

// Function to list all NFTs and their metadata
function listNFTs() {
    nfts.forEach((nft, index) => {
        console.log(`ID: ${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Department: ${nft.department}`);
        console.log(`UID: ${nft.uid}`);
        console.log(`Batch: ${nft.batch}`);
        console.log('----------------------');
    });
}

// Function to print the total number of minted NFTs
function getTotalSupply() {
    console.log(`Total NFTs: ${nfts.length}`);
}

// Mint some NFTs
mintNFT("Ranjit", "Computer Science", "UID12345", "2024");
mintNFT("Anish", "Electrical Engineering", "UID67890", "2023");
mintNFT("Saurav", "Mechanical Engineering", "UID54321", "2025");

// List all NFTs
listNFTs();

// Get the total supply of NFTs
getTotalSupply();

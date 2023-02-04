const SHA256 = require('crypto-js/sha256')
class Block{
constructor(index,timestamp,data,previousHash=''){
this.index=index;
this.timestamp=timestamp;
this.data=data;
this.previousHash=previousHash;
this.hash=this.calculateHash();
this.nonce=0;
}
calculateHash(){
return SHA256(this.index+this.timestamp+this.previousHash+JSON.stringify(this.data) +
this.nonce).toString();
}
mineBlock(difficulty){
while(this.hash.substring(0,difficulty) != Array(difficulty + 1).join("0")){
this.hash = this.calculateHash();
this.nonce++;
}
console.log("minned hash is"+ this.hash);
}
}
class BlockChain{
constructor(){
this.chain=[this.createGenesisBlock()];
this.difficulty=5;
}
createGenesisBlock(){
return new Block(0,"13/12/2022","Genesis Block",'0');
}
getLatestBlock(){
return this.chain[this.chain.length-1]
}
addBlock(newBlock){
newBlock.previousHash=this.getLatestBlock().hash;
newBlock.hash = newBlock.calculateHash();
newBlock.mineBlock(this.difficulty);
this.chain.push(newBlock);
}
ischainValid(){
for(let i=1; i<this.chain.length;i++){
const currentBlock = this.chain[i];
const previousBlock = this.chain[i-1];
if (currentBlock.hash != currentBlock.calculateHash() ){
return false;
}
if (currentBlock.previousHash != previousBlock.hash){
return false;
}
}
return true
}
}
let myCoin = new BlockChain();
console.log("Mining block 1");
myCoin.addBlock(new Block(1,"14/12/2002","Block 1"));
console.log("Mining block 2");
myCoin.addBlock(new Block(2,"15/12/2002","Block 2"));
myCoin.chain[1].data={ Amount : 50};
console.log(JSON.stringify(myCoin,null,4));
console.log("is the Block valid?" + myCoin.ischainValid());
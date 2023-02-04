# Blockchain_using_JS
A complete blockchain implementation using JavaScript language with separate functions for 
(a) calculating hash
(b) mining block
(c) add block
(d) chain validation
(e) get latest block

For mining a block PoW consensus mechanism is used with then mining function as " Block hash must have a fixed initial zeroes" wherein the number of zeroes is determined 
by the difficulty level that can be set explicitly depending on the network hash rate.
The chain validation function checks for the hashes of all the blocks and returns true if chain is valid and false in case any data has been changed.

Block is invalid as we have changed the data explicitly after block creation
![image](https://user-images.githubusercontent.com/89768939/216781952-1525a310-ccee-4107-9246-00f7d1e361f2.png)

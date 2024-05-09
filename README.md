# SecureLink

Objective:
Create the "UnGenerated" microservice, a blockchain-based system for issuing and verifying digital file certificates using StarkWare's StarkEx. This system will use zk-STARK technology to ensure scalability, privacy, and security, setting a new standard for digital file authentication.

Microservice Specifications:

Core Functionality:
Certificate Issuance: Develop a function to create digital certificates as non-fungible tokens (NFTs) based on file hashes and metadata. Each certificate should be uniquely linked to a file hash stored on the blockchain.
Verification System: Implement a method to verify the authenticity of certificates against blockchain records using zk-STARK proofs, ensuring that the process is private and secure.
Blockchain Integration:
Smart Contracts: Write smart contracts in Solidity for deployment on StarkEx. These contracts should handle the issuance of NFTs and the verification of zk-STARK proofs.
StarkEx Interaction: Ensure the microservice can interact with StarkEx to manage transactions and smart contract executions efficiently.
Data Management:
File Hash Storage: Design a secure mechanism to store and retrieve file hashes on the blockchain.
Metadata Handling: Manage metadata associated with each file, ensuring it is stored securely and immutably.
Security Features:
zk-STARK Proofs: Integrate zk-STARK technology to generate and verify proofs without revealing underlying file data.
Access Control: Implement role-based access control for different user levels to interact with the microservice.
Development Tools and Libraries:

Solidity: For writing smart contracts.
Truffle Suite: For compiling, testing, and deploying your contracts.
Web3.js: To interact with a local or remote Ethereum node using HTTP, IPC, or WebSocket.
Initial Function to Develop:

CreateCertificate: A function that takes file metadata and user information, generates a file hash, creates an NFT linked to this hash, and records it on the blockchain.
Code Snippet Example:

javascript
Copy code
async function createCertificate(fileMetadata, userInfo) {
    const fileHash = web3.utils.sha3(fileMetadata);
    const certificate = await contract.methods.issueCertificate(fileHash, userInfo).send({ from: userAddress });
    return certificate;
}
Expected Outcomes:

A deployable smart contract that handles the issuance and verification of digital file certificates.
A basic user interface for submitting files and viewing certificates.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/certi-stark-auth.git
cd certi-stark-auth
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

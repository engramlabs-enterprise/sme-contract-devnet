// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SMEProductContract is ERC1155, Ownable {
    uint256 public constant PRODUCT_NFT = 0;

    constructor(string memory uri) ERC1155(uri) Ownable(msg.sender) {
        // Mint initial supply of NFTs
        _mint(msg.sender, PRODUCT_NFT, 1, "");
    }

    function mintNFT(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) external onlyOwner {
        _mint(account, id, amount, data);
    }

    function updateMetadataURI(string calldata newURI) external onlyOwner {
        _setURI(newURI);
    }
}

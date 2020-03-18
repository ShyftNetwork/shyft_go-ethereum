var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

var _message = "Hello";
var multi = web3.eth.contract([{"constant":false,"inputs":[{"name":"_newMessage","type":"string"}],"name":"setMessage","outputs":[{"name":"_str","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_message","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_newMessage","type":"string"}],"name":"EventMessage","type":"event"}]);
var inbox = multi.new(
    _message,
    {
        from: web3.eth.accounts[0],
        data: '0x6060604052341561000f57600080fd5b6040516109cd3803806109cd833981016040528080518201919050508060009080519060200190610041929190610048565b50506100ed565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061008957805160ff19168380011785556100b7565b828001600101855582156100b7579182015b828111156100b657825182559160200191906001019061009b565b5b5090506100c491906100c8565b5090565b6100ea91905b808211156100e65760008160009055506001016100ce565b5090565b90565b6108d1806100fc6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063368b877214610048578063e21f37ce1461011e57600080fd5b341561005357600080fd5b6100a3600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506101ac565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e35780820151818401526020810190506100c8565b50505050905090810190601f1680156101105780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561012957600080fd5b6101316102b9565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610171578082015181840152602081019050610156565b50505050905090810190601f16801561019e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101b46107d8565b6101bc6107d8565b82600090805190602001906101d29291906107ec565b507f2ec385c52f10e65de137fbbeb2582bb0f4a8460a2163012971e923d179d73ea7836040518080602001828103825283818151815260200191508051906020019080838360005b8381101561023557808201518184015260208101905061021a565b50505050905090810190601f1680156102625780820380516001836020036101000a031916815260200191505b509250505060405180910390a16102ae836040805190810160405280600181526020017f6400000000000000000000000000000000000000000000000000000000000000815250610357565b905080915050919050565b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561034f5780601f106103245761010080835404028352916020019161034f565b820191906000526020600020905b81548152906001019060200180831161033257829003601f168201915b505050505081565b61035f6107d8565b61039c83836020604051908101604052806000815250602060405190810160405280600081525060206040519081016040528060008152506103a4565b905092915050565b6103ac6107d8565b6103b461086c565b6103bc61086c565b6103c461086c565b6103cc61086c565b6103d461086c565b6103dc6107d8565b6103e461086c565b6000808e98508d97508c96508b95508a94508451865188518a518c51010101016040518059106104115750595b9080825280602002602001820160405250935083925060009150600090505b88518110156104e357888181518110151561044757fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f01000000000000000000000000000000000000000000000000000000000000000283838060010194508151811015156104a657fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050610430565b600090505b875181101561059b5787818151811015156104ff57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f010000000000000000000000000000000000000000000000000000000000000002838380600101945081518110151561055e57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506104e8565b600090505b86518110156106535786818151811015156105b757fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f010000000000000000000000000000000000000000000000000000000000000002838380600101945081518110151561061657fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506105a0565b600090505b855181101561070b57858181518110151561066f57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f01000000000000000000000000000000000000000000000000000000000000000283838060010194508151811015156106ce57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050610658565b600090505b84518110156107c357848181518110151561072757fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f010000000000000000000000000000000000000000000000000000000000000002838380600101945081518110151561078657fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050610710565b82995050505050505050505095945050505050565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061082d57805160ff191683800117855561085b565b8280016001018555821561085b579182015b8281111561085a57825182559160200191906001019061083f565b5b5090506108689190610880565b5090565b602060405190810160405280600081525090565b6108a291905b8082111561089e576000816000905550600101610886565b5090565b905600a165627a7a7230582020b529379f871d55b9275f90248d26586073f215f39c72d4f954eae2c85256170029',
        gas: '4700000'
    }, function (e, contract) {
        if (e) console.log("err1", e);
        if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
            var a = multi.at(contract.address);
            a.setMessage.sendTransaction("Hi dustin this is what i am", {from: web3.eth.accounts[0]}, function (err, res) {
                if (err) console.log("err", err);
                console.log(res)
            })
        }
    });
---
sidebar_position: 3
---

# Running a Local Testnet

This guide explains how to run a local Archway testnet. If you have not installed a Archway node before, please follow this [guide here](https://docs.archway.io/docs/node/install). 

To have a working test network we need at least one validator node. So, let's create a validator node.

## Initialize the validator node

First, let's a directory to keep all nodes data in to stay organized: 

```bash
mkdir testnet
cd testnet
```

Since we will create two nodes in this testnet, let's create a directory for first node that will will call `node-main`. 

```bash
mkdir -p node-main
```

Initiate node-main with the chain name:

```bash
archwayd init node-main --chain-id my-chain --home ./node-main
```

You will see something similar after running the command: 

```bash 
{"app_message":{"auth":{"accounts":[],"params":{"max_memo_characters":"256","sig_verify_cost_ed25519":"590","sig_verify_cost_secp256k1":"1000","tx_sig_limit":"7","tx_size_cost_per_byte":"10"}},"authz":{"authorization":[]},"bank":{"balances":[],"denom_metadata":[],"params":{"default_send_enabled":true,"send_enabled":[]},"supply":[]},"capability":{"index":"1","owners":[]},"crisis":{"constant_fee":{"amount":"1000","denom":"stake"}},"distribution":{"delegator_starting_infos":[],"....
``` 

Create a key to hold your account. An account is a pair of public key and private key. These keys are then stored in an object called a `keyring`. 

```bash
archwayd keys add node-main-account --home ./node-main
```

After running this command, you will be asked to create a `keyring` phrase. Create a `keyring` passphrase and re-enter the same phrase. 

:::important
Please remember your keyring passphrase as it is need to complete the following steps
:::

Once you have created a passphrase, you will see a similar message: 
```bash
- name: node-main-account
  type: local
  address: archway10n7srpt0x859ghelguwxvxwh84vdsryy8ptel8
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A6+usIOWVm2K45jsAzjhrRWDzDWANQsQvxXLtIZyT4OL"}'
  mnemonic: "
```

Add that key into the genesis.app_state.accounts array in the genesis file.

**Note:** This command lets you set the number of coins. Make sure this account has some coins
with the genesis.app_state.staking.params.bond_denom denom, the default is staking.

```bash
archwayd add-genesis-account $(archwayd keys show node-main-account -a --home ./node-main) 1000000000stake,1000000000validatortoken --home ./node-main
```

Now we will generate the genesis transaction to create the validator. The gensesis transactions is the first transaction of the local chain. 

```bash
archwayd gentx node-main-account 1000000000stake --chain-id my-chain --home ./node-main

archwayd collect-gentxs --home ./node-main
```

After running the above command, you will see a message like this: 
```bash 
Genesis transaction written to "node-main/config/gentx/gentx-69b522ae3010219fc2317b3aa8f1c789df81fa30.json"
``` 

Now let's start the validator node.

```bash
archwayd start --home ./node-main
```
If successful, the node will start running and you will see a message like below: 

```bash
8:49PM INF starting node with ABCI Tendermint in-process
``` 

**Congrats! You have created the first node. Now let's create a second node to connect to our testnet** 

## Initialize the second node

Open another terminal window and create a directory for the second node:

```bash
mkdir -p node2
```

Initiate the node with the chain name like we did with the main node earlier. 

```bash
archwayd init node2 --chain-id my-chain --home ./node2
```

## Fix port conflicts

Since we are running both nodes on the same machine, there will be some port conflicts.
Let's fix them before starting the second node.

### Changes to the `app.toml` file 

The first file we will change is the `app.toml` file. Go to this file by running the below commands: 

```bash 
cd node2/config 

nano app.toml
```

Under the `gRPC Configuration` section you will see the `address` settings. Change the value to the below:

| **Original Value **      | **Changed Value **       |
|--------------------------|--------------------------|
| address = "0.0.0.0:9090" | address = "0.0.0.0:9092" |

Save the file after making the above changes. 

### Changes to the `config.toml` file 

The next file we will change is the `config.toml` file. Go to this file by running the below commands after you have made the first edits above: 

```bash
nano config.toml
```

Under the `RPC Server Configuration Options` you will see the `laddr` settings. Change the value to the below: 

| **Original Value **      | **Changed Value **       |
|--------------------------|--------------------------|
| laddr = "tcp://127.0.0.1:26657" | laddr = "tcp://127.0.0.1:10002" |

Then find the `pprof_laddr` settings and change it to the value below: 

| **Original Value **      | **Changed Value **       |
|--------------------------|--------------------------|
| pprof_laddr = "localhost:6060" | pprof_laddr = "localhost:6062" |


And the last thing we need to change in this file is the listen port for p2p connections. This is under the `P2P Configuration Options` and we will change the `laddr` value to the below: 

| **Original Value **      | **Changed Value **       |
|--------------------------|--------------------------|
| laddr = "tcp://0.0.0.0:26656" | laddr = "tcp://0.0.0.0:20002" |

Save the edits to this file.

## Copy the genesis file

In order to join the local test network, we need to use the same genesis file of that network. The genesis file contains all the information and parameters about the initial state of our blockchain. 

Let's copy it from the main node and replace it on our genesis file.

**Make sure you are in the /testnet directory before running the below command**

```bash
cp ./node-main/config/genesis.json ./node2/config/
```

## Find addresses of the seeds

To join a p2p network we need the addresses of nodes that we are willing to connect to.
So let's find the address of the `main-node` via running the following command:

```bash
archwayd status
```

**Note:** Please note that this command shows the status of the running node on default port. If we want to get the status of a specific node, we need to give it the IP address and the port it is listening to. For example: `archwayd status -n tcp://localhost:10002` for `node2` that we just configured.

This command gives an output like the following:

```json
{
  "NodeInfo": {
    "protocol_version": {
      "p2p": "8",
      "block": "11",
      "app": "0"
    },
    "id": "a118197af3c66781faa0299633cc59a1622d27e3",
    "listen_addr": "tcp://0.0.0.0:26656",
    "network": "chain-main",
    "version": "",
    "channels": "40202122233038606100",
    "moniker": "node3",
    "other": {
      "tx_index": "on",
      "rpc_address": "tcp://127.0.0.1:10003"
    }
  },
  "SyncInfo": {
    ...
  },
  "ValidatorInfo": {
    ...
  }
}
```

All we need is

- The `id` which in our example is `a118197af3c66781faa0299633cc59a1622d27e3`
- The host name and its listening port (`listen_addr`) which here is: `tcp://0.0.0.0:26656`

## Join the network

Since we are running it on our local machine, the Ip address is `0.0.0.0` which refers to `localhost` we can use either `localhost` or `127.0.0.1`. For me even `0.0.0.0` worked!

Now let's run the following command to join the network:

```bash
archwayd --home ./node2 start --p2p.seeds a118197af3c66781faa0299633cc59a1622d27e3@localhost:26656
```

## Using `Gex` to visualize the network status

`GEX` is a real time in-terminal explorer for Cosmos SDK blockchains. Gex displays blocks, transactions, validator, network status, and more information. Use the GEX block explorer to see the status of peers, connection, version, and other useful information to have a quick peek into your own node.

Let's quickly install `Gex` to see the status of our node.

```bash
go install github.com/cosmos/gex@latest
```

To launch a GEX in your terminal window, type:

```bash
gex
```

Please, head over to this link for more information:
[https://github.com/cosmos/gex](https://github.com/cosmos/gex)

Now, before connecting to the `main-node`, our gex looks like this:

![](../assets/Gex01.png)

As you can see the number of peers is zero. Now we run execute the join network command and it should look like this:

![](../assets/Gex02.png)

So now we successfully joined a running network.

## Running a Local Testnet with docker

Docker allows us to have a running a single node local test net in an easy way.
First download the repository:

```bash
git clone git@github.com:archway-network/archway.git
cd archway
```

Once the docker image is built successfully, run the following command:

```bash
docker-compose up
```

If you want to hide the terminal output, just use flag `-d` like this:

```bash
docker-compose up -d
```

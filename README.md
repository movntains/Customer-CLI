# Customer Management CLI

This is a custom CLI that was built with Node.js, capable of performing CRUD operations on customers that are stored in a MongoDB database.  It utilizes [Mongoose](http://mongoosejs.com), [Commander.js](https://github.com/tj/commander.js/), and [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/).  It was made from a Traversy Media YouTube [video](https://youtu.be/v2GKt39-LPA).

## Installation

First, from within the project directory, install the dependencies.

```
$ npm install
```

Next, create the symlink.

```
$ npm link
```

Finally, connect to the MongoDB server.  It's best to run this command from a separate tab or window in the Terminal (or Command Prompt).

```
$ mongod
```

## Commands

_Adding a Customer_

```
$ customer-cli add
```

or

```
$ customer-cli a
```

<p align="center">
<img src="https://imgur.com/5laJ61k.png" height="350" width="500">
</p>

_Finding a Customer_

```
$ customer-cli find <name>
```

or

```
$ customer-cli f <name>
```

<p align="center">
<img src="https://imgur.com/8oCES2Z.png" height="350" width="500">
</p>

_Listing All Customers_

```
$ customer-cli list
```

or

```
$ customer-cli l
```

<p align="center">
<img src="https://imgur.com/v31TJDh.png" height="350" width="500">
</p>

_Removing a Customer_

```
$ customer-cli remove <_id>
```

or

```
$ customer-cli r <_id>
```

<p align="center">
<img src="https://imgur.com/tpULyMK.png" height="350" width="500">
</p>

_Updating a Customer_

```
$ customer-cli update <_id>
```

or

```
$ customer-cli u <_id>
```

<p align="center">
<img src="https://imgur.com/yPTfr7x.png" height="350" width="500">
</p>
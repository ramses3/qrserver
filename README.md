# Simple QR Code generator

A docker image running a NodeJS/Express application to easily generate and download a simple QR Code image.

## Installation

* clone the repository into your working dir
* change into directory _qrcode_
* build your docker image with ```docker build -t <imagename> .```
* run the container with ```docker run -it -p 3000:3000 <imagename>```

## Usage

Simply access your nodejs server under ```http://localhost:3000/<qr code content>``` - the generated QR Code will be downloaded automatically.


[![Build Status](https://travis-ci.org/petkaantonov/cookieparser.png?branch=master)](https://travis-ci.org/petkaantonov/cookieparser)

#Introduction

Fast cookie parser.

#Quick start

    npm install cookieparser

```js
var cookieparser = require("cookieparser");
cookieparser.parse("foo=bar");
```

#Performance

Platform info:

    Windows_NT 6.1.7601 x64
    Node.JS 0.11.8
    V8 3.21.18.3
    Intel(R) Core(TM) i5-2500K CPU @ 3.30GHz × 4

Running suite with cookie string:

a=b%20cd; longkey=somethingElseEntirely%20WithSpacesInside; anotherLongKeyString
=something:somethingElse:yetAnotherDifferentThing:andFinallyThis; g=another%20sp
acey

    cookieparser x 380,212 ops/sec ±0.20% (102 runs sampled)
    cookie x 166,393 ops/sec ±0.22% (98 runs sampled)

Running suite with cookie string:

PHPSESSID=abcdefghijklmnopqrstuvyx

    cookieparser x 1,776,560 ops/sec ±0.44% (90 runs sampled)
    cookie x 517,374 ops/sec ±0.35% (101 runs sampled)

Running suite with cookie string:

a=b; c=d; e=f; g=h; k=j; m =n; b = q;   r = l

    cookieparser x 418,466 ops/sec ±0.36% (98 runs sampled)
    cookie x 126,019 ops/sec ±0.31% (96 runs sampled)

Running suite with cookie string:

0=0; 1=0; 2=0; 3=0; 4=0; 5=0; 6=0; 7=0; 8=0; 9=0; a=0; b=0; c=0; d=0; e=0; f=0;
g=0; h=0; i=0; j=0; k=0; l=0; m=0; n=0; o=0; p=0; q=0; r=0; s=0; t=0; u=0; v=0;
w=0; x=0; y=0; z=0; 10=0; 11=0; 12=0; 13=0; 14=0; 15=0; 16=0; 17=0; 18=0; 19=0;
1a=0; 1b=0; 1c=0; 1d=0; 1e=0; 1f=0; 1g=0; 1h=0; 1i=0; 1j=0; 1k=0; 1l=0; 1m=0; 1n
=0; 1o=0; 1p=0; 1q=0; 1r=0; 1s=0; 1t=0; 1u=0; 1v=0; 1w=0; 1x=0; 1y=0; 1z=0; 20=0
; 21=0; 22=0; 23=0; 24=0; 25=0; 26=0; 27=0; 28=0; 29=0; 2a=0; 2b=0; 2c=0; 2d=0;
2e=0; 2f=0; 2g=0; 2h=0; 2i=0; 2j=0; 2k=0; 2l=0; 2m=0; 2n=0; 2o=0; 2p=0; 2q=0; 2r
=0; 2s=0; 2t=0; 2u=0; 2v=0; 2w=0; 2x=0; 2y=0; 2z=0; 30=0; 31=0; 32=0; 33=0; 34=0
; 35=0; 36=0; 37=0; 38=0; 39=0; 3a=0; 3b=0; 3c=0; 3d=0; 3e=0; 3f=0; 3g=0; 3h=0;
3i=0; 3j=0; 3k=0; 3l=0; 3m=0; 3n=0; 3o=0; 3p=0; 3q=0; 3r=0; 3s=0; 3t=0; 3u=0; 3v
=0; 3w=0; 3x=0; 3y=0; 3z=0; 40=0; 41=0; 42=0; 43=0; 44=0; 45=0; 46=0; 47=0; 48=0
; 49=0; 4a=0; 4b=0; 4c=0; 4d=0; 4e=0; 4f=0; 4g=0; 4h=0; 4i=0; 4j=0; 4k=0; 4l=0;
4m=0; 4n=0; 4o=0; 4p=0; 4q=0; 4r=0; 4s=0; 4t=0; 4u=0; 4v=0; 4w=0; 4x=0; 4y=0; 4z
=0; 50=0; 51=0; 52=0; 53=0; 54=0; 55=0; 56=0; 57=0; 58=0; 59=0; 5a=0; 5b=0; 5c=0
; 5d=0; 5e=0; 5f=0; 5g=0; 5h=0; 5i=0; 5j=0; 5k=0; 5l=0; 5m=0; 5n=0; 5o=0; 5p=0;
5q=0; 5r=0; 5s=0; 5t=0; 5u=0; 5v=0; 5w=0; 5x=0; 5y=0; 5z=0; 60=0; 61=0; 62=0; 63
=0; 64=0; 65=0; 66=0; 67=0; 68=0; 69=0; 6a=0; 6b=0; 6c=0; 6d=0; 6e=0; 6f=0; 6g=0
; 6h=0; 6i=0; 6j=0; 6k=0; 6l=0; 6m=0; 6n=0; 6o=0; 6p=0; 6q=0; 6r=0; 6s=0; 6t=0;
6u=0; 6v=0; 6w=0; 6x=0; 6y=0; 6z=0; 70=0; 71=0; 72=0; 73=0; 74=0; 75=0; 76=0; 77
=0; 78=0; 79=0; 7a=0; 7b=0; 7c=0; 7d=0; 7e=0; 7f=0; 7g=0; 7h=0; 7i=0; 7j=0; 7k=0
; 7l=0; 7m=0; 7n=0; 7o=0; 7p=0; 7q=0; 7r=0; 7s=0; 7t=0; 7u=0; 7v=0; 7w=0; 7x=0;
7y=0; 7z=0; 80=0; 81=0; 82=0; 83=0; 84=0; 85=0; 86=0; 87=0; 88=0; 89=0; 8a=0; 8b
=0; 8c=0; 8d=0; 8e=0; 8f=0; 8g=0; 8h=0; 8i=0; 8j=0; 8k=0; 8l=0; 8m=0; 8n=0; 8o=0
; 8p=0; 8q=0; 8r=0; 8s=0; 8t=0; 8u=0; 8v=0; 8w=0; 8x=0; 8y=0; 8z=0; 90=0; 91=0;
92=0; 93=0; 94=0; 95=0; 96=0; 97=0; 98=0; 99=0; 9a=0; 9b=0; 9c=0; 9d=0; 9e=0; 9f
=0; 9g=0; 9h=0; 9i=0; 9j=0; 9k=0; 9l=0; 9m=0; 9n=0; 9o=0; 9p=0; 9q=0; 9r=0; 9s=0
; 9t=0; 9u=0; 9v=0; 9w=0; 9x=0; 9y=0; 9z=0; a0=0; a1=0; a2=0; a3=0; a4=0; a5=0;
a6=0; a7=0; a8=0; a9=0; aa=0; ab=0; ac=0; ad=0; ae=0; af=0; ag=0; ah=0; ai=0; aj
=0; ak=0; al=0; am=0; an=0; ao=0; ap=0; aq=0; ar=0; as=0; at=0; au=0; av=0; aw=0
; ax=0; ay=0; az=0; b0=0; b1=0; b2=0; b3=0; b4=0; b5=0; b6=0; b7=0; b8=0; b9=0;
ba=0; bb=0; bc=0; bd=0; be=0; bf=0; bg=0; bh=0; bi=0; bj=0; bk=0; bl=0; bm=0; bn
=0; bo=0; bp=0; bq=0; br=0; bs=0; bt=0; bu=0; bv=0; bw=0; bx=0; by=0; bz=0; c0=0
; c1=0; c2=0; c3=0; c4=0; c5=0; c6=0; c7=0; c8=0; c9=0; ca=0; cb=0; cc=0; cd=0;
ce=0; cf=0; cg=0; ch=0; ci=0; cj=0; ck=0; cl=0; cm=0; cn=0; co=0; cp=0; cq=0; cr
=0; cs=0; ct=0; cu=0; cv=0; cw=0; cx=0; cy=0; cz=0; d0=0; d1=0; d2=0; d3=0; d4=0
; d5=0; d6=0; d7=0; d8=0; d9=0; da=0; db=0; dc=0; dd=0; de=0; df=0; dg=0; dh=0;
di=0; dj=0; dk=0; dl=0; dm=0; dn=0; do=0; dp=0; dq=0; dr=0; ds=0; dt=0; du=0; dv
=0

    cookieparser x 5,473 ops/sec ±0.24% (102 runs sampled)
    cookie x 2,190 ops/sec ±0.26% (100 runs sampled)


---
title: "Check SSL certificate from command line"
layout: "articles/article-page.pug"
summary: "Check SSL certificate from command line"
featured_image: "assets/articles/check_ssl.png"
create_date: "10-12-2012"
author:
  firstname: "Geoff"
  lastname: "Hatch"
  format: "firstname lastname (username)"
  username: "ghatch"
tags:
share:
  title: "Check SSL certificate from command line"
  summary: "Check SSL certificate from command line"
  href: "###check-ssl-certificate-from-command-line###"
---
To check if a SSL certificate is valid or not from a command line, simply run the following command:

```bash
$ openssl s_client -connect google.com:443 | openssl x509 -text
```

And it will return all of the SSL certificate information:

```bash

depth=1 /C=US/O=Google Inc/CN=Google Internet Authority
verify error:num=20:unable to get local issuer certificate
verify return:0
Certificate:
 Data:
 Version: 3 (0x2)
 Serial Number:
 16:6f:13:92:00:00:00:00:6a:19
 Signature Algorithm: sha1WithRSAEncryption
 Issuer: C=US, O=Google Inc, CN=Google Internet Authority
 Validity
 Not Before: Sep 27 01:23:05 2012 GMT
 Not After : Jun 7 19:43:27 2013 GMT
 Subject: C=US, ST=California, L=Mountain View, O=Google Inc, CN=*.google.com
 Subject Public Key Info:
 Public Key Algorithm: rsaEncryption
 RSA Public Key: (1024 bit)
 Modulus (1024 bit):
 00:e1:85:7a:f3:c0:96:0b:61:65:5c:ff:f5:ff:99:
 45:b9:1c:ce:e9:1c:22:5d:2d:23:06:8d:18:b0:ba:
 28:10:75:c1:dd:71:b6:72:28:cb:50:54:c7:b7:fc:
 9b:72:d9:db:62:20:40:aa:c9:46:95:da:bc:c1:62:
 14:cb:4f:4a:db:69:52:de:3d:af:56:34:31:75:02:
 9e:b5:64:ca:23:fc:00:6f:ee:bc:9b:21:ae:dc:dc:
 6d:3e:13:7b:c9:83:ee:e1:44:fa:d0:c2:15:89:ae:
 3f:23:9e:9b:2a:6a:26:e4:da:c6:2b:55:ec:70:34:
 8e:2a:95:75:57:23:9c:83:31
 Exponent: 65537 (0x10001)
 X509v3 extensions:
 X509v3 Extended Key Usage:
 TLS Web Server Authentication, TLS Web Client Authentication
 X509v3 Subject Key Identifier:
 26:27:CE:D1:93:A3:4D:84:6E:BF:1D:82:13:49:9D:59:15:50:7A:5B
 X509v3 Authority Key Identifier:
 keyid:BF:C0:30:EB:F5:43:11:3E:67:BA:9E:91:FB:FC:6A:DA:E3:6B:12:24

X509v3 CRL Distribution Points:
 URI:http://www.gstatic.com/GoogleInternetAuthority/GoogleInternetAuthority.crl

Authority Information Access:
 CA Issuers - URI:http://www.gstatic.com/GoogleInternetAuthority/GoogleInternetAuthority.crt

X509v3 Basic Constraints: critical
 CA:FALSE
 X509v3 Subject Alternative Name:
 DNS:*.google.com, DNS:google.com, DNS:*.youtube.com, DNS:youtube.com, DNS:*.youtube-nocookie.com, DNS:youtu.be, DNS:*.ytimg.com, DNS:*.google.com.br, DNS:*.google.co.in, DNS:*.google.es, DNS:*.google.co.uk, DNS:*.google.ca, DNS:*.google.fr, DNS:*.google.pt, DNS:*.google.it, DNS:*.google.de, DNS:*.google.cl, DNS:*.google.pl, DNS:*.google.nl, DNS:*.google.com.au, DNS:*.google.co.jp, DNS:*.google.hu, DNS:*.google.com.mx, DNS:*.google.com.ar, DNS:*.google.com.co, DNS:*.google.com.vn, DNS:*.google.com.tr, DNS:*.android.com, DNS:android.com, DNS:*.googlecommerce.com, DNS:googlecommerce.com, DNS:*.url.google.com, DNS:*.urchin.com, DNS:urchin.com, DNS:*.google-analytics.com, DNS:google-analytics.com, DNS:*.cloud.google.com, DNS:goo.gl, DNS:g.co, DNS:*.gstatic.com, DNS:*.googleapis.cn
 Signature Algorithm: sha1WithRSAEncryption
 b9:f8:3a:fc:89:6d:ef:57:df:67:5d:17:48:87:50:d5:df:4d:
 54:dc:e9:ff:24:be:1b:3e:c9:21:49:26:de:c0:06:bd:84:5f:
 ce:eb:c0:d6:6d:88:5f:b4:4d:cc:de:f1:bd:42:86:fb:dc:66:
 3c:14:f8:73:0e:52:93:5d:2d:97:0b:f1:4f:74:7a:1e:0d:a9:
 bf:c3:de:96:72:64:4b:0b:ea:22:3a:40:6e:77:2f:e1:13:0c:
 6c:f4:e6:e9:54:d3:43:cc:38:0c:55:3c:47:9c:73:99:3a:cb:
 bf:0e:49:84:f9:7a:33:f5:3a:a5:ea:25:44:6d:79:c9:be:a2:
 9f:cd
-----BEGIN CERTIFICATE-----
MIIF5DCCBU2gAwIBAgIKFm8TkgAAAABqGTANBgkqhkiG9w0BAQUFADBGMQswCQYD
VQQGEwJVUzETMBEGA1UEChMKR29vZ2xlIEluYzEiMCAGA1UEAxMZR29vZ2xlIElu
dGVybmV0IEF1dGhvcml0eTAeFw0xMjA5MjcwMTIzMDVaFw0xMzA2MDcxOTQzMjda
MGYxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMRYwFAYDVQQHEw1N
b3VudGFpbiBWaWV3MRMwEQYDVQQKEwpHb29nbGUgSW5jMRUwEwYDVQQDFAwqLmdv
b2dsZS5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAOGFevPAlgthZVz/
9f+ZRbkczukcIl0tIwaNGLC6KBB1wd1xtnIoy1BUx7f8m3LZ22IgQKrJRpXavMFi
FMtPSttpUt49r1Y0MXUCnrVkyiP8AG/uvJshrtzcbT4Te8mD7uFE+tDCFYmuPyOe
mypqJuTaxitV7HA0jiqVdVcjnIMxAgMBAAGjggO3MIIDszAdBgNVHSUEFjAUBggr
BgEFBQcDAQYIKwYBBQUHAwIwHQYDVR0OBBYEFCYnztGTo02Ebr8dghNJnVkVUHpb
MB8GA1UdIwQYMBaAFL/AMOv1QxE+Z7qekfv8atrjaxIkMFsGA1UdHwRUMFIwUKBO
oEyGSmh0dHA6Ly93d3cuZ3N0YXRpYy5jb20vR29vZ2xlSW50ZXJuZXRBdXRob3Jp
dHkvR29vZ2xlSW50ZXJuZXRBdXRob3JpdHkuY3JsMGYGCCsGAQUFBwEBBFowWDBW
BggrBgEFBQcwAoZKaHR0cDovL3d3dy5nc3RhdGljLmNvbS9Hb29nbGVJbnRlcm5l
dEF1dGhvcml0eS9Hb29nbGVJbnRlcm5ldEF1dGhvcml0eS5jcnQwDAYDVR0TAQH/
BAIwADCCAn0GA1UdEQSCAnQwggJwggwqLmdvb2dsZS5jb22CCmdvb2dsZS5jb22C
DSoueW91dHViZS5jb22CC3lvdXR1YmUuY29tghYqLnlvdXR1YmUtbm9jb29raWUu
Y29tggh5b3V0dS5iZYILKi55dGltZy5jb22CDyouZ29vZ2xlLmNvbS5icoIOKi5n
b29nbGUuY28uaW6CCyouZ29vZ2xlLmVzgg4qLmdvb2dsZS5jby51a4ILKi5nb29n
bGUuY2GCCyouZ29vZ2xlLmZyggsqLmdvb2dsZS5wdIILKi5nb29nbGUuaXSCCyou
Z29vZ2xlLmRlggsqLmdvb2dsZS5jbIILKi5nb29nbGUucGyCCyouZ29vZ2xlLm5s
gg8qLmdvb2dsZS5jb20uYXWCDiouZ29vZ2xlLmNvLmpwggsqLmdvb2dsZS5odYIP
Ki5nb29nbGUuY29tLm14gg8qLmdvb2dsZS5jb20uYXKCDyouZ29vZ2xlLmNvbS5j
b4IPKi5nb29nbGUuY29tLnZugg8qLmdvb2dsZS5jb20udHKCDSouYW5kcm9pZC5j
b22CC2FuZHJvaWQuY29tghQqLmdvb2dsZWNvbW1lcmNlLmNvbYISZ29vZ2xlY29t
bWVyY2UuY29tghAqLnVybC5nb29nbGUuY29tggwqLnVyY2hpbi5jb22CCnVyY2hp
bi5jb22CFiouZ29vZ2xlLWFuYWx5dGljcy5jb22CFGdvb2dsZS1hbmFseXRpY3Mu
Y29tghIqLmNsb3VkLmdvb2dsZS5jb22CBmdvby5nbIIEZy5jb4INKi5nc3RhdGlj
LmNvbYIPKi5nb29nbGVhcGlzLmNuMA0GCSqGSIb3DQEBBQUAA4GBALn4OvyJbe9X
32ddF0iHUNXfTVTc6f8kvhs+ySFJJt7ABr2EX87rwNZtiF+0Tcze8b1ChvvcZjwU
+HMOUpNdLZcL8U90eh4Nqb/D3pZyZEsL6iI6QG53L+ETDGz05ulU00PMOAxVPEec
c5k6y78OSYT5ejP1OqXqJURtecm+op/N
-----END CERTIFICATE-----
```

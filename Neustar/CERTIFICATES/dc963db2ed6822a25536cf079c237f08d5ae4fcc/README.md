# STIR/SHAKEN CA Ecosystem Compliance
## Neustar

### Certificate dc963db2ed6822a25536cf079c237f08d5ae4fcc
Tested At: 2022-10-27 20:58:33 +0300 +03\
Initial Validity Period: 365 day(s)\
Remaining Validity Period: 85 day(s)\
Subject: CN=SHAKEN 750J, O=Microtalk USA\\, Inc., C=US\
Issuer: CN=Neustar Certified Caller ID SHAKEN CA-1, OU=www.ccid.neustar, O=Neustar Information Services Inc, C=US

Link: https://appreg.telcoportal.com/mobileapps/neustar/Microtalk-Shaken.pem

View: [Click to view](https://understandingwebpki.com/?cert=MIIDBDCCAqqgAwIBAgIUGImhFqIf5Hygm343foSVjnif%2BoYwCgYIKoZIzj0EAwIwgYUxCzAJBgNVBAYTAlVTMSkwJwYDVQQKDCBOZXVzdGFyIEluZm9ybWF0aW9uIFNlcnZpY2VzIEluYzEZMBcGA1UECwwQd3d3LmNjaWQubmV1c3RhcjEwMC4GA1UEAwwnTmV1c3RhciBDZXJ0aWZpZWQgQ2FsbGVyIElEIFNIQUtFTiBDQS0xMB4XDTIyMDEyMDE3MzQzNVoXDTIzMDEyMDE3MzQzNVowQTELMAkGA1UEBhMCVVMxHDAaBgNVBAoME01pY3JvdGFsayBVU0EsIEluYy4xFDASBgNVBAMMC1NIQUtFTiA3NTBKMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEKGsCorXZmvMvzLMJsIaqu1iQuh175yJHI9djkT%2F39bZmyhvvsQglKtuJfLfWK7S33JhPJYsvCYWN3lVtKYxMtKOCATkwggE1MBYGCCsGAQUFBwEaBAowCKAGFgQ3NTBKMAwGA1UdEwEB%2FwQCMAAwHwYDVR0jBBgwFoAUr9HIwu5yTIP8P%2B0Zp20dkLIH8DowWwYIKwYBBQUHAQEETzBNMEsGCCsGAQUFBzAChj9odHRwOi8vY2FjZXJ0cy11cy5jY2lkLm5ldXN0YXIvTmV1c3RhckNlcnRpZmllZENhbGxlcklkQ0ExLmNydCAwFwYDVR0gBBAwDjAMBgpghkgBhv8JAQEBMEcGA1UdHwRAMD4wPKA6oDiGNmh0dHBzOi8vYXV0aGVudGljYXRlLWFwaS5pY29uZWN0aXYuY29tL2Rvd25sb2FkL3YxL2NybDAdBgNVHQ4EFgQUWKpDvoG%2FDdw3hsvQndoYjfmBqYQwDgYDVR0PAQH%2FBAQDAgeAMAoGCCqGSM49BAMCA0gAMEUCIQDlNUrWIoSMmehRlUz%2B1IokU0rE8msdcafKw0bYo1A2TgIgddh8JJPwokEktzLIEolmdQVg%2BMG%2FMz7%2FLs50eDGienA%3D)


| Code | Type | Source | Details |
|------|------|--------|---------|
| e_cp1_3_subject_sn | error | CPv1.3 | STI certificate shall include a ‘serialNumber’ attribute along with the CN |
| e_sti_certificate_policies | error | ATIS-1000080v4 | STI certificate shall contain '2.16.840.1.114569.1.1.3' policy |
| e_sti_extension_unknown | error | ATIS-1000080v4 | STI certificate shall not include extensions that are not specified |
| e_sti_crl_distribution | error | ATIS-1000080v4 | CRL Distribution Point shall be reachable if the requesting IP address within the program ACLs |

Generated: 27/10/2022 at 20:58:34
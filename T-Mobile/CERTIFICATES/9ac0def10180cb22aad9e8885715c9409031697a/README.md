# STIR/SHAKEN CA Ecosystem Compliance
## T-Mobile

### Certificate 9ac0def10180cb22aad9e8885715c9409031697a
Tested At: 2022-10-27 20:58:29 +0300 +03\
Initial Validity Period: 366 day(s)\
Remaining Validity Period: 261 day(s)\
Subject: CN=cert.stir.t-mobile.com, OU=T-Mobile USA\\, Inc, O=T-Mobile USA\\, Inc., L=Bothell, ST=Washington, C=US\
Issuer: CN=TMOBILE-PROD-SUB-STIRSHAKEN-EC, O=TMOBILE-USA, C=US

Link: https://t-mobile-sticr.fosrvt.com/88a8e33055e725475530660e5d6c40d6adbe37ab7ae0ecc64b50205629548ae9.pem

View: [Click to view](https://understandingwebpki.com/?cert=MIICyTCCAm%2BgAwIBAgIPAYH%2Bo0TdISlq5niitURDMAoGCCqGSM49BAMCMEwxCzAJBgNVBAYTAlVTMRQwEgYDVQQKEwtUTU9CSUxFLVVTQTEnMCUGA1UEAxMeVE1PQklMRS1QUk9ELVNVQi1TVElSU0hBS0VOLUVDMB4XDTIyMDcxNDIxMDUyMVoXDTIzMDcxNDIxMzUyMVowgY4xCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdCb3RoZWxsMRswGQYDVQQKExJULU1vYmlsZSBVU0EsIEluYy4xGjAYBgNVBAsTEVQtTW9iaWxlIFVTQSwgSW5jMR8wHQYDVQQDExZjZXJ0LnN0aXIudC1tb2JpbGUuY29tMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAER5y7ZAcpC5BgT4ElU782y9VvyzL5CSXR5dDg8QiLkbaMxuUJoFC6Yzdma2m4Jiz26UZhBA2AX1BDeGO29WDQZaOB8DCB7TAfBgNVHSMEGDAWgBQC2X9YhlA%2FeaB9iJtcgWc9pXwKeDAdBgNVHQ4EFgQUSnET9T3YyVih6PjLmbaCikNgEHswDgYDVR0PAQH%2FBAQDAgeAMBcGA1UdIAQQMA4wDAYKYIZIAYb%2FCQEBATAhBgNVHREEGjAYghZjZXJ0LnN0aXIudC1tb2JpbGUuY29tMEcGA1UdHwRAMD4wPKA6oDiGNmh0dHBzOi8vYXV0aGVudGljYXRlLWFwaS5pY29uZWN0aXYuY29tL2Rvd25sb2FkL3YxL2NybDAWBggrBgEFBQcBGgQKMAigBhYENjUyOTAKBggqhkjOPQQDAgNIADBFAiBf03jL8qMfp5flDibYOien7k7E%2F9XlsSR0ReVxahdkWgIhAKvf9Zd8t%2BlIl6LdJ90f4MqUHtsHRQ%2FJVQ4Kty0IFM1h)


| Code | Type | Source | Details |
|------|------|--------|---------|
| e_sti_certificate_policies | error | ATIS-1000080v4 | STI certificate shall contain '2.16.840.1.114569.1.1.3' policy |
| w_cp1_3_subject_rdn_unknown | warn | CPv1.3 | Only CN, C, O, and SERIALNUMBER can be included. Additional RNDs may introduce ambiguity and may not be verifiable |
| e_sti_subject_cn | error | ATIS-1000080v4 | Common name shall contain the text string 'SHAKEN 6529' |
| e_cp1_3_ambiguous_identifier | error | CPv1.3 | Names used in the STI certificates shall represent an unambiguous identifier for the SP Subject |
| e_sti_basic_constraints | error | ATIS-1000080v4 | STI certificates shall contain a BasicConstraints extension marked critical |
| e_cp1_3_subject_sn | error | CPv1.3 | STI certificate shall include a ‘serialNumber’ attribute along with the CN |
| e_sti_crl_distribution | error | ATIS-1000080v4 | CRL Distribution Point shall be reachable if the requesting IP address within the program ACLs |
| e_sti_extension_unknown | error | ATIS-1000080v4 | STI certificate shall not include extensions that are not specified |

Generated: 27/10/2022 at 20:58:34
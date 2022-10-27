# STIR/SHAKEN CA Ecosystem Compliance
## Peeringhub

### Certificate 360f1867f89798d6c73ce738d31f5db88dc645fd
Tested At: 2022-10-27 20:58:26 +0300 +03\
Initial Validity Period: 31 day(s)\
Remaining Validity Period: 23 day(s)\
Subject: CN=TalkAsiaVoip LLC SHAKEN 198K, O=TalkAsiaVoip LLC, ST=DE, C=US\
Issuer: CN=Peeringhub Inc SHAKEN Intermediate CA 2, OU=Certification Authorities, O=Peeringhub Inc, C=US

Link: https://www.talkasiavoip.com/198K.pem

View: [Click to view](https://understandingwebpki.com/?cert=MIIDFDCCArugAwIBAgIRALgWVJfp0bZIKrpsHHNE4L4wCgYIKoZIzj0EAwIwfDELMAkGA1UEBhMCVVMxFzAVBgNVBAoMDlBlZXJpbmdodWIgSW5jMSIwIAYDVQQLDBlDZXJ0aWZpY2F0aW9uIEF1dGhvcml0aWVzMTAwLgYDVQQDDCdQZWVyaW5naHViIEluYyBTSEFLRU4gSW50ZXJtZWRpYXRlIENBIDIwHhcNMjIxMDE5MTkyNDQ3WhcNMjIxMTE5MTIzNjI1WjBcMQswCQYDVQQGEwJVUzELMAkGA1UECAwCREUxGTAXBgNVBAoMEFRhbGtBc2lhVm9pcCBMTEMxJTAjBgNVBAMMHFRhbGtBc2lhVm9pcCBMTEMgU0hBS0VOIDE5OEswWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAARQMXmsJmYOoabCP6Hb04X5idq9h8jvZnvfok1SOmtL72jTDgkHPJ441XdhdIyNiTKSc0WkLHLG53HQf4UqI6Oyo4IBPDCCATgwDgYDVR0PAQH%2FBAQDAgeAMAwGA1UdEwEB%2FwQCMAAwHQYDVR0OBBYEFJ11rAG0AH73ATBY78UjqyNSO6ZNMB8GA1UdIwQYMBaAFK6hc1GIKVcRygyp9LEKbk64S00HMBcGA1UdIAQQMA4wDAYKYIZIAYb%2FCQEBATAWBggrBgEFBQcBGgQKMAigBhYEMTk4SzCBpgYDVR0fBIGeMIGbMIGYoDqgOIY2aHR0cHM6Ly9hdXRoZW50aWNhdGUtYXBpLmljb25lY3Rpdi5jb20vZG93bmxvYWQvdjEvY3JsolqkWDBWMRQwEgYDVQQHDAtCcmlkZ2V3YXRlcjELMAkGA1UECAwCTkoxEzARBgNVBAMMClNUSS1QQSBDUkwxCzAJBgNVBAYTAlVTMQ8wDQYDVQQKDAZTVEktUEEwCgYIKoZIzj0EAwIDRwAwRAIgA%2F2iynUnMPeV1Pf%2FeNV%2B1mySbrZmoid9igvsDz95PN4CIH%2BiO%2FB4Iw0vkkwIdOEslAxxj30jIEm2MjNlp7P7S%2Fmu)


| Code | Type | Source | Details |
|------|------|--------|---------|
| e_cp1_3_ambiguous_identifier | error | CPv1.3 | Names used in the STI certificates shall represent an unambiguous identifier for the SP Subject |
| w_cp1_3_subject_rdn_unknown | warn | CPv1.3 | Only CN, C, O, and SERIALNUMBER can be included. Additional RNDs may introduce ambiguity and may not be verifiable |
| e_sti_crl_distribution | error | ATIS-1000080v4 | CRL Distribution Point shall be reachable if the requesting IP address within the program ACLs |
| e_sti_certificate_policies | error | ATIS-1000080v4 | STI certificate shall contain '2.16.840.1.114569.1.1.3' policy |
| e_cp1_3_subject_sn | error | CPv1.3 | STI certificate shall include a ‘serialNumber’ attribute along with the CN |

Generated: 27/10/2022 at 20:58:34
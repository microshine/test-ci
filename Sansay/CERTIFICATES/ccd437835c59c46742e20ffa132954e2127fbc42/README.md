# STIR/SHAKEN CA Ecosystem Compliance
## Sansay

### Certificate ccd437835c59c46742e20ffa132954e2127fbc42
Tested At: 2022-10-27 20:58:31 +0300 +03\
Initial Validity Period: 2555 day(s)\
Remaining Validity Period: 2501 day(s)\
Subject: CN=SHAKEN Sansay Intermediate CA US WEST 1, OU=Sansay CA, O=Sansay Corporation, ST=California, C=US\
Issuer: CN=SHAKEN Sansay Root CA US, OU=Sansay CA, O=Sansay Corporation, L=San Diego, ST=California, C=US

Link: http://sti.comsapi.com/258k/ca.crt

View: [Click to view](https://understandingwebpki.com/?cert=MIIC2zCCAoCgAwIBAgIUFLVfOAX18HsTtfiw3u0g8lFwPpwwCgYIKoZIzj0EAwIwgYoxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRIwEAYDVQQHDAlTYW4gRGllZ28xGzAZBgNVBAoMElNhbnNheSBDb3Jwb3JhdGlvbjESMBAGA1UECwwJU2Fuc2F5IENBMSEwHwYDVQQDDBhTSEFLRU4gU2Fuc2F5IFJvb3QgQ0EgVVMwHhcNMjIwOTAyMjA1MzA5WhcNMjkwODMxMjA1MzA5WjCBhTELMAkGA1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExGzAZBgNVBAoMElNhbnNheSBDb3Jwb3JhdGlvbjESMBAGA1UECwwJU2Fuc2F5IENBMTAwLgYDVQQDDCdTSEFLRU4gU2Fuc2F5IEludGVybWVkaWF0ZSBDQSBVUyBXRVNUIDEwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAARuhlHmOYoUiuAbIvxDHYUdDmCzFO4NLi4r47NjEzoDYDCdCKjWnCWHepTAG9PxCjNPT3GBwC2wsmLzFVyn8sj6o4HGMIHDMBcGA1UdIAQQMA4wDAYKYIZIAYb%2FCQEBAzAdBgNVHQ4EFgQUrNOT9UNDzAq%2BRVgXE32SfNzDAUYwHwYDVR0jBBgwFoAUCq7%2FlvCbQaO9332%2FbdpFqOgEG7kwRwYDVR0fBEAwPjA8oDqgOIY2aHR0cHM6Ly9hdXRoZW50aWNhdGUtYXBpLmljb25lY3Rpdi5jb20vZG93bmxvYWQvdjEvY3JsMA8GA1UdEwEB%2FwQFMAMBAf8wDgYDVR0PAQH%2FBAQDAgKEMAoGCCqGSM49BAMCA0kAMEYCIQCO0QfDf%2Bz9Uu3vOm9ClE4BIdBvTIAVQ%2B%2FIKkulxneUtwIhAP3UpcrQ3RyvPVSvgrZxogOP00CFjZVmc4GUTY6xV4nn)


| Code | Type | Source | Details |
|------|------|--------|---------|
| n_pki_ca_key_usage | notice | SHAKEN PKI Best Practice | For CA certificates, the Key Usage extension should contain a single key usage value of keyCertSign |
| e_sti_ca_crl_distribution | error | ATIS-1000080v4 | CRL Distribution Point shall be reachable if the requesting IP address within the program ACLs |
| w_cp1_3_ca_subject_rdn_unknown | warn | CPv1.3 | Only CN, C, and O can be included. Additional RNDs may introduce ambiguity and may not be verifiable |

Generated: 27/10/2022 at 20:58:34
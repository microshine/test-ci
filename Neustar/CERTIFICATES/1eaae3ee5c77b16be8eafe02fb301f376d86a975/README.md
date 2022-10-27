# STIR/SHAKEN CA Ecosystem Compliance
## Neustar

### Certificate 1eaae3ee5c77b16be8eafe02fb301f376d86a975
Tested At: 2022-10-27 20:58:22 +0300 +03\
Initial Validity Period: 7305 day(s)\
Remaining Validity Period: 6869 day(s)\
Subject: CN=Neustar Certified Caller ID SHAKEN Root CA, OU=www.ccid.neustar, O=Neustar Information Services Inc, C=US\
Issuer: CN=Neustar Certified Caller ID SHAKEN Root CA, OU=www.ccid.neustar, O=Neustar Information Services Inc, C=US

Link: 

View: [Click to view](https://understandingwebpki.com/?cert=MIICdzCCAh2gAwIBAgIUDHkUH5DRzTJwQ8rJF11TI%2Bl%2BxSMwCgYIKoZIzj0EAwIwgYgxCzAJBgNVBAYTAlVTMSkwJwYDVQQKDCBOZXVzdGFyIEluZm9ybWF0aW9uIFNlcnZpY2VzIEluYzEZMBcGA1UECwwQd3d3LmNjaWQubmV1c3RhcjEzMDEGA1UEAwwqTmV1c3RhciBDZXJ0aWZpZWQgQ2FsbGVyIElEIFNIQUtFTiBSb290IENBMB4XDTIxMDgxNzE3MTkzN1oXDTQxMDgxNzE3MTkzN1owgYgxCzAJBgNVBAYTAlVTMSkwJwYDVQQKDCBOZXVzdGFyIEluZm9ybWF0aW9uIFNlcnZpY2VzIEluYzEZMBcGA1UECwwQd3d3LmNjaWQubmV1c3RhcjEzMDEGA1UEAwwqTmV1c3RhciBDZXJ0aWZpZWQgQ2FsbGVyIElEIFNIQUtFTiBSb290IENBMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEmRr5XQOty4fyU%2F6oRnXlxClGX%2BeZcGIs%2B1A5eFupHNfHD3vYNQHyjM6p8msE1eUH%2FYx9Q%2BHK1W79C%2FbSHvhqwaNjMGEwDwYDVR0TAQH%2FBAUwAwEB%2FzAfBgNVHSMEGDAWgBQU1bHiD0PbARLyjgA6UwpcvXPX0DAdBgNVHQ4EFgQUFNWx4g9D2wES8o4AOlMKXL1z19AwDgYDVR0PAQH%2FBAQDAgGGMAoGCCqGSM49BAMCA0gAMEUCIQDo7VuHVpyxGw8Na0%2FjOCan1sN5I2XBuXKic5ReCMKaJwIgAey%2FdJ8o3IZlzEEdAx13ApIzzds5vdf%2FaXjz4502NSI%3D)


| Code | Type | Source | Details |
|------|------|--------|---------|
| n_pki_ca_key_usage | notice | SHAKEN PKI Best Practice | For CA certificates, the Key Usage extension should contain a single key usage value of keyCertSign |

150 tests were ran and no warning or error level issues were found

### Not Effective

- e_sti_ca_subject_public_key
- e_sti_ca_subject
- e_sti_root_authority_key_identifier
- w_cp1_3_ca_subject_rdn_unknown
- e_sti_ca_subject_key_identifier
- e_sti_ca_issuer_dn
- e_sti_ca_key_usage
- e_sti_root_certificate_policies
- e_cp1_3_ca_key_usage_crl_sign
- e_sti_basic_constraints
- e_sti_ca_serial_number
- e_sti_ca_signature_algorithm
- e_sti_ca_subject_cn
- e_sti_ca_version
- e_sti_root_extension_unknown

\* Tests use the ATIS 1000080 and Certificate Policy versions release dates to determine if tests are ran. Certificates issued before these dates are not executed as the rules may not have been enforce at the time.

Generated: 27/10/2022 at 20:58:34
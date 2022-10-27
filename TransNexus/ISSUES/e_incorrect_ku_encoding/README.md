# STIR/SHAKEN CA Ecosystem Compliance

## TransNexus
Name: e_incorrect_ku_encoding\
Source: RFC5280\
Citation: Where ITU-T Rec. X.680 | ISO/IEC 8824-1, 21.7, applies, the bitstring shall have all trailing 0 bits removed before it is encoded.\
Effective Date: 01 Jan 00 00:00 UTC\
Description: RFC 5280 Section 4.2.1.3 describes the value of a KeyUsage to be a DER encoded BitString, which itself defines that all trailing 0 bits be counted as being "unused".

### Leaf Certificates

| Status | Subject | Link | Details |
|--------|---------|------|---------|

no warning, or error, or not effective date level issues were found

### CA Certificates

| Status | Subject | Link | Details |
|--------|---------|------|---------|
| error | CN=TransNexus\\, Inc. SHAKEN Root CA1, OU=SHAKEN, O=TransNexus\\, Inc., C=US | [view](../../CERTIFICATES/36dc4ae1d521b8a5aedd10498e6ce757581b197f/README.md) | KeyUsage contains an inefficient encoding wherein the number of 'unused bits' is declared to be 0, but it should be 1. Raw Bytes: [3 2 0 6], Raw Binary: [00000011 00000010 00000000 00000110] |
| error | CN=TransNexus\\, Inc. SHAKEN Issuing CA3, OU=SHAKEN, O=TransNexus\\, Inc., C=US | [view](../../CERTIFICATES/df7d871ff60d213820a96308346eda870d6e8ed2/README.md) | KeyUsage contains an inefficient encoding wherein the number of 'unused bits' is declared to be 0, but it should be 1. Raw Bytes: [3 2 0 6], Raw Binary: [00000011 00000010 00000000 00000110] |


Generated: 27/10/2022 at 20:58:34
# STIR/SHAKEN Certificate Repository Compliance

## Peeringhub

Code: e_atis_cache_header\
Source: ATIS-1000074\
Description: The STI-VS shall implement the cache behavior described in RFC7234. If the HTTP response does not include any recognized caching directives or indicates caching for less than 24 hours, then the STI-VS should cache the HTTP response for 24 hours
### https://www.talkasiavoip.com/198K.pem

| Code | Status | Source | Details |
|------|--------|--------|---------|
| w_atis_content_type | warn | ATIS-1000080 | HTTP response should contain Content-Type header and it's value should be application/pem-certificate-chain |
| e_atis_cache_header | error | ATIS-1000074 | The STI-VS shall implement the cache behavior. The Cache-Control header is missed |


Generated: 27/10/2022 at 20:56:38
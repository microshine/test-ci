# STIR/SHAKEN Certificate Repository Compliance

## Unknown

| Code | Source | Instances |
|------|--------|-----------|
| [w_atis_content_type](ISSUES/w_atis_content_type/README.md) | ATIS-1000080 | 1 |
| [e_http_status_200](ISSUES/e_http_status_200/README.md) | HTTP | 1 |
| [e_atis_cache_header](ISSUES/e_atis_cache_header/README.md) | ATIS-1000074 | 1 |
| [w_aits_pem_certificate_chain](ISSUES/w_aits_pem_certificate_chain/README.md) | ATIS-1000080 | 1 |
| [e_bad_url](ISSUES/e_bad_url/README.md) | System | 2 |

### https://app.connexcs.com/api/stir-shaken/cert/41.crt

| Code | Status | Source | Details |
|------|--------|--------|---------|
| w_aits_pem_certificate_chain | warn | ATIS-1000080 | HTTP response body should be PEM certificate chain. Response body is not PEM encoded |
| w_atis_content_type | warn | ATIS-1000080 | HTTP response should contain Content-Type header and it's value should be application/pem-certificate-chain |
| e_http_status_200 | error | HTTP | HTTP response shall have StatusCode 200, but it is 503 Service Unavailable |
| e_atis_cache_header | error | ATIS-1000074 | The STI-VS shall implement the cache behavior. The Cache-Control header is missed |

### https://sticr.stir.comcast.com/d1bc10d4-2e99-4aef-8c6d-40cb96435568.cer

| Code | Status | Source | Details |
|------|--------|--------|---------|
| e_bad_url | error | System | Get "https://sticr.stir.comcast.com/d1bc10d4-2e99-4aef-8c6d-40cb96435568.cer": dial tcp: lookup sticr.stir.comcast.com: no such host |

### https://sticr.stir.comcast.com/d3f29d47-19de-4a66-9bc6-c4de17e27d2a.cer

| Code | Status | Source | Details |
|------|--------|--------|---------|
| e_bad_url | error | System | Get "https://sticr.stir.comcast.com/d3f29d47-19de-4a66-9bc6-c4de17e27d2a.cer": dial tcp: lookup sticr.stir.comcast.com: no such host |


Generated: 27/10/2022 at 20:56:38
# STIR/SHAKEN Certificate Repository Compliance

## Neustar

Code: w_atis_protocol\
Source: ATIS-1000080\
Description: The verifier should not dereference any protocol other than https or a port other than 443 or 8443
### http://5.161.95.22/191c4c42dd7fa6115e84100637e42c99.cer

| Code | Status | Source | Details |
|------|--------|--------|---------|
| e_atis_cache_header | error | ATIS-1000074 | The STI-VS shall implement the cache behavior. The Cache-Control header is missed |
| w_atis_protocol | warn | ATIS-1000080 | The verifier should not dereference any protocol other than https or a port other than 443 or 8443 |
| w_atis_content_type | warn | ATIS-1000080 | HTTP response should contain Content-Type header and it's value should be application/pem-certificate-chain |

### http://sip.phx.dlr.freevoicepbx.com/Freevoice_963J

| Code | Status | Source | Details |
|------|--------|--------|---------|
| w_atis_content_type | warn | ATIS-1000080 | HTTP response should contain Content-Type header and it's value should be application/pem-certificate-chain |
| e_atis_cache_header | error | ATIS-1000074 | The STI-VS shall implement the cache behavior. The Cache-Control header is missed |
| w_atis_protocol | warn | ATIS-1000080 | The verifier should not dereference any protocol other than https or a port other than 443 or 8443 |

### https://187.174.67.118:8080/7075515eb2d150fc98c43e794c07bbca.cer

| Code | Status | Source | Details |
|------|--------|--------|---------|
| e_tls_transport | error | System | Get "https://187.174.67.118:8080/7075515eb2d150fc98c43e794c07bbca.cer": x509: “amx-cr” certificate is not standards compliant |
| w_atis_content_type | warn | ATIS-1000080 | HTTP response should contain Content-Type header and it's value should be application/pem-certificate-chain |
| e_atis_cache_header | error | ATIS-1000074 | The STI-VS shall implement the cache behavior. The Cache-Control header is missed |
| w_atis_protocol | warn | ATIS-1000080 | The verifier should not dereference any protocol other than https or a port other than 443 or 8443 |

### https://187.174.68.251:8080/7075515eb2d150fc98c43e794c07bbca.cer

| Code | Status | Source | Details |
|------|--------|--------|---------|
| w_atis_content_type | warn | ATIS-1000080 | HTTP response should contain Content-Type header and it's value should be application/pem-certificate-chain |
| e_atis_cache_header | error | ATIS-1000074 | The STI-VS shall implement the cache behavior. The Cache-Control header is missed |
| w_atis_protocol | warn | ATIS-1000080 | The verifier should not dereference any protocol other than https or a port other than 443 or 8443 |
| e_tls_transport | error | System | Get "https://187.174.68.251:8080/7075515eb2d150fc98c43e794c07bbca.cer": x509: “amx-cr” certificate is not standards compliant |


Generated: 27/10/2022 at 20:56:38
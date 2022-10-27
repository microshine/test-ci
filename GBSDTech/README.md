# STIR/SHAKEN CA Ecosystem Compliance

## GBSDTech

### Leaf Certificates

- Average validity span as of leaf certificates 365 days
- Percentage of leaf certificates expiring in the next 30 days is 0.00%
- Certificates with Errors: 1
- Certificates with Warnings: 1
- Certificates with Notices: 0
- Certificates with tests not executed as the requirements were Not Effective at issuance time: 0

| Status | Code | Source | Instances |
|--------|------|--------|-----------|
| error | [e_sti_crl_distribution](ISSUES/e_sti_crl_distribution/#leaf-certificates) | ATIS-1000080v4 | 1 |
| error | [e_cp1_3_subject_sn](ISSUES/e_cp1_3_subject_sn/#leaf-certificates) | CPv1.3 | 1 |
| warn | [w_cp1_3_subject_rdn_unknown](ISSUES/w_cp1_3_subject_rdn_unknown/#leaf-certificates) | CPv1.3 | 1 |
| error | [e_sti_subject_cn](ISSUES/e_sti_subject_cn/#leaf-certificates) | ATIS-1000080v4 | 1 |
| error | [e_cp1_3_ambiguous_identifier](ISSUES/e_cp1_3_ambiguous_identifier/#leaf-certificates) | CPv1.3 | 1 |
| error | [e_sti_certificate_policies](ISSUES/e_sti_certificate_policies/#leaf-certificates) | ATIS-1000080v4 | 1 |
| error | [e_sti_tn_auth_list](ISSUES/e_sti_tn_auth_list/#leaf-certificates) | ATIS-1000080v4 | 1 |
| error | [e_sti_serial_number](ISSUES/e_sti_serial_number/#leaf-certificates) | ATIS-1000080v4 | 1 |

\* Tests use the ATIS 1000080 and Certificate Policy versions release dates to determine if tests are ran. Certificates issued before these dates are not executed as the rules may not have been enforce at the time.\
\*\* 0 certificates skipped because they are currently expired.\
\*\*\* 0 certificates skipped because they are not currently trusted by the STI-PA.

#### Issued certificates

| Created at | Name | Problems | Link |
|------------|------|----------|------|
| 28 Jun 22 18:13 UTC | MYPBXManager SHAKEN | true | [view](a3872afd09406d2745d204893b6b52bbf6380f84) |

\* For issues relating to this CAs certificate repositories see this [report](URL).

### CA Certificates

- Certificates with Errors: 1
- Certificates with Warnings: 0
- Certificates with Notices: 0
- Certificates with tests not executed as the requirements were Not Effective at issuance time: 3

| Status | Code | Source | Instances |
|--------|------|--------|-----------|
| not effective | [e_sti_ca_signature_algorithm](ISSUES/e_sti_ca_signature_algorithm/#ca-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_ca_subject_key_identifier](ISSUES/e_sti_ca_subject_key_identifier/#ca-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_root_certificate_policies](ISSUES/e_sti_root_certificate_policies/#ca-certificates) | ATIS-1000080v4 | 2 |
| error | [e_ext_authority_key_identifier_no_key_identifier](ISSUES/e_ext_authority_key_identifier_no_key_identifier/#ca-certificates) | RFC5280 | 1 |
| not effective | [e_sti_ca_crl_distribution](ISSUES/e_sti_ca_crl_distribution/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_extension_unknown](ISSUES/e_sti_ca_extension_unknown/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_key_usage](ISSUES/e_sti_ca_key_usage/#ca-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_ca_version](ISSUES/e_sti_ca_version/#ca-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_ca_subject_public_key](ISSUES/e_sti_ca_subject_public_key/#ca-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_ca_issuer_dn](ISSUES/e_sti_ca_issuer_dn/#ca-certificates) | ATIS-1000080v4 | 3 |
| error | [e_ext_authority_key_identifier_missing](ISSUES/e_ext_authority_key_identifier_missing/#ca-certificates) | RFC5280 | 1 |
| not effective | [e_sti_ca_certificate_policies](ISSUES/e_sti_ca_certificate_policies/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_subject](ISSUES/e_sti_ca_subject/#ca-certificates) | ATIS-1000080v4 | 3 |
| not effective | [w_cp1_3_ca_subject_rdn_unknown](ISSUES/w_cp1_3_ca_subject_rdn_unknown/#ca-certificates) | CPv1.3 | 3 |
| not effective | [e_sti_basic_constraints](ISSUES/e_sti_basic_constraints/#ca-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_ca_serial_number](ISSUES/e_sti_ca_serial_number/#ca-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_root_extension_unknown](ISSUES/e_sti_root_extension_unknown/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_ca_subject_cn](ISSUES/e_sti_ca_subject_cn/#ca-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_cp1_3_ca_key_usage_crl_sign](ISSUES/e_cp1_3_ca_key_usage_crl_sign/#ca-certificates) | CPv1.3 | 3 |
| not effective | [e_sti_ca_authority_key_identifier](ISSUES/e_sti_ca_authority_key_identifier/#ca-certificates) | ATIS-1000080v4 | 1 |

\* Tests use the ATIS 1000080 and Certificate Policy versions release dates to determine if tests are ran. Certificates issued before these dates are not executed as the rules may not have been enforce at the time.\
\*\* 0 certificates skipped because they are currently expired.\
\*\*\* 0 certificates skipped because they are not currently trusted by the STI-PA.

#### Issued certificates

| Created at | Name | Problems | Link |
|------------|------|----------|------|
| 05 May 21 19:05 UTC | GBSDTech SHAKEN Root CA | false | [view](c6beb88bee7544f012d9579a8002bf774a717ef0) |
| 05 May 21 19:05 UTC | GBSDTech SHAKEN Root CA | false | [view](c6beb88bee7544f012d9579a8002bf774a717ef0) |
| 05 May 21 20:22 UTC | 1RouteGroup SHAKEN Intermediate CA | true | [view](b34acd5cf741f6c98726c200f39517c4bd02d4cd) |

Generated: 27/10/2022 at 14:39:35
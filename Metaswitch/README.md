# STIR/SHAKEN CA Ecosystem Compliance

## Metaswitch

### Leaf Certificates

- Average validity span as of leaf certificates 1095 days
- Percentage of leaf certificates expiring in the next 30 days is 0.00%
- Certificates with Errors: 0
- Certificates with Warnings: 0
- Certificates with Notices: 0
- Certificates with tests not executed as the requirements were Not Effective at issuance time: 3

| Status | Code | Source | Instances |
|--------|------|--------|-----------|
| not effective | [e_cp1_3_subject_sn](ISSUES/e_cp1_3_subject_sn/#leaf-certificates) | CPv1.3 | 3 |
| not effective | [e_cp1_3_ambiguous_identifier](ISSUES/e_cp1_3_ambiguous_identifier/#leaf-certificates) | CPv1.3 | 3 |
| not effective | [e_sti_extension_unknown](ISSUES/e_sti_extension_unknown/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_serial_number](ISSUES/e_sti_serial_number/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_crl_distribution](ISSUES/e_sti_crl_distribution/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_authority_key_identifier](ISSUES/e_sti_authority_key_identifier/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_certificate_policies](ISSUES/e_sti_certificate_policies/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [w_cp_1_3_subject_email](ISSUES/w_cp_1_3_subject_email/#leaf-certificates) | CPv1.3 | 3 |
| not effective | [e_sti_subject_key_identifier](ISSUES/e_sti_subject_key_identifier/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_subject](ISSUES/e_sti_subject/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_key_usage](ISSUES/e_sti_key_usage/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_subject_public_key](ISSUES/e_sti_subject_public_key/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [w_cp1_3_subject_rdn_unknown](ISSUES/w_cp1_3_subject_rdn_unknown/#leaf-certificates) | CPv1.3 | 3 |
| not effective | [e_sti_issuer_dn](ISSUES/e_sti_issuer_dn/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_version](ISSUES/e_sti_version/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_basic_constraints](ISSUES/e_sti_basic_constraints/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [n_sti_certificate_policy_critical](ISSUES/n_sti_certificate_policy_critical/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_signature_algorithm](ISSUES/e_sti_signature_algorithm/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_tn_auth_list](ISSUES/e_sti_tn_auth_list/#leaf-certificates) | ATIS-1000080v4 | 3 |
| not effective | [e_sti_subject_cn](ISSUES/e_sti_subject_cn/#leaf-certificates) | ATIS-1000080v4 | 3 |

\* Tests use the ATIS 1000080 and Certificate Policy versions release dates to determine if tests are ran. Certificates issued before these dates are not executed as the rules may not have been enforce at the time.\
\*\* 0 certificates skipped because they are currently expired.\
\*\*\* 0 certificates skipped because they are not currently trusted by the STI-PA.

#### Issued certificates

| Created at | Name | Problems | Link |
|------------|------|----------|------|
| 07 Jan 21 16:17 UTC | Call48 SHAKEN Cert 505J | false | [view](fbd7fb3bab570a5d715508086d416bb25115d5eb) |
| 10 Mar 21 20:40 UTC | Allstream SHAKEN cert 4130 | false | [view](ff4fd6ee8ba51ca3158a8f6e11a2d6ddef2effb7) |
| 10 Mar 21 20:50 UTC | Northeast Communications of Wisconsin SHAKEN Cert 6692 | false | [view](9222d3511c26fbbd28117b4bbf80e8b54753b3a3) |

\* For issues relating to this CAs certificate repositories see this [report](URL).

### CA Certificates

- Certificates with Errors: 0
- Certificates with Warnings: 0
- Certificates with Notices: 0
- Certificates with tests not executed as the requirements were Not Effective at issuance time: 2

| Status | Code | Source | Instances |
|--------|------|--------|-----------|
| not effective | [e_sti_root_certificate_policies](ISSUES/e_sti_root_certificate_policies/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_basic_constraints](ISSUES/e_sti_basic_constraints/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_ca_subject_cn](ISSUES/e_sti_ca_subject_cn/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_ca_key_usage](ISSUES/e_sti_ca_key_usage/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_ca_certificate_policies](ISSUES/e_sti_ca_certificate_policies/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_authority_key_identifier](ISSUES/e_sti_ca_authority_key_identifier/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_subject_public_key](ISSUES/e_sti_ca_subject_public_key/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [w_cp1_3_ca_subject_rdn_unknown](ISSUES/w_cp1_3_ca_subject_rdn_unknown/#ca-certificates) | CPv1.3 | 2 |
| not effective | [e_cp1_3_ca_key_usage_crl_sign](ISSUES/e_cp1_3_ca_key_usage_crl_sign/#ca-certificates) | CPv1.3 | 2 |
| not effective | [e_sti_ca_version](ISSUES/e_sti_ca_version/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_ca_crl_distribution](ISSUES/e_sti_ca_crl_distribution/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_serial_number](ISSUES/e_sti_ca_serial_number/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_root_authority_key_identifier](ISSUES/e_sti_root_authority_key_identifier/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_subject](ISSUES/e_sti_ca_subject/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_ca_signature_algorithm](ISSUES/e_sti_ca_signature_algorithm/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_ca_extension_unknown](ISSUES/e_sti_ca_extension_unknown/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_issuer_dn](ISSUES/e_sti_ca_issuer_dn/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_ca_subject_key_identifier](ISSUES/e_sti_ca_subject_key_identifier/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_root_extension_unknown](ISSUES/e_sti_root_extension_unknown/#ca-certificates) | ATIS-1000080v4 | 1 |

\* Tests use the ATIS 1000080 and Certificate Policy versions release dates to determine if tests are ran. Certificates issued before these dates are not executed as the rules may not have been enforce at the time.\
\*\* 0 certificates skipped because they are currently expired.\
\*\*\* 0 certificates skipped because they are not currently trusted by the STI-PA.

#### Issued certificates

| Created at | Name | Problems | Link |
|------------|------|----------|------|
| 25 Nov 20 11:21 UTC | Metaswitch STI-CA SHAKEN Root | false | [view](44d544c71033b19edf1ebcbc6b31428d51203a95) |
| 25 Nov 20 11:57 UTC | Metaswitch STI-CA SHAKEN Issuing 1 | false | [view](89a2a7c2332d416885f9adac29ade0024df9d563) |

Generated: 27/10/2022 at 14:39:35
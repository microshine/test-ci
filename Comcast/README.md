# STIR/SHAKEN CA Ecosystem Compliance

## Comcast

### Leaf Certificates

- Average validity span as of leaf certificates 30 days
- Percentage of leaf certificates expiring in the next 30 days is 100.00%
- Certificates with Errors: 5
- Certificates with Warnings: 5
- Certificates with Notices: 0
- Certificates with tests not executed as the requirements were Not Effective at issuance time: 0

| Status | Code | Source | Instances |
|--------|------|--------|-----------|
| error | [e_sti_certificate_policies](ISSUES/e_sti_certificate_policies/#leaf-certificates) | ATIS-1000080v4 | 5 |
| error | [e_sti_serial_number](ISSUES/e_sti_serial_number/#leaf-certificates) | ATIS-1000080v4 | 1 |
| error | [e_sti_crl_distribution](ISSUES/e_sti_crl_distribution/#leaf-certificates) | ATIS-1000080v4 | 5 |
| error | [e_sti_subject_cn](ISSUES/e_sti_subject_cn/#leaf-certificates) | ATIS-1000080v4 | 5 |
| warn | [w_cp1_3_subject_rdn_unknown](ISSUES/w_cp1_3_subject_rdn_unknown/#leaf-certificates) | CPv1.3 | 5 |
| warn | [w_ext_subject_key_identifier_missing_sub_cert](ISSUES/w_ext_subject_key_identifier_missing_sub_cert/#leaf-certificates) | RFC5280 | 5 |
| error | [e_cp1_3_subject_sn](ISSUES/e_cp1_3_subject_sn/#leaf-certificates) | CPv1.3 | 5 |
| error | [e_sti_subject_key_identifier](ISSUES/e_sti_subject_key_identifier/#leaf-certificates) | ATIS-1000080v4 | 5 |
| error | [e_cp1_3_ambiguous_identifier](ISSUES/e_cp1_3_ambiguous_identifier/#leaf-certificates) | CPv1.3 | 5 |

\* Tests use the ATIS 1000080 and Certificate Policy versions release dates to determine if tests are ran. Certificates issued before these dates are not executed as the rules may not have been enforce at the time.\
\*\* 2 certificates skipped because they are currently expired.\
\*\*\* 0 certificates skipped because they are not currently trusted by the STI-PA.

#### Issued certificates

| Created at | Name | Problems | Link |
|------------|------|----------|------|
| 06 Oct 22 10:05 UTC | SHAKEN | true | [view](303d898eeeb3da9a375ea057a8f1fb1a00921e3f) |
| 06 Oct 22 13:29 UTC | SHAKEN | true | [view](d6ccd2f7b184348e520b673b04912066ce4eab69) |
| 07 Oct 22 13:30 UTC | SHAKEN | true | [view](e03512878ca79243810bed28c009d73d1b61bdbd) |
| 08 Oct 22 13:29 UTC | SHAKEN | true | [view](87683fc1c307a71a4bbcb85588fc55a7da5f1191) |
| 14 Oct 22 12:46 UTC | SHAKEN | true | [view](f51dbe5b93ee71bc386bb2c3e0c6fb2052ca579b) |

\* For issues relating to this CAs certificate repositories see this [report](URL).

### CA Certificates

- Certificates with Errors: 0
- Certificates with Warnings: 0
- Certificates with Notices: 1
- Certificates with tests not executed as the requirements were Not Effective at issuance time: 2

| Status | Code | Source | Instances |
|--------|------|--------|-----------|
| not effective | [e_sti_ca_serial_number](ISSUES/e_sti_ca_serial_number/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_ca_signature_algorithm](ISSUES/e_sti_ca_signature_algorithm/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_root_authority_key_identifier](ISSUES/e_sti_root_authority_key_identifier/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_root_certificate_policies](ISSUES/e_sti_root_certificate_policies/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_subject_public_key](ISSUES/e_sti_ca_subject_public_key/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_ca_key_usage](ISSUES/e_sti_ca_key_usage/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_ca_subject](ISSUES/e_sti_ca_subject/#ca-certificates) | ATIS-1000080v4 | 2 |
| notice | [n_pki_ca_key_usage](ISSUES/n_pki_ca_key_usage/#ca-certificates) | SHAKEN PKI Best Practice | 1 |
| not effective | [e_sti_ca_extension_unknown](ISSUES/e_sti_ca_extension_unknown/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_certificate_policies](ISSUES/e_sti_ca_certificate_policies/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_issuer_dn](ISSUES/e_sti_ca_issuer_dn/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [w_cp1_3_ca_subject_rdn_unknown](ISSUES/w_cp1_3_ca_subject_rdn_unknown/#ca-certificates) | CPv1.3 | 2 |
| not effective | [e_sti_basic_constraints](ISSUES/e_sti_basic_constraints/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_ca_authority_key_identifier](ISSUES/e_sti_ca_authority_key_identifier/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_subject_cn](ISSUES/e_sti_ca_subject_cn/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_ca_subject_key_identifier](ISSUES/e_sti_ca_subject_key_identifier/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_cp1_3_ca_key_usage_crl_sign](ISSUES/e_cp1_3_ca_key_usage_crl_sign/#ca-certificates) | CPv1.3 | 2 |
| not effective | [e_sti_root_extension_unknown](ISSUES/e_sti_root_extension_unknown/#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_version](ISSUES/e_sti_ca_version/#ca-certificates) | ATIS-1000080v4 | 2 |
| not effective | [e_sti_ca_crl_distribution](ISSUES/e_sti_ca_crl_distribution/#ca-certificates) | ATIS-1000080v4 | 1 |

\* Tests use the ATIS 1000080 and Certificate Policy versions release dates to determine if tests are ran. Certificates issued before these dates are not executed as the rules may not have been enforce at the time.\
\*\* 0 certificates skipped because they are currently expired.\
\*\*\* 0 certificates skipped because they are not currently trusted by the STI-PA.

#### Issued certificates

| Created at | Name | Problems | Link |
|------------|------|----------|------|
| 17 Mar 20 14:45 UTC | Comcast SHAKEN Root CA | false | [view](e341fff079ef701a75085e21aaa915d84a27a52a) |
| 06 Apr 20 13:48 UTC | Comcast SHAKEN Intermediate CA | false | [view](39011602b92be825bea3e29648f2e1866d60d0c6) |

Generated: 27/10/2022 at 14:39:35
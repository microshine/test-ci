# STIR/SHAKEN CA Ecosystem Compliance

## Sansay

### Leaf Certificates

- Average validity span as of leaf certificates 143 days
- Percentage of leaf certificates expiring in the next 30 days is 66.67%
- Certificates with Errors: 3
- Certificates with Warnings: 3
- Certificates with Notices: 0
- Certificates with tests not executed as the requirements were Not Effective at issuance time: 0

| Status | Code | Source | Instances |
|--------|------|--------|-----------|
| error | [e_sti_certificate_policies](ISSUES/e_sti_certificate_policies/README.md#leaf-certificates) | ATIS-1000080v4 | 3 |
| error | [e_cp1_3_subject_sn](ISSUES/e_cp1_3_subject_sn/README.md#leaf-certificates) | CPv1.3 | 3 |
| error | [e_sti_subject_cn](ISSUES/e_sti_subject_cn/README.md#leaf-certificates) | ATIS-1000080v4 | 3 |
| warn | [w_cp1_3_subject_rdn_unknown](ISSUES/w_cp1_3_subject_rdn_unknown/README.md#leaf-certificates) | CPv1.3 | 3 |
| error | [e_sti_crl_distribution](ISSUES/e_sti_crl_distribution/README.md#leaf-certificates) | ATIS-1000080v4 | 3 |
| warn | [w_cp_1_3_subject_email](ISSUES/w_cp_1_3_subject_email/README.md#leaf-certificates) | CPv1.3 | 1 |
| error | [e_cp1_3_ambiguous_identifier](ISSUES/e_cp1_3_ambiguous_identifier/README.md#leaf-certificates) | CPv1.3 | 3 |

\* Tests use the ATIS 1000080 and Certificate Policy versions release dates to determine if tests are ran. Certificates issued before these dates are not executed as the rules may not have been enforce at the time.\
\*\* 1 certificates skipped because they are currently expired.\
\*\*\* 0 certificates skipped because they are not currently trusted by the STI-PA.

#### Issued certificates

| Created at | Name | Problems | Link |
|------------|------|----------|------|
| 12 Sep 22 19:37 UTC | SHAKEN Bulk Solutions, LLC 644J | true | [view](CERTIFICATES/0a796b424529d808ab634e5294713b1739cbedea/README.md) |
| 06 Oct 22 06:00 UTC | SHAKEN Convoso 758J | true | [view](CERTIFICATES/db665c48b470c140b334c322ecf98af9d8968788/README.md) |
| 12 Oct 22 17:35 UTC | SHAKEN Drop Inc 258K | true | [view](CERTIFICATES/1aea03e74dddd459e32142a0176bd06d799ddb60/README.md) |

\* For issues relating to this CAs certificate repositories see this [report](URL/README.md).

### CA Certificates

- Certificates with Errors: 1
- Certificates with Warnings: 1
- Certificates with Notices: 1
- Certificates with tests not executed as the requirements were Not Effective at issuance time: 1

| Status | Code | Source | Instances |
|--------|------|--------|-----------|
| not effective | [e_sti_basic_constraints](ISSUES/e_sti_basic_constraints/README.md#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [w_cp1_3_ca_subject_rdn_unknown](ISSUES/w_cp1_3_ca_subject_rdn_unknown/README.md#ca-certificates) | CPv1.3 | 2 |
| not effective | [e_sti_ca_version](ISSUES/e_sti_ca_version/README.md#ca-certificates) | ATIS-1000080v4 | 1 |
| notice | [n_pki_ca_key_usage](ISSUES/n_pki_ca_key_usage/README.md#ca-certificates) | SHAKEN PKI Best Practice | 1 |
| not effective | [e_sti_ca_signature_algorithm](ISSUES/e_sti_ca_signature_algorithm/README.md#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_subject](ISSUES/e_sti_ca_subject/README.md#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_root_extension_unknown](ISSUES/e_sti_root_extension_unknown/README.md#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_key_usage](ISSUES/e_sti_ca_key_usage/README.md#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_root_certificate_policies](ISSUES/e_sti_root_certificate_policies/README.md#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_subject_public_key](ISSUES/e_sti_ca_subject_public_key/README.md#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_serial_number](ISSUES/e_sti_ca_serial_number/README.md#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_cp1_3_ca_key_usage_crl_sign](ISSUES/e_cp1_3_ca_key_usage_crl_sign/README.md#ca-certificates) | CPv1.3 | 1 |
| not effective | [e_sti_ca_subject_key_identifier](ISSUES/e_sti_ca_subject_key_identifier/README.md#ca-certificates) | ATIS-1000080v4 | 1 |
| error | [e_sti_ca_crl_distribution](ISSUES/e_sti_ca_crl_distribution/README.md#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_subject_cn](ISSUES/e_sti_ca_subject_cn/README.md#ca-certificates) | ATIS-1000080v4 | 1 |
| not effective | [e_sti_ca_issuer_dn](ISSUES/e_sti_ca_issuer_dn/README.md#ca-certificates) | ATIS-1000080v4 | 1 |

\* Tests use the ATIS 1000080 and Certificate Policy versions release dates to determine if tests are ran. Certificates issued before these dates are not executed as the rules may not have been enforce at the time.\
\*\* 1 certificates skipped because they are currently expired.\
\*\*\* 0 certificates skipped because they are not currently trusted by the STI-PA.

#### Issued certificates

| Created at | Name | Problems | Link |
|------------|------|----------|------|
| 21 Aug 20 01:22 UTC | SHAKEN Sansay Root CA US | false | [view](CERTIFICATES/04f4ce72f3872ae25e9a1ca055747240370ff404/README.md) |
| 02 Sep 22 20:53 UTC | SHAKEN Sansay Intermediate CA US WEST 1 | true | [view](CERTIFICATES/ccd437835c59c46742e20ffa132954e2127fbc42/README.md) |

Generated: 27/10/2022 at 20:58:34
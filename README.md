# STIR/SHAKEN CA Ecosystem Compliance

[Approved Certificate Authorities](https://authenticate.iconectiv.com/approved-certification-authorities) in the STIR/SHAKEN ecosystem are required to meet technical requirements from [ATIS-1000080](https://access.atis.org/apps/group_public/document.php?document_id=62163) and policy requirements from the supporting CA ecosystem’s [Certificate Policy](https://authenticate.iconectiv.com/documents-authenticate).

This report is generated using [Zlint](https://github.com/zmap/zlint) a tool commonly used to asses CA ecosystem compliance with such requirements. The tests used to generate this report are currently not part of the main Zlint distribution but can be found [here](https://github.com/martinisecurity/zlint).

## Summary

### Leaf Certificates

- Average validity span as of leaf certificates 522 days
- Percentage of leaf certificates expiring in the next 30 days is 11.43%

| Issuers                                              | Certificates | Errors      | Warnings    | Notices     | Not Effective |
| ---------------------------------------------------- | ------------ | ----------- | ----------- | ----------- | ------------- |
| [GBSDTech](GBSDTech/README.md#leaf-certificates)     | 1 (3.45%)    | 1 (100.00%) | 1 (100.00%) | 0 (0.00%)   | 0 (0.00%)     |
| [Metaswitch](Metaswitch/README.md#leaf-certificates) | 2 (6.90%)    | 0 (0.00%)   | 0 (0.00%)   | 0 (0.00%)   | 2 (100.00%)   |
| [NetNumber](NetNumber/README.md#leaf-certificates)   | 4 (13.79%)   | 4 (100.00%) | 1 (25.00%)  | 4 (100.00%) | 0 (0.00%)     |
| [Neustar](Neustar/README.md#leaf-certificates)       | 17 (58.62%)  | 13 (76.47%) | 2 (11.76%)  | 0 (0.00%)   | 4 (23.53%)    |
| [Peeringhub](Peeringhub/README.md#leaf-certificates) | 1 (3.45%)    | 1 (100.00%) | 1 (100.00%) | 0 (0.00%)   | 0 (0.00%)     |
| [Sansay](Sansay/README.md#leaf-certificates)         | 3 (10.34%)   | 3 (100.00%) | 3 (100.00%) | 0 (0.00%)   | 0 (0.00%)     |
| [T-Mobile](T-Mobile/README.md#leaf-certificates)     | 1 (3.45%)    | 1 (100.00%) | 1 (100.00%) | 0 (0.00%)   | 0 (0.00%)     |
| **Total**                                            | 29 (100%)    | 23 (79.31%) | 9 (31.03%)  | 4 (13.79%)  | 6 (20.69%)    |

\* The percent of certificates per issuer is calculated against total certificates from all issuers.\
\*\* The percent of errors, warnings and notices is calculated against total observed certificates from the specified issuer.\
\*\*\* Tests use the ATIS 1000080 and Certificate Policy versions release dates to determine if tests are ran. Certificates issued before these dates are not executed as the rules may not have been enforce at the time.\
\*\*\*\* For information on failed certificate repository retrievals see this [report](URL/README.md).\
\*\*\*\*\* 4 certificates skipped because they are currently expired.\
\*\*\*\*\*\* 0 certificates skipped because they are not currently trusted by the STI-PA.

### CA Certificates

| Issuers                                                                    | Certificates | Errors      | Warnings   | Notices     | Not Effective |
| -------------------------------------------------------------------------- | ------------ | ----------- | ---------- | ----------- | ------------- |
| [Comcast](Comcast/README.md#ca-certificates)                               | 1 (3.70%)    | 0 (0.00%)   | 0 (0.00%)  | 1 (100.00%) | 1 (100.00%)   |
| [GBSDTech](GBSDTech/README.md#ca-certificates)                             | 3 (11.11%)   | 1 (33.33%)  | 0 (0.00%)  | 0 (0.00%)   | 3 (100.00%)   |
| [Martini Security](Martini%20Security/README.md#ca-certificates)           | 1 (3.70%)    | 0 (0.00%)   | 0 (0.00%)  | 0 (0.00%)   | 1 (100.00%)   |
| [Metaswitch](Metaswitch/README.md#ca-certificates)                         | 2 (7.41%)    | 0 (0.00%)   | 0 (0.00%)  | 0 (0.00%)   | 2 (100.00%)   |
| [NetNumber](NetNumber/README.md#ca-certificates)                           | 3 (11.11%)   | 0 (0.00%)   | 0 (0.00%)  | 0 (0.00%)   | 3 (100.00%)   |
| [Neustar](Neustar/README.md#ca-certificates)                               | 8 (29.63%)   | 0 (0.00%)   | 0 (0.00%)  | 8 (100.00%) | 8 (100.00%)   |
| [Peeringhub](Peeringhub/README.md#ca-certificates)                         | 2 (7.41%)    | 1 (50.00%)  | 0 (0.00%)  | 2 (100.00%) | 2 (100.00%)   |
| [Ribbon Communications](Ribbon%20Communications/README.md#ca-certificates) | 1 (3.70%)    | 0 (0.00%)   | 0 (0.00%)  | 1 (100.00%) | 1 (100.00%)   |
| [Sansay](Sansay/README.md#ca-certificates)                                 | 2 (7.41%)    | 1 (50.00%)  | 1 (50.00%) | 1 (50.00%)  | 1 (50.00%)    |
| [T-Mobile](T-Mobile/README.md#ca-certificates)                             | 2 (7.41%)    | 0 (0.00%)   | 0 (0.00%)  | 2 (100.00%) | 2 (100.00%)   |
| [TransNexus](TransNexus/README.md#ca-certificates)                         | 2 (7.41%)    | 2 (100.00%) | 0 (0.00%)  | 2 (100.00%) | 2 (100.00%)   |
| **Total**                                                                  | 27 (100%)    | 5 (18.52%)  | 1 (3.70%)  | 17 (62.96%) | 26 (96.30%)   |

\* The percent of certificates per issuer is calculated against total certificates from all issuers.\
\*\* The percent of errors, warnings and notices is calculated against total observed certificates from the specified issuer.\
\*\*\* 1 certificates skipped because they are currently expired.\
\*\*\*\* 0 certificates skipped because they are not currently trusted by the STI-PA.

## Key

| Type          | Description                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------- |
| Error         | Tests in which the specifications are unambiguous on what the expected behavior must be.       |
| Warning       | Tests in which the specifications are ambiguous or are provide only a recommendation.          |
| Notice        | Tests in which industry best practices are not followed.                                       |
| Not Effective | Tests that exist in the current specifications but were not in effect at the time of issuance. |

Generated: 27/10/2022 at 20:58:34

# STIR/SHAKEN CA Ecosystem Compliance

[Approved Certificate Authorities](https://authenticate.iconectiv.com/approved-certification-authorities) in the STIR/SHAKEN ecosystem are required to meet technical requirements from [ATIS-1000080](https://access.atis.org/apps/group_public/document.php?document_id=62163) and policy requirements from the supporting CA ecosystem’s [Certificate Policy](https://authenticate.iconectiv.com/documents-authenticate).

This report is generated using [Zlint](https://github.com/zmap/zlint) a tool commonly used to asses CA ecosystem compliance with such requirements. The tests used to generate this report are currently not part of the main Zlint distribution but can be found [here](https://github.com/martinisecurity/zlint).

## Summary

### Leaf Certificates

- Average validity span as of leaf certificates 490 days
- Percentage of leaf certificates expiring in the next 30 days is 17.01%

| Issuers | Certificates | Errors | Warnings | Notices | Not Effective |
|---------|--------------|--------|----------|---------|---------------|
| [Comcast](Comcast/#leaf-certificates) | 5 (13.89%) | 5 (100.00%) | 5 (100.00%) | 0 (0.00%) | 0 (0.00%) |
| [GBSDTech](GBSDTech/#leaf-certificates) | 1 (2.78%) | 1 (100.00%) | 1 (100.00%) | 0 (0.00%) | 0 (0.00%) |
| [Metaswitch](Metaswitch/#leaf-certificates) | 3 (8.33%) | 0 (0.00%) | 0 (0.00%) | 0 (0.00%) | 3 (100.00%) |
| [NetNumber](NetNumber/#leaf-certificates) | 4 (11.11%) | 4 (100.00%) | 1 (25.00%) | 4 (100.00%) | 0 (0.00%) |
| [Neustar](Neustar/#leaf-certificates) | 17 (47.22%) | 13 (76.47%) | 2 (11.76%) | 0 (0.00%) | 4 (23.53%) |
| [Peeringhub](Peeringhub/#leaf-certificates) | 1 (2.78%) | 1 (100.00%) | 1 (100.00%) | 0 (0.00%) | 0 (0.00%) |
| [Sansay](Sansay/#leaf-certificates) | 3 (8.33%) | 3 (100.00%) | 3 (100.00%) | 0 (0.00%) | 0 (0.00%) |
| [T-Mobile](T-Mobile/#leaf-certificates) | 1 (2.78%) | 1 (100.00%) | 1 (100.00%) | 0 (0.00%) | 0 (0.00%) |
| [TransNexus](TransNexus/#leaf-certificates) | 1 (2.78%) | 1 (100.00%) | 1 (100.00%) | 0 (0.00%) | 0 (0.00%) |
| **Total** | 36 (100%) | 29 (80.56%) | 15 (41.67%) | 4 (11.11%) | 7 (19.44%) |

\* The percent of certificates per issuer is calculated against total certificates from all issuers.\
\*\* The percent of errors, warnings and notices is calculated against total observed certificates from the specified issuer.\
\*\*\* Tests use the ATIS 1000080 and Certificate Policy versions release dates to determine if tests are ran. Certificates issued before these dates are not executed as the rules may not have been enforce at the time.\
\*\*\*\* For information on failed certificate repository retrievals see this [report](URL).\
\*\*\*\*\* 10 certificates skipped because they are currently expired.\
\*\*\*\*\*\* 1 certificates skipped because they are not currently trusted by the STI-PA.

### CA Certificates


| Issuers | Certificates | Errors | Warnings | Notices | Not Effective |
|---------|--------------|--------|----------|---------|---------------|
| [Comcast](Comcast/#ca-certificates) | 2 (7.14%) | 0 (0.00%) | 0 (0.00%) | 1 (50.00%) | 2 (100.00%) |
| [GBSDTech](GBSDTech/#ca-certificates) | 3 (10.71%) | 1 (33.33%) | 0 (0.00%) | 0 (0.00%) | 3 (100.00%) |
| [Martini Security](Martini%20Security/#ca-certificates) | 1 (3.57%) | 0 (0.00%) | 0 (0.00%) | 0 (0.00%) | 1 (100.00%) |
| [Metaswitch](Metaswitch/#ca-certificates) | 2 (7.14%) | 0 (0.00%) | 0 (0.00%) | 0 (0.00%) | 2 (100.00%) |
| [NetNumber](NetNumber/#ca-certificates) | 3 (10.71%) | 0 (0.00%) | 0 (0.00%) | 0 (0.00%) | 3 (100.00%) |
| [Neustar](Neustar/#ca-certificates) | 8 (28.57%) | 0 (0.00%) | 0 (0.00%) | 8 (100.00%) | 8 (100.00%) |
| [Peeringhub](Peeringhub/#ca-certificates) | 2 (7.14%) | 1 (50.00%) | 0 (0.00%) | 2 (100.00%) | 2 (100.00%) |
| [Ribbon Communications](Ribbon%20Communications/#ca-certificates) | 1 (3.57%) | 0 (0.00%) | 0 (0.00%) | 1 (100.00%) | 1 (100.00%) |
| [Sansay](Sansay/#ca-certificates) | 2 (7.14%) | 1 (50.00%) | 1 (50.00%) | 1 (50.00%) | 1 (50.00%) |
| [T-Mobile](T-Mobile/#ca-certificates) | 2 (7.14%) | 0 (0.00%) | 0 (0.00%) | 2 (100.00%) | 2 (100.00%) |
| [TransNexus](TransNexus/#ca-certificates) | 2 (7.14%) | 2 (100.00%) | 0 (0.00%) | 2 (100.00%) | 2 (100.00%) |
| **Total** | 28 (100%) | 5 (17.86%) | 1 (3.57%) | 17 (60.71%) | 27 (96.43%) |

\* The percent of certificates per issuer is calculated against total certificates from all issuers.\
\*\* The percent of errors, warnings and notices is calculated against total observed certificates from the specified issuer.\
\*\*\* 1 certificates skipped because they are currently expired.\
\*\*\*\* 0 certificates skipped because they are not currently trusted by the STI-PA.

## Key

| Type | Description |
|------|-------------|
| Error | Tests in which the specifications are unambiguous on what the expected behavior must be. |
| Warning	| Tests in which the specifications are ambiguous or are provide only a recommendation. |
| Notice | Tests in which industry best practices are not followed. |
| Not Effective	| Tests that exist in the current specifications but were not in effect at the time of issuance. |

Generated: 27/10/2022 at 14:39:35
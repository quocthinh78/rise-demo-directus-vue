export const kycRawData = {
    workflow: {
      id: "3385d41c-2e8c-4fe0-9a8a-a99771b3ce1e",
      status: "PROCESSED",
      definitionKey: "10011",
      customerInternalReference: "transaction_8482595d-7313-4689-9044-571318acb868"
    },
    account: {
      id: "1ce911b8-6fd5-49db-a359-b1e6f61e0d3b"
    },
    createdAt: "2023-02-13T09:25:56.088Z",
    startedAt: "2023-02-13T09:26:50.243Z",
    completedAt: "2023-02-13T09:28:31.075Z",
    credentials: [
      {
        id: "d78a6bf7-306e-4736-a228-c426cdfcec85",
        category: "SELFIE",
        parts: [
          {
            classifier: "FACE",
            href: "https://retrieval.apac-1.jumio.ai/api/v1/accounts/1ce911b8-6fd5-49db-a359-b1e6f61e0d3b/credentials/d78a6bf7-306e-4736-a228-c426cdfcec85/parts/FACE"
          }
        ]
      },
      {
        id: "e3560131-b699-4113-8018-50f4af213a1b",
        category: "ID",
        parts: [
          {
            classifier: "FRONT",
            href: "https://retrieval.apac-1.jumio.ai/api/v1/accounts/1ce911b8-6fd5-49db-a359-b1e6f61e0d3b/credentials/e3560131-b699-4113-8018-50f4af213a1b/parts/FRONT"
          },
          {
            classifier: "BACK",
            href: "https://retrieval.apac-1.jumio.ai/api/v1/accounts/1ce911b8-6fd5-49db-a359-b1e6f61e0d3b/credentials/e3560131-b699-4113-8018-50f4af213a1b/parts/BACK"
          }
        ]
      },
      {
        id: "a7135858-963b-45a7-bc1a-e890db58e569",
        category: "FACEMAP",
        parts: [
          {
            classifier: "FACEMAP"
          },
          {
            classifier: "LIVENESS_1",
            href: "https://retrieval.apac-1.jumio.ai/api/v1/accounts/1ce911b8-6fd5-49db-a359-b1e6f61e0d3b/credentials/a7135858-963b-45a7-bc1a-e890db58e569/parts/LIVENESS_1"
          },
          {
            classifier: "LIVENESS_3",
            href: "https://retrieval.apac-1.jumio.ai/api/v1/accounts/1ce911b8-6fd5-49db-a359-b1e6f61e0d3b/credentials/a7135858-963b-45a7-bc1a-e890db58e569/parts/LIVENESS_3"
          },
          {
            classifier: "LIVENESS_2",
            href: "https://retrieval.apac-1.jumio.ai/api/v1/accounts/1ce911b8-6fd5-49db-a359-b1e6f61e0d3b/credentials/a7135858-963b-45a7-bc1a-e890db58e569/parts/LIVENESS_2"
          },
          {
            classifier: "LIVENESS_5",
            href: "https://retrieval.apac-1.jumio.ai/api/v1/accounts/1ce911b8-6fd5-49db-a359-b1e6f61e0d3b/credentials/a7135858-963b-45a7-bc1a-e890db58e569/parts/LIVENESS_5"
          },
          {
            classifier: "LIVENESS_4",
            href: "https://retrieval.apac-1.jumio.ai/api/v1/accounts/1ce911b8-6fd5-49db-a359-b1e6f61e0d3b/credentials/a7135858-963b-45a7-bc1a-e890db58e569/parts/LIVENESS_4"
          },
          {
            classifier: "LIVENESS_6",
            href: "https://retrieval.apac-1.jumio.ai/api/v1/accounts/1ce911b8-6fd5-49db-a359-b1e6f61e0d3b/credentials/a7135858-963b-45a7-bc1a-e890db58e569/parts/LIVENESS_6"
          }
        ]
      }
    ],
    decision: {
      type: "PASSED",
      details: {
        label: "PASSED"
      },
      risk: {
        score: 0
      }
    },
    steps: {
      href: "https://retrieval.apac-1.jumio.ai/api/v1/accounts/1ce911b8-6fd5-49db-a359-b1e6f61e0d3b/workflow-executions/3385d41c-2e8c-4fe0-9a8a-a99771b3ce1e/steps"
    },
    capabilities: {
      extraction: [
        {
          id: "8adf4021-81c1-4d39-9ac9-3b9f258e4667",
          credentials: [
            {
              id: "e3560131-b699-4113-8018-50f4af213a1b",
              category: "ID"
            }
          ],
          decision: {
            type: "PASSED",
            details: {
              label: "OK"
            }
          },
          data: {
            type: "ID_CARD",
            subType: "NATIONAL_ID",
            issuingCountry: "SGP",
            firstName: "N/A",
            lastName: "CHAN WEI TING @CHAN BENG HONG",
            dateOfBirth: "1967-03-29",
            dateOfBirthParts: {
              year: "1967",
              month: "03",
              day: "29"
            },
            issuingDate: "2022-09-15",
            issuingDateParts: {
              year: "2022",
              month: "09",
              day: "15"
            },
            documentNumber: "S1789368H",
            address: {
              line1: "515 DUNMAN ROAD",
              line2: "#15-02",
              country: "SGP",
              postalCode: "439204",
              city: "SINGAPORE",
              formattedAddress: "515 DUNMAN ROAD, #15-02, SINGAPORE, 439204, SGP"
            },
            gender: "M",
            placeOfBirth: "SINGAPORE",
            currentAge: "55"
          }
        }
      ],
      similarity: [
        {
          id: "6cd5b76c-1e1d-4d9b-a34e-c25fefbc9352",
          credentials: [
            {
              id: "d78a6bf7-306e-4736-a228-c426cdfcec85",
              category: "SELFIE"
            },
            {
              id: "e3560131-b699-4113-8018-50f4af213a1b",
              category: "ID"
            }
          ],
          decision: {
            type: "PASSED",
            details: {
              label: "MATCH"
            }
          },
          data: {
            similarity: "MATCH"
          }
        }
      ],
      liveness: [
        {
          id: "51583700-1354-44bd-b8e7-3d0384a1d24f",
          validFaceMapForAuthentication: "https://retrieval.apac-1.jumio.ai/api/v1/accounts/1ce911b8-6fd5-49db-a359-b1e6f61e0d3b/credentials/a7135858-963b-45a7-bc1a-e890db58e569/parts/FACEMAP",
          credentials: [
            {
              id: "d78a6bf7-306e-4736-a228-c426cdfcec85",
              category: "SELFIE"
            },
            {
              id: "a7135858-963b-45a7-bc1a-e890db58e569",
              category: "FACEMAP"
            }
          ],
          decision: {
            type: "PASSED",
            details: {
              label: "OK"
            }
          },
          data: {
            type: "IPROOV_STANDARD",
            predictedAge: 53,
            ageConfidenceRange: "41-65"
          }
        }
      ],
      dataChecks: [
        {
          id: "bcd95d66-8efc-4e49-9cbd-c0e34b6f1198",
          credentials: [
            {
              id: "e3560131-b699-4113-8018-50f4af213a1b",
              category: "ID"
            }
          ],
          decision: {
            type: "PASSED",
            details: {
              label: "OK"
            }
          }
        }
      ],
      imageChecks: [
        {
          id: "ef84f36b-d0be-4faf-a31f-c9ddfbb85701",
          credentials: [
            {
              id: "d78a6bf7-306e-4736-a228-c426cdfcec85",
              category: "SELFIE"
            },
            {
              id: "e3560131-b699-4113-8018-50f4af213a1b",
              category: "ID"
            }
          ],
          decision: {
            type: "PASSED",
            details: {
              label: "OK"
            }
          }
        }
      ],
      usability: [
        {
          id: "13b223a6-d545-41be-b53c-ab9772c43cf2",
          credentials: [
            {
              id: "d78a6bf7-306e-4736-a228-c426cdfcec85",
              category: "SELFIE"
            }
          ],
          decision: {
            type: "PASSED",
            details: {
              label: "OK"
            }
          }
        },
        {
          id: "570a1464-7c5a-4793-ba17-14876d33f182",
          credentials: [
            {
              id: "e3560131-b699-4113-8018-50f4af213a1b",
              category: "ID"
            }
          ],
          decision: {
            type: "PASSED",
            details: {
              label: "OK"
            }
          }
        },
        {
          id: "e6437a2e-f427-44b5-aa15-6ad2b61c2e05",
          credentials: [
            {
              id: "a7135858-963b-45a7-bc1a-e890db58e569",
              category: "FACEMAP"
            }
          ],
          decision: {
            type: "PASSED",
            details: {
              label: "OK"
            }
          }
        }
      ]
    }
  }

export default kycRawData;
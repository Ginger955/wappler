dmx.config({
  "index": {
    "api1": [
      {
        "type": "object",
        "name": "data"
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "alt-svc"
          },
          {
            "type": "text",
            "name": "cache-control"
          },
          {
            "type": "text",
            "name": "content-encoding"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "expires"
          },
          {
            "type": "text",
            "name": "server"
          },
          {
            "type": "text",
            "name": "status"
          },
          {
            "type": "text",
            "name": "strict-transport-security"
          },
          {
            "type": "text",
            "name": "x-content-type-options"
          },
          {
            "type": "text",
            "name": "x-frame-options"
          },
          {
            "type": "text",
            "name": "x-xss-protection"
          }
        ]
      }
    ],
    "c": {
      "meta": [],
      "outputType": "object"
    },
    "repeat1": {
      "meta": [
        {
          "name": "make",
          "type": "text"
        },
        {
          "name": "model",
          "type": "text"
        },
        {
          "name": "year",
          "type": "text"
        },
        {
          "name": "price",
          "type": "text"
        },
        {
          "name": "image",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeat2": {
      "meta": null,
      "outputType": "text"
    },
    "repeat": {
      "meta": [
        {
          "name": "make",
          "type": "text"
        },
        {
          "name": "model",
          "type": "text"
        },
        {
          "name": "year",
          "type": "text"
        },
        {
          "name": "price",
          "type": "text"
        },
        {
          "name": "image",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "logged_in": {
      "outputType": "number"
    },
    "query": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "id": {
      "meta": null,
      "outputType": "text"
    },
    "ide": {
      "meta": null,
      "outputType": "text"
    },
    "sessionStorage": [
      {
        "type": "text",
        "name": "on"
      },
      {
        "type": "text",
        "name": "username"
      },
      {
        "type": "number",
        "name": "user_id"
      }
    ]
  },
  "login": {
    "var1": {
      "meta": null,
      "outputType": "text"
    },
    "password": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "title",
          "type": "text"
        },
        {
          "name": "value",
          "type": "text"
        }
      ],
      "outputType": "object"
    },
    "remember": {
      "meta": null,
      "outputType": "boolean"
    },
    "sessionStorage": [
      {
        "type": "text",
        "name": "on"
      }
    ]
  },
  "modelx": {
    "car_id": {
      "meta": null,
      "outputType": "text"
    },
    "query": [
      {
        "type": "number",
        "name": "car_id"
      }
    ],
    "sessionStorage": [
      {
        "type": "text",
        "name": "on"
      },
      {
        "type": "text",
        "name": "username"
      }
    ],
    "gallery_display": {
      "meta": [
        {
          "name": "images",
          "type": "object",
          "sub": [
            {
              "name": "$index",
              "type": "number"
            },
            {
              "name": "$key",
              "type": "text"
            },
            {
              "name": "$value",
              "type": "object"
            },
            {
              "name": "image",
              "type": "array",
              "sub": [
                {
                  "name": "$value",
                  "type": "text"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "car_ide": {
      "meta": null,
      "outputType": "number"
    },
    "data_view": {
      "meta": [
        {
          "name": "1",
          "type": "object",
          "sub": [
            {
              "name": "image",
              "type": "array",
              "sub": [
                {
                  "name": "$value",
                  "type": "text"
                }
              ]
            }
          ]
        },
        {
          "name": "2",
          "type": "object",
          "sub": [
            {
              "name": "make",
              "type": "text"
            },
            {
              "name": "model",
              "type": "text"
            },
            {
              "name": "year",
              "type": "number"
            },
            {
              "name": "price",
              "type": "number"
            },
            {
              "name": "image",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "id": {
      "meta": null,
      "outputType": "number"
    },
    "var1": {
      "meta": null,
      "outputType": "number"
    },
    "arr1": {
      "meta": null,
      "outputType": "text"
    },
    "repeat1": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "text",
          "type": "text"
        },
        {
          "name": "author",
          "type": "text"
        },
        {
          "name": "review_for",
          "type": "number"
        },
        {
          "name": "date",
          "type": "text"
        },
        {
          "name": "title",
          "type": "text"
        },
        {
          "name": "make",
          "type": "text"
        },
        {
          "name": "model",
          "type": "text"
        },
        {
          "name": "year",
          "type": "number"
        },
        {
          "name": "price",
          "type": "text"
        },
        {
          "name": "image",
          "type": "text"
        },
        {
          "name": "class",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "cookies": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "var": {
      "meta": null,
      "outputType": "text"
    },
    "reviews": {
      "meta": [
        {
          "name": "title",
          "type": "text"
        },
        {
          "name": "text",
          "type": "text"
        },
        {
          "name": "author",
          "type": "text"
        },
        {
          "name": "date",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "name": {
      "meta": null,
      "outputType": "text"
    }
  },
  "models": {
    "repeat1": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "make",
          "type": "text"
        },
        {
          "name": "model",
          "type": "text"
        },
        {
          "name": "year",
          "type": "text"
        },
        {
          "name": "price",
          "type": "text"
        },
        {
          "name": "image",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "query": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "ide": {
      "meta": null,
      "outputType": "text"
    },
    "sessionStorage": [
      {
        "type": "text",
        "name": "on"
      },
      {
        "type": "text",
        "name": "username"
      },
      {
        "type": "number",
        "name": "user_id"
      }
    ],
    "data_view1": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "make",
          "type": "text"
        },
        {
          "name": "model",
          "type": "text"
        },
        {
          "name": "year",
          "type": "text"
        },
        {
          "name": "price",
          "type": "text"
        },
        {
          "name": "image",
          "type": "text"
        }
      ],
      "outputType": "array"
    }
  },
  "service": {
    "sessionStorage": [
      {
        "type": "text",
        "name": "on"
      },
      {
        "type": "text",
        "name": "username"
      },
      {
        "type": "number",
        "name": "user_id"
      }
    ],
    "repeat": {
      "meta": [
        {
          "name": "image",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeat1": {
      "meta": [
        {
          "name": "rev_type",
          "type": "text"
        },
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "service_type_id",
          "type": "number"
        },
        {
          "name": "duration",
          "type": "number"
        }
      ],
      "outputType": "array"
    },
    "makE": {
      "meta": null,
      "outputType": "text"
    },
    "modeL": {
      "meta": null,
      "outputType": "text"
    },
    "products": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "image",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "service_types": {
      "meta": [
        {
          "name": "rev_type",
          "type": "text"
        },
        {
          "name": "id",
          "type": "number"
        }
      ],
      "outputType": "array"
    },
    "duration": {
      "meta": null,
      "outputType": "number"
    },
    "duratioN": {
      "meta": null,
      "outputType": "number"
    },
    "total_duration": {
      "outputType": "number"
    },
    "duration_updateer": [
      {
        "name": "$param",
        "type": "object",
        "sub": [
          {
            "type": "number",
            "name": "adder"
          }
        ]
      }
    ],
    "duration_adder": [
      {
        "name": "$param",
        "type": "object",
        "sub": [
          {
            "type": "number",
            "name": "adder"
          },
          {
            "type": "text",
            "name": "switch"
          }
        ]
      }
    ],
    "updater": [
      {
        "name": "$param",
        "type": "object",
        "sub": [
          {
            "type": "number",
            "name": "sw"
          },
          {
            "type": "number",
            "name": "drr"
          },
          {
            "type": "text",
            "name": "serv_type"
          }
        ]
      }
    ],
    "insert_user_appointments": [
      {
        "name": "$param",
        "type": "object",
        "sub": [
          {
            "type": "array",
            "name": "service"
          },
          {
            "type": "array",
            "name": "duration"
          },
          {
            "type": "number",
            "name": "user"
          }
        ]
      }
    ]
  },
  "leasing": {
    "sessionStorage": [
      {
        "type": "text",
        "name": "on"
      }
    ]
  },
  "account": {
    "sessionStorage": [
      {
        "type": "number",
        "name": "user_id"
      },
      {
        "type": "text",
        "name": "username"
      },
      {
        "type": "text",
        "name": "on"
      }
    ]
  }
});

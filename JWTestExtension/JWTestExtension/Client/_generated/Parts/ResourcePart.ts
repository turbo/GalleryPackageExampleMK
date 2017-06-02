﻿/**
 * @file Source code generated by PDL compiler.
 * @version 1.0
 * @sdkversion 5.0.302.607 (production_sdk#ffbfc5d.170130-1133)
 * @schemaversion 1.0.0.2
 */
/// <reference path="../../TypeReferences.d.ts" />
/// <amd-dependency path="../../Browse/ViewModels/ResourcePartViewModel" />

import Icons = require ("../Shared/Icons");
import ClientResources = require ("ClientResources");
export = Main;
module Main {
    "use strict";
    export var part: MsPortalFx.Extension.PartTypeDefinition = {
  "name": "ResourcePart",
  "viewModel": "Browse$ResourcePartViewModel",
  "partKind": 22,
  "canUseOldInputVersions": false,
  "inputs": [
    "id"
  ],
  "bindings": [
    {
      "property": "id",
      "valuesFrom": [
        {
          "referenceType": 1,
          "property": "id"
        }
      ]
    }
  ],
  "details": [
    {
      "blade": "ResourceBlade",
      "selectableBindings": [
        {
          "property": "id",
          "valuesFrom": [
            {
              "referenceType": 0,
              "property": "content.assetId"
            }
          ]
        }
      ]
    }
  ],
  "assetType": "MyResource",
  "assetIdInputProperty": "id"
};
}

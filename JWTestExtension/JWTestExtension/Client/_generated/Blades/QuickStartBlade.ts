﻿/**
 * @file Source code generated by PDL compiler.
 * @version 1.0
 * @sdkversion 5.0.302.607 (production_sdk#ffbfc5d.170130-1133)
 * @schemaversion 1.0.0.2
 */
/// <reference path="../../TypeReferences.d.ts" />
/// <amd-dependency path="../../QuickStart/ViewModels/QuickStartBladeViewModel" />
/// <amd-dependency path="../../QuickStart/ViewModels/QuickStartInfoListViewModel" />

import Icons = require ("../Shared/Icons");
import ClientResources = require ("ClientResources");
export = Main;
module Main {
    "use strict";
    export var blade: MsPortalFx.Extension.BladeDefinition = {
  "name": "QuickStartBlade",
  "viewModelName": "QuickStart$QuickStartBladeViewModel",
  "lenses": [
    {
      "name": "QuickStartBlade_lens1",
      "partInstances": [
        {
          "name": "QuickStartPart",
          "inline": {
            "viewModel": "QuickStart$QuickStartInfoListViewModel",
            "partKind": 23,
            "inputs": [],
            "bindings": [],
            "details": [
              {
                "invocationInputArguments": [
                  {
                    "valuesFrom": [
                      {
                        "referenceType": 0,
                        "property": "content.selection"
                      }
                    ]
                  }
                ]
              }
            ],
            "initialSize": 8
          }
        }
      ]
    }
  ],
  "width": 1,
  "locked": true,
  "style": 5,
  "attributes": 0
};
}

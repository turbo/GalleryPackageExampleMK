﻿/**
 * @file Source code generated by PDL compiler.
 * @version 1.0
 * @sdkversion 5.0.302.607 (production_sdk#ffbfc5d.170130-1133)
 * @schemaversion 1.0.0.2
 */
/// <reference path="../../TypeReferences.d.ts" />
/// <amd-dependency path="../../QuickStart/ViewModels/QuickStartPartViewModel" />

import Icons = require ("../Shared/Icons");
import ClientResources = require ("ClientResources");
export = Main;
module Main {
    "use strict";
    export var part: MsPortalFx.Extension.PartTypeDefinition = {
  "name": "QuickStartPart",
  "viewModel": "QuickStart$QuickStartPartViewModel",
  "partKind": 21,
  "canUseOldInputVersions": false,
  "inputs": [],
  "bindings": [],
  "details": [
    {
      "blade": "QuickStartBlade"
    }
  ]
};
}

/**
* @file Source code generated by PDL compiler.
* @version 1.0
* @sdkversion 5.0.302.607 (production_sdk#ffbfc5d.170130-1133)
* @schemaversion 1.0.0.2
*/
/// <reference path="../../TypeReferences.d.ts" />
/// <amd-dependency path="../../Resource/Summary/ViewModels/ResourceBladeViewModel" />
/// <amd-dependency path="../../Resource/Summary/ViewModels/ResourceSummaryPartViewModel" />
define(["require", "exports", "ClientResources", "../../Resource/Summary/ViewModels/ResourceBladeViewModel", "../../Resource/Summary/ViewModels/ResourceSummaryPartViewModel"], function (require, exports, ClientResources) {
    "use strict";
    var Main;
    (function (Main) {
        "use strict";
        Main.blade = {
            "name": "ResourceBlade",
            "inputs": [
                "id"
            ],
            "templateKeyInputs": [
                "id"
            ],
            "viewModelName": "Resource$ResourceBladeViewModel",
            "lenses": [
                {
                    "title": ClientResources.monitoringLensTitle,
                    "name": "MonitoringLens",
                    "partInstances": []
                },
                {
                    "isSummary": true,
                    "name": "ResourceSummary",
                    "partInstances": [
                        {
                            "name": "ResourceSummaryPart",
                            "inline": {
                                "viewModel": "Resource$ResourceSummaryPartViewModel",
                                "partKind": 30,
                                "inputs": [
                                    "resourceId"
                                ],
                                "bindings": [
                                    {
                                        "property": "resourceId",
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
                                    },
                                    {
                                        "invocationInputArguments": [
                                            {
                                                "valuesFrom": [
                                                    {
                                                        "referenceType": 0,
                                                        "property": "content.asyncSelection"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "invocationInputArguments": [
                                            {
                                                "valuesFrom": [
                                                    {
                                                        "referenceType": 0,
                                                        "property": "content.tagsSelectable"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "invocationInputArguments": [
                                            {
                                                "valuesFrom": [
                                                    {
                                                        "referenceType": 0,
                                                        "property": "content.accessSelectable"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "invocationInputArguments": [
                                            {
                                                "valuesFrom": [
                                                    {
                                                        "referenceType": 0,
                                                        "property": "content.settingsSelectable"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "invocationInputArguments": [
                                            {
                                                "valuesFrom": [
                                                    {
                                                        "referenceType": 0,
                                                        "property": "content.quickStartSelectable"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "invocationInputArguments": [
                                            {
                                                "valuesFrom": [
                                                    {
                                                        "referenceType": 0,
                                                        "property": "content.keysSelectable"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "invocationInputArguments": [
                                            {
                                                "valuesFrom": [
                                                    {
                                                        "referenceType": 0,
                                                        "property": "content.moveResourceSelection"
                                                    }
                                                ]
                                            }
                                        ],
                                        "outputArguments": [
                                            {
                                                "property": "actionBarOutput",
                                                "valuesFrom": [
                                                    {
                                                        "referenceType": 1,
                                                        "property": "actionBarOutput"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "initialSize": 1,
                                "partState": {
                                    "inputIdentityProperties": [
                                        "content.collapsed"
                                    ]
                                }
                            }
                        }
                    ]
                }
            ],
            "commandGroupReference": {
                "name": "MoveResource",
                "commands": [
                    {
                        "name": "MoveResourceCommand",
                        "bindings": [
                            {
                                "property": "resourceId",
                                "valuesFrom": [
                                    {
                                        "referenceType": 1,
                                        "property": "id"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            "viewModelInputs": [
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
            "assetType": "MyResource",
            "assetIdInputProperty": "id",
            "pinnedPart": "ResourcePart",
            "style": 1,
            "attributes": 0
        };
    })(Main || (Main = {}));
    return Main;
});

﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.34209
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace JWTestExtensionResourceProvider.ErrorHandling
{
    using System;


    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "4.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class ResponseErrorMessages
    {

        private static global::System.Resources.ResourceManager resourceMan;

        private static global::System.Globalization.CultureInfo resourceCulture;

        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal ResponseErrorMessages()
        {
        }

        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager
        {
            get
            {
                if (object.ReferenceEquals(resourceMan, null))
                {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("JWTestExtensionResourceProvider.ErrorHandling.ResponseErrorMessages", typeof(ResponseErrorMessages).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }

        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture
        {
            get
            {
                return resourceCulture;
            }
            set
            {
                resourceCulture = value;
            }
        }

        /// <summary>
        ///   Looks up a localized string similar to Insufficient quota. Cannot create resource &apos;{0}&apos;..
        /// </summary>
        internal static string InsufficientResourceQuota
        {
            get
            {
                return ResourceManager.GetString("InsufficientResourceQuota", resourceCulture);
            }
        }

        /// <summary>
        ///   Looks up a localized string similar to A valid quota could not be found for subscription &apos;{0}&apos;..
        /// </summary>
        internal static string MissingSubscriptionQuota
        {
            get
            {
                return ResourceManager.GetString("MissingSubscriptionQuota", resourceCulture);
            }
        }

        /// <summary>
        ///   Looks up a localized string similar to Unable to start service due to missing configuration..
        /// </summary>
        internal static string StartFailureDueToMissingConfiguration
        {
            get
            {
                return ResourceManager.GetString("StartFailureDueToMissingConfiguration", resourceCulture);
            }
        }
    }
}

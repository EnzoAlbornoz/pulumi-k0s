// *** WARNING: this file was generated by pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.K0s.Inputs
{

    public sealed class K0sSchedulerArgs : global::Pulumi.ResourceArgs
    {
        [Input("extraArgs")]
        private InputMap<string>? _extraArgs;
        public InputMap<string> ExtraArgs
        {
            get => _extraArgs ?? (_extraArgs = new InputMap<string>());
            set => _extraArgs = value;
        }

        public K0sSchedulerArgs()
        {
        }
        public static new K0sSchedulerArgs Empty => new K0sSchedulerArgs();
    }
}
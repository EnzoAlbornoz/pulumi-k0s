// *** WARNING: this file was generated by pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.K0s.Inputs
{

    public sealed class K0sCalicoImageArgs : global::Pulumi.ResourceArgs
    {
        [Input("cni")]
        public Input<Inputs.K0sImageArgs>? Cni { get; set; }

        [Input("flexvolume")]
        public Input<Inputs.K0sImageArgs>? Flexvolume { get; set; }

        [Input("kubecontrollers")]
        public Input<Inputs.K0sImageArgs>? Kubecontrollers { get; set; }

        [Input("node")]
        public Input<Inputs.K0sImageArgs>? Node { get; set; }

        public K0sCalicoImageArgs()
        {
        }
        public static new K0sCalicoImageArgs Empty => new K0sCalicoImageArgs();
    }
}

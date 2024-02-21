// *** WARNING: this file was generated by pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.K0s.Inputs
{

    public sealed class ClusterHostArgs : global::Pulumi.ResourceArgs
    {
        [Input("environment")]
        private InputMap<string>? _environment;
        public InputMap<string> Environment
        {
            get => _environment ?? (_environment = new InputMap<string>());
            set => _environment = value;
        }

        [Input("files")]
        private InputList<Inputs.ClusterFileArgs>? _files;
        public InputList<Inputs.ClusterFileArgs> Files
        {
            get => _files ?? (_files = new InputList<Inputs.ClusterFileArgs>());
            set => _files = value;
        }

        [Input("hooks")]
        public Input<Inputs.ClusterHooksArgs>? Hooks { get; set; }

        [Input("hostname")]
        public Input<string>? Hostname { get; set; }

        [Input("installFlags")]
        private InputList<string>? _installFlags;
        public InputList<string> InstallFlags
        {
            get => _installFlags ?? (_installFlags = new InputList<string>());
            set => _installFlags = value;
        }

        [Input("k0sBinaryPath")]
        public Input<string>? K0sBinaryPath { get; set; }

        [Input("localhost")]
        public Input<Inputs.ClusterLocalhostArgs>? Localhost { get; set; }

        [Input("noTaints")]
        public Input<bool>? NoTaints { get; set; }

        [Input("os")]
        public Input<string>? Os { get; set; }

        [Input("privateAddress")]
        public Input<string>? PrivateAddress { get; set; }

        [Input("privateInterface")]
        public Input<string>? PrivateInterface { get; set; }

        [Input("role", required: true)]
        public Input<string> Role { get; set; } = null!;

        [Input("ssh")]
        public Input<Inputs.ClusterSSHArgs>? Ssh { get; set; }

        [Input("uploadBinary")]
        public Input<bool>? UploadBinary { get; set; }

        [Input("winRM")]
        public Input<Inputs.ClusterWinRMArgs>? WinRM { get; set; }

        public ClusterHostArgs()
        {
        }
        public static new ClusterHostArgs Empty => new ClusterHostArgs();
    }
}
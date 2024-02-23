// *** WARNING: this file was generated by pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.K0s.Outputs
{

    [OutputType]
    public sealed class K0sSpec
    {
        public readonly Outputs.K0sAPI? Api;
        public readonly Outputs.K0sControllerManager? ControllerManager;
        public readonly ImmutableArray<Outputs.K0sFeatureGate> FeatureGates;
        public readonly Outputs.K0sImages? Images;
        public readonly Outputs.K0sInstallConfig? InstallConfig;
        public readonly Outputs.K0sKonnectivity? Konnectivity;
        public readonly Outputs.K0sNetwork? Network;
        public readonly Outputs.K0sPodSecurityPolicy? PodSecurityPolicy;
        public readonly Outputs.K0sScheduler? Scheduler;
        public readonly Outputs.K0sStorage? Storage;
        public readonly Outputs.K0sTelemetry? Telemetry;
        public readonly ImmutableArray<Outputs.K0sWorkerProfile> WorkerProfiles;

        [OutputConstructor]
        private K0sSpec(
            Outputs.K0sAPI? api,

            Outputs.K0sControllerManager? controllerManager,

            ImmutableArray<Outputs.K0sFeatureGate> featureGates,

            Outputs.K0sImages? images,

            Outputs.K0sInstallConfig? installConfig,

            Outputs.K0sKonnectivity? konnectivity,

            Outputs.K0sNetwork? network,

            Outputs.K0sPodSecurityPolicy? podSecurityPolicy,

            Outputs.K0sScheduler? scheduler,

            Outputs.K0sStorage? storage,

            Outputs.K0sTelemetry? telemetry,

            ImmutableArray<Outputs.K0sWorkerProfile> workerProfiles)
        {
            Api = api;
            ControllerManager = controllerManager;
            FeatureGates = featureGates;
            Images = images;
            InstallConfig = installConfig;
            Konnectivity = konnectivity;
            Network = network;
            PodSecurityPolicy = podSecurityPolicy;
            Scheduler = scheduler;
            Storage = storage;
            Telemetry = telemetry;
            WorkerProfiles = workerProfiles;
        }
    }
}

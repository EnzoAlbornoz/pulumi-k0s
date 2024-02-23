// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ClusterFileArgs {
    dirPerm?: pulumi.Input<string>;
    dst?: pulumi.Input<string>;
    dstDir?: pulumi.Input<string>;
    group?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    perm?: pulumi.Input<string>;
    src?: pulumi.Input<string>;
    user?: pulumi.Input<string>;
}

export interface ClusterHookArgs {
    after?: pulumi.Input<pulumi.Input<string>[]>;
    before?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ClusterHooksArgs {
    apply?: pulumi.Input<inputs.ClusterHookArgs>;
    backup?: pulumi.Input<inputs.ClusterHookArgs>;
    reset?: pulumi.Input<inputs.ClusterHookArgs>;
}

export interface ClusterHostArgs {
    environment?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    files?: pulumi.Input<pulumi.Input<inputs.ClusterFileArgs>[]>;
    hooks?: pulumi.Input<inputs.ClusterHooksArgs>;
    hostname?: pulumi.Input<string>;
    installFlags?: pulumi.Input<pulumi.Input<string>[]>;
    k0sBinaryPath?: pulumi.Input<string>;
    localhost?: pulumi.Input<inputs.ClusterLocalhostArgs>;
    noTaints?: pulumi.Input<boolean>;
    os?: pulumi.Input<string>;
    privateAddress?: pulumi.Input<string>;
    privateInterface?: pulumi.Input<string>;
    role: pulumi.Input<string>;
    ssh?: pulumi.Input<inputs.ClusterSSHArgs>;
    uploadBinary?: pulumi.Input<boolean>;
    winRM?: pulumi.Input<inputs.ClusterWinRMArgs>;
}

export interface ClusterK0sArgs {
    config?: pulumi.Input<inputs.K0sArgs>;
    dynamicConfig?: pulumi.Input<boolean>;
    version?: pulumi.Input<string>;
    versionChannel?: pulumi.Input<string>;
}

export interface ClusterLocalhostArgs {
    enabled?: pulumi.Input<boolean>;
}

export interface ClusterMetadataArgs {
    name: pulumi.Input<string>;
}

export interface ClusterSSHArgs {
    address: pulumi.Input<string>;
    bastion?: pulumi.Input<inputs.ClusterSSHArgs>;
    hostKey?: pulumi.Input<string>;
    key?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    user?: pulumi.Input<string>;
}

export interface ClusterSpecArgs {
    hosts: pulumi.Input<pulumi.Input<inputs.ClusterHostArgs>[]>;
    k0s?: pulumi.Input<inputs.ClusterK0sArgs>;
}

export interface ClusterWinRMArgs {
    address: pulumi.Input<string>;
    bastion?: pulumi.Input<inputs.ClusterSSHArgs>;
    caCert?: pulumi.Input<string>;
    cert?: pulumi.Input<string>;
    insecure?: pulumi.Input<boolean>;
    key?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    tlsServerName?: pulumi.Input<string>;
    useHTTPS?: pulumi.Input<boolean>;
    useNTLM?: pulumi.Input<boolean>;
    user?: pulumi.Input<string>;
}

export interface K0sArgs {
    apiVersion?: pulumi.Input<string>;
    kind?: pulumi.Input<string>;
    metadata?: pulumi.Input<inputs.K0sMetadataArgs>;
    spec?: pulumi.Input<inputs.K0sSpecArgs>;
}

export interface K0sAPIArgs {
    address?: pulumi.Input<string>;
    externalAddress?: pulumi.Input<string>;
    extraArgs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    k0sApiPort?: pulumi.Input<number>;
    port?: pulumi.Input<number>;
    sans?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface K0sCalicoArgs {
    envVars?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    flexVolumeDriverPath?: pulumi.Input<string>;
    ipAutodetectionMethod?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    mtu?: pulumi.Input<number>;
    overlay?: pulumi.Input<string>;
    vxlanPort?: pulumi.Input<number>;
    vxlanVNI?: pulumi.Input<number>;
    wireguard?: pulumi.Input<boolean>;
}

export interface K0sCalicoImageArgs {
    cni?: pulumi.Input<inputs.K0sImageArgs>;
    flexvolume?: pulumi.Input<inputs.K0sImageArgs>;
    kubecontrollers?: pulumi.Input<inputs.K0sImageArgs>;
    node?: pulumi.Input<inputs.K0sImageArgs>;
}

export interface K0sControllerManagerArgs {
    extraArgs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

export interface K0sDualStackArgs {
    IPv6podCIDR?: pulumi.Input<string>;
    IPv6serviceCIDR?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
}

export interface K0sEnvoyProxyArgs {
    apiServerBindPort?: pulumi.Input<number>;
    image?: pulumi.Input<string>;
    imagePullPolicy?: pulumi.Input<string>;
    konnectivityServerBindPort?: pulumi.Input<number>;
}

export interface K0sEtcdArgs {
    externalCluster?: pulumi.Input<inputs.K0sEtcdExternalClusterArgs>;
    extraArgs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    peerAddress?: pulumi.Input<string>;
}

export interface K0sEtcdExternalClusterArgs {
    ca?: pulumi.Input<string>;
    clientCert?: pulumi.Input<string>;
    clientKey?: pulumi.Input<string>;
    endpoints: pulumi.Input<pulumi.Input<string>[]>;
    etcdPrefix?: pulumi.Input<string>;
}

export interface K0sFeatureGateArgs {
    components?: pulumi.Input<pulumi.Input<string>[]>;
    enabled?: pulumi.Input<boolean>;
    name: pulumi.Input<string>;
}

export interface K0sImageArgs {
    image?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}

export interface K0sImagesArgs {
    calico?: pulumi.Input<inputs.K0sCalicoImageArgs>;
    coredns?: pulumi.Input<inputs.K0sImageArgs>;
    default_pull_policy?: pulumi.Input<string>;
    konnectivity?: pulumi.Input<inputs.K0sImageArgs>;
    kubeproxy?: pulumi.Input<inputs.K0sImageArgs>;
    kuberouter?: pulumi.Input<inputs.K0sKubeRouterImageArgs>;
    metricsserver?: pulumi.Input<inputs.K0sImageArgs>;
    pause?: pulumi.Input<inputs.K0sImageArgs>;
    repository?: pulumi.Input<string>;
}

export interface K0sInstallConfigArgs {
    users?: pulumi.Input<inputs.K0sInstallConfigUserArgs>;
}

export interface K0sInstallConfigUserArgs {
    etcdUser?: pulumi.Input<string>;
    kineUser?: pulumi.Input<string>;
    konnectivityUser?: pulumi.Input<string>;
    kubeAPIserverUser?: pulumi.Input<string>;
    kubeSchedulerUser?: pulumi.Input<string>;
}

export interface K0sKineArgs {
    dataSource: pulumi.Input<string>;
}

export interface K0sKonnectivityArgs {
    adminPort?: pulumi.Input<number>;
    agentPort?: pulumi.Input<number>;
}

export interface K0sKubeProxyArgs {
    disabled?: pulumi.Input<boolean>;
    iptables?: pulumi.Input<inputs.K0sKubeProxyIPTablesArgs>;
    ipvs?: pulumi.Input<inputs.K0sKubeProxyIPVSArgs>;
    mode?: pulumi.Input<string>;
    nodePortAddresses?: pulumi.Input<string>;
}

export interface K0sKubeProxyIPTablesArgs {
    masqueradeAll?: pulumi.Input<boolean>;
    masqueradeBit?: pulumi.Input<number>;
    minSyncPeriod?: pulumi.Input<string>;
    syncPeriod?: pulumi.Input<string>;
}

export interface K0sKubeProxyIPVSArgs {
    excludeCIDRs?: pulumi.Input<string>;
    minSyncPeriod?: pulumi.Input<string>;
    scheduler?: pulumi.Input<string>;
    strictARP?: pulumi.Input<boolean>;
    syncPeriod?: pulumi.Input<string>;
    tcpFinTimeout?: pulumi.Input<string>;
    tcpTimeout?: pulumi.Input<string>;
    udpTimeout?: pulumi.Input<string>;
}

export interface K0sKubeRouterArgs {
    autoMTU?: pulumi.Input<boolean>;
    extraArgs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    hairpin?: pulumi.Input<string>;
    ipMasq?: pulumi.Input<boolean>;
    metricsPort?: pulumi.Input<number>;
    mtu?: pulumi.Input<number>;
}

export interface K0sKubeRouterImageArgs {
    cni?: pulumi.Input<inputs.K0sImageArgs>;
    cniInstaller?: pulumi.Input<inputs.K0sImageArgs>;
}

export interface K0sMetadataArgs {
    name: pulumi.Input<string>;
}

export interface K0sNetworkArgs {
    calico?: pulumi.Input<inputs.K0sCalicoArgs>;
    clusterDomain?: pulumi.Input<string>;
    dualStack?: pulumi.Input<inputs.K0sDualStackArgs>;
    kubeProxy?: pulumi.Input<inputs.K0sKubeProxyArgs>;
    kuberouter?: pulumi.Input<inputs.K0sKubeRouterArgs>;
    nodeLocalLoadBalancing?: pulumi.Input<inputs.K0sNodeLocalLoadBalancingArgs>;
    podCIDR?: pulumi.Input<string>;
    provider?: pulumi.Input<string>;
    serviceCIDR?: pulumi.Input<string>;
}

export interface K0sNodeLocalLoadBalancingArgs {
    enabled?: pulumi.Input<boolean>;
    envoyProxy?: pulumi.Input<inputs.K0sEnvoyProxyArgs>;
    type?: pulumi.Input<string>;
}

export interface K0sPodSecurityPolicyArgs {
    defaultPolicy?: pulumi.Input<string>;
}

export interface K0sSchedulerArgs {
    extraArgs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

export interface K0sSpecArgs {
    api?: pulumi.Input<inputs.K0sAPIArgs>;
    controllerManager?: pulumi.Input<inputs.K0sControllerManagerArgs>;
    featureGates?: pulumi.Input<pulumi.Input<inputs.K0sFeatureGateArgs>[]>;
    images?: pulumi.Input<inputs.K0sImagesArgs>;
    installConfig?: pulumi.Input<inputs.K0sInstallConfigArgs>;
    konnectivity?: pulumi.Input<inputs.K0sKonnectivityArgs>;
    network?: pulumi.Input<inputs.K0sNetworkArgs>;
    podSecurityPolicy?: pulumi.Input<inputs.K0sPodSecurityPolicyArgs>;
    scheduler?: pulumi.Input<inputs.K0sSchedulerArgs>;
    storage?: pulumi.Input<inputs.K0sStorageArgs>;
    telemetry?: pulumi.Input<inputs.K0sTelemetryArgs>;
    workerProfiles?: pulumi.Input<pulumi.Input<inputs.K0sWorkerProfileArgs>[]>;
}

export interface K0sStorageArgs {
    etcd?: pulumi.Input<inputs.K0sEtcdArgs>;
    kine?: pulumi.Input<inputs.K0sKineArgs>;
    type?: pulumi.Input<string>;
}

export interface K0sTelemetryArgs {
    enabled?: pulumi.Input<boolean>;
}

export interface K0sWorkerProfileArgs {
    name: pulumi.Input<string>;
    values: pulumi.Input<{[key: string]: any}>;
}

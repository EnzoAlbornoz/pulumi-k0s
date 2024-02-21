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
    public sealed class ClusterFile
    {
        public readonly string? DirPerm;
        public readonly string? Dst;
        public readonly string? DstDir;
        public readonly string? Group;
        public readonly string? Name;
        public readonly string? Perm;
        public readonly string? Src;
        public readonly string? User;

        [OutputConstructor]
        private ClusterFile(
            string? dirPerm,

            string? dst,

            string? dstDir,

            string? group,

            string? name,

            string? perm,

            string? src,

            string? user)
        {
            DirPerm = dirPerm;
            Dst = dst;
            DstDir = dstDir;
            Group = group;
            Name = name;
            Perm = perm;
            Src = src;
            User = user;
        }
    }
}
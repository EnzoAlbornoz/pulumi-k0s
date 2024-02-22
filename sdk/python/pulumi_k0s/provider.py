# coding=utf-8
# *** WARNING: this file was generated by pulumi-language-python. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = ['ProviderArgs', 'Provider']

@pulumi.input_type
class ProviderArgs:
    def __init__(__self__, *,
                 concurrency: Optional[pulumi.Input[str]] = None,
                 concurrent_uploads: Optional[pulumi.Input[str]] = None,
                 no_drain: Optional[pulumi.Input[str]] = None,
                 no_wait: Optional[pulumi.Input[str]] = None,
                 skip_downgrade_check: Optional[pulumi.Input[str]] = None):
        """
        The set of arguments for constructing a Provider resource.
        :param pulumi.Input[str] concurrency: Maximum number of hosts to configure in parallel, set to 0 for unlimited
        :param pulumi.Input[str] concurrent_uploads: Maximum number of files to upload in parallel, set to 0 for unlimited
        :param pulumi.Input[str] no_drain: Do not drain worker nodes when upgrading
        :param pulumi.Input[str] no_wait: Do not wait for worker nodes to join
        :param pulumi.Input[str] skip_downgrade_check: Skip downgrade check
        """
        if concurrency is None:
            concurrency = (_utilities.get_env('PULUMI_K0S_CONCURRENCY') or '30')
        if concurrency is not None:
            pulumi.set(__self__, "concurrency", concurrency)
        if concurrent_uploads is None:
            concurrent_uploads = (_utilities.get_env('PULUMI_K0S_CONCURRENT_UPLOADS') or '5')
        if concurrent_uploads is not None:
            pulumi.set(__self__, "concurrent_uploads", concurrent_uploads)
        if no_drain is None:
            no_drain = (_utilities.get_env('PULUMI_K0S_NO_DRAIN') or 'false')
        if no_drain is not None:
            pulumi.set(__self__, "no_drain", no_drain)
        if no_wait is None:
            no_wait = (_utilities.get_env('PULUMI_K0S_NO_WAIT') or 'false')
        if no_wait is not None:
            pulumi.set(__self__, "no_wait", no_wait)
        if skip_downgrade_check is None:
            skip_downgrade_check = (_utilities.get_env('PULUMI_K0S_SKIP_DOWNGRADE_CHECK') or 'false')
        if skip_downgrade_check is not None:
            pulumi.set(__self__, "skip_downgrade_check", skip_downgrade_check)

    @property
    @pulumi.getter
    def concurrency(self) -> Optional[pulumi.Input[str]]:
        """
        Maximum number of hosts to configure in parallel, set to 0 for unlimited
        """
        return pulumi.get(self, "concurrency")

    @concurrency.setter
    def concurrency(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "concurrency", value)

    @property
    @pulumi.getter(name="concurrentUploads")
    def concurrent_uploads(self) -> Optional[pulumi.Input[str]]:
        """
        Maximum number of files to upload in parallel, set to 0 for unlimited
        """
        return pulumi.get(self, "concurrent_uploads")

    @concurrent_uploads.setter
    def concurrent_uploads(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "concurrent_uploads", value)

    @property
    @pulumi.getter(name="noDrain")
    def no_drain(self) -> Optional[pulumi.Input[str]]:
        """
        Do not drain worker nodes when upgrading
        """
        return pulumi.get(self, "no_drain")

    @no_drain.setter
    def no_drain(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "no_drain", value)

    @property
    @pulumi.getter(name="noWait")
    def no_wait(self) -> Optional[pulumi.Input[str]]:
        """
        Do not wait for worker nodes to join
        """
        return pulumi.get(self, "no_wait")

    @no_wait.setter
    def no_wait(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "no_wait", value)

    @property
    @pulumi.getter(name="skipDowngradeCheck")
    def skip_downgrade_check(self) -> Optional[pulumi.Input[str]]:
        """
        Skip downgrade check
        """
        return pulumi.get(self, "skip_downgrade_check")

    @skip_downgrade_check.setter
    def skip_downgrade_check(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "skip_downgrade_check", value)


class Provider(pulumi.ProviderResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 concurrency: Optional[pulumi.Input[str]] = None,
                 concurrent_uploads: Optional[pulumi.Input[str]] = None,
                 no_drain: Optional[pulumi.Input[str]] = None,
                 no_wait: Optional[pulumi.Input[str]] = None,
                 skip_downgrade_check: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        """
        Create a K0s resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] concurrency: Maximum number of hosts to configure in parallel, set to 0 for unlimited
        :param pulumi.Input[str] concurrent_uploads: Maximum number of files to upload in parallel, set to 0 for unlimited
        :param pulumi.Input[str] no_drain: Do not drain worker nodes when upgrading
        :param pulumi.Input[str] no_wait: Do not wait for worker nodes to join
        :param pulumi.Input[str] skip_downgrade_check: Skip downgrade check
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: Optional[ProviderArgs] = None,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Create a K0s resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param ProviderArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(ProviderArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 concurrency: Optional[pulumi.Input[str]] = None,
                 concurrent_uploads: Optional[pulumi.Input[str]] = None,
                 no_drain: Optional[pulumi.Input[str]] = None,
                 no_wait: Optional[pulumi.Input[str]] = None,
                 skip_downgrade_check: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        opts = pulumi.ResourceOptions.merge(_utilities.get_resource_opts_defaults(), opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = ProviderArgs.__new__(ProviderArgs)

            if concurrency is None:
                concurrency = (_utilities.get_env('PULUMI_K0S_CONCURRENCY') or '30')
            __props__.__dict__["concurrency"] = concurrency
            if concurrent_uploads is None:
                concurrent_uploads = (_utilities.get_env('PULUMI_K0S_CONCURRENT_UPLOADS') or '5')
            __props__.__dict__["concurrent_uploads"] = concurrent_uploads
            if no_drain is None:
                no_drain = (_utilities.get_env('PULUMI_K0S_NO_DRAIN') or 'false')
            __props__.__dict__["no_drain"] = no_drain
            if no_wait is None:
                no_wait = (_utilities.get_env('PULUMI_K0S_NO_WAIT') or 'false')
            __props__.__dict__["no_wait"] = no_wait
            if skip_downgrade_check is None:
                skip_downgrade_check = (_utilities.get_env('PULUMI_K0S_SKIP_DOWNGRADE_CHECK') or 'false')
            __props__.__dict__["skip_downgrade_check"] = skip_downgrade_check
        super(Provider, __self__).__init__(
            'k0s',
            resource_name,
            __props__,
            opts)

    @property
    @pulumi.getter
    def concurrency(self) -> pulumi.Output[Optional[str]]:
        """
        Maximum number of hosts to configure in parallel, set to 0 for unlimited
        """
        return pulumi.get(self, "concurrency")

    @property
    @pulumi.getter(name="concurrentUploads")
    def concurrent_uploads(self) -> pulumi.Output[Optional[str]]:
        """
        Maximum number of files to upload in parallel, set to 0 for unlimited
        """
        return pulumi.get(self, "concurrent_uploads")

    @property
    @pulumi.getter(name="noDrain")
    def no_drain(self) -> pulumi.Output[Optional[str]]:
        """
        Do not drain worker nodes when upgrading
        """
        return pulumi.get(self, "no_drain")

    @property
    @pulumi.getter(name="noWait")
    def no_wait(self) -> pulumi.Output[Optional[str]]:
        """
        Do not wait for worker nodes to join
        """
        return pulumi.get(self, "no_wait")

    @property
    @pulumi.getter(name="skipDowngradeCheck")
    def skip_downgrade_check(self) -> pulumi.Output[Optional[str]]:
        """
        Skip downgrade check
        """
        return pulumi.get(self, "skip_downgrade_check")


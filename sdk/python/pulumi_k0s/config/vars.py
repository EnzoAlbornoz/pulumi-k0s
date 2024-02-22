# coding=utf-8
# *** WARNING: this file was generated by pulumi-language-python. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from .. import _utilities

import types

__config__ = pulumi.Config('k0s')


class _ExportableConfig(types.ModuleType):
    @property
    def concurrency(self) -> str:
        """
        Maximum number of hosts to configure in parallel, set to 0 for unlimited
        """
        return __config__.get('concurrency') or (_utilities.get_env('PULUMI_K0S_CONCURRENCY') or '30')

    @property
    def concurrent_uploads(self) -> str:
        """
        Maximum number of files to upload in parallel, set to 0 for unlimited
        """
        return __config__.get('concurrentUploads') or (_utilities.get_env('PULUMI_K0S_CONCURRENT_UPLOADS') or '5')

    @property
    def no_drain(self) -> str:
        """
        Do not drain worker nodes when upgrading
        """
        return __config__.get('noDrain') or (_utilities.get_env('PULUMI_K0S_NO_DRAIN') or 'false')

    @property
    def no_wait(self) -> str:
        """
        Do not wait for worker nodes to join
        """
        return __config__.get('noWait') or (_utilities.get_env('PULUMI_K0S_NO_WAIT') or 'false')

    @property
    def skip_downgrade_check(self) -> str:
        """
        Skip downgrade check
        """
        return __config__.get('skipDowngradeCheck') or (_utilities.get_env('PULUMI_K0S_SKIP_DOWNGRADE_CHECK') or 'false')


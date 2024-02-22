// Code generated by pulumi-language-go DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package k0s

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"internal"
)

type Provider struct {
	pulumi.ProviderResourceState

	// Maximum number of hosts to configure in parallel, set to 0 for unlimited
	Concurrency pulumi.StringPtrOutput `pulumi:"concurrency"`
	// Maximum number of files to upload in parallel, set to 0 for unlimited
	ConcurrentUploads pulumi.StringPtrOutput `pulumi:"concurrentUploads"`
	// Do not drain worker nodes when upgrading
	NoDrain pulumi.StringPtrOutput `pulumi:"noDrain"`
	// Do not wait for worker nodes to join
	NoWait pulumi.StringPtrOutput `pulumi:"noWait"`
	// Skip downgrade check
	SkipDowngradeCheck pulumi.StringPtrOutput `pulumi:"skipDowngradeCheck"`
}

// NewProvider registers a new resource with the given unique name, arguments, and options.
func NewProvider(ctx *pulumi.Context,
	name string, args *ProviderArgs, opts ...pulumi.ResourceOption) (*Provider, error) {
	if args == nil {
		args = &ProviderArgs{}
	}

	if args.Concurrency == nil {
		if d := internal.GetEnvOrDefault("30", nil, "PULUMI_K0S_CONCURRENCY"); d != nil {
			args.Concurrency = pulumi.StringPtr(d.(string))
		}
	}
	if args.ConcurrentUploads == nil {
		if d := internal.GetEnvOrDefault("5", nil, "PULUMI_K0S_CONCURRENT_UPLOADS"); d != nil {
			args.ConcurrentUploads = pulumi.StringPtr(d.(string))
		}
	}
	if args.NoDrain == nil {
		if d := internal.GetEnvOrDefault("false", nil, "PULUMI_K0S_NO_DRAIN"); d != nil {
			args.NoDrain = pulumi.StringPtr(d.(string))
		}
	}
	if args.NoWait == nil {
		if d := internal.GetEnvOrDefault("false", nil, "PULUMI_K0S_NO_WAIT"); d != nil {
			args.NoWait = pulumi.StringPtr(d.(string))
		}
	}
	if args.SkipDowngradeCheck == nil {
		if d := internal.GetEnvOrDefault("false", nil, "PULUMI_K0S_SKIP_DOWNGRADE_CHECK"); d != nil {
			args.SkipDowngradeCheck = pulumi.StringPtr(d.(string))
		}
	}
	opts = internal.PkgResourceDefaultOpts(opts)
	var resource Provider
	err := ctx.RegisterResource("pulumi:providers:k0s", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

type providerArgs struct {
	// Maximum number of hosts to configure in parallel, set to 0 for unlimited
	Concurrency *string `pulumi:"concurrency"`
	// Maximum number of files to upload in parallel, set to 0 for unlimited
	ConcurrentUploads *string `pulumi:"concurrentUploads"`
	// Do not drain worker nodes when upgrading
	NoDrain *string `pulumi:"noDrain"`
	// Do not wait for worker nodes to join
	NoWait *string `pulumi:"noWait"`
	// Skip downgrade check
	SkipDowngradeCheck *string `pulumi:"skipDowngradeCheck"`
}

// The set of arguments for constructing a Provider resource.
type ProviderArgs struct {
	// Maximum number of hosts to configure in parallel, set to 0 for unlimited
	Concurrency pulumi.StringPtrInput
	// Maximum number of files to upload in parallel, set to 0 for unlimited
	ConcurrentUploads pulumi.StringPtrInput
	// Do not drain worker nodes when upgrading
	NoDrain pulumi.StringPtrInput
	// Do not wait for worker nodes to join
	NoWait pulumi.StringPtrInput
	// Skip downgrade check
	SkipDowngradeCheck pulumi.StringPtrInput
}

func (ProviderArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*providerArgs)(nil)).Elem()
}

type ProviderInput interface {
	pulumi.Input

	ToProviderOutput() ProviderOutput
	ToProviderOutputWithContext(ctx context.Context) ProviderOutput
}

func (*Provider) ElementType() reflect.Type {
	return reflect.TypeOf((**Provider)(nil)).Elem()
}

func (i *Provider) ToProviderOutput() ProviderOutput {
	return i.ToProviderOutputWithContext(context.Background())
}

func (i *Provider) ToProviderOutputWithContext(ctx context.Context) ProviderOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProviderOutput)
}

type ProviderOutput struct{ *pulumi.OutputState }

func (ProviderOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Provider)(nil)).Elem()
}

func (o ProviderOutput) ToProviderOutput() ProviderOutput {
	return o
}

func (o ProviderOutput) ToProviderOutputWithContext(ctx context.Context) ProviderOutput {
	return o
}

// Maximum number of hosts to configure in parallel, set to 0 for unlimited
func (o ProviderOutput) Concurrency() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Provider) pulumi.StringPtrOutput { return v.Concurrency }).(pulumi.StringPtrOutput)
}

// Maximum number of files to upload in parallel, set to 0 for unlimited
func (o ProviderOutput) ConcurrentUploads() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Provider) pulumi.StringPtrOutput { return v.ConcurrentUploads }).(pulumi.StringPtrOutput)
}

// Do not drain worker nodes when upgrading
func (o ProviderOutput) NoDrain() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Provider) pulumi.StringPtrOutput { return v.NoDrain }).(pulumi.StringPtrOutput)
}

// Do not wait for worker nodes to join
func (o ProviderOutput) NoWait() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Provider) pulumi.StringPtrOutput { return v.NoWait }).(pulumi.StringPtrOutput)
}

// Skip downgrade check
func (o ProviderOutput) SkipDowngradeCheck() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Provider) pulumi.StringPtrOutput { return v.SkipDowngradeCheck }).(pulumi.StringPtrOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*ProviderInput)(nil)).Elem(), &Provider{})
	pulumi.RegisterOutputType(ProviderOutput{})
}

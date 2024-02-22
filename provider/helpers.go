package provider

import (
	"crypto/sha512"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"strconv"
	"strings"

	"github.com/pulumi/pulumi/sdk/v3/go/common/resource"
	"github.com/ydkn/pulumi-k0s/provider/internal/k0sctl"
)

func contentToTempFile(name, content string, ensureNewline bool) (string, error) {
	hash := sha512.New()

	_, err := hash.Write([]byte(content))
	if err != nil {
		return "", err
	}

	hashString := fmt.Sprintf("%x", hash.Sum(nil))

	filename := filepath.Join(os.TempDir(), fmt.Sprintf("pulumi-%s-%s-%s", Name, name, hashString))

	fileContent := content
	if ensureNewline && !strings.HasSuffix(content, "\n") {
		fileContent += "\n"
	}

	if err := os.WriteFile(filename, []byte(fileContent), 0600); err != nil {
		return "", err
	}

	if err := os.Chmod(filename, 0o600); err != nil {
		return "", err
	}

	return filename, nil
}

func cleanupTempFiles(name string) error {
	return filepath.WalkDir(os.TempDir(), func(path string, d fs.DirEntry, err error) error {
		if d.IsDir() {
			return nil
		}

		if strings.HasPrefix(d.Name(), fmt.Sprintf("pulumi-%s-%s-", Name, name)) {
			if err := os.Remove(path); err != nil {
				return err
			}
		}

		return nil
	})
}

func propertyMapDiff(a, b resource.PropertyMap, ignoreKeys []resource.PropertyKey) resource.PropertyMap {
	changedProperties := resource.PropertyMap{}

	ignoreKeysMap := map[resource.PropertyKey]bool{}
	for _, k := range ignoreKeys {
		ignoreKeysMap[k] = true
	}

	for k, v := range a {
		if _, ok := ignoreKeysMap[k]; ok {
			continue
		}

		if b[k] != v {
			changedProperties[k] = v
		}
	}

	return changedProperties
}

func k0sctlApplyConfigFromConfig(config *Config) (k0sctl.ApplyConfig, error) {
	applyConfig := k0sctl.ApplyConfig{
		SkipDowngradeCheck: false,
		NoDrain:            false,
		NoWait:             false,
		Concurrency:        30,
		ConcurrentUploads:  5,
	}

	if config.SkipDowngradeCheck != nil {
		applyConfig.SkipDowngradeCheck = strings.ToLower(*config.SkipDowngradeCheck) == "true"
	}

	if config.NoDrain != nil {
		applyConfig.NoDrain = strings.ToLower(*config.NoDrain) == "true"
	}

	if config.NoWait != nil {
		applyConfig.NoWait = strings.ToLower(*config.NoWait) == "true"
	}

	if config.Concurrency != nil {
		concurrency, err := strconv.ParseUint(*config.Concurrency, 10, 64)
		if err != nil {
			return applyConfig, err
		}

		applyConfig.Concurrency = concurrency
	}

	if config.ConcurrentUploads != nil {
		concurrentUploads, err := strconv.ParseUint(*config.ConcurrentUploads, 10, 64)
		if err != nil {
			return applyConfig, err
		}

		applyConfig.ConcurrentUploads = concurrentUploads
	}

	return applyConfig, nil
}

---
layout: default
title: Getting started
description: Yet another project tools manager
nav_order: 2
---

# Getting started

Get up and running with Project-Env in three steps: install the CLI, create a configuration file, and run it.

## 1. Install the CLI

**macOS (Homebrew):**
```bash
brew install --cask project-env/tap/project-env-cli
```

**Windows (Winget):**
```bash
winget install ProjectEnv.ProjectEnvCli
```

See the [CLI documentation](./cli.md) for more details.

## 2. Create a `project-env.toml`

Add a `project-env.toml` file to the root of your project. Here is a minimal example that sets up a JDK and Maven:

```toml
tools_directory = ".tools"

[jdk]
version = "21.0.2+13"
distribution = "TEMURIN"

[maven]
version = "3.9.6"
```

See the [CLI documentation](./cli.md) for the full configuration reference, including Gradle, NodeJS, Git hooks, and generic tools.

## 3. Run the install

```bash
project-env install
```

Project-Env will download and set up the configured tools into the specified `tools_directory`.

## 4. Set up an integration

To automatically configure the installed tools in your environment, set up one or more [integrations](./integrations/index.md):

* **[IntelliJ Plugin](./integrations/intellij-plugin.md)** -- configures IntelliJ to use the installed tools
* **[GitHub Action](./integrations/github-action.md)** -- makes tools available in your GitHub Actions workflows
* **[Jenkins Plugin](./integrations/jenkins-plugin.md)** -- makes tools available in Jenkins Pipeline steps

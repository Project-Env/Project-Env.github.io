---
layout: default
title: Introduction
description: Yet another project tools manager
nav_order: 1
---

# Project-Env

## TL;DR
Project-Env automatically maintains the project-local setup of project specific tools like a JDK or NodeJS in a shell/IDE/CI environment.

Define your tools in a single `project-env.toml` file, and Project-Env takes care of downloading, installing, and configuring them -- per project, without side effects.

**Supported tools:** JDK, Maven, Gradle, NodeJS, Git hooks, and any generic tool via custom download URLs.

**Integrations:** [IntelliJ Plugin](./docs/integrations/intellij-plugin.md), [GitHub Action](./docs/integrations/github-action.md), [Jenkins Pipeline](./docs/integrations/jenkins-plugin.md)

[Get started](./docs/getting-started.md){: .btn .btn-purple }

## Why Project-Env?

Working on multiple projects often means juggling different versions of the same tools -- one project needs GraalVM, another needs Temurin, and a third requires a specific NodeJS version. Keeping these in sync across your IDE, shell, and CI environment is tedious and error-prone.

Project-Env solves this by:
* **Project-scoped tool management** -- each project declares its own tool versions, no global conflicts
* **Cross-platform** -- works on Windows, Linux, and macOS
* **Environment-agnostic** -- integrates with IDEs, CI pipelines, and shell environments through a single configuration file

## Similar projects
* <https://sdkman.io>{:target="_blank"}
* <https://asdf-vm.com>{:target="_blank"}
* <https://volta.sh>{:target="_blank"}

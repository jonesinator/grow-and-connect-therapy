# Grow and Connect Therapy

This repository holds all of the code for the https://growandconnecttherapy.com website.

## Getting Started

You'll need several tools to get started. This guide assumes you're running macOS.

Fortunately, all of the needed tools can be installed using [Homebrew](https://brew.sh/).

To install Homebrew, first open a Terminal:

1. Press `⌘ + Space`.
2. Type `Terminal`.
3. Press `Enter`.

Next, run the following command in the terminal and follow any instructions it prints:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

(You'll find this command at the top of Homebrew's homepage.)

Once homebrew is installed, you can install the necessary tools with it by running the following commands in a terminal:

```sh
brew install --cask github visual-studio-code
brew install --formula gnupg node pinentry-mac
```

Those commands install the following tools:

- [GnuPg](https://gnupg.org/) - Used for digital signatures and encryption.
- [GitHub Desktop](https://github.com/apps/desktop) - Used for interacting with source control to push new code and pull down updated code from the internet.
- [Node.js](https://nodejs.org/) - Used for executing JavaScript code.
- [VSCode](https://code.visualstudio.com/) - Used for editing files.
- [pinentry-mac](https://formulae.brew.sh/formula/pinentry-mac) - Adds a nicer interface for entering passphrases in GnuPg on macOS.

## To Do

- More section types.
- Animate the mobile menu coming and going.
- CSP (Content Security Policy)
- aria tags (Accessibility)
- Make printed pages better.
- Storybook for building components.
- Tina CMS for making and "online" editing of pages.
